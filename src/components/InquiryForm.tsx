import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, Send, Mail } from 'lucide-react'
import { site, whatsappLink, whatsappMessages, type InquiryKind } from '@/lib/site'

export type FieldConfig = {
  name: string
  label: string
  type?: 'text' | 'email' | 'tel' | 'date' | 'number' | 'select' | 'textarea'
  required?: boolean
  placeholder?: string
  options?: string[]
  min?: number
  full?: boolean
}

type InquiryFormProps = {
  kind: InquiryKind
  fields: FieldConfig[]
  submitLabel?: string
  intro?: string
  note?: string
}

type Status = { type: 'idle' | 'error' | 'opening'; message?: string }

export default function InquiryForm({ kind, fields, submitLabel = 'Send Inquiry', intro, note }: InquiryFormProps) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  const emailField = useMemo(() => fields.find((f) => f.type === 'email')?.name, [fields])

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  function validate(): boolean {
    const nextErrors: Record<string, string> = {}
    for (const field of fields) {
      const value = (values[field.name] ?? '').trim()
      if (field.required && !value) {
        nextErrors[field.name] = `${field.label} is required`
        continue
      }
      if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field.name] = 'Please enter a valid email address'
      }
      if (field.type === 'tel' && value && value.replace(/[^\d]/g, '').length < 9) {
        nextErrors[field.name] = 'Please enter a valid phone number'
      }
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function buildMessage(): string {
    const header = intro ?? whatsappMessages[kind]
    const lines = fields
      .map((field) => {
        const value = (values[field.name] ?? '').trim()
        return value ? `${field.label}: ${value}` : null
      })
      .filter(Boolean)
    return [header, '', ...lines].join('\n')
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setStatus({ type: 'idle' })
    if (!validate()) {
      setStatus({ type: 'error', message: 'Please correct the highlighted fields before sending.' })
      return
    }
    const message = buildMessage()
    const url = whatsappLink(message)
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    if (!win) {
      setStatus({
        type: 'error',
        message: 'Your browser blocked the WhatsApp window. Please allow pop-ups, or use the email option below.',
      })
      return
    }
    setStatus({
      type: 'opening',
      message:
        'WhatsApp is opening in a new tab with your details. Press send there to deliver your inquiry to our team.',
    })
  }

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `${site.name} — ${kind} inquiry`,
  )}&body=${encodeURIComponent(buildMessage())}`

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `f-${field.name}`
          const err = errors[field.name]
          const common = {
            id,
            name: field.name,
            value: values[field.name] ?? '',
            onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
              update(field.name, e.target.value),
            'aria-invalid': Boolean(err),
            'aria-describedby': err ? `${id}-error` : undefined,
            className: `field ${err ? '!border-red-400 focus:!ring-red-200' : ''}`,
          }
          return (
            <div key={field.name} className={field.full || field.type === 'textarea' ? 'sm:col-span-2' : ''}>
              <label htmlFor={id} className="field-label">
                {field.label}
                {field.required && <span className="ml-1 text-white">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea {...common} rows={4} placeholder={field.placeholder} />
              ) : field.type === 'select' ? (
                <select {...common}>
                  <option value="">{field.placeholder ?? 'Please select'}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...common}
                  type={field.type ?? 'text'}
                  placeholder={field.placeholder}
                  min={field.min}
                />
              )}
              {err && (
                <p id={`${id}-error`} className="mt-1.5 text-xs text-red-500">
                  {err}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {status.type === 'error' && (
        <div role="alert" className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === 'opening' && (
        <div role="status" className="mt-5 flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{status.message}</span>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-gold">
          <Send className="h-4 w-4" aria-hidden="true" />
          {submitLabel}
        </button>
        <a href={mailtoHref} className="btn-ghost">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email instead
        </a>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-navy/50">
        {note ??
          'Submitting opens WhatsApp with your details pre-filled so you can send them directly to our team. You can also send the same details by email. We reply as soon as possible.'}
      </p>
      {emailField && <span className="sr-only">An email field is included.</span>}
    </form>
  )
}

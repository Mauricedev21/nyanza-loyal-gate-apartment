import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Accommodation from '@/pages/Accommodation'
import Services from '@/pages/Services'
import Catering from '@/pages/Catering'
import Events from '@/pages/Events'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="accommodation" element={<Accommodation />} />
        <Route path="services" element={<Services />} />
        <Route path="catering" element={<Catering />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

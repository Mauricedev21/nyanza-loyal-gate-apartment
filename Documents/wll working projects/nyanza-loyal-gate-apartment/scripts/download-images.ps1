$ErrorActionPreference = 'Continue'
$dir = Join-Path $PSScriptRoot '..\public\assets'
New-Item -ItemType Directory -Force -Path $dir | Out-Null
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'

$targets = [ordered]@{
  'hero.jpg'         = 'luxury hotel lobby'
  'about.jpg'        = 'luxury hotel exterior'
  'apartment-1.jpg'  = 'modern apartment living room interior'
  'apartment-2.jpg'  = 'luxury apartment interior design'
  'apartment-3.jpg'  = 'apartment bedroom interior design'
  'room-1.jpg'       = 'luxury hotel bedroom'
  'room-2.jpg'       = 'hotel room bed interior'
  'room-3.jpg'       = 'hotel suite bedroom'
  'bathroom-1.jpg'   = 'luxury hotel bathroom'
  'food-1.jpg'       = 'gourmet plated dish'
  'food-2.jpg'       = 'fine dining plate restaurant'
  'food-3.jpg'       = 'grilled meat plated restaurant'
  'buffet-1.jpg'     = 'buffet food table'
  'buffet-2.jpg'     = 'catering buffet'
  'catering-1.jpg'   = 'banquet catering food'
  'catering-2.jpg'   = 'waiter serving event'
  'wedding-1.jpg'    = 'wedding reception decoration'
  'wedding-2.jpg'    = 'wedding ceremony flowers'
  'wedding-3.jpg'    = 'wedding table setting'
  'event-1.jpg'      = 'event party decoration'
  'event-2.jpg'      = 'gala dinner event'
  'conference-1.jpg' = 'conference hall'
  'conference-2.jpg' = 'meeting room conference'
  'restaurant-1.jpg' = 'restaurant interior'
  'restaurant-2.jpg' = 'bar counter interior'
  'wellness-1.jpg'   = 'spa massage'
  'wellness-2.jpg'   = 'sauna interior'
  'proposal.jpg'     = 'marriage proposal'
  'birthday.jpg'     = 'birthday cake'
}

$badWords = 'mosaic|newspaper|map|plan|drawing|logo|diagram|poster|banner|chart|cartoon|illustration|painting|sketch|clipart|stamp|coin|book|cover|1921|1927|1900|1800'

$seen = @{}
$ok=0; $fail=0; $credits=@()

function Get-Candidates($query) {
  $u = "https://api.openverse.org/v1/images/?q=$([uri]::EscapeDataString($query))&page_size=20&license_type=all-cc&mature=false"
  for ($attempt=1; $attempt -le 3; $attempt++) {
    try {
      $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 90 -Headers @{'User-Agent'=$ua;'Accept'='application/json'}
      return ($r.Content | ConvertFrom-Json).results
    } catch {
      Start-Sleep -Seconds 2
    }
  }
  return @()
}

foreach ($name in $targets.Keys) {
  $query = $targets[$name]
  try {
    $cands = Get-Candidates $query
    if (-not $cands -or $cands.Count -eq 0) { throw "no candidates" }
    $pick = $cands | Where-Object {
      $_.width -ge 1000 -and $_.height -ge 600 -and ($_.width -gt $_.height) -and
      ($_.url -match '\.(jpg|jpeg|png)') -and
      ($_.title -notmatch $badWords) -and
      (-not $seen.ContainsKey($_.url))
    } | Select-Object -First 1
    if (-not $pick) { throw "no suitable candidate" }
    $seen[$pick.url] = $true
    $out = Join-Path $dir $name
    Invoke-WebRequest -Uri $pick.url -OutFile $out -UseBasicParsing -TimeoutSec 90 -Headers @{'User-Agent'=$ua}
    $size = (Get-Item $out).Length
    if ($size -lt 20000) { throw "file too small ($size)" }
    Write-Output ("OK   {0,-16} {1,8}b {2}x{3}  <- {4}" -f $name, $size, $pick.width, $pick.height, $pick.title)
    $ok++
    $credits += [pscustomobject]@{ file=$name; title=$pick.title; creator=$pick.creator; license=$pick.license; source=$pick.foreign_landing_url }
  } catch {
    Write-Output ("FAIL {0,-16} {1}" -f $name, $_.Exception.Message)
    $fail++
  }
}
$credits | ConvertTo-Json -Depth 4 | Out-File -Encoding utf8 (Join-Path $PSScriptRoot '..\public\assets\CREDITS.json')
Write-Output "----"
Write-Output "Downloaded: $ok  Failed: $fail"

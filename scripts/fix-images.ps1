$ErrorActionPreference = 'Continue'
$dir = Join-Path $PSScriptRoot '..\public\assets'
$ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'

$fixes = [ordered]@{
  'room-1.jpg'       = 'luxury hotel room bed interior'
  'catering-1.jpg'   = 'banquet table food service'
  'catering-2.jpg'   = 'catering food platter buffet'
  'event-1.jpg'      = 'wedding reception venue decoration'
  'food-1.jpg'       = 'gourmet food plate restaurant'
  'conference-2.jpg' = 'conference room meeting table'
}
$forbid = 'marina|boat|pumpkin|halloween|cook-off|street|class|school|student|market|bridge|sign|map|logo|newspaper|diagram|cartoon|illustration|painting'

function Get-Candidates($query) {
  $u = "https://api.openverse.org/v1/images/?q=$([uri]::EscapeDataString($query))&page_size=30&license_type=all-cc&mature=false"
  for ($a=1; $a -le 4; $a++) {
    try {
      $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 90 -Headers @{'User-Agent'=$ua;'Accept'='application/json'}
      return ($r.Content | ConvertFrom-Json).results
    } catch { Start-Sleep -Seconds 3 }
  }
  return @()
}

$ok=0;$fail=0
foreach ($name in $fixes.Keys) {
  try {
    $cands = Get-Candidates $fixes[$name]
    $pick = $cands | Where-Object {
      $_.width -ge 1000 -and $_.height -ge 600 -and ($_.width -gt $_.height) -and
      ($_.url -match '\.(jpg|jpeg|png)') -and ($_.title -notmatch $forbid)
    } | Select-Object -First 1
    if (-not $pick) { throw "no suitable candidate" }
    $out = Join-Path $dir $name
    Invoke-WebRequest -Uri $pick.url -OutFile $out -UseBasicParsing -TimeoutSec 90 -Headers @{'User-Agent'=$ua}
    if ((Get-Item $out).Length -lt 20000) { throw "too small" }
    Write-Output ("OK   {0,-16} <- {1}" -f $name, $pick.title)
    $ok++
  } catch {
    Write-Output ("FAIL {0,-16} {1}" -f $name, $_.Exception.Message)
    $fail++
  }
}
Write-Output "Fixed: $ok  Failed: $fail"

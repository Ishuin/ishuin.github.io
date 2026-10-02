# default action preference
Set-Location -LiteralPath 'D:\Projects\github_website\ishuin.github.io'
npx --yes tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.src.css -o tailwind.css --minify 2>$null | Out-Null
$css = (Get-Content tailwind.css -Raw).Trim()
if ([string]::IsNullOrWhiteSpace($css)) { Write-Error 'tailwind.css empty'; exit 1 }
foreach ($f in 'index.html', 'repos.html') {
    $c = Get-Content $f -Raw
    $hasLink = $c.Contains('<link rel="stylesheet" href="tailwind.css">')
    $hasMarkers = $c.Contains('<!-- TAILWIND:START -->')
    if (-not $hasLink -and -not $hasMarkers) { Write-Warning "${f}: no injection point"; continue }
    $block = "<!-- TAILWIND:START -->`r`n<style>$css</style>`r`n<!-- TAILWIND:END -->"
    if ($hasMarkers) {
        $c = [regex]::Replace($c, '(?s)<!-- TAILWIND:START -->.*?<!-- TAILWIND:END -->', [System.Text.RegularExpressions.MatchEvaluator]{ $block })
    } else {
        $c = $c.Replace('<link rel="stylesheet" href="tailwind.css">', $block)
    }
    Set-Content $f -Value $c -NoNewline
    Write-Host "${f}: injected $([Math]::Round($css.Length/1024,1))KB"
}

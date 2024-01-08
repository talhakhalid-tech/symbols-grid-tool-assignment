powershell -Command "(Get-Content config.js) -replace '{{X}}', '$1' -replace '{{Y}}', '$2' | Set-Content config.js"

echo "Initialization complete!"
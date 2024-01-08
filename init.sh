sed -i "s/{{X}}/$1/g" config.js
sed -i "s/{{Y}}/$2/g" config.js

echo "Initialization complete!"
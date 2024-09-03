npx tsc --module commonjs --outDir cjs/
echo '{"type": "commonjs"}' > cjs/package.json

npx tsc --module es2022 --outDir esm/
echo '{"type": "module"}' > esm/package.json

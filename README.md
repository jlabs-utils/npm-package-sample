# Genpi SDK | Node JS

# Steps
```bash
# Install dependencies
npm install
cd sdk && npm install && npm run build && cd ..
cd test && npm install && npm run link && cd ..

# Run dev watchers
npm run wath:lib # run nodemon on sdk-demo
npm run wath:test # run nodemon on sdk-test

# Pubish in npm
cd sdk
npm publish --access-public
```

# Remember
Remember to change the package name in sdk-demo to be able to publish.

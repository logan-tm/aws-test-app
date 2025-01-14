# AWS Test App

1. `npm create vite@latest . -- --template react-ts && npm create amplify@latest`
2. `git init && gh repo create && git add . && git commit -m "Init" && git push -u origin main`
3. `git switch -c test && git push origin test && git switch -c dev && git push origin dev`

Go into Amplify console and connect the branches (main, then test, then dev). Ensure that they operate as expected by going to the ur;s after build.

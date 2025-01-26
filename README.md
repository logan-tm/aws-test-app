# AWS Test App

## Goal for this Repository

I want a repository that centers around Amplify Gen 2 with additional functionality via CDK. This should be maintained and deployed via version control based on branch name.

## Strategy

1. Primary development workflow should be done through Amplify first and CDK second.
   1. Amplify **should** handle the deployments automatically.
2. Variables should be handled as follows:
   1. Environment variables should be defined within the CDK files directly.
   2. Secrets should be managed by AWS Secrets Manager. Note: this may be altered later.
   3. Configurations that should not prompt an environment rebuild (such as feature flags) should be managed by Aws AppConfig.

## Making from scratch

1. `npm create vite@latest . -- --template react-ts && npm create amplify@latest`
2. `git init && gh repo create && git add . && git commit -m "Init" && git push -u origin main`
3. `git switch -c test && git push origin test && git switch -c dev && git push origin dev`

Go into Amplify console and connect the branches (main, then test, then dev). Ensure that they operate as expected by going to the ur;s after build.

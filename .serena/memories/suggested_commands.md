# Suggested Commands for Swift AWS Lambda Example

## Swift Commands
```bash
# Build the Swift Lambda
swift build

# Build for Lambda deployment (creates .zip in .build/plugins/)
swift build --product LambdaExample
```

## CDK Commands
```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Watch for TypeScript changes
npm run watch

# Run tests
npm run test

# Lint code
npm run lint

# Fix linting issues
npm run lint-fix

# Synthesize CloudFormation template
npx cdk synth

# Deploy stack
npx cdk deploy

# Diff deployed stack
npx cdk diff

# Destroy stack
npx cdk destroy
```

## Complete Deployment Flow
```bash
# 1. Build Swift Lambda
swift build --product LambdaExample

# 2. Build CDK
npm run build

# 3. Deploy
npx cdk deploy
```

## System Commands (Darwin/macOS)
```bash
# List files
ls -la

# Find files
find . -name "*.swift"

# Git operations
git status
git add .
git commit -m "message"
```

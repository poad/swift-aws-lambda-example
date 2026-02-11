# Project Overview: Swift AWS Lambda Example

## Project Purpose
This is an example project demonstrating how to build and deploy AWS Lambda functions using Swift with the AWS CDK (TypeScript).

## Tech Stack
- **Language**: Swift 6.2+
- **Infrastructure**: AWS CDK (TypeScript)
- **Lambda Runtime**: Custom Runtime (AL2023)
- **Architecture**: ARM64

## Project Structure
```
.
├── Sources/
│   └── LambdaExample/
│       └── LambdaExample.swift    # Swift Lambda handler
├── lib/
│   └── swift-aws-lambda-example-stack.ts  # CDK stack definition
├── bin/
│   └── swift-aws-lambda-example.ts        # CDK app entry point
├── Package.swift                  # Swift package manifest
├── cdk.json                       # CDK configuration
└── README.md                      # Project documentation
```

## Key Dependencies
### Swift
- `swift-aws-lambda-runtime` (2.0.0+): AWS Lambda runtime for Swift
- `swift-aws-lambda-events` (1.0.0+): AWS Lambda event types

### TypeScript/CDK
- `aws-cdk-lib`: AWS CDK constructs library
- `constructs`: CDK constructs foundation

# Task Completion Checklist

After completing any task, run:

1. **Build TypeScript**: `npm run build`
2. **Lint**: `npm run lint`
3. **Run Tests**: `npm run test`

For Swift changes:
1. **Build Swift**: `swift build`

Before deployment:
1. Build Swift Lambda: `swift build --product LambdaExample`
2. Build CDK: `npm run build`
3. Synthesize: `npx cdk synth`
4. Deploy: `npx cdk deploy`

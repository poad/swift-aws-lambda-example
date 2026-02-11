import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as logs from 'aws-cdk-lib/aws-logs';

export class SwiftAwsLambdaExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const functionName = 'swift-lambda-example';
    const logGroup = new logs.LogGroup(this, 'LogGroup', {
      logGroupName: `/aws/lambda/${functionName}`,
      retention: logs.RetentionDays.ONE_DAY,
    });

    const fn = new lambda.Function(this, 'Lambda', {
      functionName,
      runtime: lambda.Runtime.PROVIDED_AL2023,
      handler: 'main.handler',
      code: lambda.Code.fromAsset('.build/plugins/AWSLambdaPackager/outputs/AWSLambdaPackager/LambdaExample/LambdaExample.zip'),
      architecture: lambda.Architecture.ARM_64,
      logGroup,
    });
    new lambda.FunctionUrl(this, 'FunctionURL', {
      function: fn,
      authType: lambda.FunctionUrlAuthType.NONE,
    });
  }
}

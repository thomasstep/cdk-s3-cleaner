import * as cdk from 'aws-cdk-lib';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';
import { ToolkitCleaner } from 'cloudstructs/lib/toolkit-cleaner';

export class CdkS3CleanerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new ToolkitCleaner(this, 'ToolkitCleaner', {
      retainAssetsNewerThan: cdk.Duration.days(7),
      schedule: Schedule.rate(cdk.Duration.days(30)),
    });
  }
}

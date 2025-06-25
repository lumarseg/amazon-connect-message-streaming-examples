// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Template } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import * as ChatMessageStreamingExamples from '../lib/chat-message-streaming-examples-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ChatMessageStreamingExamples.ChatMessageStreamingExamplesStack(app, 'MyTestStack');
    // THEN
    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Lambda::Function', 0);
});

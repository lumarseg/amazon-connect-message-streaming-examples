# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Migrated from AWS CDK v1 to CDK v2 for modern infrastructure tooling
- Updated Lambda runtime from Node.js 14 to Node.js 20 for extended LTS support
- Upgraded TypeScript from 3.9.7 to 5.4.0 for latest language features
- Updated Jest from 26.4.2 to 29.7.0 with ts-jest from 26.2.0 to 29.1.0
- Updated @types/jest from 26.0.10 to 29.5.0 and @types/node from 10.17.27 to 20.11.0
- Updated AWS SDK from 2.1020.0 to 2.1700.0 across all Lambda functions
- Replaced multiple @aws-cdk/* dependencies with unified aws-cdk-lib package
- Migrated test framework from @aws-cdk/assert to aws-cdk-lib/assertions
- Organized and documented .gitignore file with proper categorization

### Added
- Constructs dependency (^10.3.0) required for CDK v2

### Removed
- Obsolete @aws-cdk/core:enableStackNameDuplicates feature flag from cdk.json
- Unnecessary .npmignore file (project is not published to NPM)
- Deprecated @aws-cdk/assert dependency

### Technical Improvements
- Updated constructor scope type from cdk.Construct to cdk.App in CDK stack
- Modernized all import statements to CDK v2 syntax
- Optimized dependency tree reducing package-lock.json by 6,080 lines

## [1.1.2] - 2023-05-19

### Changed
- Update dependencies

## [1.1.1] - 2023-04-18

### Changed
- Update dependencies

## [1.1] - 2023-02-09

### Added
- WhatsApp Channel implementation
- src/lambda/digitalChannelHealthCheck/lib/whatsapp.js to process WhatsApp webhook health check
- src/lambda/inboundMessageHandler/lib/handlers/whatsapp.js to process incoming WhatsApp messages
- src/lambda/outboundMessageHandler/lib/handlers/whatsapp.js to process outgoing WhatsApp messages

### Changed
- lib/chat-message-streaming-examples-stack.ts to deploy infrastructure with WhatsApp support
- src/lambda/digitalChannelHealthCheck/index.js to provide WhatsApp webhook health check response
- src/lambda/inboundMessageHandler/index.js to add WhatsApp webhook for incoming messages
- src/lambda/inboundMessageHandler/lib/inboundHelper.js to add WhatsApp channel SNS mapping
- src/lambda/outboundMessageHandler/index.js to add WhatsApp channel support for outbound messaging

## [1.0.0] - 2022-09-09

### Added
- PII redaction functionality with redact.js
- Amazon Comprehend integration for content filtering

### Changed
- inboundHelper.js to add logic for turning on redaction capabilities
- chat-message-streaming-examples-stack.ts to give permissions to Amazon Comprehend
- full-arch.png to include call to Amazon Comprehend
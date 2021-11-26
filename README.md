<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

AWS Lambda webhook example
====================

This project shows how to use AWS Lambda to receive Flotiq webhook notification. 
You can use it as starter for your next Flotiq integrations.





## Requirements

To develop this service you need an:
- [AWS account](https://aws.amazon.com/)
- AWS CLI [installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [configured](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
- [Serverless](https://www.serverless.com/framework/docs/getting-started) installed globally.


### Development

Install reqiured dependences:
```
npm install
```

Feel free to customize the `/serverless` and `/handler.js` files to implement the business logic.

### Deployment

You can deploy develop version of service just by:
```
serverless deploy --stage dev
```

Use `--stage prod` to deploy prod environment.

To get the url of your endpoints check the serverless command response:
```shell
service: aws-lambda-webhook-example
stage: prod
region: us-east-1
stack: aws-lambda-starter-prod
resources: 11
api keys:
  None
endpoints:
  POST - https://your-url.execute-api.us-east-1.amazonaws.com/prod/hook
functions:
  index: aws-lambda-webhook-example-prod-index
layers:
  None
```


### Flotiq webhooks

Read more about Flotiq webhooks in the [Flotiq Docs](https://flotiq.com/docs/panel/webhooks/)

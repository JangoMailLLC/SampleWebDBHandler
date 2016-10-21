# Sample JangoMail Web DB Profile Handler

This serves as an example for anyone wanting to create their own custom Web DB Profile Handler for use with JangoMail.

This is not designed to be a textbook example of a Node app or Docker config, but a working example for test purposes only.

If you have any questions, please contact us at https://www.jangomail.com/support

## Getting up and running with Docker

### Docker Compose

`docker-compose build && docker-compose up`

## Using

This application needs to be run on a publicly accessible server.  Once running, go to JangoMail.com, sign in, and configure your web database to point to the URL exposed by the server.
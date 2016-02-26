# Buildmaster™

Visualization for automated build tools.

## Table of contents

_TODO_

## TODO

- [ ] visualize frontend builds using webhooks (maintain similar product)
- [ ] namespace builds to various routes
    - `POST http://6ab9c16d.ngrok.com/tracker-frontend`
    - `GET http://6ab9c16d.ngrok.com/tracker-frontend`
- [ ] deploy to PWS
    - buildmaster.cfapps.io
- [ ] visual _enhancements_
- [ ] SMS notifications via [Twilio](https://www.twilio.com/)
- [ ] include persistane storage (builds not lost on refresh)
- [ ] use CSS modules

## Developmental usage

Install dependencies:

```
npm i
```

Start express server:

```
node app.js
```

Start webpack server:

```
npm start
```

## Deployment

_TODO_

## Integration w/ CircleCI

_TODO_

# Dream App - Initial Setup

## Notes

### Typical Web App

You have a front end app that runs in the browser. This communicates with a back end server using the hypertext transfer protocol.

You need a back end server to run **_trusted_** code (i.e. An API from OpenAI that requires a private API key that we do not want exposed to the browser).

You will often run a database from a server as well as authenticate and logic, etc.

### The Project

We will use a build tool called _**vite**_.

To build the project app and directory type (build the front end):

```javascript
  yarn create vite app-name-here
  cd app-name-here
  yarn install
  yarn run dev
```

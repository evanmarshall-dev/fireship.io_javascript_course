# RESTful APIs

## Notes

APIs are a way for computers to talk to each other. Much like browsers, but instead of filling out forms you are writing code to explicitly request data from a server.

### What is it?

RESTful means that the API follows a set of rules or constraints know as **_representational state transfer_**. It organizes data entities or resources into a bunch of unique URLs or URIs (uniform resource identifiers), which differentiate different types of data resources on a server.

A client can get data from a resource by making a request to an endpoint over HTTP.

### The Request

The HTTP request have a specific format. The _**start line**_ contains the URI we are trying to access. This is preceded by an _**HTTP VERB**_ request method, which signal your intent with the resource.

- GET: Means you just want to read the data.
- POST: Means you want to create a new resource.
- PATCH: Is for updates.
- DELETE: Is for removing data.
- And more... HEAD, PUT, CONNECT, OPTIONS and TRACE.

Below the start line we have _**headers**_, which contain meta data about the request.

- Accept header: Tells the server you want the data in a specific format (i.e. application/json).
- Authorization header: Tells the server that you are actually allowed to make that request (i.e. token).
- Connection.

After the headers we have the _**body**_, which contains a custom payload of data. The server will receive the request message, execute some code to read from a database, which can then be formatted into a response message.

### The Response

The top of the message contains a _**status code**_ to tell the client what happened with their request.

- 200 level codes mean things went well.
- 400 level codes mean something was wrong with your request.
- 500 level codes mean that the server failed.

Then we have response headers which contain information about the server. This is followed by the response body, which contains the data payload and formatted in JSON.

The most important part of this process is that it is _**stateless**_. This means that neither party (i.e. client or server) needs to store any info about each other and every request/response cycle is independent from all other communication.

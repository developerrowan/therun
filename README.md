# therungg
Node wrapper [for therun.gg's](https://therun.gg) API

[<img src="https://img.shields.io/npm/v/therungg">](https://www.npmjs.com/package/therungg)

**TheRun is a service which is still early in development, so breaking changes should be expected. ReadTheDocs coming soon.**

## Basic Installation and Usage
Install this package by running `npm install therungg`.

### HTTP API
Get front page data:
```ts
import { getFrontPageData } from 'therungg';

const frontPageData = await getFrontPageData();
console.log(frontPageData);
```

Get list of games supported by TheRun:
```ts
import { getAllGames } from 'therungg';

const games = await getAllGames();
console.log(games);
```
### Live WebSocket API
You can listen to all the events sent from the Live API via:
```ts
import { LiveWebSocket } from 'therungg';

const ws = new LiveWebSocket(); // Will listen to ALL Live events

ws.onOpen = () => {
  console.log("Opened connection");
}

ws.onMessage = (data) => {
  console.log(data.user);
}
```
To listen to events only for a specific user, pass a username to the `LiveWebSocket` constructor.
```ts
const ws = new LiveWebSocket("cheese051"); // Will listen to ALL Live events
```

## Notes
### Error handling
The HTTP functionality of this API expects that you will try-catch any calls you make. This means that errors are thrown in an ungraceful manner.

There are two scenarios in which this occurs:

  * HTTP 404 error (Not Found)
  * HTTP 429 error (Rate Limited)
### Compatibility
This package uses `fetch`, which has been built into Node without the need for polyfills since version 17.5. By now if you are starting a new project, you should be
using the latest LTS version of Node (v18 at time of writing) which supports `fetch`.

## Roadmap

  - [x] Live API WebSocket support
  - [ ] Marathon API support
  - [ ] Better test coverage

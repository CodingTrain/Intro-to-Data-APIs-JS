# Working with Data and APIs in JavaScript

This document is an outline for the Coding Train playlist: ["Working with Data and APIs in JavaScript"](https://www.youtube.com/watch?v=DbcLg8nRWEg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=1)

## Description

This course is for aspiring developers who want to learn how to work with data in web applications. How do you retrieve, collect, and store data? The course will be taught through a series of creating three data projects. The first will be client-side only and examine how to load data with `fetch()` and present on a web page. Viewers will learn about handling asynchronous events with Promises and how to render data to the DOM as well as a draw to HTML5 canvas with p5.js. The second and third project will introduce "full stack" development adding server-side programming with node.js for data persistence and API authentication.

## Introduction

1. Course Trailer (~1-minute overview)
2. Full introduction -- overview of topics, goals for the course
3. What do I need to know to go to tutorial 1?

### Module 1: `fetch()` with image, CSV, JSON

#### 1a: fetch()

1. What is `fetch()`?
   - [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
   - Promises, async and await
   - [Body - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/Body)
   - `<img>` DOM element

#### 1b: Tabular Data

1. Parsing CSV with `split()`
2. Line chart with [chart.js](https://www.chartjs.org/docs/latest/)

#### 1c: JSON Data from API

1. load JSON data with `fetch()` and update DOM <span> element.
2. Add map to page with [Leaflet.js](https://leafletjs.com/) and place ISS location as marker.
3. Updating location continuously with `setInterval()`.

#### Objectives

1. Learn `fetch()` for GET requests with Promises and `async`/`await`
   - See loading data from local image / JSON / CSV
2. Learn to "render" data with native JS DOM manipulation
3. Discover missing pieces: no persistence, API keys not hidden

### Module 2: The Data Selfie App

[The Data Selfie App](https://github.com/joeyklee/data-selfie-app) is a project tutorial by [@joeyklee](https://github.com/joeyklee).

#### Videos

1. What is node, npm, and express? Setting up a server to host static pages.
2. Accessing GeoLocation with `navigator.geolocation`.
3. What is a POST? Sending data to the server.
4. What is a database? Saving data to NeDB.
5. Retrieving data from NeDB with a "RESTian" route.
6. Adding capture and images with p5.
7. Next steps/exercise?

#### Objectives

1. Learn the basics of server-side programming with Node (and express?)
2. Learn how to save data to a database with [NedB](https://github.com/louischatriot/nedb).
   - show just plain array
   - show flat file
   - introduce the idea of the database
3. Learn how to use `fetch()` to POST data to the server.

### Module 3: The Weather Here

[The Weather Here](https://github.com/joeyklee/the-weather-here) is a project tutorial by [@joeyklee](https://github.com/joeyklee).

#### Objectives

1. Learn how to use `fetch()` to grab data from APIs in node.js.
2. Learn how to store private API keys using environment variables.
3. Learn how to deploy your project using services like [Glitch](http://glitch.com) and more.

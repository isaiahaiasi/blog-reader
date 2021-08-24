# Blog Reader

Part of my **Blog API** project for [The Odin Project](https://www.theodinproject.com/about)

## Summary

A React-based front-end for reading microblogs. It is written in TypeScript, and bundled using Webpack. Client-side routing (using react-router) is used to consume the API which provides the blog content. TailwindCSS is used to provide utility-based styles.

[See the repo for the API server (written using TypeScript, Node, Express, and MongoDB).](https://github.com/isaiahaiasi/blog-server)

[See the repo for the sister front-end, an Authoring Client for writing your own blog posts.](https://github.com/isaiahaiasi/blog-writer)

## Features

- Authentication via JSON Web Tokens.
- Ability to comment on interesting posts.
- View general posts, your own posts, or another user's posts.

## Why Split?

The idea behind splitting the "Reader" client and the "Authoring" client was to practice creating an API that could be consumed by multiple different clients.

## Technologies Used

- TypeScript
- React
- React-Router
- Webpack
- Date-Fns
- Use-Http
- ESLint
- Prettier
- TailwindCSS

## Running locally

(Not finalized)

```sh
npm install     # Install necessary packages
npm run build   # Creates a build of the project, outputing /public
npm run dev     # Starts webpack-dev-server on port 8080
```

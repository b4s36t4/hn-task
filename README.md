# Tech-Stack

- React
- React-Router-dom
- Vite
- Zustand
- React-Query (tanstack)
- Ark-UI (Not useful though)
- Tailwindcss
- Axios
- pnpm

## State-Management

Used React-Query and Zustand for managing the state.

React-Query used to call the APIs and cache the and provide the data through the hooks.

Zustand is being used to track the search string to call the APIs based on string provided.

## Route-Anatomy.

- Base Route
  - Home
    - Item

Base Route - is the root page which contains the header and outlet to render the child pages
Home - Contains all the the stories
Item: Renders all the comments from a selected story.

## Testing

Used react-testing-library and vitest to write basic test-cases.

> Used the test data for search results & items api instead of calling the APIs.

## How-To Run

This project is using `pnpm` as the package manager

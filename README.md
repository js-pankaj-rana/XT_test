# XT Test | Hacker News Application (React + Server-Side Rendering)

## Project Overview

The **Hacker News Application** is a React-based web application that displays the latest Hacker News articles retrieved from the Hacker News API. The application leverages **Server-Side Rendering (SSR)** using **Express.js**, resulting in faster initial page loads and improved SEO.

Users can browse news articles, upvote stories, remove individual news items, and visualize vote counts through an interactive chart.

---

## Application Preview

> **Screenshot**
<img width="3024" height="2710" alt="screencapture-localhost-8000-2-2026-06-28-17_32_32" src="https://github.com/user-attachments/assets/5f8025b1-64f7-4561-ab45-fdfb341455ec" />



---

## Features

- Server-Side Rendering (SSR) using Express.js
- Fetches latest Hacker News articles from the API
- Client-side routing with React Router
- Redux for centralized state management
- Redux Saga for asynchronous API handling
- Upvote functionality with real-time updates
- Remove news articles from the list
- Interactive vote visualization using Recharts
- Pagination support
- Local Storage caching to avoid unnecessary API calls
- Responsive and user-friendly interface

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| React | User Interface |
| React Router | Client-side Routing |
| Redux | State Management |
| Redux Saga | Side Effect Management |
| Express.js | Server-Side Rendering |
| Axios | HTTP Client |
| Recharts | Data Visualization |
| Moment.js | Date Formatting |
| Node Sass | Styling |

---

## Project Structure

```text
src/
│
├── action/
├── components/
├── constant/
├── containers/
├── reducers/
├── router/
├── saga/
├── store/
└── utils/

server/
│
└── index.js
```

---

## Installation

Install project dependencies.

```bash
npm install
```

---

## Build the Application

Generate the production build before starting the SSR server.

```bash
npm run build
```

---

## Run the Application

Start the Server-Side Rendered application.

```bash
npm start
```

Or use the combined build and server command.

```bash
npm run build:ssr
```

The application will be available at:

```
http://localhost:8000
```

---

## Run Unit Tests

Execute Jest test cases.

```bash
npm test
```

---

## Application Workflow

1. The Express server receives the incoming request.
2. React renders the application on the server using `renderToString()`.
3. The generated HTML is sent to the browser.
4. React hydrates the application on the client.
5. Redux Saga handles asynchronous API requests.
6. Redux updates the application state.
7. The UI automatically reflects state changes.

---

## State Management

The application uses **Redux** for centralized state management.

- Actions dispatch user events.
- Reducers update the application state.
- Redux Saga manages asynchronous API calls.
- The Redux Store provides a single source of truth for the application.

---

## API Integration

The application retrieves Hacker News data using **Axios**.

All asynchronous API requests are managed through **Redux Saga**.

API endpoint configurations are maintained separately in:

```text
src/constant/constant.url.js
```

This approach improves maintainability and simplifies future API updates.

---

## Local Storage Optimization

To improve performance and reduce unnecessary API requests, the application stores page-wise news data in the browser's **Local Storage**.

### Benefits

- Prevents duplicate API calls
- Faster page loading
- Reduced network usage
- Better user experience during navigation

Whenever a previously visited page is opened or refreshed, the application first checks Local Storage. If cached data is available, it loads the data directly without making another API request.

---

## Data Visualization

The application visualizes article vote counts using **Recharts**.

The chart updates automatically whenever:

- A user upvotes a news article
- A news article is removed

This ensures that the graphical representation always remains synchronized with the Redux store.

---

## Routing

The application uses **React Router v6** for client-side routing.

Server-side rendering is implemented using **StaticRouter**, ensuring consistent routing behavior on both the server and client.

Supported routes include:

- Home Page
- Paginated News Pages
- 404 Not Found Page

---

## Key Improvements

- Implemented Server-Side Rendering (SSR)
- Upgraded to React Router v6
- React 19 compatible
- Improved Redux architecture
- Refactored reducers into reusable helper functions
- Optimized API handling using Redux Saga
- Local Storage caching for better performance
- Cleaner and more maintainable project structure

---

## Author

**Pankaj Rana**

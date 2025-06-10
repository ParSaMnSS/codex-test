# Fullstack Site Example

This repository contains a basic full stack example using **Next.js**, **React**, **Tailwind CSS**, and **MySQL**. It now includes:

### Features

- API routes for signing up and logging in users
- An admin page that lists all users and allows toggling design options
- A simple About page with a configurable red box
- Shared navigation across pages

## Setup

1. Install dependencies:

```bash
npm install
```

2. Ensure a MySQL server is running and configure the connection via environment variables:

- `DB_HOST`
- `DB_USER`
- `DB_PASS`
- `DB_NAME`

3. Run the development server:

```bash
npm run dev
```

Navigate to `http://localhost:3000` to see the site. The admin page lets you switch the red box on the About page on or off.

To build the project for production use:

```bash
npm run build
```

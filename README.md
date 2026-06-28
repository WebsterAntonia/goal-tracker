# goal-tracker

`goal-tracker` is a Base Mini App for creating goals and incrementing progress over time.

The app provides a simple structure for defining a goal, viewing goal details, tracking progress, and reviewing personal goal activity.

## Overview

This project is built as a modern web app using the Next.js App Router and TypeScript.

It is designed around a small set of focused routes:

- Create a new goal
- View an individual goal
- Track progress over time
- Browse your goals
- Review insights

## Features

- Create a goal from the app interface
- Increment progress on an existing goal
- View goal details by goal ID
- Browse personal goals from a dedicated page
- View insights related to goal progress
- Built with typed React components using TypeScript
- Uses Wagmi and Viem for Base-compatible web3 functionality

## Tech Stack

- Next.js App Router
- TypeScript
- Wagmi
- Viem

## Repository

GitHub:

https://github.com/WebsterAntonia/goal-tracker.git

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page |
| `/create` | Create a new goal |
| `/goals/[id]` | View a specific goal |
| `/my` | View personal goals |
| `/insights` | View goal insights |

## Getting Started

Clone the repository:

```bash
git clone https://github.com/WebsterAntonia/goal-tracker.git
```

Move into the project directory:

```bash
cd goal-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL in your browser:

```text
http://localhost:3000
```

## Usage

Start from the home page at `/`.

Use `/create` to add a new goal.

After a goal is created, view it from a route like:

```text
/goals/[id]
```

Use `/my` to review your goals.

Use `/insights` to explore progress-related insights.

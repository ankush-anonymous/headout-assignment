# Product Review System

## Description

A simple and intuitive product review system that allows users to submit product reviews with ratings (NPS - Net Promoter Score). The application collects user feedback, including product selection, rating (1-10 stars), and review text. All submissions are sent to a proxy server for processing.

## Features

- Star rating system (1-10)
- Real-time NPS category display (Detractor, Passive, Promoter)
- Form validation
- Responsive design
- Server-side data processing

## Tech Stack

- **Frontend:**

  - HTML5
  - CSS3
  - Vanilla JavaScript
  - Fetch API for server communication

- **Backend:**
  - Node.js proxy server
  - Express.js

## Installation and Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/product-review-system.git
cd product-review-system
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## API Endpoint

The application communicates with a proxy server at:

```
https://headout-assignment-backend.onrender.com/proxy
```

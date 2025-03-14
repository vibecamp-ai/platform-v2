# Vibe Camp Platform

A customer feedback collection platform that helps product teams gather, organize, and prioritize user feedback to build better products.

## Overview

Vibe Camp is a web application that allows businesses to create feedback boards, collect customer suggestions, and prioritize features based on user votes. This platform makes it easy to understand what your customers want, helping you build products they'll love.

## Features

- **User Authentication**: Secure login and registration system
- **Feedback Boards**: Create and manage multiple feedback boards
- **Post Management**: Users can create, view, and vote on feedback posts
- **Admin Dashboard**: Manage boards and posts from a central dashboard
- **Voting System**: Users can upvote posts to help prioritize features
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React.js, Next.js 14
- **UI Framework**: Tailwind CSS, DaisyUI
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js
- **Payment Processing**: Stripe

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vibe-camp-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   
   MONGODB_URI=your_mongodb_connection_string
   
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Routes

- `/api/auth/*` - Authentication endpoints
- `/api/board` - Board creation and management
- `/api/post` - Post creation and management
- `/api/vote` - Voting functionality
- `/api/billing` - Subscription and payment processing

## Project Structure

- `/app` - Next.js app directory containing pages and API routes
- `/components` - Reusable React components
- `/libs` - Utility functions and database connection
- `/models` - Mongoose data models
- `/public` - Static assets

## Deployment

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Known Issues

- When developing locally, ensure API requests use the correct base URL. The application uses `window.location.origin` to determine the API endpoint to avoid 403 Forbidden errors.

## License

[MIT](LICENSE)
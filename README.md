# Trimatech Homepage

![Trimatech Homepage](/public/og.png)

A modern, high-performance application built with Next.js App Router and Chakra UI v3.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) with App Router
- **UI**: [Chakra UI v3](https://chakra-ui.com/)
- **Authentication**: [Supabase Auth](https://supabase.com/auth)
- **Database**: [PostgreSQL](https://www.postgresql.org/) via [Supabase](https://supabase.com/)
- **Payments**: [Stripe](https://stripe.com/) for subscription management
- **Deployment**: [Vercel](https://vercel.com/) and [Replit](https://replit.com/)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm
- A Supabase account
- A Stripe account (for payment features)

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/MayGo/trimatech.git
    cd trimatech
    ```

2. Install dependencies

    ```bash
    pnpm install
    ```

3. Set up environment variables
    ```bash
    cp .env.example .env.local
    ```
4. Fill in your environment variables in `.env.local`

5. Start the development server

    ```bash
    pnpm dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- **Modern UI** - Beautiful, responsive interface built with Chakra UI v3
- **User Authentication** - Secure authentication with Supabase
- **Subscription Management** - Stripe integration for handling payments
- **Database Integration** - PostgreSQL database with Supabase
- **Performance Optimized** - Built with Next.js App Router for optimal performance
- **Social Media Sharing** - Configured with Open Graph meta tags and og.png image

## Social Media Sharing

The project includes an `og.png` image in the public directory that is used for social media previews when your site is shared on platforms like:

- Twitter
- Facebook
- LinkedIn
- Slack

To customize the Open Graph image:

1. Replace `/public/og.png` with your own 1200×630px image
2. Update the meta tags in the layout file if needed

This helps ensure your site looks professional when shared across social platforms.

## Deployment

This application can be deployed on both Vercel and Replit:

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure environment variables
4. Deploy

### Replit Deployment

1. Import your repository to Replit
2. Configure environment variables in the Replit Secrets panel
3. Run the build command: `pnpm build`
4. Set the run command: `pnpm start`

## Local Development with Supabase

For local development with Supabase:

1. Install [Docker](https://www.docker.com/get-started/)
2. Copy `.env.example` to `.env.local` and `.env`
3. Start local Supabase instance:
    ```bash
    pnpm supabase:start
    ```
4. Connect to your local instance:
    ```bash
    pnpm supabase:link
    ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

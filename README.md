This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Firebase Storage CORS

If profile photo uploads fail in the browser with a CORS error, the Firebase Storage bucket needs an allowed origin entry for your local app.

Use the template in [`storage-cors.json`](./storage-cors.json) and apply it to the bucket configured in your Firebase env, for example with `gsutil cors set`.

The checked-in template now includes:

- `http://localhost:3000`
- `http://localhost:3001`
- `http://127.0.0.1:3000`
- `http://127.0.0.1:3001`
- `https://skill-swap-hub-eca37.web.app`
- `https://skill-swap-hub-eca37.firebaseapp.com`

Add any LAN or preview origin you use before testing uploads there, then re-apply the CORS file to the bucket.

## Deploy on AWS Amplify

This app is ready for AWS Amplify Hosting with the checked-in [`amplify.yml`](./amplify.yml). The build uses `npm ci`, `npm run build`, and publishes the Next.js `.next` output.

Before deploying, add the variables from [`env.example`](./env.example) in Amplify Console under **App settings > Environment variables**:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

Deploy flow:

1. Push this repository to GitHub, GitLab, Bitbucket, or CodeCommit.
2. Open AWS Amplify Console and choose **Create new app**.
3. Connect the repository and branch.
4. Confirm the build settings from `amplify.yml`.
5. Add the Firebase environment variables above.
6. Choose **Save and deploy**.

After Amplify gives you the production URL, add that domain in Firebase:

- Firebase Authentication: add the Amplify domain under **Authentication > Settings > Authorized domains**.
- Firebase Storage CORS: add the Amplify domain to `storage-cors.json`, then re-apply the CORS config to the storage bucket.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

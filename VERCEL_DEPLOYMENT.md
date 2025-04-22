# Deploying Your Portfolio to Vercel

This guide will help you deploy your portfolio website to Vercel with the contact form functionality.

## Prerequisites

- A Vercel account
- Your domain (dev-siva.xyz) configured with Vercel
- MongoDB Atlas account with a database set up

## Deployment Steps

### 1. Push Your Code to GitHub

Make sure your code is pushed to a GitHub repository.

### 2. Connect Your Repository to Vercel

1. Log in to your Vercel account
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. Configure your project settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `next build`
   - Output Directory: .next

### 3. Configure Environment Variables

Add the following environment variables in your Vercel project settings:

- `MONGODB_URI`: Your MongoDB connection string
  ```
  mongodb+srv://shivzalt:uniY5X8iUCP7d0JG@cluster0.lylzh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  ```
- `NEXT_PUBLIC_API_URL`: Your domain
  ```
  https://dev-siva.xyz
  ```

### 4. Deploy Your Project

Click "Deploy" to start the deployment process.

### 5. Configure Your Domain

1. Go to your project settings in Vercel
2. Navigate to the "Domains" section
3. Add your domain: `dev-siva.xyz`
4. Follow the instructions to configure your DNS settings

## Testing Your Deployment

Once deployed, visit your website at `https://dev-siva.xyz` and test the contact form to ensure it's working correctly.

## Troubleshooting

If you encounter any issues:

1. Check the Vercel deployment logs for errors
2. Verify that your environment variables are set correctly
3. Ensure your MongoDB connection string is valid and the database is accessible
4. Check that your API routes are working by testing them directly

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/) 
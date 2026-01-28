# Web3Forms Setup Instructions

## Step 1: Get Your Access Key

1. Visit https://web3forms.com
2. Click "Get Started Free"
3. Enter the email where you want to receive form submissions (e.g., info@abconstruction.com)
4. Click "Create Access Key"
5. Copy the access key they provide

## Step 2: Add Key to Environment File

1. Open the `.env` file in the project root
2. Replace `your_access_key_here` with your actual access key:
   ```
   PUBLIC_WEB3FORMS_KEY=abc123xyz-your-actual-key-here
   ```

## Step 3: Update Contact Information

In the same `.env` file, update:
```
PUBLIC_CONTACT_EMAIL=your-real-email@example.com
PUBLIC_CONTACT_PHONE=(828) 123-4567
```

## Step 4: Test the Form

1. Restart the dev server: `npm run dev`
2. Go to http://localhost:4321/contact
3. Fill out and submit the form
4. Check your email for the submission

## Step 5: Deploy to Vercel

After testing locally, add the environment variable to Vercel:

1. Go to your Vercel dashboard
2. Select the A&B Construction project
3. Go to Settings → Environment Variables
4. Add: `PUBLIC_WEB3FORMS_KEY` = your actual key
5. Redeploy the site

## Notes

- Web3Forms is **free** for unlimited submissions
- Submissions arrive instantly via email
- No backend server needed
- Works perfectly with static sites

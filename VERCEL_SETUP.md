# Environment Variables for Vercel Deployment

## Required Environment Variables

Add these environment variables in your Vercel project settings:

### Razorpay Configuration
```
RAZORPAY_KEY_ID=rzp_test_psQiRu5RCF99Dp
RAZORPAY_KEY_SECRET=MLb1hejwBSaeg9ysJjO24O0u
```

### Optional (for different environments)
```
RAZORPAY_TEST_KEY_ID=rzp_test_psQiRu5RCF99Dp
RAZORPAY_TEST_KEY_SECRET=MLb1hejwBSaeg9ysJjO24O0u
RAZORPAY_LIVE_KEY_ID=your_live_key_id_here
RAZORPAY_LIVE_KEY_SECRET=your_live_key_secret_here
NODE_ENV=production
```

## How to Set Environment Variables in Vercel:

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: admin-panel
3. Go to Settings tab
4. Click on "Environment Variables" in the sidebar
5. Add each variable:
   - Name: RAZORPAY_KEY_ID
   - Value: rzp_test_psQiRu5RCF99Dp
   - Environment: Production (select all environments)
   
   - Name: RAZORPAY_KEY_SECRET
   - Value: MLb1hejwBSaeg9ysJjO24O0u
   - Environment: Production (select all environments)

6. Save each variable
7. Redeploy your project for changes to take effect

## API Endpoints Available:

Your Vercel API endpoints are now available at:
- GET /api/health - Health check
- POST /api/create-razorpay-order - Create payment order
- POST /api/verify-razorpay-payment - Verify payment
- GET /api/payment-status/{payment_id} - Get payment status
- POST /api/create-refund - Create refund
- GET /api/razorpay-orders - Get orders list

## Frontend Configuration:

Your frontend is already configured to use:
- Development: http://localhost:3001 (local server)
- Production: https://admin-panel-mu-sepia.vercel.app (your Vercel app)

The app will automatically detect the environment and use the appropriate API URL.

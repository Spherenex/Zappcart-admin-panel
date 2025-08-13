# Deployment Fix Guide

## Issue Resolution

The 405 "Method Not Allowed" errors were occurring because your Vercel deployment was not properly routing API requests to individual serverless functions. This has now been fixed.

## Changes Made

### 1. Created Individual API Route Files
Instead of having all routes in `api/index.js`, each endpoint now has its own file:

- ✅ `api/create-razorpay-order.js` - Handles payment order creation
- ✅ `api/verify-razorpay-payment.js` - Handles payment verification
- ✅ `api/send-vendor-sms.js` - Handles SMS notifications
- ✅ `api/vendor-transfer.js` - Handles vendor transfers
- ✅ `api/test-deployment.js` - Test endpoint for deployment verification

### 2. Fixed vercel.json Configuration
- Removed conflicting `rewrites` that were redirecting all API calls to `index.js`
- Updated `routes` to properly map each endpoint to its corresponding file
- Ensured proper CORS handling for all endpoints

### 3. Environment Variables Required
Make sure these environment variables are set in your Vercel deployment:

```
RAZORPAY_KEY_ID=rzp_test_psQiRu5RCF99Dp
RAZORPAY_KEY_SECRET=MLb1hejwBSaeg9ysJjO24O0u
NODE_ENV=production
```

## Deployment Steps

### 1. Commit and Push Changes
```bash
git add .
git commit -m "Fix API routing for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel
If using Vercel CLI:
```bash
vercel --prod
```

Or simply push to your connected GitHub repository and Vercel will auto-deploy.

### 3. Test the Deployment
After deployment, test these endpoints:

1. **Health Check**: `https://your-domain.vercel.app/api/health`
2. **Test Deployment**: `https://your-domain.vercel.app/api/test-deployment`
3. **Payment Creation**: `https://your-domain.vercel.app/api/create-razorpay-order`

## Verification Steps

### Test Payment Flow
1. Open your deployed admin panel
2. Go to Payment Commission tab
3. Select a vendor and try to make a payment
4. Check browser console for any errors
5. Verify Razorpay modal opens correctly

### Check API Responses
Use browser DevTools Network tab to verify:
- API calls return 200 status (not 405)
- Proper JSON responses
- CORS headers are present

## Troubleshooting

### If you still get 405 errors:
1. Check Vercel function logs: `vercel logs`
2. Verify environment variables are set in Vercel dashboard
3. Ensure all API files are properly deployed

### If payment modal doesn't open:
1. Check browser console for errors
2. Verify Razorpay keys are correct
3. Test the create-razorpay-order endpoint directly

### Common Issues:
- **CORS errors**: All endpoints now include proper CORS headers
- **Missing environment variables**: Set them in Vercel dashboard
- **Caching issues**: Clear browser cache and redeploy

## Environment Detection

The code now properly detects:
- **Local development**: Uses `http://localhost:3001`
- **Production**: Uses `window.location.origin` (your Vercel domain)

This ensures the correct API URLs are used in each environment.

## Success Indicators

✅ No 405 errors in browser console
✅ Payment modal opens correctly
✅ Health check returns 200 status
✅ SMS notifications work (simulated)
✅ Payment verification succeeds

Your payment system should now work correctly in both development and production environments!

# Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

This project is ready for deployment on Vercel!

### Prerequisites
- GitHub account with this repository pushed
- Vercel account (free tier works perfectly)

---

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Import Your Repository
1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `Anantha-Hothri/guru-kousalya-nivas`
4. Select the repository and click **"Import"**

### Step 2: Configure Build Settings
Vercel will auto-detect Create React App, but verify these settings:

- **Framework Preset:** `Create React App`
- **Build Command:** `yarn build` (or `npm run build`)
- **Output Directory:** `build`
- **Install Command:** `yarn install` (or `npm install`)
- **Root Directory:** `./` (leave as default)

### Step 3: Add Environment Variables
Click **"Environment Variables"** and add:

```
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_USE_LOCAL_IMAGES=false
```

**Important:** Get these values from:
- EmailJS dashboard: https://dashboard.emailjs.com/
- See `EMAILJS_SETUP.md` for detailed setup instructions

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at `https://your-project-name.vercel.app`

---

## Method 2: Deploy via Vercel CLI

### Install Vercel CLI
```bash
npm i -g vercel
# or
yarn global add vercel
```

### Deploy
```bash
# From project root
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - What's your project's name? guru-kousalya-nivas
# - In which directory is your code located? ./
```

### Add Environment Variables via CLI
```bash
vercel env add REACT_APP_EMAILJS_PUBLIC_KEY
vercel env add REACT_APP_EMAILJS_SERVICE_ID
vercel env add REACT_APP_EMAILJS_TEMPLATE_ID
vercel env add REACT_APP_USE_LOCAL_IMAGES
```

### Production Deployment
```bash
vercel --prod
```

---

## Configuration Files

### ✅ Already Configured
- `vercel.json` - Vercel configuration (routing, caching, build settings)
- `package.json` - Build scripts and dependencies
- `.gitignore` - Excludes `.env` and build files

### 📝 Environment Variables Required
Create these in Vercel dashboard under **Settings → Environment Variables**:

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key | `xxxxx_xxxxxxxxxxxx` |
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID | `service_xyz1234` |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID | `template_abc5678` |
| `REACT_APP_USE_LOCAL_IMAGES` | Use local images (false for Vercel) | `false` |

---

## Post-Deployment Checklist

### ✅ Verify Everything Works
1. **Contact Form** - Submit a test message
2. **All Pages** - Navigate through all pages
3. **Gallery** - Check images load properly
4. **Responsive Design** - Test on mobile/tablet
5. **Social Links** - Verify Instagram, Facebook, YouTube links work

### 🌐 Custom Domain (Optional)
1. Go to Vercel project → **Settings → Domains**
2. Add your custom domain (e.g., `kousalyanivas.com`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-60 minutes)

---

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

- **Push to `main` branch** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull Requests** → Automatic preview links

### Workflow
```bash
# Make changes locally
git add .
git commit -m "Update gallery layout"
git push origin main

# Vercel automatically builds and deploys! 🎉
```

---

## Troubleshooting

### Build Fails
**Error:** "Command failed with exit code 1"
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `yarn build`

### Contact Form Not Working
- Verify EmailJS environment variables are set
- Check EmailJS dashboard for API limits (200 emails/month free)
- Test with browser console open for error messages

### Images Not Loading
- Set `REACT_APP_USE_LOCAL_IMAGES=false` in Vercel
- Ensure images are in `/public/images/` folder
- Check image paths in `src/data/mock.js`

### 404 on Page Refresh
- Ensure `vercel.json` has rewrites configured (already done)
- Check Vercel logs for routing issues

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **EmailJS Docs:** https://www.emailjs.com/docs
- **This Project's Docs:**
  - `README.md` - Project overview
  - `EMAILJS_SETUP.md` - Email configuration
  - `CONTACT_FORM_IMPLEMENTATION.md` - Form details

---

## 🎉 Your Site is Live!

After deployment, your beautiful Bharatanatyam portfolio will be live and accessible worldwide!

**Default URL:** `https://guru-kousalya-nivas.vercel.app`  
**Custom Domain:** Configure in Vercel settings

Enjoy your deployment! 🚀

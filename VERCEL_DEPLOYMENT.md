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

### Step 3: Add Environment Variables (Optional)
Click **"Environment Variables"** and add:

```
REACT_APP_USE_LOCAL_IMAGES=false
```

**Note:** The contact form uses FormSubmit.co (no API keys required).
Email destination is configured in `src/data/contactConfig.js`.

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

### Add Environment Variables via CLI (Optional)
```bash
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

### 📝 Environment Variables (Optional)
Create these in Vercel dashboard under **Settings → Environment Variables**:

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_USE_LOCAL_IMAGES` | Use local images (false for Vercel) | `false` |

**Contact Form:** Uses FormSubmit.co - no environment variables needed.
Configure email destination in `src/data/contactConfig.js`.

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
- **First submission:** FormSubmit sends verification email to configured address
- Check spam folder for verification email from FormSubmit.co
- Click "Activate Form" link in the verification email
- After activation, all submissions will be delivered
- Check browser console for error messages

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
- **FormSubmit Docs:** https://formsubmit.co/
- **This Project's Docs:**
  - `README.md` - Project overview
  - `src/data/contactConfig.js` - Contact form configuration

---

## 🎉 Your Site is Live!

After deployment, your beautiful Bharatanatyam portfolio will be live and accessible worldwide!

**Default URL:** `https://guru-kousalya-nivas.vercel.app`  
**Custom Domain:** Configure in Vercel settings

Enjoy your deployment! 🚀

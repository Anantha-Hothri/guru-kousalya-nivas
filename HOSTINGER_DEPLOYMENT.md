# Hostinger Deployment Guide

## 🚀 Deploy to Hostinger (Static Build)

This guide walks you through building and deploying the portfolio to Hostinger.

---

## Prerequisites
- Node.js and Yarn/NPM installed
- Hostinger account with hosting plan
- FTP/File Manager access to Hostinger

---

## Step 1: Build for Production (Hostinger)

### Set Environment Variable for Local Images
For Hostinger, you MUST use local images (not Vercel URLs).

**Create `.env` file in project root:**
```bash
REACT_APP_USE_LOCAL_IMAGES=true
```

### Build the Project
```bash
# Install dependencies (if needed)
yarn install

# Build for production
yarn build
```

This creates a `build/` folder with all static files.

---

## Step 2: Verify Build Output

Check that the `build/` folder contains:
- ✅ `index.html`
- ✅ `static/` folder (CSS, JS files)
- ✅ `images/` folder (all images)
- ✅ Other assets

---

## Step 3: Upload to Hostinger

### Option A: File Manager (Recommended)

1. **Login to Hostinger**
   - Go to hPanel (Hostinger control panel)
   - Navigate to **File Manager**

2. **Navigate to public_html**
   - Find your domain's `public_html` folder
   - This is where your website files go

3. **Clear Existing Files (if any)**
   - **IMPORTANT:** Backup any existing files first!
   - Delete old files in `public_html`

4. **Upload Build Folder Contents**
   - **DO NOT** upload the `build` folder itself
   - Upload the **contents inside** the `build/` folder:
     - `index.html`
     - `static/` folder
     - `images/` folder
     - All other files/folders inside `build/`

5. **Verify Structure**
   Your `public_html` should look like:
   ```
   public_html/
   ├── index.html
   ├── static/
   │   ├── css/
   │   ├── js/
   │   └── media/
   ├── images/
   │   ├── hero/
   │   ├── productions/
   │   ├── performances/
   │   └── events/
   ├── manifest.json
   ├── robots.txt
   └── other files...
   ```

### Option B: FTP Client (FileZilla)

1. **Install FileZilla** (or any FTP client)

2. **Get FTP Credentials from Hostinger**
   - hPanel → **FTP Accounts**
   - Note: Host, Username, Password, Port

3. **Connect via FTP**
   - Host: `ftp.yourdomain.com` (or IP provided)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: `21` (usually)

4. **Upload Files**
   - Navigate to `public_html` on server (right side)
   - Select all files **inside** your local `build/` folder (left side)
   - Drag and drop OR right-click → Upload
   - **Wait for upload to complete** (images take time!)

---

## Step 4: Configure .htaccess (React Routing Fix)

Create/edit `.htaccess` file in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures all routes (like `/about`, `/productions/shivom-jagath-kaarana`) work correctly.

---

## Step 5: Verify Deployment

Visit your domain and check:

1. ✅ **Homepage loads** - Check hero image, navigation
2. ✅ **All pages work** - About, Productions, Gallery, etc.
3. ✅ **Images display** - Gallery, productions, performances
4. ✅ **Contact form** - Submit a test message
5. ✅ **Routing works** - Refresh on `/about` should not show 404
6. ✅ **Mobile responsive** - Test on phone

---

## Updating the Site

When you make changes:

```bash
# 1. Make your changes locally
# 2. Build again
yarn build

# 3. Upload ONLY changed files to Hostinger
#    OR replace all files in public_html
```

**Pro Tip:** Only upload changed files to save time. Common changes:
- **Code changes** → Upload `static/` folder
- **Image changes** → Upload only new/changed images in `images/`
- **Content changes** → Upload `static/` folder

---

## Troubleshooting

### Images Not Loading
- ✅ Verify `.env` has `REACT_APP_USE_LOCAL_IMAGES=true`
- ✅ Rebuild: `yarn build`
- ✅ Check `build/images/` folder exists
- ✅ Upload entire `images/` folder to Hostinger

### 404 on Page Refresh
- ✅ Add `.htaccess` file (see Step 4)
- ✅ Verify mod_rewrite is enabled (contact Hostinger support)

### Contact Form Not Working
- **First submission:** FormSubmit sends verification email
- Check spam folder, click activation link
- Configured email: `msnatyalaya@gmail.com`

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules build
yarn install
yarn build
```

---

## Important Notes

### ⚠️ ALWAYS Use Local Images for Hostinger
```bash
# .env file MUST contain:
REACT_APP_USE_LOCAL_IMAGES=true
```

### 📦 Build File Size
The build folder will be **large** (~200-500MB) due to images.  
Upload may take 10-30 minutes depending on internet speed.

### 🔄 Continuous Updates
Unlike Vercel (auto-deploy from GitHub), Hostinger requires **manual upload** each time you update.

---

## 🎉 Your Site is Live!

After deployment, your portfolio is live at your Hostinger domain!

**Need Help?**
- Hostinger Support: Live chat in hPanel
- Check `README.md` for project details


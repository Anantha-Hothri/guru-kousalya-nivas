# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS for the contact form on the Connect page.

## Why EmailJS?

✅ **No backend needed** - Works entirely in the browser  
✅ **Free tier** - 200 emails/month for free  
✅ **Easy setup** - Takes only 5-10 minutes  
✅ **Works with any hosting** - Including Hostinger, Netlify, Vercel, etc.  
✅ **Direct to email** - Emails sent directly to your inbox  

## Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click **"Sign Up Free"**
3. Create your account using email or Google sign-in
4. Verify your email address

### 2. Add Email Service

**⚠️ IMPORTANT: Gmail Authentication Issues**

Gmail often has authentication scope errors. **We recommend using Option A below:**

#### **Option A: Use EmailJS Email (Recommended - No Setup Issues)**

1. Go to **Email Services** in the dashboard
2. Click **"Add New Service"**
3. Choose **"EmailJS"** (not Gmail!)
4. Enter your email address where you want to receive messages
5. Verify your email address
6. Done! Your **Service ID** will be shown (save this)

✅ This is the easiest and most reliable option!

#### **Option B: Use Gmail (Requires App Password)**

If you must use Gmail, follow these steps:

1. **Enable 2-Step Verification** on your Google Account:
   - Go to https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Create an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - App name: "EmailJS" or "Website Contact Form"
   - Google generates a 16-character password → **Copy it!**

3. **Add Gmail service in EmailJS**:
   - Email Services → Add New Service → Gmail
   - Use your Gmail address
   - Password: Use the **App Password** (not your regular password)
   - Connect and save your **Service ID**

#### **Option C: Use Outlook/Yahoo (Easy Alternative)**

1. Email Services → Add New Service
2. Choose **Outlook** or **Yahoo**
3. Sign in with your account
4. Much easier than Gmail - no App Password needed!

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Name:** `contact_form`

**Subject:** `New Contact Form Message: {{subject}}`

**Content (Email Body):**
```
Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Click **"Save"**
5. Note your **Template ID** (you'll need this)

### 4. Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (it looks like: `xxxxx_xxxxxxxxxxxx`)
3. Copy this key

### 5. Configure Environment Variables

1. Open the `.env` file in the `guru-kousalya-nivas` folder
2. Replace the placeholder values with your actual EmailJS credentials:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
```

**Example:**
```env
REACT_APP_EMAILJS_PUBLIC_KEY=aBc123_dEfGhIjKlMnOp
REACT_APP_EMAILJS_SERVICE_ID=service_xyz1234
REACT_APP_EMAILJS_TEMPLATE_ID=template_abc5678
```

### 6. Test the Form

1. Start your development server:
   ```bash
   cd guru-kousalya-nivas
   yarn start
   ```

2. Navigate to the Contact page at `http://localhost:3000/connect`

3. Fill out and submit the test form

4. Check your email inbox for the message

## Important Notes

### Security
- ✅ The Public Key is safe to expose in client-side code
- ✅ EmailJS rate-limits requests to prevent abuse
- ✅ You can add domain restrictions in EmailJS dashboard

### Gmail Authentication Error (Error 412)
**Problem:** "Request had insufficient authentication scopes"

**Solutions (in order of ease):**

1. **Switch to EmailJS Email Service** (Easiest!)
   - Remove Gmail service from EmailJS
   - Add "EmailJS" service instead
   - Enter your email to receive messages
   - No authentication issues!

2. **Use Gmail App Password**
   - Enable 2-Step Verification: https://myaccount.google.com/security
   - Create App Password: https://myaccount.google.com/apppasswords
   - Remove and re-add Gmail service in EmailJS
   - Use the App Password (16 characters) when connecting

3. **Use Outlook/Yahoo Instead**
   - Much easier than Gmail
   - No App Password needed
   - Works immediately

### Email Delivery
- Check spam/junk folder if emails don't appear in inbox
- Whitelist `noreply@emailjs.com` to ensure delivery

### Free Tier Limits
- 200 emails/month (resets monthly)
- Upgrade to paid plan if you need more emails
- Current pricing: [https://www.emailjs.com/pricing](https://www.emailjs.com/pricing)

## Troubleshooting

### "EmailJS configuration missing" Error
- Make sure all three environment variables are set in `.env`
- Restart your development server after changing `.env`
- Check that variable names start with `REACT_APP_`

### Emails Not Sending
- Verify your Service ID, Template ID, and Public Key are correct
- Check browser console for error messages
- Ensure email service is properly connected in EmailJS dashboard
- Check if you've exceeded the 200 emails/month limit

### Template Variables Not Working
- Make sure template variable names match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Variable names are case-sensitive

## Production Deployment

When deploying to production (Hostinger, Netlify, Vercel, etc.):

1. **Add environment variables** to your hosting platform:
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`

2. **Rebuild your application** to include the new environment variables

3. **Test the contact form** on your live site

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- EmailJS Support: [https://www.emailjs.com/support](https://www.emailjs.com/support)

---

**Setup complete!** Your contact form is now ready to receive messages via EmailJS. 🎉

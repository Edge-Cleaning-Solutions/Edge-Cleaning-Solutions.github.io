# Quick Setup Guide

This guide provides step-by-step instructions to implement email deliverability improvements and website analytics for Edge Cleaning Solutions.

## Prerequisites

- Access to your domain registrar's DNS management (e.g., GoDaddy, Namecheap, Cloudflare)
- A Google account for Google Analytics
- Admin access to your Formspree account

## Part 1: Email Deliverability (15-30 minutes)

### Step 1: Configure DNS Records

1. Log in to your domain registrar (where you purchased edgecleaningsolutions.com)
2. Navigate to DNS management/settings
3. Add the following DNS records:

**SPF Record:**
- Type: TXT
- Host: @ (or leave blank)
- Value: `v=spf1 include:spf.formspree.io include:_spf.google.com ~all`

**DMARC Record:**
- Type: TXT
- Host: _dmarc
- Value: `v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@edgecleaningsolutions.com; pct=100`

**Note:** Replace `dmarc-reports@edgecleaningsolutions.com` with an actual email address you have access to, or set up this mailbox to receive DMARC reports.

4. Save changes and wait 24-48 hours for DNS propagation

### Step 2: Configure DKIM (via Formspree)

1. Log in to your Formspree account
2. Contact Formspree support to request DKIM setup
3. They will provide a DKIM record to add to your DNS
4. Add the DKIM record to your DNS settings

### Step 3: Verify Configuration

After 24-48 hours:
1. Visit [MXToolbox SPF Check](https://mxtoolbox.com/spf.aspx)
2. Enter: edgecleaningsolutions.com
3. Verify the SPF record shows "Pass"

For detailed instructions, see [DNS-CONFIGURATION.md](DNS-CONFIGURATION.md)

## Part 2: Google Analytics Setup (10-15 minutes)

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter account details:
   - Account name: "Edge Cleaning Solutions"
5. Click "Next"

### Step 2: Create Property

1. Property name: "Edge Cleaning Solutions Website"
2. Time zone: Select your time zone
3. Currency: USD
4. Click "Next"

### Step 3: Set Up Data Stream

1. Select "Web" platform
2. Website URL: `https://www.edgecleaningsolutions.com`
3. Stream name: "Edge Cleaning Website"
4. Click "Create stream"

### Step 4: Get Measurement ID

1. Copy your Measurement ID (format: G-XXXXXXXXXX)
2. Keep this ID handy for the next step

### Step 5: Update Website Code

1. Open `index.html` in a text editor
2. Find this line (appears twice):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Find this line (appears twice):
   ```javascript
   gtag('config', 'G-XXXXXXXXXX', {
   ```
5. Replace `G-XXXXXXXXXX` with your actual Measurement ID
6. Save the file

7. Open `services.html` and repeat steps 2-6
8. Open `privacy.html` - no changes needed here

### Step 6: Deploy Changes

If using GitHub Pages (automatic):
1. Commit your changes:
   ```bash
   git add index.html services.html
   git commit -m "Add Google Analytics Measurement ID"
   git push
   ```
2. Wait 1-2 minutes for GitHub Pages to deploy

### Step 7: Verify Analytics is Working

1. Visit your website: https://www.edgecleaningsolutions.com
2. Accept the cookie consent banner
3. Open Google Analytics
4. Go to Reports > Real-time
5. You should see yourself as an active user
6. Navigate around your site and watch the real-time report update

For detailed information, see [ANALYTICS-GUIDE.md](ANALYTICS-GUIDE.md)

## Part 3: Testing (5 minutes)

### Test Cookie Consent Banner

1. Visit your website in a private/incognito window
2. You should see a blue banner at the bottom asking for cookie consent
3. Click "Accept" - the banner should disappear
4. Refresh the page - the banner should not reappear

### Test Form Submission Tracking

1. Visit your website (with cookies accepted)
2. Fill out and submit the contact form
3. In Google Analytics, go to Reports > Engagement > Events
4. You should see a "form_submission" event (may take a few minutes to appear)

### Test Email Deliverability

1. Submit a test inquiry through your contact form
2. Check that you receive the email
3. Use [Mail-Tester](https://www.mail-tester.com/) to check spam score:
   - Send an email through your form to the address provided by Mail-Tester
   - Check your spam score (aim for 8+/10)

## Troubleshooting

### Analytics Not Showing Data

- **Check Measurement ID**: Ensure you replaced `G-XXXXXXXXXX` with your actual ID
- **Cookie Consent**: Make sure you clicked "Accept" on the cookie banner
- **Wait Time**: Initial data can take 24-48 hours to appear in full reports (Real-time should work immediately)
- **Browser Extensions**: Disable ad blockers for testing

### DNS Changes Not Working

- **Propagation Time**: DNS changes can take up to 48 hours to propagate globally
- **Check Syntax**: Ensure there are no typos in your DNS records
- **Multiple Records**: Some providers require separate TXT records instead of combining them

### Cookie Banner Not Showing

- **Clear Browser Data**: Clear cookies and cache
- **Check Console**: Open browser developer tools (F12) and check for JavaScript errors
- **Try Incognito**: Use a private/incognito window

## Next Steps

### Daily Monitoring
- Check Google Analytics real-time reports occasionally
- Monitor form submissions

### Weekly Review
- Review top pages in Analytics
- Check traffic sources
- Monitor form submission rate

### Monthly Tasks
- Generate monthly traffic report
- Review DMARC reports (if set up email forwarding)
- Compare performance to previous month

## Getting Help

- **DNS Issues**: Contact your domain registrar's support
- **Google Analytics**: [GA4 Help Center](https://support.google.com/analytics/)
- **Formspree**: [Formspree Support](https://help.formspree.io/)

## Summary Checklist

- [ ] Added SPF DNS record
- [ ] Added DMARC DNS record
- [ ] Requested DKIM from Formspree
- [ ] Created Google Analytics account
- [ ] Copied Measurement ID
- [ ] Updated index.html with Measurement ID
- [ ] Updated services.html with Measurement ID
- [ ] Deployed changes to website
- [ ] Verified analytics in real-time reports
- [ ] Tested cookie consent banner
- [ ] Tested form submission
- [ ] Verified email deliverability

## Additional Resources

- [DNS Configuration Guide](DNS-CONFIGURATION.md) - Comprehensive DNS setup
- [Analytics Guide](ANALYTICS-GUIDE.md) - Detailed analytics instructions
- [Privacy Policy](privacy.html) - Website privacy policy
- [README](README.md) - General website information

---

**Questions?** Refer to the detailed guides or contact your web administrator.

# DNS Configuration Guide for Edge Cleaning Solutions

This document provides the necessary DNS records to ensure email deliverability and prevent emails from being marked as spam.

## Overview

The Edge Cleaning Solutions website uses Formspree (formspree.io) for contact form submissions. To ensure emails sent from your domain are not marked as spam, you need to configure SPF, DKIM, and DMARC records in your domain's DNS settings.

## Required DNS Records

### 1. SPF (Sender Policy Framework) Record

SPF specifies which mail servers are authorized to send email on behalf of your domain.

**Record Type:** TXT  
**Host/Name:** @ (or edgecleaningsolutions.com)  
**Value/Content:**
```
v=spf1 include:spf.formspree.io include:_spf.google.com ~all
```

**Explanation:**
- `v=spf1` - SPF version 1
- `include:spf.formspree.io` - Authorizes Formspree's mail servers
- `include:_spf.google.com` - Authorizes Google's mail servers (if using Gmail)
- `~all` - Soft fail for other servers (marks as suspicious but doesn't reject)

**Note:** If you use other email services, add their SPF includes as well. If you want stricter enforcement, change `~all` to `-all` (hard fail).

### 2. DKIM (DomainKeys Identified Mail) Record

DKIM adds a digital signature to emails to verify they haven't been tampered with.

#### For Formspree:

Contact Formspree support to obtain your DKIM record. Once provided, add it as:

**Record Type:** TXT  
**Host/Name:** formspree._domainkey (or as specified by Formspree)  
**Value/Content:** [Provided by Formspree]

#### If Using Google Workspace:

**Record Type:** TXT  
**Host/Name:** google._domainkey  
**Value/Content:** [Obtained from Google Workspace Admin Console]

### 3. DMARC (Domain-based Message Authentication) Record

DMARC tells receiving servers what to do with emails that fail SPF or DKIM checks.

**Record Type:** TXT  
**Host/Name:** _dmarc  
**Value/Content:**
```
v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@edgecleaningsolutions.com; ruf=mailto:dmarc-forensics@edgecleaningsolutions.com; fo=1; pct=100
```

**Explanation:**
- `v=DMARC1` - DMARC version 1
- `p=quarantine` - Quarantine emails that fail (recommended for testing; use `p=reject` for strict enforcement)
- `rua=mailto:...` - Where to send aggregate reports
- `ruf=mailto:...` - Where to send forensic reports
- `fo=1` - Generate forensic reports if either SPF or DKIM fails
- `pct=100` - Apply policy to 100% of emails

**Recommended Progression:**
1. Start with `p=none` to monitor without affecting delivery
2. After reviewing reports for 1-2 weeks, change to `p=quarantine`
3. After another 1-2 weeks of monitoring, consider `p=reject`

### 4. MX Records (if receiving email)

If you want to receive emails at your domain (e.g., contact@edgecleaningsolutions.com):

**For Google Workspace:**
```
Priority: 1   Host: @   Points to: aspmx.l.google.com
Priority: 5   Host: @   Points to: alt1.aspmx.l.google.com
Priority: 5   Host: @   Points to: alt2.aspmx.l.google.com
Priority: 10  Host: @   Points to: alt3.aspmx.l.google.com
Priority: 10  Host: @   Points to: alt4.aspmx.l.google.com
```

### 5. Reverse DNS (PTR Record)

If you're sending from your own mail server, ensure PTR records are configured. This is typically handled by your email service provider (Formspree, Google, etc.).

## Email Best Practices

### Contact Form Configuration

1. **Reply-To Address**: Ensure Formspree is configured to use the visitor's email as the Reply-To address
2. **From Address**: Use a consistent sending address from your domain (e.g., noreply@edgecleaningsolutions.com)
3. **Subject Line**: Include clear, descriptive subject lines
4. **Content**: Keep HTML simple and avoid spam trigger words

### Email Content Guidelines

Avoid these spam triggers:
- ALL CAPS in subject lines
- Excessive exclamation marks!!!
- Words like "FREE", "WINNER", "URGENT", "ACT NOW"
- Large images without text
- Shortened URLs or suspicious links
- Poor grammar and spelling

### Formspree Configuration

In your Formspree account settings:
1. Set up a custom email address from your domain as the "From" address
2. Configure the "Reply-To" to use the form submitter's email
3. Enable email verification if needed
4. Consider setting up custom email templates

## Verification Steps

After configuring DNS records:

1. **Wait for DNS Propagation** (24-48 hours, though often faster)

2. **Verify SPF Record:**
   ```bash
   nslookup -type=txt edgecleaningsolutions.com
   dig edgecleaningsolutions.com TXT
   ```
   Or use online tools like [MXToolbox SPF Check](https://mxtoolbox.com/spf.aspx)

3. **Verify DMARC Record:**
   ```bash
   nslookup -type=txt _dmarc.edgecleaningsolutions.com
   dig _dmarc.edgecleaningsolutions.com TXT
   ```
   Or use [DMARC Analyzer](https://www.dmarcanalyzer.com/dmarc/dmarc-record-check/)

4. **Test Email Deliverability:**
   - Use [Mail-Tester.com](https://www.mail-tester.com/)
   - Send test emails through your contact form
   - Check spam scores and authentication results

5. **Monitor DMARC Reports:**
   - Review aggregate (rua) and forensic (ruf) reports
   - Look for authentication failures
   - Identify unauthorized senders

## Common DNS Providers

Instructions for popular DNS providers:

### GoDaddy
1. Log in to GoDaddy Domain Manager
2. Select your domain
3. Click "DNS" > "Manage Zones"
4. Click "Add Record"
5. Select record type (TXT) and add the values above

### Cloudflare
1. Log in to Cloudflare dashboard
2. Select your domain
3. Go to "DNS" tab
4. Click "Add record"
5. Select record type (TXT) and add the values above

### Namecheap
1. Log in to Namecheap account
2. Select "Domain List"
3. Click "Manage" next to your domain
4. Go to "Advanced DNS" tab
5. Add new records with the values above

### Google Domains
1. Log in to Google Domains
2. Select your domain
3. Go to "DNS" section
4. Scroll to "Custom resource records"
5. Add the records with the values above

## Monitoring and Maintenance

1. **Regular Checks:**
   - Monitor DMARC reports weekly
   - Check email deliverability monthly
   - Review spam complaints

2. **Update Records When:**
   - Changing email service providers
   - Adding new email sending services
   - Moving to a different mail server

3. **Annual Review:**
   - Verify all DNS records are still correct
   - Update contact information
   - Review and tighten DMARC policy if possible

## Additional Resources

- [Formspree Email Deliverability Guide](https://help.formspree.io/hc/en-us/articles/360053262974-Email-Deliverability)
- [SPF Record Syntax](http://www.open-spf.org/SPF_Record_Syntax/)
- [DMARC.org](https://dmarc.org/)
- [Google's Email Sender Guidelines](https://support.google.com/mail/answer/81126)

## Support

For DNS configuration assistance:
- Contact your domain registrar's support
- Contact Formspree support for DKIM configuration
- Use online DNS checking tools to verify setup

## Last Updated

January 29, 2026

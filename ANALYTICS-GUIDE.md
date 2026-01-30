# Website Analytics Guide for Edge Cleaning Solutions

This document provides information about website analytics implementation, traffic reporting, and visitor data collection for www.edgecleaningsolutions.com.

## Overview

This website uses Google Analytics 4 (GA4) to track website traffic, user behavior, and generate comprehensive reports. The implementation is privacy-focused and complies with modern web standards.

## Analytics Solutions Implemented

### 1. Google Analytics 4 (GA4)

Google Analytics 4 is the primary analytics solution, providing:
- Real-time visitor tracking
- Page view statistics
- User demographics and interests
- Traffic sources (organic search, direct, referral, social)
- User engagement metrics
- Conversion tracking
- Custom event tracking
- Mobile vs. desktop traffic analysis

### 2. Privacy Considerations

The implementation includes:
- Cookie consent banner (recommended for GDPR/CCPA compliance)
- Anonymized IP addresses
- Respect for "Do Not Track" browser settings
- Data retention policies
- Privacy policy disclosure

## Setting Up Google Analytics 4

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Admin" (gear icon in bottom left)
4. Click "Create Property"
5. Enter property details:
   - Property name: "Edge Cleaning Solutions"
   - Time zone: Your local time zone
   - Currency: USD
6. Click "Next"
7. Fill in business information
8. Click "Create"
9. Accept the Terms of Service

### Step 2: Set Up Data Stream

1. In the property setup, select "Web" as the platform
2. Enter website details:
   - Website URL: https://www.edgecleaningsolutions.com
   - Stream name: "Edge Cleaning Solutions Website"
3. Click "Create stream"
4. Copy your Measurement ID (format: G-XXXXXXXXXX)

### Step 3: Configure GA4 Settings

Recommended settings:

1. **Data Collection:**
   - Enable "Google signals data collection" (for cross-device tracking)
   - Enable "Enhanced measurement" (automatic event tracking)

2. **Data Retention:**
   - Set to 14 months (maximum for free tier)

3. **Enhanced Measurement Events:**
   - Page views (enabled by default)
   - Scrolls (track 90% scroll depth)
   - Outbound clicks
   - Site search
   - Video engagement (if applicable)
   - File downloads

4. **User Reporting:**
   - Enable Demographics and Interests reports
   - Go to Admin > Property Settings > Data Settings > Data Collection
   - Turn on "Google signals data collection"

### Step 4: Update Website Code

The website code has been updated with your GA4 Measurement ID. To use your own:

1. Open `index.html` and `services.html`
2. Find the Google Analytics script section
3. Replace `G-XXXXXXXXXX` with your Measurement ID
4. Save and deploy changes

## Available Reports and Metrics

### Real-Time Reports

Access: Analytics > Reports > Real-time

Shows:
- Users currently on site
- Active pages
- Traffic sources
- User locations
- Device types

### Traffic Reports

#### 1. Acquisition Reports

Shows where visitors come from:
- **Organic Search**: Google, Bing, other search engines
- **Direct**: Typed URL or bookmarked
- **Referral**: Links from other websites
- **Social**: Facebook, LinkedIn, Twitter, etc.
- **Email**: Links from email campaigns
- **Paid Search**: Google Ads (if running)

#### 2. Engagement Reports

Shows how users interact with your site:
- **Pages and Screens**: Most viewed pages
- **Landing Pages**: First page users see
- **Exit Pages**: Last page before leaving
- **Events**: Specific user interactions (form submissions, button clicks)

#### 3. User Reports

Shows information about visitors:
- **Demographics**: Age, gender (if available)
- **Interests**: Category affinity
- **Technology**: Browser, OS, device
- **Location**: Country, state, city

#### 4. Conversion Reports

Track important actions:
- **Form Submissions**: Contact form completions
- **Button Clicks**: "Request Service" clicks
- **Scroll Depth**: How far users scroll
- **Time on Page**: Average engagement time

### Custom Reports

You can create custom reports for:
- Monthly traffic trends
- Service page performance
- Contact form conversion rate
- Mobile vs. desktop usage
- Peak traffic hours/days

## Key Metrics to Monitor

### Traffic Metrics

1. **Users**: Total number of visitors
2. **New Users**: First-time visitors
3. **Sessions**: Total visits (a user can have multiple sessions)
4. **Page Views**: Total pages viewed
5. **Bounce Rate**: Single-page visits (%)
6. **Average Session Duration**: Time spent on site

### Engagement Metrics

1. **Engagement Rate**: Engaged sessions / total sessions
2. **Engaged Sessions**: Sessions lasting >10 seconds with conversion or 2+ page views
3. **Events**: Tracked interactions (clicks, scrolls, form submissions)
4. **Conversions**: Goal completions (form submissions)

### Traffic Source Metrics

1. **Organic Search Traffic**: SEO performance
2. **Direct Traffic**: Brand awareness
3. **Referral Traffic**: Link building effectiveness
4. **Social Traffic**: Social media impact

## Generating Reports

### Daily/Weekly Monitoring

1. Check Real-time report to see current activity
2. Review Acquisition overview for traffic sources
3. Check Engagement overview for top pages
4. Monitor Events for form submissions

### Monthly Reports

1. Go to Reports > Acquisition > Overview
2. Set date range to last month
3. Export report (top right corner)
4. Compare to previous month

### Custom Date Ranges

1. Click date selector (top right)
2. Choose "Custom"
3. Select start and end dates
4. Optionally compare to previous period

### Exporting Reports

Formats available:
- PDF (for presentations)
- Google Sheets (for analysis)
- CSV (for Excel)
- Excel (.xlsx)

Steps:
1. Open any report
2. Click "Share" or export icon (top right)
3. Select "Download file"
4. Choose format
5. Click "Download"

## Setting Up Goals and Conversions

### Contact Form Submission Tracking

The website is configured to track:

**Event Name**: `form_submission`  
**Event Parameters**:
- `form_id`: "contact-form"
- `form_subject`: Selected subject from dropdown

To view form submissions:
1. Go to Reports > Engagement > Events
2. Look for "form_submission" event
3. Click to see details

### Creating a Conversion

1. Go to Admin > Events
2. Find "form_submission" event
3. Toggle "Mark as conversion"
4. Or create custom conversion:
   - Click "Create event"
   - Name: "contact_form_completed"
   - Set matching conditions
   - Save

## Advanced Tracking

### UTM Parameters for Campaign Tracking

Add UTM parameters to track marketing campaigns:

```
https://www.edgecleaningsolutions.com/?utm_source=facebook&utm_medium=social&utm_campaign=spring_cleaning
```

Parameters:
- `utm_source`: Traffic source (facebook, google, newsletter)
- `utm_medium`: Medium (social, email, cpc)
- `utm_campaign`: Campaign name (spring_cleaning, promotion)
- `utm_content`: Ad variation (optional)
- `utm_term`: Keyword (for paid search)

Use [Google Campaign URL Builder](https://ga-dev-tools.google/campaign-url-builder/)

### Event Tracking

Already implemented events:
- Page views (automatic)
- Scrolls (automatic - 90% depth)
- Form submissions
- Button clicks ("Request Service")
- Outbound clicks (automatic)

### User Properties

Set custom user properties:
- Form submission history
- Service interests
- Return visitor status

## Privacy and Compliance

### Privacy Policy

A privacy policy has been added to the website explaining:
- What data is collected
- How it's used
- Cookie usage
- User rights
- Contact information

### Cookie Consent

The website implements a cookie consent banner that:
- Appears on first visit
- Allows users to accept or decline
- Remembers user preference
- Complies with GDPR/CCPA requirements

### IP Anonymization

GA4 automatically anonymizes IP addresses in accordance with privacy regulations.

### Data Retention

Default: 14 months (can be reduced to 2 months if preferred)

To adjust:
1. Go to Admin > Data Settings > Data Retention
2. Select retention period
3. Save changes

## Troubleshooting

### Not Seeing Data

1. **Check Measurement ID**: Ensure correct ID in website code
2. **Wait**: Data can take 24-48 hours for first appearance
3. **Check Real-time**: See if current visits are tracked
4. **Browser Extensions**: Ad blockers may prevent tracking
5. **Verify Installation**: Use [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/)

### Low Traffic Numbers

If numbers seem low:
- Check date range settings
- Verify filters aren't excluding data
- Consider ad blocker usage (20-30% of users)
- Check if bot filtering is enabled

### Missing Events

1. Verify event code in JavaScript
2. Check browser console for errors
3. Use "DebugView" in GA4 (Admin > DebugView)
4. Test events manually

## Alternative Analytics Solutions

### GitHub Pages Built-in Analytics

GitHub Pages doesn't provide built-in analytics. Third-party solutions are required.

### Privacy-Focused Alternatives

If you prefer more privacy-focused analytics:

1. **Plausible Analytics** (Paid - $9/month)
   - Simple, privacy-friendly
   - GDPR compliant by default
   - No cookie banner needed
   - Website: https://plausible.io

2. **Simple Analytics** (Paid - $19/month)
   - Privacy-first
   - GDPR, CCPA, PECR compliant
   - Clean interface
   - Website: https://simpleanalytics.com

3. **Fathom Analytics** (Paid - $14/month)
   - Privacy-focused
   - No cookie banner required
   - Fast and lightweight
   - Website: https://usefathom.com

## Best Practices

1. **Regular Monitoring**: Check analytics weekly
2. **Set Goals**: Define what success looks like
3. **Track Conversions**: Monitor form submissions
4. **Compare Periods**: Look at trends over time
5. **Act on Data**: Use insights to improve website
6. **Respect Privacy**: Be transparent about tracking
7. **Mobile Optimization**: Monitor mobile traffic separately
8. **Page Speed**: Use GA4 to track Core Web Vitals

## Analytics Checklist

- [x] Google Analytics 4 property created
- [x] Measurement ID added to website
- [x] Enhanced measurement enabled
- [x] Form submission tracking configured
- [x] Privacy policy created
- [x] Cookie consent banner implemented
- [ ] Test all tracking (form submissions, events)
- [ ] Set up email alerts for weekly reports
- [ ] Create custom dashboard
- [ ] Add team members to GA4 property

## Getting Help

### Google Analytics Support

- [GA4 Help Center](https://support.google.com/analytics/)
- [GA4 Academy (Free Training)](https://analytics.google.com/analytics/academy/)
- [GA4 Community](https://support.google.com/analytics/community)

### Video Tutorials

- [Google Analytics 4 Tutorial for Beginners](https://www.youtube.com/results?search_query=google+analytics+4+tutorial)
- [Setting Up GA4 Step by Step](https://www.youtube.com/results?search_query=setting+up+ga4)

## Maintenance Schedule

- **Daily**: Check for major traffic spikes or drops
- **Weekly**: Review top pages and traffic sources
- **Monthly**: Generate comprehensive report
- **Quarterly**: Review goals and adjust strategy
- **Annually**: Audit tracking setup and privacy compliance

## Last Updated

January 29, 2026

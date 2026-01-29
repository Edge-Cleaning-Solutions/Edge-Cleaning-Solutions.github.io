# Edge-Cleaning-Solutions.github.io

Professional website for Edge Cleaning Solutions - a premier cleaning services company.

## About

Edge Cleaning Solutions provides top-quality cleaning services for offices, homes, and commercial spaces. We specialize in:

- Post-Construction Cleaning
- Commercial Cleaning
- Floor Cleaning (tile, carpet, vinyl, hardwood)
- Residential Pressure Washing
- Ozone Treatment

## Website Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Enhanced meta tags, structured data, sitemap, and robots.txt
- **Accessibility**: ARIA labels, semantic HTML, and proper heading hierarchy
- **Modern UI**: Bootstrap 5.3.0 framework with custom styling
- **Contact Form**: Integrated with Formspree for easy inquiries
- **Security**: Spam prevention, form validation, and secure connections

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, responsive design, print styles
- **JavaScript**: Vanilla JS for interactions
- **Bootstrap 5.3.0**: UI framework
- **Formspree**: Contact form backend

## File Structure

```
.
├── index.html          # Homepage
├── services.html       # Services detail page
├── css/
│   └── website.css     # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript file
├── images/             # Image assets
├── robots.txt          # Search engine directives
├── sitemap.xml         # Site structure
└── CNAME               # Custom domain (www.edgecleaningsolutions.com)
```

## Local Development

To run the website locally:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Then visit http://localhost:8000
```

## Deployment

This website is hosted on GitHub Pages and automatically deploys when changes are pushed to the main branch.

Live site: [https://www.edgecleaningsolutions.com](https://www.edgecleaningsolutions.com)

## Recent Improvements

- ✅ Fixed typo: "residental" → "residential"
- ✅ Enhanced SEO with structured data (JSON-LD)
- ✅ Improved accessibility with ARIA labels
- ✅ Refactored CSS with custom properties
- ✅ Added external JavaScript file
- ✅ Implemented spam prevention in forms
- ✅ Added professional footer
- ✅ Created robots.txt and sitemap.xml
- ✅ Added print styles
- ✅ Optimized images with lazy loading
- ✅ Implemented Google Analytics 4 for traffic tracking
- ✅ Added privacy-compliant cookie consent banner
- ✅ Created comprehensive DNS configuration guide for email deliverability
- ✅ Added privacy policy page
- ✅ Implemented event tracking for form submissions and user interactions

## Email Deliverability

To ensure emails from the contact form don't go to spam, please configure your domain's DNS records according to the instructions in [DNS-CONFIGURATION.md](DNS-CONFIGURATION.md). This includes:

- SPF records to authorize Formspree as a sender
- DKIM records for email authentication
- DMARC policy for email security
- Best practices for email content

## Website Analytics

The website includes Google Analytics 4 integration for comprehensive traffic reporting. See [ANALYTICS-GUIDE.md](ANALYTICS-GUIDE.md) for:

- Setting up your Google Analytics account
- Configuring tracking
- Accessing reports on website traffic and visitor data
- Understanding key metrics
- Generating custom reports
- Privacy and compliance information

## Contributing

This is a private business website. For inquiries, please use the contact form on the website.

## License

© 2026 Edge Cleaning Solutions. All rights reserved.


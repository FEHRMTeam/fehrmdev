module.exports = {
  siteMetadata: {
    author: 'Foo',
    title: `Federal Electronic Health Record Modernization`,
    description: `Federal Electronic Health Record Modernization (FEHRM) Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenean et sapien a leo auctor scelerisque quis nec magna. Sed dictum ante a risus vehicula facilisis.`,
    navigation: [
      {
        items: [{ text: 'Home', link: '/' }],
      },
      {
        title: 'About',
        items: [
          { text: 'What Is The FEHRM?', link: '/about-fehrm' },
          { text: 'Mission', link: '/mission' },
          { text: 'Leadership', link: '/leadership' },
          { text: 'History', link: '/history' },
          { text: 'FEHRM Accomplishments', link: '/fehrm-accomplishments' },
          { text: 'Success Stories', link: '/success-stories' },
          { text: 'Publications', link: '/publications' },
          { text: 'Frequently Asked Questions', link: '/faq' },
          { text: 'Site Map', link: '/site-map' },
          { text: 'Contact Us', link: '/contact-us' },
        ],
      },
      {
        title: 'For Patients',
        items: [
          { text: 'Enhancing Your Care', link: '/enhancing-your-care' },
          { text: 'Learn About The HIE', link: '/learn-about-the-hie' },
        ],
      },
      {
        title: 'For Providers',
        items: [
          { text: 'Improving Care Delivery', link: '/improving-care-delivery' },
          { text: 'Join The HIE', link: '/join-the-hie' },
        ],
      },
      {
        title: 'For Federal Agencies',
        items: [
          { text: 'Join The Federal EHR', link: '/join-the-federal-ehr' },
          {} // Needed so that there is an actual menu
        ],
      },
      {
        title: 'Congressional Information',
        items: [
          { text: 'Congressional Reports', link: '/congressional-reports' },
          { text: 'Congressional Committees', link: '/congressional-committees' },
          { text: 'Senate Testimony', link: '/senate-testimony' },
          { text: 'House Testimony', link: '/house-testimony' },
        ],
      },
      {
        title: 'Media',
        items: [
          { text: 'In The News', link: '/in-the-news' },
          { text: 'Hear Our Leaders', link: '/hear-our-leaders' },
          { text: 'Press Releases', link: '/press-releases' },
          { text: 'Media Toolkit and Inquiries', link: '/media-toolkit-and-inquiries' },
        ],
      },
      {
        title: 'Events/Conferences',
        items: [
          { text: 'Federal EHR Annual Summit', link: '/federal-ehr-annual-summit' },
          { text: 'FEHRM Industry Interoperability Roundtable', link: '/fehrm-industry-interoperability-roundtable' },
          { text: 'FEHRM Town Hall', link: '/fehrm-town-hall' },
        ],
      },
    ],
    secondaryLinks: [
      { text: 'Secondary link', link: '/' },
      { text: 'Another secondary link', link: '/' },
    ],

    /**
     * Search.gov configuration
     * 
     * 1. Create an account with Search.gov https://search.usa.gov/signup
     * 2. Add a new site.
     * 3. Add your site/affiliate name here.
     */
    searchgov: {
      
      // You should not change this.
      endpoint: 'https://search.usa.gov',
      
      // replace this with your search.gov account
      affiliate: 'federalist-uswds-example',
      
      // replace with your access key
      access_key: 'xX1gtb2RcnLbIYkHAcB6IaTRr4ZfN-p16ofcyUebeko=',
      
      // this renders the results within the page instead of sending to user to search.gov
      inline: true, 
    },

    /**
     * Digital Analytics Program (DAP) configuration
     * 
     * USAID   - Agency for International Development
     * USDA    - Department of Agriculture
     * DOC     - Department of Commerce
     * DOD     - Department of Defense
     * ED      - Department of Education
     * DOE     - Department of Energy
     * HHS     - Department of Health and Human Services
     * DHS     - Department of Homeland Security
     * HUD     - Department of Housing and Urban Development
     * DOJ     - Department of Justice
     * DOL     - Department of Labor
     * DOS     - Department of State
     * DOI     - Department of the Interior
     * TREAS   - Department of the Treasury
     * DOT     - Department of Transportation
     * VA      - Department of Veterans Affairs
     * EPA     - Environmental Protection Agency
     * EOP     - Executive Office of the President
     * GSA     - General Services Administration
     * NASA    - National Aeronautics and Space Administration
     * NARA    - National Archives and Records Administration
     * NSF     - National Science Foundation
     * NRC     - Nuclear Regulatory Commission
     * OPM     - Office of Personnel Management
     * USPS    - Postal Service
     * SBA     - Small Business Administration
     * SSA     - Social Security Administration
     */
    dap: {
      // agency: 'your-agency',

      // Optional
      // subagency: 'your-subagency',
    },

    /**
     * Google Analytics configuration
     */
    ga: {
      // ua: 'your-ua',
    },
  },
  pathPrefix: process.env.BASEURL || '/',
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-pages`,
        path: `${__dirname}/src/content-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/federalist-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        "source": "/static/:path*",
        "destination": "https://dashboard.locusrags.com/static/:path*"
      },
      {
          "source": "/accounts/:path",
          "destination": "https://dashboard.locusrags.com/accounts/:path*"
      },
      {
          "source": "/task/",
          "destination": "https://dashboard.locusrags.com/task/"
      },
      {
          "source": "/client/:path",
          "destination": "https://dashboard.locusrags.com/client/:path*"
      },
      {
          "source": "/master/",
          "destination": "https://dashboard.locusrags.com/master/"
      },
      {
          "source": "/useraccounts/",
          "destination": "https://dashboard.locusrags.com/useraccounts/"
      },
      {
          "source": "/e/",
          "destination": "https://dashboard.locusrags.com/e/"
      },
      {
          "source": "/dashboard/",
          "destination": "https://dashboard.locusrags.com/dashboard/"
      },
      {
          "source": "/manager/",
          "destination": "https://dashboard.locusrags.com/manager/"
      },
      {
          "source": "/comments/",
          "destination": "https://dashboard.locusrags.com/comments/"
      },
      {
          "source": "/paypal/",
          "destination": "https://dashboard.locusrags.com/paypal/"
      },
      {
          "source": "/summernote/",
          "destination": "https://dashboard.locusrags.com/summernote/"
      },
      {
          "source": "/quality/",
          "destination": "https://dashboard.locusrags.com/quality/"
      },
      {
          "source": "/test-dashboard/",
          "destination": "https://dashboard.locusrags.com/test-dashboard/"
      },
      {
          "source": "/payment/:path*",
          "destination": "https://dashboard.locusrags.com/payment/:path*"
      },
      {
          "source": "/assignment",
          "destination": "http://tool.locusrags.com/assignment"
      },
      {
          "source": "/ckeditor/",
          "destination": "http://tool.locusrags.com/ckeditor/"
      },
      {
          "source": "/college",
          "destination": "http://tool.locusrags.com/college"
      },
      {
          "source": "/solution",
          "destination": "http://tool.locusrags.com/solution"
      },
      {
          "source": "/subject",
          "destination": "http://tool.locusrags.com/subject"
      },
      {
          "source": "/captcha/",
          "destination": "https://dashboard.locusrags.com/captcha/"
      },
      {
          "source": "/inbox/",
          "destination": "https://dashboard.locusrags.com/inbox/"
      },
      {
          "source": "/avatar/",
          "destination": "https://dashboard.locusrags.com/avatar/"
      },
      {
          "source": "/api/",
          "destination": "https://dashboard.locusrags.com/api/"
      },
      {
          "source": "/live-session-booking/",
          "destination": "https://dashboard.locusrags.com/live-session-booking/"
      },
      {
          "source": "/ro/",
          "destination": "https://dashboard.locusrags.com/ro/"
      },
      {
          "source": "/en/",
          "destination": "https://dashboard.locusrags.com/en/"
      }
  ];
  },


  async redirects() {
    return [
      {
        source: '/task/upload/new/',
        destination: 'https://www.ozassignments.com/upload-your-assignment/',
        permanent: true,
      },
      {
        source: '/australia/',
        destination: 'https://www.ozassignments.com',
        permanent: true,
      },
      {
        source: '/malaysia/',
        destination: 'https://www.ozassignments.com/my/',
        permanent: true,
      },
      // Add more redirects in the same format as needed
      {
        source: '/australia/assignment-help-adelaide',
        destination: 'https://www.ozassignments.com/au/assignment-help-adelaide',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-brisbane',
        destination: 'https://www.ozassignments.com/au/assignment-help-brisbane',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-canberra',
        destination: 'https://www.ozassignments.com/au/assignment-help-canberra',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-darwin',
        destination: 'https://www.ozassignments.com/au/assignment-help-darwin',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-gold-coast',
        destination: 'https://www.ozassignments.com/au/assignment-help-gold-coast',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-melbourne',
        destination: 'https://www.ozassignments.com/au/assignment-help-melbourne',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-perth',
        destination: 'https://www.ozassignments.com/au/assignment-help-perth',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-sydney',
        destination: 'https://www.ozassignments.com/au/assignment-help-sydney',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-toowoomba',
        destination: 'https://www.ozassignments.com/au/assignment-help-toowoomba',
        permanent: true,
      },
      {
        source: '/australia/assignment-help-wollongong',
        destination: 'https://www.ozassignments.com/au/assignment-help-wollongong',
        permanent: true,
      },


    ]
  },
  trailingSlash: true
}

module.exports = nextConfig

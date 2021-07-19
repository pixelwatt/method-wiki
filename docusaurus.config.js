/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Method',
  tagline: 'A Developer Base Theme',
  url: 'https://getmethod.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'pixelwatt', // Usually your GitHub org/user name.
  projectName: 'method-wiki', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['php'],
    },
    navbar: {
      title: 'Method Theme',
      logo: {
        alt: 'Method Theme Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Dev Blog', position: 'left'},
        {
          href: 'https://github.com/pixelwatt/method',
          label: 'View on GitHub',
          position: 'right',
        },
      ],
    },
	gtag: {
		// You can also use your "G-" Measurement ID here.
		trackingID: 'G-P91490XJY5',
		// Optional fields.
		anonymizeIP: true, // Should IPs be anonymized?
	},
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Method Docs',
              to: '/docs/intro',
            },
			{
				label: 'Generator Docs',
				to: '/docs/method-generator/getting-started',
			  },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'RobClark.io',
              href: 'https://robclark.io',
            },
			{
				label: 'The Bold Agency',
				href: 'https://theboldagency.co',
			  },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rob Clark. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

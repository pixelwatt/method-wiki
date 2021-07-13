/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Method',
  tagline: 'A Developer Base Theme',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
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
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pixelwatt/method',
          label: 'View on GitHub',
          position: 'right',
        },
      ],
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
				to: '/docs/intro',
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
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
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

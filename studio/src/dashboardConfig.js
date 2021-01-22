export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600aa470c91b4be15893ae17',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-affn6bu3',
                  apiId: '484b6419-2e95-4a65-b2fe-078af1dd7db9'
                },
                {
                  buildHookId: '600aa471124348e838b06c15',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-985qc74e',
                  apiId: '9c841cbf-030d-4b6a-9be9-4e2fc293ebc7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hthmedia/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-985qc74e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

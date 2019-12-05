export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5de88a6de84c2ec5dd6bddde',
                  title: 'Sanity Studio',
                  name: 'root-app--sanity-gatsby-portfolio-studio',
                  apiId: 'c72ccec3-5c9c-4202-b4e2-979a9b525e22'
                },
                {
                  buildHookId: '5de88a6d8863222230bdd04b',
                  title: 'Portfolio Website',
                  name: 'root-app--sanity-gatsby-portfolio',
                  apiId: '4c053f0f-fc3a-4ebb-b005-5c18126dd5aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryanhulseberg/root-app--sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://root-app--sanity-gatsby-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

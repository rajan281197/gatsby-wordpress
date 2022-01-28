const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/blog-post.js")
  const PageTemplate = path.resolve("./src/templates/tours-packagelist.js")
  const MenuListTemplate = path.resolve("./src/templates/menulistdetail.js")
  const ToursCategoryTemplate = path.resolve("./src/templates/tourscategorypackage.js")
  const result = await graphql(`
    {

      allWpTourpackage {
        nodes {          
            id
            title
            slug
          
        }
        totalCount
      }

      allWpTourType {
          nodes {
            name
            slug
            uri
            link
            id
          }      
      }


      allWpPost(sort: { fields: [date] }) {
        edges{
        node {
          id
          title
          content
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")  
          featuredImage {
            node {
              sourceUrl
            }
          }        
        }
      }
      }

      allWpPage {
        nodes {
          id
          slug         
        }
      }

    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }/* Start of blog-post.js */
  const BlogPosts = result.data.allWpPost.edges
  BlogPosts.forEach(node => {
    createPage({
      path: `${node.node.slug}`,
      component: BlogPostTemplate,
      context: {
        slug: node.node.slug,
      },
    })/* End of blog-post.js */

    /* Start of Tour-packages.js */

    const Pages = result.data.allWpTourpackage.nodes
    Pages.forEach(node => {
      createPage({
        path: `/tour-packages/${node.slug}`,
        component: PageTemplate,
        context: {
          slug: node.slug,
        },
      })
    })/* End of tour-packages.js */

    const Category = result.data.allWpTourType.nodes
    Category.forEach(node => {
      createPage({
        path: `/tours-categories/${node.slug}`,
        component: ToursCategoryTemplate,
        context: {
          slug: node.slug,
        },
      })
    })

    /* Start menulistdetail.js */
    const MenulistData = result.data.allWpPage.nodes
    MenulistData.forEach(node => {
      createPage({
        path: `${node.slug}`,
        component: MenuListTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
    /* End menulistdetail.js */
  })
}
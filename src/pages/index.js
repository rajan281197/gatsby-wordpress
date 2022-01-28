import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home/Index">
      <ul>
        {
          data.allWpPost.nodes.map(nodedata => (
                                               <div key={nodedata.slug}>
                        <Link to={nodedata.slug}>
                          <p>{nodedata.title}</p>
                        </Link>
                        <div dangerouslySetInnerHTML={{ __html: nodedata.excerpt }} />
                        </div>

          ))
        }
      </ul>
    </Layout>
  )
}
export const query = graphql`
                        query {
                            allWpPost {
                                nodes {
                                  id
                                  title
                                  content
                                  excerpt
                                  slug
                                  date(formatString: "MMMM DD, YYYY")                                
                                 
                                }
                              }
                        }`

export default IndexPage
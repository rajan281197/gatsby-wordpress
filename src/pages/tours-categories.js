import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"


const ToursCategories = ({ data }) => {
  return (
    <Layout pageTitle="">
      <ul>
        {
          data.allWpTourType.nodes.map(nodedata => (
                                               <div key={nodedata.slug}>
                        <Link to={nodedata.slug}>
                          <p>{nodedata.name}</p>
                        </Link>                        
                        </div>

          ))
        }
      </ul>
    </Layout>
  )
}
export const query = graphql`
query {
    allWpTourType {
      nodes {
        name
        slug
        uri
        link
        id
      }      
    }
  }`

export default ToursCategories
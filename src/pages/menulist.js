import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"


const MenuList = ({ data }) => {
  return (
    <Layout pageTitle="Menu Lists">
      <ul>
        {
          data.wpMenu.menuItems.nodes.map(nodedata => (
                                               <div key={nodedata.order}>
                        <Link to={nodedata.url}>
                          <p>{nodedata.label}</p>
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
                            wpMenu {
                            menuItems {
                                nodes {        
                                id
                                label        
                                order
                                url        
                                path
                                }
                            }
                            count
                            }
                        }`

export default MenuList
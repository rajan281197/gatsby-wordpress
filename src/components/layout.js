/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql,Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import { navLinks,navLinkItem,navLinkText,container,heading } from "./layout.css"


const Layout = ({ pageTitle,children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
    <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />  
     
     
        <main>
          <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main> 
        <Footer title="Taswar Bhatti" tagline="The synonyms of software simplicity" />    
           
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

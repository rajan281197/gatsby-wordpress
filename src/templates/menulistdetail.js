import React from "react"
import Layout from "../components/layout"
import { Link,graphql } from "gatsby"
import Img from 'gatsby-image'


export default function Menulistdetail({ data }) {
  const post = data.allWpPage.nodes[0]
  console.log(post)
  return (
      
    <Layout>
        <Link to="/menulist">Go back to the homepage</Link>
      {<div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

      

     

      </div>}
      
    </Layout>
  )
}
export const query = graphql`
query($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        slug
        title
        content
        uri
        
      }
    }
  }`
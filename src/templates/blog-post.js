import React from "react"
import Layout from "../components/layout"
import { Link,graphql } from "gatsby"
import Img from 'gatsby-image'


export default function BlogPost({ data }) {
  const post = data.allWpPost.edges[0].node
  console.log(post)
  return (
      
    <Layout>
        <Link to="/">Go back to the homepage</Link>
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div dangerouslySetInnerHTML={{ __html: post.date }} />
        
          { //Check if message failed
            (post.featuredImage == null)
              ? <img style={{height: '400px', width: '100%'}}
              alt="example"
              src='http://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png'/>
              :  <img style={{height: '400px', width: '100%'}}
              alt="example"
              src={post.featuredImage.node.sourceUrl}/>
          }
      

     

      </div>
      
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
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
  }
`
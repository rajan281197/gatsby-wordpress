import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
 
 
const Nav = () => {
 
   const pageMenu = useStaticQuery(graphql`
   {
     allWpMenuItem(filter: {menu: {node: {name: {eq: "Primary"}}}}) {
       edges {
         node {
           label
           url
         }
       }
     }
   }
 `)
  return(
   <div>
     <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
           {pageMenu.allWpMenuItem.edges.map(item => (
             <li key={item.node.url} style={{ margin: `0 10px` }}>
               <Link
                 to={`${item.node.url}`}
                 style={{
                   color: `black`,
                   textDecoration: `none`,
                   fontFamily: `sans-serif`,
                 }}
               >
                 {item.node.label}
               </Link>
             </li>
           ))}
         </ul>
   </div>
 )
}
 
export default Nav
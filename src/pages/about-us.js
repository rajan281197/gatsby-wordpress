import * as React from "react"
import { graphql } from "gatsby"
import { useState } from 'react';
import Layout from "../components/layout"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Aboutus = ({ data }) => {





    return (

        <Layout>

            {
                console.log(data)
            }
            <div>
                <div class="container mt-20 text-center">
                    <h2 style={{textAlign:"justify"}}>
                        {data.allWpPage.edges[0].node.title}</h2>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.allWpPage.edges[0].node.content }} />
                
            </div>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allWpPage(filter: {slug: {eq: "about-us"}}) {
      edges {
        node {
          content
          title
        }
      }
    }
  }`

export default Aboutus



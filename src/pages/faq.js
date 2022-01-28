import * as React from "react"
import { graphql } from "gatsby"
import { useState } from 'react';
import Layout from "../components/layout"
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const FAQPage = ({ data }) => {




  return (

    <Layout pageTitle="FAQ">


      <div style={{ maxWidth: "100px !important", width: "1100px" }}>
        <Accordion style={{ marginLeft: "197px" }}>
          {
              data.allWpFaq.nodes.map(faqdata => (

              <div className="faq-list" style={{ marginBottom: "10px", backgroundColor: '#b7b7e1' }} key={faqdata.slug}>
                
                <AccordionItem key={faqdata.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton style={{ color: "red", backgroundColor: "pink" }}>{faqdata.title}</AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <div dangerouslySetInnerHTML={{ __html: faqdata.content }} />
                  </AccordionItemPanel>

                </AccordionItem>
              </div>

            ))
          }
          
        </Accordion>
      </div>
    </Layout>
  )
}

export const query = graphql`
                        query {
                          allWpFaq {
                                nodes {
                                  id
                                  title
                                  content                                  
                                  slug
                                  date(formatString: "MMMM DD, YYYY")                               
                                 
                                }
                                pageInfo {
                                  totalCount
                                }
                              }
                        }`

export default FAQPage
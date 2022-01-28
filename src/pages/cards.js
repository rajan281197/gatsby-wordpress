import * as React from "react"
import { useState } from 'react';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaShoppingBag, FaSchool, FaSitemap, FaUser, FaMobileAlt, FaTools, FaAngrycreative, FaCheck } from "react-icons/fa";

const Cards = ({ data }) => {
  const [count, setCount] = useState(0);
  return (
    <Layout pageTitle="Our Story">
      <VerticalTimeline lineColor={'black'} animate={'true'}>


        {
          data.allWpTimeline.nodes.map(nodedata => (
            console.log(nodedata.appleLogoTimeline.creator),
           
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: nodedata.appleLogoTimeline.timelineFormColor, color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: nodedata.appleLogoTimeline.timelineIcon, color: '#fff' }}
                icon={<FaShoppingBag />}


              > <div>
                  <h3 className="vertical-timeline-element-title">{nodedata.appleLogoTimeline.creator}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{nodedata.appleLogoTimeline.year}</h4>
                  <img src={nodedata.appleLogoTimeline.image.sourceUrl} alt="" />
                </div>
              </VerticalTimelineElement>
            
          ))
        }
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaCheck />}
        />
      </VerticalTimeline>
    </Layout>
  )
}


export const query = graphql`
query {
  allWpTimeline {
    nodes {
      appleLogoTimeline {
        creator
        year   
        timelineIcon 
        timelineFormColor
        image {
          sourceUrl
        }   
      }
    }
  }
}`


export default Cards
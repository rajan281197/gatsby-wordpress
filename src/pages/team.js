import * as React from "react"
import { useState, useEffect } from "react";
import { Select, Input, Pagination } from 'antd';
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'


const { Option } = Select;

const Ourteam = ({ data }) => {
  /*   console.log(data);*/
  const [filters, setFilter] = useState(data.allWpTeam.nodes);
  const [pageNumber, setPageNumber] = useState(0);
  const [removedpost, setRemovedpost] = useState([]);

  const categoryChangeHandler = (value) => {
    // console.log(value);

    value === "all" ? setFilter(data.allWpTeam.nodes) : setFilter(data.allWpTeam.nodes.filter(checkCategory));

    function checkCategory(datatour) {
      if (datatour.teamMemberBio.teamMemberType === value) {
        return datatour;
      }
    }
  };


  useEffect(() => {
    const newArr = new Set(data.allWpTeam.nodes.map((d) => d.teamMemberBio.teamMemberType));
    // console.log(newArr);
    setRemovedpost([...newArr]);
  }, [data.allWpTeam.nodes]);

  const displayUsers = filters.map(nodedata => (
    <div className="col-md-12  col-lg-12">
      <div className="tour-block" key={nodedata.id}>
        <div className="tour-img-blk">
          <div className="tour-pkim">
            <Image src={nodedata.featuredImage.node.sourceUrl} />
          </div>
        </div>

        <div className="tour-ctst">
          <div className="rio-tour">
            <div className="grop-hnm">
              <span className="tou-hmrt">Team Type</span>
              <span className="tou-hmr">{nodedata.teamMemberBio.teamMemberType}</span>
            </div>
          </div>
          <div className="heading-tor">
            <div>{nodedata.title}</div>

          </div>
          <div className="info-nugget">
            <span className="nug-get" dangerouslySetInnerHTML = {{__html: nodedata.content}}></span>
          </div>
          <div className="peri-yers">
            <h6>User Details</h6>
            <ul>
              <li className="lh-20" dangerouslySetInnerHTML = {{__html: nodedata.teamMemberBio.userMoreInfo}}></li>
            </ul>
          </div>
         
        </div>


        
      </div>
    </div>
  ))
  return (
    <Layout pageTitle="">
      <>


        <div className="center-align my-4">

          <div className="col-md-12 mb-4" style={{ display: "flex" }}>

            <Select
              style={{ width: '100%', marginLeft: "10px", float: "left" }}
              placeholder="Tour Type"
              onChange={(value) => categoryChangeHandler(value)}
            >

              <Option value="all">All</Option>
              {
                removedpost.map((item, i) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))
              }
            </Select>





          </div>
          {
            displayUsers
          }

        </div>
      </>
    </Layout>
  )
}
export const query = graphql`
query {
  allWpTeam {    
                nodes {
                  id
                  title
                  content
                  slug
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      teamMemberBio {
                        userMoreInfo
                        teamMemberType                        
                      }
                }
          }
  }`


export default Ourteam
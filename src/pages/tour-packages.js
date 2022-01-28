import * as React from "react"
import { useState, useEffect } from "react";
import { Select, Input, Pagination } from 'antd';
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'


const { Option } = Select;

const TourPackages = ({ data }) => {
  /*   console.log(data);*/
  const [filters, setFilter] = useState(data.allWpTourpackage.nodes);
  const [pageNumber, setPageNumber] = useState(0);
  const [removedpost, setRemovedpost] = useState([]);


  const handleChange = ({ value }) => {

    let sortResults = filters.sort(function (a, b) {


      return value === "lowtohigh"
        ? a.tourPackageDetails.tripLength > b.tourPackageDetails.tripLength
          ? 1
          : -1
        : a.tourPackageDetails.tripLength < b.tourPackageDetails.tripLength
          ? 1
          : -1;
    });
    // console.log("logsort", sortResults);
    setFilter([...sortResults]);

    // console.log(filters);

  }
  // console.log("seachfilter1", data);
  const onChangeInput = (e) => {
    let searchKey = e.target.value;

    let searchLenght = searchKey.length;
    const searchFilter = data.allWpTourpackage.nodes.filter(function (str) {
      console.log("strtitle", (str.title.slice(0, searchLenght) === searchKey));
      return str.title.slice(0, searchLenght) === searchKey

    });
    // console.log("seachfilter2", filters);
    setFilter(searchFilter);
    setPageNumber(0);

  };

  const categoryChangeHandler = (value) => {
    // console.log(value);

    value === "all" ? setFilter(data.allWpTourpackage.nodes) : setFilter(data.allWpTourpackage.nodes.filter(checkCategory));

    function checkCategory(datatour) {
      if (datatour.tourPackageDetails.tourType === value) {
        return datatour;
      }
    }
  };

  const userPerPage = 2;

  const pageCount = Math.ceil(data.allWpTourpackage.nodes.length / userPerPage);

  const changePage = (selected) => {
    setPageNumber(selected - 1);
    console.log("page:" + pageNumber);
  };

  const pageVisited = pageNumber * userPerPage;

  const totel = filters.length;

  useEffect(() => {
    const newArr = new Set(data.allWpTourpackage.nodes.map((d) => d.tourPackageDetails.tourType));
    // console.log(newArr);
    setRemovedpost([...newArr]);
  }, [data.allWpTourpackage.nodes]);

  const displayUsers = filters
    .slice(pageVisited, pageVisited + userPerPage).map(nodedata => (
      <div className="col-md-12  col-lg-9">
        <div className="tour-block" key={nodedata.id}>
          <div className="tour-img-blk">
            <div className="tour-pkim">
              <Image src={nodedata.featuredImage.node.sourceUrl} />
            </div>
          </div>

          <div className="tour-ctst">
            <div className="rio-tour">
              <div className="grop-hnm">
                <span className="tou-hmrt">GROUP TOUR</span>
                <span className="tou-hmr">{nodedata.tourPackageDetails.gid}</span>
              </div>
              <div className="group-cat">{nodedata.tourPackageDetails.tourType}</div>
            </div>
            <div className="heading-tor">
              <Link to={nodedata.slug}>{nodedata.title}</Link>

            </div>
            <div className="info-nugget">
              <span className="nug-get">{nodedata.tourPackageDetails.tripLength} Days | {nodedata.tourPackageDetails.cities} Cities</span>
            </div>
            <div className="peri-yers">
              <h6>DESTINATIONS</h6>
              <ul>
                <li className="lh-20">{nodedata.tourPackageDetails.destinations}</li>
              </ul>
            </div>
            <div className="deprt-moth">
              Pickup: {nodedata.tourPackageDetails.pickup} Drop: {nodedata.tourPackageDetails.drop}
            </div>
          </div>


          <div className="tour-Inclus">
            <div className="nugget-tlt">Inclusions:</div>
            <div className="info-nugget">

              <div className="high-light">
                <Image src="https://admin.ajaymodi.com/source/upload/facility/637723967785926825.svg" alt="#" />
                <span className="mlt">Hotels</span>
              </div>

              <div className="high-light">
                <Image src="https://admin.ajaymodi.com/source/upload/facility/637723967970298418.svg" alt="#" />
                <span className="mlt">Meals</span>
              </div>

              <div className="high-light">
                <Image src="https://admin.ajaymodi.com/source/upload/facility/637723968176009918.svg" alt="#" />
                <span className="mlt">Sightseen</span>
              </div>


            </div>
            <div className="start-price">SUPER DEAL PRICE</div>
            <div className="ful-price">{nodedata.tourPackageDetails.price}</div>
            <div className="per-pes">per person</div>
            <div className="detal-enq">
              <Link className="inq-btn" to={nodedata.slug}>View Details</Link>
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
              labelInValue
              style={{ width: 175, float: "left" }}
              placeholder="Select order"
              onChange={handleChange}
            >
              <Option value="lowtohigh">Low to High</Option>
              <Option value="hightolow">High to Low</Option>
            </Select>

            <Select
              style={{ width: 200, marginLeft: "10px", float: "left" }}
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


            <Input
              style={{ marginLeft: "10px", minWidth: "200px", width: "auto", float: "right", borderRadius: "7px" }}
              placeholder="Search Images with Title"
              onChange={onChangeInput}

              allowClear
            // addonAfter={<SettingOutlined />}
            />

            <div
              style={{ marginLeft: "10px", fontWeight: "700", fontSize: "18px", float: "right", display: "flex" }}
            >
              Total Tours Package : {totel}
            </div>


          </div>
          {totel !== 0 ? <>{
            displayUsers
          }
            <Pagination
              style={{ margin: "50px auto", width: "100%" }}
              defaultCurrent={1}
              // pageSizeOptions={[3, 5, 10, 20]}
              total={totel}
              pageSize={userPerPage}
              prevIcon={"<"}
              nextIcon={">"}
              pageCount={pageCount}
              onChange={changePage}
              className="pagination-class"
            // showSizeChanger={true}
            // onShowSizeChange={}
            /> </> : <div className="nosearchresult">Data is Not Found !! Please search something else :)</div>}
        </div>
      </>
    </Layout>
  )
}
export const query = graphql`
query {
  allWpTourpackage {
    totalCount
                nodes {
                  id
                  title
                  slug
                      featuredImage {
                        node {
                          sourceUrl
                        }
                      }
                      tourPackageDetails {
                        cities
                        drop
                        pickup
                        price
                        tourType
                        destinations
                        inclusions
                        tripLength
                        gid
                      }
                }
          }
  }`


export default TourPackages
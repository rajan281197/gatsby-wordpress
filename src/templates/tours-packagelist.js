import React from "react"
import Layout from "../components/layout"
import { useState } from 'react';
import { useRef } from 'react';
import { Link, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import emailjs from 'emailjs-com';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";



export default function ToursPackagelist({ data }) {

  // console.log(data.allWpTourpackage)
  // const posttours = data.allWpTourpackage.edges[0].node
  // console.log(data);
  console.log(data.allWpTourpackage.nodes[0].tourPackageDetails.toursPackageVideo);

  const [showMessage, setShowMessage] = useState(false);

  const [values, setValues] = useState({
    firstname: "",
    user_email: "",
  });

  const [formerrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    //this console.log message should be removed once you've tested the event works 
    console.log(
      "handleChange -> " + event.target.name + " : " + event.target.value
    );
    //this is the important bit
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = () => {
    console.log("Validate the form....");

    let errors = {};

    //name field
    if (!values.firstname) {
      errors.firstname = "First name is required";
    }

    //email field
    if (!values.user_email) {
      errors.user_email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
      errors.user_email = "Email address is invalid";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };
  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate(values)) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }

    emailjs.sendForm('service_2yf5pvr', 'template_hvh0m3c', form.current, 'user_ZgnIladycCsitIjLLw8UO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <Layout>
      <>

        <div className="listing-sgl" style={{
          backgroundImage: "url(" +
            data.allWpTourpackage.nodes[0].tourPackageDetails.detailPageImage.sourceUrl + ")", backgroundRepeat: 'no-repeat'
        }}>
          <div className="container">
            <div className="sigle-listhed">
              <div className="row">
                <div className="col-md-6">
                  <div className="tour-type">
                    <div className="pr-titel">GROUP TOUR {data.allWpTourpackage.nodes[0].tourPackageDetails.gid}</div>
                    <h1 className="prm-sbtl packageSize">{data.allWpTourpackage.nodes[0].title}</h1>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="package-details">
                    <div className="cty-by-tur"><span>{data.allWpTourpackage.nodes[0].tourPackageDetails.cities}</span>
                      CITIES</div>
                    <div className="cty-by-tur"><span>{data.allWpTourpackage.nodes[0].tourPackageDetails.tripLength}</span>
                      Days</div>
                    <div className="cty-by-tur ex-price"><span className="xec-prices">Per Person</span>
                      {data.allWpTourpackage.nodes[0].tourPackageDetails.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="departure">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="detailed-nav">
                  <ul>
                    <li><a href="#overview">Overview</a> </li>
                    <li><a href="#itinerary">Itinerary</a> </li>
                    <li><a href="#detprice">Detailed Price </a></li>
                    <li><a href="#information">Information </a></li>
                  </ul>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="airfare">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-xl-7 col-lg-7 col-12">
                <section id="overview" className="nclusi">
                  <div className="inc-hed">Inclusions</div>
                  <div className="inc-inlist">

                    <div className="meal-nort">
                      <i>
                        <Image src="https://admin.ajaymodi.com/source/upload/facility/637723967785926825.svg"
                          alt="Hotels" />
                      </i> Hotels
                    </div>


                    <div className="meal-nort">
                      <i>
                        <Image src="https://admin.ajaymodi.com/source/upload/facility/637723967970298418.svg" alt="Meals" />
                      </i> Meals
                    </div>


                    <div className="meal-nort">
                      <i>
                        <Image src="https://admin.ajaymodi.com/source/upload/facility/637723968176009918.svg"
                          alt="Sightseen" />
                      </i> Sightseen
                    </div>


                  </div>

                  <div className="ination">

                    <div className="inc-hed">Destinations</div>
                    <div className="ng-tns">
                      <div className="row">
                        {data.allWpTourpackage.nodes[0].tourPackageDetails.destinations}

                      </div>
                    </div>

                  </div>
                </section>
                <section id="itinerary" className="itinerary">
                  <div className="itinera-head">
                    <div className="row">
                      <div className="col-md-12 col-lg-8">
                        <div className="tiner">
                          <h2>Travel Itinerary</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ridge-row">
                    {
                      data.allWpTourpackage.nodes[0].tourPackageDetails.travelItinerary.map(nodedata => (

                        <div className="arrive-tour">
                          <h6>{nodedata.day}</h6>
                          <div className="arriv-titel" dangerouslySetInnerHTML={{ __html: nodedata.fromto }} />
                          <div className="fli-data">
                            <p dangerouslySetInnerHTML={{ __html: nodedata.dayInformation }} />
                          </div>

                          <input type="hidden" name="ctl00$ContentPlaceHolder1$rptItinerary$ctl00$hdnDay"
                            id="ContentPlaceHolder1_rptItinerary_hdnDay_0" value="1" />
                          <div className="stay-pkg">
                            {
                              console.log(nodedata.inclusion)
                            }
                            {
                              nodedata.inclusion.map(inclusiondata => (
                                <>
                                  {
                                    inclusiondata.inclusionMore == "Breakfast" ?

                                      <div className="stay-col4 niht padding-5">
                                        <Image src="https://admin.ajaymodi.com/source/upload/facility/637745837812137227.png"
                                          alt="Breakfast" width="25" height="25" />
                                        {inclusiondata.inclusionMore}
                                      </div> : ''
                                  }
                                  {
                                    inclusiondata.inclusionMore == "Lunch" ?
                                      <div className="stay-col4 niht padding-5">
                                        <Image src="https://admin.ajaymodi.com/source/upload/facility/637745837812137227.png"
                                          alt="Breakfast" width="25" height="25" />
                                        {inclusiondata.inclusionMore}
                                      </div> : ''
                                  }
                                  {
                                    inclusiondata.inclusionMore == "Dinner" ?
                                      <div className="stay-col4 niht padding-5">
                                        <Image src="https://admin.ajaymodi.com/source/upload/facility/637723966088914057.png"
                                          alt="Dinner" width="25" height="25" />
                                        {inclusiondata.inclusionMore}
                                      </div> : ''
                                  }
                                </>
                              ))

                            }

                          </div>
                        </div>

                      ))
                    }



                  </div>
                </section>

              </div>
              <div className="col-md-4 col-12 pr-md-0 offset-md-1 mt-md-3">
                <aside className="natural">
                  <div id="ContentPlaceHolder1_upPnlRates">

                    <div className="pkg-form mt-20">
                      <div className="pkg-frm-inn w-450">
                        <div class="row mt-20">
                          <h4>Contact us for more details</h4>
                        </div>
                        <Container fluid="md">

                          <Row>
                            <Col>
                              <Alert show={showMessage} variant="success">
                                <Alert.Heading>Success</Alert.Heading>
                                <p>
                                  Thanks for the message! We Will Get Back to you Shortly.
                                </p>
                                <Button
                                  onClick={() => setShowMessage(false)}
                                  variant="outline-success"
                                >
                                  Close this alert
                                </Button>

                              </Alert>
                            </Col>
                          </Row>

                          <Form ref={form} onSubmit={sendEmail}>

                            <Row>

                              <Col>

                                <Form.Group className="mb-3" controlId="formBasicEmail" >
                                  <Form.Control placeholder="Enter First name" className="form-control" type="text" name="firstname" value={values.firstname} onChange={handleChange} />
                                  <Form.Control className="form-control" type="hidden" name="package" value={data.allWpTourpackage.nodes[0].title} onChange={handleChange} />
                                  {formerrors.firstname && (<p className="text-danger">{formerrors.firstname}</p>
                                  )}
                                </Form.Group>
                              </Col>

                            </Row>

                            <Row>
                              <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                  <Form.Control placeholder="Enter Email ID" className="form-control" type="email" name="user_email" value={values.user_email} onChange={handleChange} />
                                  {formerrors.user_email && (<p className="text-warning">{formerrors.user_email}</p>)}
                                </Form.Group>
                              </Col>
                            </Row>

                            <Row>
                              <Col>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                  <Form.Control placeholder="Enter Phone number" className="form-control" type="tel" name="phone"
                                  />

                                </Form.Group>
                              </Col>
                            </Row>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                              <ReCAPTCHA sitekey="6LcmbaMdAAAAAJz68enAze1ddTkz5V6seqyQ1--c" onChange={onChange} theme="dark" />
                            </Form.Group>
                            <div className="row mt-20 text-center">
                              <Button className="inquiry-btn" type="submit" >
                                Send Inquiry
                              </Button>
                            </div>
                          </Form>
                        </Container>
                      </div>
                    </div>
                    <div id="ContentPlaceHolder1_divHotelVideo" className="mt-20">
                      
                    <iframe width="450" height="315" src={data.allWpTourpackage.nodes[0].tourPackageDetails.toursPackageVideo} title="Silky Himachal Family Tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                   

                    </div>
                  </div>
                </aside>
              </div>

            </div>
            <div id="detprice">
              <div id="ContentPlaceHolder1_divTourRates" className="tourInfo">
                <div className="row">
                  <div className="otifi-data">
                    <h2 className="led-Pri">Tour Rates</h2>
                    <div className="otifi dt-table" dangerouslySetInnerHTML={{ __html: data.allWpTourpackage.nodes[0].tourPackageDetails.tourRates }} />
                  </div>
                </div>
              </div>


            </div>
            <div id="information" className="tourInfo">

              <div className="row">
                <div className="col-md-6">
                  <div className="satisfy">
                    <h3>Inclusions</h3>
                    <div dangerouslySetInnerHTML={{ __html: data.allWpTourpackage.nodes[0].tourPackageDetails.tourDetailInclusion }} />
                    

                  </div>
                  <div className="satisfy">
                    <h3>Exclusions</h3>
                    <div dangerouslySetInnerHTML={{ __html: data.allWpTourpackage.nodes[0].tourPackageDetails.exclusions }} />

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="satisfy">
                    <h3>Weather</h3>
                    <ul>
                      <li>For detailed Information about weather kindly visit <a href="https://www.accuweather.com" target="_blank">www.accuweather.com</a></li>
                    </ul>
                  </div>
                  <div className="satisfy">

                    <div className="satisfy">
                      <h3>Documents Required for Travel</h3>
                      <div dangerouslySetInnerHTML={{ __html: data.allWpTourpackage.nodes[0].tourPackageDetails.documentsRequiredForTravel }} />

                    </div>
                  </div>
                </div>
              </div>
              <div className="satisfy tents">
                <h3>Tour Information</h3>
     
                <p>
                  <b>Tour Requirement</b></p>
                <div dangerouslySetInnerHTML={{ __html: data.allWpTourpackage.nodes[0].tourPackageDetails.tourRequirement }} />

                <p>
                  <b>Things To Carry Along</b></p>
                <div dangerouslySetInnerHTML={{ __html: data.allWpTourpackage.nodes[0].tourPackageDetails.thingsToCarryAlong }} />


              </div>
            </div>



          </div>


        </div>

      </>
    </Layout>
  )
}
export const query = graphql`
query wptourspackage($slug: String!) {
allWpTourpackage(filter: { slug: { eq: $slug } }) {
nodes {
    featuredImage {
        node {
        sourceUrl
        }
    }
    id
    slug
    title
    tourPackageDetails {
    cities
    destinations
    detailPageImage {
    sourceUrl
    }
      documentsRequiredForTravel
      drop
      exclusions
      fieldGroupName
      gid
      inclusions
      pickup
      price
      thingsToCarryAlong
      tourRates
      tourRequirement
      tourType
      tripLength
      weather
        travelItinerary {
        day
        dayInformation
        fieldGroupName
        fromto
          inclusion {
          inclusionMore
          fieldGroupName
          }
        }
        toursPackageVideo
        tourDetailInclusion
}
}
totalCount
}
}
`
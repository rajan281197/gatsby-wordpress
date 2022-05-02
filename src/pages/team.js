import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Ourteam = ({ data }) => {
    return (
        <Layout pageTitle="Our Team">
            <div className="container py-6">
                <div className="row mt-4">
                    {
                        data.allWpTeam.nodes.map(teamdata => (


                            <div className="col-6 col-md-3 col-lg-2 mb-4" >
                                <div className="container_2aKW4">
                                    <div className="imageContainer_1-8-j" role="button" tabindex="0"><img
                                        src={teamdata.featuredImage.node.mediaItemUrl}
                                        alt="Rushiraj Mori" loading="lazy" className="img-fluid" /></div>
                                    <h5 className="h3 mb-1">{teamdata.title}</h5>

                                    <div className="text-secondary small mb-0" dangerouslySetInnerHTML={{ __html: teamdata.content }} />
                                </div>
                                
                            </div>
                           

                        ))
                    }
                </div>
            </div>


        </Layout>
    )
}

export const query = graphql`
                    query {
                        allWpTeam {
                        nodes {
                            title
                            content
                            slug
                            teamMemberBio {
                            userMoreInfo
                            }
                            featuredImage {
                            node {
                                mediaItemUrl
                            }
                            }
                        }
                        }
                    }
                    `
export default Ourteam
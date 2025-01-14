/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

function calculateAge(birthDate) {
  var today = new Date();
  var birthDate = new Date(birthDate);
  
  var age = today.getFullYear() - birthDate.getFullYear();
  
  // Check if the birthday has already occurred this year
  var hasBirthdayPassed = today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

  if (hasBirthdayPassed) {
    age--;
  }
  
  return age;
}

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped  my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-dark  main-theme alpha-4">
              <span />
              <span /> 
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/profiles/convo.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="default"
                          href="https://github.com/Rajeevaletshanth"
                          target="_blank"
                          // onClick={(e) => e.preventDefault()}
                          // size="sm"
                        >
                          Github
                        </Button>
                        <Button
                          className="float-right"
                          color="info"
                          href="https://www.linkedin.com/in/ramachandran-rajeevaletshanth-99768b18b/"
                          target="_blank"
                          // onClick={(e) => e.preventDefault()}
                          // size="sm"
                        >
                          LinkedIn
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      {/* <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div> */}
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Rajeevaletshanth R{" "}
                      <span className="font-weight-light">, {calculateAge("1997-11-15")}</span>
                    </h3>
                    {/* <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Mannar, Sri Lanka
                    </div> */}
                    <div className="h6 mt-2">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Engineer - SOFTC
                    </div>
                    {/* <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div> */}
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          I'm a software engineer with 2 years of experience, specializing in Node.js, 
                          React, and AWS. I hold a BSc (Hons) in Information Technology with a focus on 
                          Software Engineering from SLIIT. With a passion for creating efficient and 
                          innovative solutions, I take pride in delivering high-quality code and exceptional
                          user experiences. On this platform, you'll find a showcase of my projects and 
                          accomplishments.
                        </p>
                        {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Show more
                        </a> */}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;

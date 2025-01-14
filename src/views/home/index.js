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
import { Container, Row, Col, Button } from "reactstrap";
import "../../assets/css/main.css";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Buttons from "./IndexSections/Buttons.js";
import Inputs from "./IndexSections/Inputs.js";
import CustomControls from "./IndexSections/CustomControls.js";
import Menus from "./IndexSections/Menus.js";
import Navbars from "./IndexSections/Navbars.js";
import Tabs from "./IndexSections/Tabs.js";
import Progress from "./IndexSections/Progress.js";
import Pagination from "./IndexSections/Pagination.js";
import Pills from "./IndexSections/Pills.js";
import Labels from "./IndexSections/Labels.js";
import Alerts from "./IndexSections/Alerts.js";
import Typography from "./IndexSections/Typography.js";
import Modals from "./IndexSections/Modals.js";
import Datepicker from "./IndexSections/Datepicker.js";
import TooltipPopover from "./IndexSections/TooltipPopover.js";
import Carousel from "./IndexSections/Carousel.js";
import Icons from "./IndexSections/Icons.js";
import Login from "./IndexSections/Login.js";
import Download from "./IndexSections/Download.js";

//Container 
import About from "./containers/About.js";
import Joinus from "./containers/Joinus.js";
import Technologies from "./containers/Technologies.js";
import ThreeSteps from "./containers/ThreeSteps.js";
import Testimonial from "./containers/Testimonial.js";
import ChatBot from "./containers/ChatBot.jsx";
import ImageBot from "./containers/ImageBot";
import WorkWithUs from "./containers/WorkWithUs";
import VideoConf from "./containers/VideoConf";


class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  
  render() {

    return (
      <>
        <DemoNavbar />
        
        <main ref="main">
          <Hero />
          <ThreeSteps />
          <About />
          <Testimonial />
          <Technologies />
          <WorkWithUs />
          <Joinus />
          
          
        {/* <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={`${socialMediaLink.facebook}`}
                  id="tooltip837440414"
                  target="_blank"
                ></Button> */}

         {/*  <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                <Pagination />
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          <Login />
          <Download /> */}
        </main>
        
        <CardsFooter />
        {/* <ImageBot /> */}
        <ChatBot />
        {/* <VideoConf/> */}
      </>
    );
  }
}

export default Index;

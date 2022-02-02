import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import { Navbar, Container, Nav, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "@material-ui/core";
import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider.js";
import MessageParser from "./chatbot/MessageParser";
import CloseIcon from "@material-ui/icons/Close";

import "./main.css";
const myStyle = {
  width: "30rem",
  border: "2px solid black",
  backgroundColor: "grey",
  color: "white",
  position: "fixed",
  right: 0,
  bottom: 0,
};
const Main = () => {
  const [open, setOpen] = useState(false);

  const HandleClose = () => {
    setOpen(false);
  };
  const HandleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Card className="body">
        <div className="maindiv">
          <Row lg={8}>
            <Navbar bg="navbar navbar-dark bg-dark" variant="dark">
              <Container>
                <Navbar.Brand to="#home">AK</Navbar.Brand>
                <Nav className="me-auto">
                  <Link className="l1" to="./allMent">
                    Mentors
                  </Link>
                  <Link className="l1" to="./addMent">
                    Add Mentors
                  </Link>
                  <Link className="l1" to="./about">
                    About Us
                  </Link>
                  <Link className="l1" to="./contact">
                    Contact Us
                  </Link>
                </Nav>
              </Container>
            </Navbar>
            <div className="BotDiv">
              <Button variant="secondary" onClick={HandleOpen}>
                <img className="botimg" src="bot.png"></img>
              </Button>
            </div>
            <Modal open={open} onClose={HandleClose}>
              <div
                style={{ maxWidth: "300px" }}
                style={myStyle}
                className="ChatDiv"
              >
                <div className="ModalDiv">
                  <span style={{ cursor: "pointer" }} onClick={HandleClose}>
                    <CloseIcon />
                  </span>
                </div>

                <Chatbot
                  config={config}
                  actionProvider={ActionProvider}
                  messageParser={MessageParser}
                />
              </div>
            </Modal>
            <Col>
              <marquee behavior="scroll" direction="left" scrollamount="9">
                <h2 className="pqr">Welcome to mentoring startups</h2>
              </marquee>
            </Col>
          </Row>
          <div className="div2">
            <Carousel>
              <Carousel.Item>
                <img className="car1" src="back3.jpg" alt="First slide" />
                <Carousel.Caption>
                  <h3>Employees Hall</h3>
                  <p>working area of all Employyes....</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="car2" src="back3.jpg" alt="Second slide" />

                <Carousel.Caption>
                  <h3>Meeting Area</h3>
                  <p>Discussing and meeting area...</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="back3.jpg" className="car1" alt="Third slide" />

                <Carousel.Caption>
                  <h3>Chill Area</h3>
                  <p>
                    Food area where employees have there coffee's and all
                    things....
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <footer class="footer">
              {/* <div class="waves">
                <div class="wave" id="wave1"></div>
                <div class="wave" id="wave2"></div>
                <div class="wave" id="wave3"></div>
                <div class="wave" id="wave4"></div>
              </div> */}
              <ul class="social-icon">
                <li class="social-icon__item">
                  <a class="social-icon__link" href="#">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li class="social-icon__item">
                  <a class="social-icon__link" href="#">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>
                <li class="social-icon__item">
                  <a class="social-icon__link" href="#">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
                <li class="social-icon__item">
                  <a class="social-icon__link" href="#">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
              <ul class="menu">
                <li class="menu__item">
                  <a class="menu__link" href="#">
                    Home
                  </a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="#">
                    About
                  </a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="#">
                    Services
                  </a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="#">
                    Team
                  </a>
                </li>
                <li class="menu__item">
                  <a class="menu__link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <p>&copy;2021 startup company | All Rights Reserved</p>
            </footer>
            <script
              type="module"
              src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
            ></script>
            <script
              nomodule
              src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
            ></script>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Main;

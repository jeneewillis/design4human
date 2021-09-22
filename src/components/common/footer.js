
import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Footerlogo from "../../images/biglogo.png";
import { Link } from 'react-router-dom';

import MailchimpSubscribe from "react-mailchimp-subscribe"
const chimpUrl = "https://4humandesign.us7.list-manage.com/subscribe/post?u=1ba200d34c510e821031ecbe8&amp;id=fba72eabd1";

const SubForm = ({ onSubmitted }) => {
  const [itsVal, setItsVal] = useState("")
  const handleChange = (e) => {
    setItsVal(e.target.value)
  }
  const doSubmit = () => {
    onSubmitted({ EMAIL: itsVal })
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Вашият email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="input-style"
          value={itsVal}
          onChange={handleChange}
        />
        <InputGroup.Append onClick={doSubmit} style={{ cursor: "pointer" }}>
          <InputGroup.Text id="basic-addon2" className="ok-style">
            OK
                        </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}


const Foot = () => {
  return (
    <>
      <Container>
        <Row className="Row-contain">
          <Col sm={12} md={12} lg={3} className="footer-col first-col">
            <div className="footer-logo">
              <img src={Footerlogo} />
            </div>
          </Col>
          <Col sm={12} md={12} lg={5} className="footer-col Second-col">
            <Row>
              <Col sm={6} md={6} lg={6} className="footer-col">
                <ul className="footer-links">
                  <li><Link to="/" style={{ color: '#808080' }}>Начало</Link></li>
                  <li><Link to="/about" style={{ color: '#808080' }}>За Нас</Link></li>
                  <li><Link to="/blog" style={{ color: '#808080' }}>Блог</Link></li>
                  <li><Link to="/contact" style={{ color: '#808080' }}>Контакти</Link></li>
                </ul>
              </Col>
              <Col sm={6} md={6} lg={6} className="footer-col">
                <ul className="footer-links">
                  <li><Link to="/terms" style={{ color: '#808080' }}>Политика За Поверителност</Link></li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={4} className="footer-col third-col">
            <Row>
              <Col sm={12}>
                <div className="social-links social-icons">
                  <Row>
                    <Col sm={6} lg={4}>
                      <p className="social-link-text">Последвай ни:</p>
                    </Col>
                    <Col sm={6} lg={8} className="float-div">
                      <ul className="social-iconsl-style">
                        <li>
                          <div class="outer-bg">
                            <a href="https://www.facebook.com/4humandesignofficial/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                          </div>
                        </li>
                        <li>
                          <div class="outer-bg">
                            <a href="https://www.instagram.com/4humandesign/" target="_blank"><i class="fab fa-instagram"></i></a>
                          </div>
                        </li>
                        <li>
                          <div class="outer-bg youtube">
                            <a href="https://www.youtube.com/channel/UC3tu5BLETBLJcmC54Dbx_AA" target="_blank"><i class="fab fa-youtube"></i></a>
                          </div>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col sm={12}>
                <div className="social-links email-field">
                  <label className="rel-position">Абонирай се:</label>

                  <MailchimpSubscribe
                    url={chimpUrl}
                    render={({ subscribe, status, message }) => (
                      <div>
                        <SubForm onSubmitted={formData => subscribe(formData)} />
                        {status === "sending" && <div style={{ color: "blue" }}>Абониране...</div>}
                        {status === "error" && <div style={{ color: "red" }} >Вече имате абонамент!</div>}
                        {status === "success" && <div style={{ color: "green" }}>Благодарим ви за абонамента!</div>}
                      </div>
                    )}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="footer-text"> © 2019-2020 4 Хюман Дизайн. Всички права запазени</div>
    </>
  );
};

export default Foot;

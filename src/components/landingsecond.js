import React, {useState} from "react";
import { Button, Row, Col, ListGroup, Container, Card, Form } from "react-bootstrap";
import Imgabout from "../images/img_1.png";
import Imgabout2 from "../images/img_2.png";
import Imgabout4 from "../images/img_4.png";
import Imgabout44 from "../images/img_3.png";
import Imgabout45 from "../images/img_5.png";
import Img22 from "../images/imgage.png";
import Img33 from "../images/image331.png";
import Movie1 from "../images/1movie.png";
import Movie2 from "../images/2movie.png";
import ImgCarousel1 from "../images/carousel-1.png";
import ImgCarousel2 from "../images/carousel-2.jpg";
import ImgCarousel3 from "../images/carousel-3.png";
import ImgCarousel4 from "../images/carousel-4.png";
import ImgCarousel5 from "../images/carousel-5.png";
import ImgCarousel6 from "../images/carousel-6.png";
import ImgCarousel7 from "../images/carousel-7.png";
import { Link } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";

import manifestingGenNew from '../images/Manifesting Generators_new.jpg'
import manifestorsNew from '../images/Manifestors_new.jpg'
import gehera from '../images/Генераториnew.jpg'
import reflector from '../images/reflector.jpg'
import projectors from '../images/Projectors.jpg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import MailchimpSubscribe from "react-mailchimp-subscribe"
const chimpUrl = "https://4humandesign.us7.list-manage.com/subscribe/post?u=1ba200d34c510e821031ecbe8&amp;id=fba72eabd1";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Landing = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const SubForm = ({ onSubmitted }) => {
    const [itsVal, setItsVal] = useState("")
    const handleChange = (e) => {
      setItsVal(e.target.value)
    }
    const doSubmit = () => {
      onSubmitted({ EMAIL: itsVal })
    }

    return (
      <Form className="newsForm" onSubmit={(e) => handleSubmit(e)}>
        <Row>
          <Col md={8}>
            <Form.Group controlId="newEmail">
              <Form.Control
                type="text"
                className="mail-form landing-news-form"
                placeholder="Вашият email"
                required
                value={itsVal}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Button variant="primary" onClick={doSubmit} className="btn-org">
              Абонирай се
                </Button>
          </Col>
        </Row>
      </Form>
    )
  }

  return (
    <>
      <CookieConsent
        style={{
          background: "#fcf0e9",
          color: "#898080"
        }}
        buttonText="Приемете"
        buttonStyle={{
          background: "#feb89f 0% 0% no-repeat padding-box",
          boxShadow: "0px 2px 6px #00000029",
          borderRadius: "23px",
          fontSize: "14px",
          color: "white",
        }}
        location="bottom" cookieName="myAwesomeCookieName3" expires={999} overlay>
        Този уебсайт използва бисквитки за пообряване на потребителското изживяване.
    </CookieConsent>

      <div className="home-web-image">
        <div className="box-image">
          <p className="web-text-custome">
            Всеки от нас е дошъл с уникална мисия, за да разгърне пълния си потенциал и възможности.
          </p>

          <p className="web-text-custome-detail">
            Хюман Дизайн ти припомня кой си ти и къде се крие светлината ти.
          </p>
          <a href="/" className="btn-org btn btn-primary btn-lg">Разбери своята карта</a>
        </div>

      </div>
      <div className="b-preview-sub">
        <div className="container">
          <div className="orange-box hover-anima">
            <div className="w900 mobile-link-small">
              <p><b>Чудили ли сте се, защо някои похвати за успех работят за едни, а при други нямат никакъв резултат?</b></p>
              <p>Цитат</p>
              <a href="#" className="btn-org btn btn-primary">Направи си карта</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container m-145-40">
        <div className="w1030">
          <section className="beige-box beige-box-lines aura-sunset no-borders rounded-corners">
            <div className="section-t w650">
              <div className="steps">
                асойнасоас
              </div>
              <h3>сйнасонасокнас</h3>
              <p>иабспиасйноасншоаснасшонасшонас</p>
              <p>&nbsp;</p>
            </div>

            <div className="md-w485">
              <div className="row p15 b-15 justify-content-center">
                <div className="new-col-lg-5 col-md-4 b15">
                  <a href="#" className="en-box">
                    <div className="en-box-icon">
                      <img className="lazyloaded" src={manifestorsNew} />
                      <noscript><img src="" alt=""></img></noscript>
                      <img class="lazyloaded" src="" data-src="" alt=""></img>
                    </div>
                    <div class="en-box-info">
                      <div class="en-box-name">Манифестор</div>
                      <div class="en-box-info"></div>
                    </div>
                  </a>
                </div>

                <div className="new-col-lg-5 col-md-4 b15">
                  <a href="#" className="en-box">
                    <div className="en-box-icon">
                      <img className="lazyloaded" src={manifestingGenNew} />
                      <noscript><img src="" alt=""></img></noscript>
                      <img class="lazyloaded" src="" data-src="" alt=""></img>
                    </div>
                    <div class="en-box-info">
                      <div class="en-box-name">Маниестиращ генератор</div>
                      <div class="en-box-info"></div>
                    </div>
                  </a>
                </div>

                <div className="new-col-lg-5 col-md-4 b15">
                  <a href="#" className="en-box">
                    <div className="en-box-icon">
                      <img className="lazyloaded" src={gehera} />
                      <noscript><img src="" alt=""></img></noscript>
                      <img class="lazyloaded" src="" data-src="" alt=""></img>
                    </div>
                    <div class="en-box-info">
                      <div class="en-box-name">Генератор</div>
                      <div class="en-box-info"></div>
                    </div>
                  </a>
                </div>

                <div className="new-col-lg-5 col-md-4 b15">
                  <a href="#" className="en-box">
                    <div className="en-box-icon">
                      <img className="lazyloaded" src={projectors} />
                      <noscript><img src="" alt=""></img></noscript>
                      <img class="lazyloaded" src="" data-src="" alt=""></img>
                    </div>
                    <div class="en-box-info">
                      <div class="en-box-name">Прожектор</div>
                      <div class="en-box-info"></div>
                    </div>
                  </a>
                </div>

                <div className="new-col-lg-5 col-md-4 b15">
                  <a href="#" className="en-box">
                    <div className="en-box-icon">
                      <img className="lazyloaded" src={reflector} />
                      <noscript><img src="" alt=""></img></noscript>
                      <img class="lazyloaded" src="" data-src="" alt=""></img>
                    </div>
                    <div class="en-box-info">
                      <div class="en-box-name">Рефлектор</div>
                      <div class="en-box-info"></div>
                    </div>
                  </a>
                </div>


              </div>
            </div>
            <div class="tac b15 hover-anima section-t">
              <p>&nbsp;</p>
              <a href="#" className="btn-org btn btn-primary">Направи си карта</a>
            </div>
          </section>
        </div>
      </div>


      <div className="dive-in-deeper">
        <Container>
          <Row className="flex-reverse-col">
            <Col
              sm={12}
              md={12}
              lg={12}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <div className="section-t">
                  <div className="steps">ойнжоангасшоас</div>
                  <h3>скйбнасшонасшожнасогас</h3>
                  <p>саибаспонасшопжнасмжпщаснмапс</p>
                  <p>ипсхбаошнаспжнсо'йбсо</p>
                  <a href="#" className="btn-org btn btn-primary">Направи си карта</a>
                  <p><img className="alignnone size-full wp-image-31792" src="https://www.myhumandesign.com/wp-content/uploads/2020/07/human-body-graph-desktop-1.png" alt="" width='1298' height='1110' /></p>
                  <p>&nbsp;</p>
                </div>
                <div className="unique-t">
                  <p>"Текст"</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="subscribe-news-section">
        <Container>
          <h3 className="text-center">
            Абонирайте се за нашия бюлетин
            </h3>
          <div className="d-flex justify-content-center land-chimp-form">
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
        </Container>
      </div>



    </>
  );
};

export default Landing;

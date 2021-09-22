import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'
import modalBack from '../images/modal.jpg'
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
            <Form className="modalNewsForm">
                <Form.Group controlId="modalNewEmail">
                    <Form.Control
                        type="text"
                        className="mail-form modal-news-form"
                        placeholder="Вашият email"
                        required
                        value={itsVal}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" onClick={doSubmit} className="btn-org">
                    Абонирай се
                </Button>
            </Form>
        </div>
    )
}

const NewsModal = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="news-modal-wrapper"
        >
            <Row>
                <Col lg={5}>
                    <div className="modalBackwall" style={{ backgroundImage: "url(" + modalBack + ")" }}></div>
                </Col>
                <Col lg={7}>
                    <div className="modalContent">
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <h2>Абонирайте се за нашия бюлетин</h2>
                        <p>дфсдсфсфсфс</p>
                        <p>фсдфдскфйнсдй</p>
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
        </Modal>
    )
}

export default NewsModal

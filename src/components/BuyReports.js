import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import reportBack from '../images/contact-img.png'
import giftBack from '../images/img_2.png'

const productsData = {
    report: {
        title: "Личен анализ",
        des: "на имейл",
        image: reportBack
    },
    gift: {
        title: "Подаръчна книга",
        des: "книга",
        image: giftBack
    }
}

const ProductCard = ({ imgSrc, name, detail, isSelected, quantity, changeAmount }) => {

    const [amount, setAmount] = useState(0)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setAmount(quantity);
        setIsActive(isSelected);
    }, [quantity, isSelected])

    return (
        <Card className={"prod-card position-relative" + (isActive ? " active" : "")}>
            <div className='prod-img-box'>
                <img className='prod-img' src={imgSrc} />
            </div>
            <Card.Body className="prod-body">
                <Card.Title className="prod-title">{name}</Card.Title>
                <Card.Text className="prod-text">{detail}</Card.Text>

                <InputGroup className="quantity-input">
                    <InputGroup.Prepend onClick={() => changeAmount(-1)} className="quantity-minus">
                        <InputGroup.Text>-</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="number" readOnly={true} value={amount}
                    />
                    <InputGroup.Append onClick={() => changeAmount(1)} className="quantity-plus">
                        <InputGroup.Text>+</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </Card.Body>
        </Card>
    )
}

const BuyReports = () => {

    const [prodQuantity, setProdQuantity] = useState({ report: 0, gift: 0 })
    const [prodSelection, setProdSelection] = useState({ report: false, gift: false })

    const changeAmount = (value, index) => {
        if (index === "report") {
            setProdQuantity({ ...prodQuantity, report: (prodQuantity.report + value < 0) ? 0 : prodQuantity.report + value })
            if (prodQuantity.report + value <= 0) {
                setProdSelection({ ...prodSelection, report: false })
                console.log(prodSelection)
            } else {
                setProdSelection({ ...prodSelection, report: true })
                console.log(prodSelection)
            }
        } else {
            setProdQuantity({ ...prodQuantity, gift: (prodQuantity.gift + value < 0) ? 0 : prodQuantity.gift + value })
            if (prodQuantity.gift + value <= 0) {
                setProdSelection({ ...prodSelection, gift: false })
            } else {
                setProdSelection({ ...prodSelection, gift: true })
            }
            console.log(prodSelection)
        }
    }

    return (
        <div className="landing-bg">
            <h3 className="text-center pt-5 pb-2 text-uppercase page-header">Поръчай анализ</h3>
            <Container className="prodCard-wrapper">
                <Row>
                    <Col sm={6} md={4} lg={3}>
                        <ProductCard imgSrc={productsData['report'].image} name={productsData['report'].title} detail={productsData['report'].des} isSelected={prodSelection['report']} quantity={prodQuantity['report']} changeAmount={(value) => changeAmount(value, 'report')} />
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <ProductCard imgSrc={productsData['gift'].image} name={productsData['gift'].title} detail={productsData['gift'].des} isSelected={prodSelection['gift']} quantity={prodQuantity['gift']} changeAmount={(value) => changeAmount(value, 'gift')} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BuyReports

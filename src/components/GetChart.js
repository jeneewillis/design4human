import React, { useEffect, useState } from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'
import Select from 'react-select'
import AsyncSelect from 'react-select/async';
import axios from 'axios'

const GetChart = () => {
    const [yearOptions, setYearOptions] = useState([]);
    const [monOptions, setMonOptions] = useState([])
    const [dayOptions, setDayOptions] = useState([])
    const [addOptions, setAddOptions] = useState([])

    useEffect(() => {
        var years = [];
        for (let index = 2020; index > 1900; index--) {
            years.push({
                value: index,
                label: index
            })
        }
        setYearOptions(years);

        var months = [];
        for (let index = 1; index < 13; index++) {
            months.push({
                value: index,
                label: index
            })
        }
        setMonOptions(months);

        var days = [];
        for (let index = 1; index < 32; index++) {
            days.push({
                value: index,
                label: index
            })
        }
        setDayOptions(days)
    }, [])

    const promiseOptions = async (inputValue) => {
        var options = []

        await axios({
            method: 'get',
            url: 'https://api.geocode.earth/v1/autocomplete?size=5&text=' + inputValue + '&api_key=ge-3b66ab2c65e82f78&layers=coarse',
        })
            .then(function (response) {
                var listData = response.data.features;
                listData.map((item, index) => {
                    var addressData = (item.properties.region ? item.properties.region + ", " : "") + item.properties.country;
                    options.push({
                        value: addressData,
                        label: addressData
                    })
                })
            });
        setAddOptions(options)
        return options;
    };

    return (
        <div className="landing-bg">
            <h3 className="text-center pt-5 pb-2 text-uppercase page-header">Генерирайте карта</h3>
            <Container className="pb-5">
                <p className="landing-subtitle"></p> 
                <Card className="chart-form-card">
                    <h5 className="text-center">Въведете Вашите данни:</h5>
                    <p className="text-center font-italic mt-1"></p>
                    <Form onSubmit={(e) => e.preventDefault()} className="mt-2">
                        <Form.Group>
                            <Form.Control
                                type="text"
                                className="mail-form chart-form-field"
                                placeholder="Име"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Select
                            className=" chart-form-field"
                                isSearchable={true}
                                isClearable={true}
                                options={yearOptions}
                                placeholder="Година"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Select
                            className=" chart-form-field"
                            isSearchable={true}
                                isClearable={true}
                                options={monOptions}
                                placeholder="Месец"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Select
                            className=" chart-form-field"
                            isSearchable={true}
                                isClearable={true}
                                options={dayOptions}
                                placeholder="Ден"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="time"
                                className="mail-form chart-form-field"
                                placeholder="Час на раждане"
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <AsyncSelect className="chart-form-field" placeholder="Място на раждане" loadOptions={promiseOptions} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="btn-org">
                            Генерирай карта
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    )
}

export default GetChart

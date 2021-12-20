import React, { Component, useState } from 'react';
import NavBar from '../components/navbar';
import CompSteps from '../components/compSteps';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { IconRefresh } from '../assets/icon';
import Metamask from '../assets/Metamask.png';
import CheckCircle from '../assets/check_circle.png'

function CompVerifyPage() {
    const [verifystep, setVerifyStep] = useState(3);
    return (
        <div className="compverifyPage">
            <NavBar />
            <Container style={{ textAlign: 'start', paddingTop: '25px' }}>
                <Row style={{ paddingBottom: '20px' }}>
                    <Col>
                        <h1 style={{ color: '#1D2A64' }}>Company Verification</h1>
                        <p style={{ color: '#D3D3D3', fontSize: '21px', fontWeight: '400' }}>To Post Jobs, you must complete the following verification steps</p>
                    </Col>
                </Row>
                <CompSteps verifystep={verifystep} />
                {verifystep === 1 &&
                    <Row style={{ paddingTop: '50px' }} className="justify-content-center">
                        <Col className="align-self-center">
                            <div className="appcards">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formCompanyName">
                                        <Form.Label>Enter Your Company Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Company Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formCompanyPhone">
                                        <Form.Label>Company Contact Number</Form.Label>
                                        <Form.Control type="text" placeholder="+91" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGSTNumber">
                                        <Form.Label>Enter GST Number</Form.Label>
                                        <Form.Control type="text" placeholder="15 Digit Number" />
                                    </Form.Group>

                                    <div style={{ alignItems: 'end', textAlign: 'end' }}>
                                        <Button className="transparentbutton">
                                            Clear All
                                        </Button>
                                        <Button variant="primary" type="submit" className="appbutton">
                                            Continue
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col xs={5}>
                            <div className="appcards">
                                <Form>
                                    <h4>Captcha Verification</h4>
                                    <div style={{ textAlign: 'center', paddingTop: '30px' }}>
                                        <img style={{ padding: '10px', border: '1px solid #1D2A64', width: '100%', borderRadius: '10px' }} src={`https://services.gst.gov.in/services/captcha?rnd=0.7144933192022773`} />
                                    </div>
                                    <div style={{ alignItems: 'end', textAlign: 'end', paddingBottom: '20px' }}>
                                        <Button className="refreshbutton">
                                            Refresh{' '}<IconRefresh />
                                        </Button>
                                    </div>
                                    <Button variant="primary" className="loginbtn" onClick={() => { setVerifyStep(2) }}>
                                        Verify
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                }
                {verifystep === 2 &&
                    <Row>
                        <Col>
                            <div style={{ width: '100%', paddingTop: '75px', textAlign: 'center' }}>
                                <h4>Loading Metamask ...</h4>
                                <p style={{ color: '#1D2A64', fontWeight: '500', fontSize: '15px', paddingBottom: '35px' }}>You will need a metamask wallet to hire candidates for your company</p>
                                <img style={{ width: '20%' }} src={Metamask} />
                            </div>
                        </Col>
                    </Row>
                }
                {verifystep === 3 &&
                    <Row>
                        <Col>
                            <div style={{ width: '100%', paddingTop: '75px', textAlign: 'center' }}>
                                <h4>Company Verified</h4>
                                <p style={{ color: '#1D2A64', fontWeight: '500', fontSize: '15px', paddingBottom: '35px' }}>You have successfully verified your company profile. You many now start<br />posting job ads on our platform</p>
                                <img style={{ width: '10%' }} src={CheckCircle} />
                                <div style={{ paddingTop: '50px' }}>
                                    <Button className="appbutton" style={{ width: '250px' }}>Start hiring!</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </div>
    )
}
export default CompVerifyPage;
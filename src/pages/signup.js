import React, { Component } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

import { IconLogo, IconSearch } from '../assets/icon';

import logo from '../assets/logo-white.png';
import emplr from '../assets/emplr.png';

function SignUpPage() {
    return (
        <div className="signup-page">
            <Container style={{ height: '100%' }}>
                <Row style={{ paddingTop: '10%' }}>
                    <Col xs={6} style={{ marginLeft: '50px', marginRight: '50px', textAlign: 'center', alignItems: 'center' }}>
                        <div>
                            <div className="cardcircle">
                                <IconSearch />
                            </div>
                            <div className="signup-card">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Your Email Address" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPhone">
                                        <Form.Label>Number</Form.Label>
                                        <Form.Control type="text" placeholder="+91" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" />
                                    </Form.Group>
                                    {/* <div style={{ textAlign: 'end', marginBottom: '10px' }}>
                                        <a href="#" className="forgot-password">Forgot Password?</a>
                                    </div> */}

                                    <Button variant="primary" className="loginbtn" type="submit">
                                        Sign Up
                                    </Button>

                                    <div style={{ textAlign: 'start', marginTop: '10px', fontSize: '15px', fontWeight: '500' }}>
                                        <span>Already have an account? </span>
                                        <a href="#" className="login-link">Login</a>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                    <Col style={{ textAlign: 'start', paddingLeft: '50px' }} xs={5}>
                        <img src={logo} style={{ width: '100px' }} />
                        <h1>Employ Chain</h1>
                        <p>Ensuring a smooth Hiring Experience</p>
                        <img src={emplr} style={{ width: '65%' }} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUpPage;
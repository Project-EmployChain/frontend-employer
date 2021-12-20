import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { IconBack, IconStar, IconLocation } from '../assets/icon';

import ProfileImg from '../assets/bigman.png'

function AppProfile() {
    return (
        <Container style={{ overflowY: 'scroll', height: '85vh' }}>
            <Row>
                <Col xs={12} style={{ textAlign: 'start' }}>
                    <div><a href="#"><IconBack /><u>Back</u></a></div>
                    <div style={{ display: 'flex', marginTop: '10px', width: '100%' }}>
                        <div className="appprofile-img" style={{ flex: 1, borderRadius: '50%' }}>
                            <img src={ProfileImg} />
                        </div>
                        <div style={{ paddingLeft: '50px', paddingTop: '20px', flex: 3 }}>
                            <div className="appprofile-name">Raksha S</div>
                            <div className="appprofile-location">Bangalore</div>
                            <div className="appprofile-buttons">
                                <Button style={{ padding: '15px 30px', backgroundColor: '#F9F9F9', color: '#1D2A64', fontWeight: '600', border: '1px solid #1D2A64', width: '47%', borderRadius: '8px' }}>Save for later <IconStar /></Button>
                                <Button style={{ padding: '15px 30px', backgroundColor: '#1D2A64', color: '#FFFFFF', fontWeight: '600', border: '1px solid #1D2A64', width: '47%', borderRadius: '8px' }}>Hire Employee</Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className="profile-small-card">
                        <h4 style={{ textAlign: 'start', paddingBottom: '10px' }}>Personal Info</h4>
                        <hr />
                        <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                            <div style={{ flex: 1 }}>
                                <div>
                                    <span style={{ color: '#D3D3D3' }}>Mobile Number : </span>
                                    <span>8197168793</span>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <span style={{ color: '#D3D3D3', marginTop: '20px' }}>Date of Birth : </span>
                                    <span>10/07/2000</span>
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div>
                                    <span style={{ color: '#D3D3D3' }}>Email : </span>
                                    <span>raksha@abc.com</span>
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <span style={{ color: '#D3D3D3', marginTop: '20px' }}>Gender : </span>
                                    <span>Female</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-small-card">
                        <h4 style={{ textAlign: 'start' }}>Education</h4>
                        <hr />

                        <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                            <div style={{ flex: 8 }}>
                                <div>
                                    <span style={{ fontWeight: '600' }}>B.Tech</span><span style={{ fontWeight: '300' }}>{' '}(2018-2022)</span>
                                </div>
                                <div style={{ fontWeight: '300', fontSize: '16px' }}>Visvesvarayya Technological University</div>
                                <div style={{ fontWeight: '300', fontSize: '16px' }}>Computer Science</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                    75%
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                            <div style={{ flex: 8 }}>
                                <div>
                                    <span style={{ fontWeight: '600' }}>B.Tech</span><span style={{ fontWeight: '300' }}>{' '}(2018-2022)</span>
                                </div>
                                <div style={{ fontWeight: '300', fontSize: '16px' }}>Visvesvarayya Technological University</div>
                                <div style={{ fontWeight: '300', fontSize: '16px' }}>Computer Science</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                    75%
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                            <div style={{ flex: 8 }}>
                                <div>
                                    <span style={{ fontWeight: '600' }}>B.Tech</span><span style={{ fontWeight: '300' }}>{' '}(2018-2022)</span>
                                </div>
                                <div style={{ fontWeight: '300', fontSize: '16px' }}>Visvesvarayya Technological University</div>
                                <div style={{ fontWeight: '300', fontSize: '16px' }}>Computer Science</div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                    75%
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="profile-small-card">
                        <h4 style={{ textAlign: 'start' }}>Work Experience</h4>
                        <hr />

                        <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                            <div style={{ flex: 8 }}>
                                <div style={{ fontWeight: '600', fontSize: '16px', color: '#1D2A64' }}>
                                    UI & UX Designer - Full Time
                                </div>
                                <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px' }}>
                                    Microsoft | 3 Years
                                </div>
                                <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px', paddingBottom: '5px' }}>
                                    <IconLocation/> Bangalore
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                    5 LPA
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                            <div style={{ flex: 8 }}>
                                <div style={{ fontWeight: '600', fontSize: '16px', color: '#1D2A64' }}>
                                    UI & UX Designer - Full Time
                                </div>
                                <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px' }}>
                                    Microsoft | 3 Years
                                </div>
                                <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px', paddingBottom: '5px' }}>
                                    <IconLocation/> Bangalore
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                    5 LPA
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', textAlign: 'start', fontWeight: '600', fontSize: '18px', paddingTop: '15px', paddingBottom: '15px' }}>
                            <div style={{ flex: 8 }}>
                                <div style={{ fontWeight: '600', fontSize: '16px', color: '#1D2A64' }}>
                                    UI & UX Designer - Full Time
                                </div>
                                <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px' }}>
                                    Microsoft | 3 Years
                                </div>
                                <div style={{ fontWeight: '500', fontSize: '15px', color: '#473F44', paddingTop: '5px', paddingBottom: '5px' }}>
                                    <IconLocation/> Bangalore
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '24px', paddingTop: '15px' }}>
                                    5 LPA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-small-card">
                        <h4 style={{ textAlign: 'start' }}>Skills</h4>
                        <hr />
                        <div style={{ paddingTop:'15px', maxHeight: '40vh', overflowX: 'auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginRight:'25px', alignItems: 'start', textAlign: 'start', fontWeight: '600', fontSize: '15px' }}>
                            <div>HTML</div>
                            <div>UX Design</div>
                            <div>CSS</div>
                            <div>Webflow</div>
                            <div>UI Design</div>
                            <div>Wireframing</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AppProfile;
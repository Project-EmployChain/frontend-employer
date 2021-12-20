import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { IconBack, IconLocation, IconStop } from '../assets/icon';
import CardCandidate from '../components/cardcand';

import glogo from '../assets/google_logo.png';

function JobDesc(props) {
    return (
        <Container>
            <Row>
                <Col xs={12} style={{ textAlign: 'start' }}>
                    <div><a href="#"><IconBack /><u>Back</u></a></div>
                    <div style={{ display: 'flex', marginTop: '10px', width: '100%' }}>
                        <div className="comp-logo">
                            <img src={glogo} alt="logo" />
                        </div>
                        <div style={{ paddingLeft: '20px', paddingTop: '10px', flex: 5 }}>
                            <div style={{ display: 'inline' }}>
                                <div className="comp-name">Google <span style={{ color: '#D3D3D3', paddingLeft: '15px', fontSize: '14px', fontWeight: '400' }}>3 days ago</span></div>
                            </div>
                            <div className="job-role">Software Engineer <span style={{ color: '#AEA8B0' }}>| Full Time</span></div>
                        </div>
                        <div style={{ textAlign: 'end', paddingTop: '15px', flex: 2 }}>
                            <div style={{ fontWeight: '600', fontSize: '18px' }}>20 - 30 LPA</div>
                            <div style={{ paddingTop: '5px' }}><IconLocation /> Delhi</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} style={{ textAlign: 'start', paddingTop: '25px' }}>
                    <h3>Job Description</h3>
                    <p style={{ color: '#787878', fontSize: '14px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae elementum lectus metus ut nibh sed amet vitae. In blandit sit condimentum pellentesque. Elementum id sem eget pulvinar augue risus semper nunc egestas. Cursus in aliquam, ipsum aliquam. Lectus in pellentesque dolor dolor duis odio vestibulum. Eu suspendisse consectetur ullamcorper turpis tincidunt odio duis a vulputate.
                        Ullamcorper aliquam eu varius adipiscing id facilisi amet felis. Urna placerat nulla sed euismod lacus sed tortor. Vestibulum odio Read Full
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div style={{ textAlign: 'end' }}>
                        <Button className="stophirebutton">Stop hiring for this Role<span style={{ paddingLeft: '10px' }}><IconStop /></span></Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h4 style={{ textAlign: 'start', fontWeight: '400' }}>Intrested Candidates</h4>
                    <div style={{ paddingTop: '15px', paddingRight: '10px', maxHeight: '45vh', overflowX: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 2fr)', gap: '20px', alignItems: 'center' }}>
                        <CardCandidate />
                        <CardCandidate />
                        <CardCandidate />
                        <CardCandidate />
                        <CardCandidate />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default JobDesc;
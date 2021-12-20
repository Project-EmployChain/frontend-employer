import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, Form, Dropdown } from 'react-bootstrap';

import NavBar from '../components/navbar';

import JobDesc from './jobdesc';
import NoJobs from '../components/nojobs';
import StarredCandidate from './starredcand';
import AppProfile from './appProfile';
import hirebanner from '../assets/hirebanner.png';

import CardJob from '../components/cardjob';

import { IconHired } from '../assets/icon';

function DashboardPage(props) {
    const [jobdata, setJobdata] = React.useState([
        {
            "jobrole": "Backend Developer",
            "time": "2021-08-01",
            "jobtype": "Full Time",
            "salary": "20 - 30 LPA",
            "location": "Bangalore",
            "applicants": "10"
        },
        {
            "jobrole": "UI Designer",
            "time": "2021-08-01",
            "jobtype": "Internship",
            "salary": "20 - 30 LPA",
            "location": "Pune",
            "applicants": "3000"
        },
        {
            "jobrole": "Software Engineer",
            "time": "2021-08-01",
            "jobtype": "Full Time",
            "salary": "20 - 30 LPA",
            "location": "Delhi",
            "applicants": "203"
        }
    ]);
    const [show, setShow] = React.useState(false);
    return (
        <div className="dashboardpage">
            <NavBar />
            <Container style={{ paddingTop: '35px' }}>
                <Row>
                    <Col xs={8}>
                        {/* This is dashboard page */}
                        {/* <>
                            <Row>
                                <Col xs={12}>
                                    <div className="hirecard">
                                        <div className="hirecard-header">
                                            <h2>Let's hire!</h2>
                                        </div>
                                        <p>Begin by posting a Job Advertisement</p>
                                        <Button className="transparentbutton" style={{ marginTop: '15px' }} onClick={() => { setShow(true) }}>Create Job Ad</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <div style={{ paddingTop: '15px', maxHeight: '87vh', overflowX: 'auto', display: 'grid', gridTemplateColumns: 'repeat(2, 2fr)', gap: '15px', alignItems: 'center' }}>
                                        <CardJob job={jobdata[0]} />
                                        <CardJob job={jobdata[1]} />
                                        <CardJob job={jobdata[2]} />
                                    </div>
                                </Col>
                            </Row>
                        </> */}

                        <>
                            <JobDesc />
                        </>

                        {/* <>
                            <AppProfile/>
                        </> */}

                        {/* <>
                            <StarredCandidate />
                        </> */}

                    </Col>
                    <Col xs={4}>
                        <Row>
                            <Col xs={12}>
                                <div className="hiredemployees">
                                    <div style={{ display: 'inline' }}>
                                        <IconHired /> <span style={{ fontWeight: '700', paddingLeft: '10px', paddingTop: '10px' }}>{' '}Hired Employees</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Body style={{ textAlign: 'start', padding: '40px 40px 0px 40px' }}>
                    <h4 style={{ textAlign: 'start' }}>Create New Job Requirement</h4>
                    <Form>
                        <div style={{ display: 'flex', paddingTop: '20px' }}>
                            <div style={{ flex: 4 }}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ flex: 1, paddingRight: '20px' }}>
                                        <Form.Group controlId="formJobTitle">
                                            <Form.Label>Job Title</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Job Title" />
                                        </Form.Group>
                                    </div>
                                    <div style={{ flex: 1, paddingRight: '20px' }}>
                                        <Form.Group controlId="formJobTitle">
                                            <Form.Label>Job Type</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Job Type" />
                                        </Form.Group>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', paddingTop: '20px' }}>
                                    <div style={{ flex: 6, paddingRight: '20px' }}>
                                        <Form.Group controlId="formNOO">
                                            <Form.Label>Number of Openings</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Number of Openings" />
                                        </Form.Group>
                                    </div>
                                    <div style={{ flex: 4, paddingRight: '20px' }}>
                                        <Form.Group controlId="formCity">
                                            <Form.Label>Location (City)</Form.Label>
                                            <Form.Control type="text" placeholder="Select City" />
                                        </Form.Group>
                                    </div>
                                </div>

                                <div style={{ paddingTop: '20px' }}>
                                    <Form.Group className="mb-3" controlId="formBond">
                                        <Form.Check type="checkbox" label="Includes a bond" />
                                    </Form.Group>
                                </div>

                                <div style={{ display: 'flex', paddingTop: '20px' }}>
                                    <div style={{ flex: 7, paddingRight: '20px' }}>
                                        <Form.Group controlId="formSalary">
                                            <Form.Label>Salary (LPM/KPM)</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Number of Openings" />
                                        </Form.Group>
                                    </div>
                                    <div style={{ flex: 2, paddingRight: '20px' }}>
                                        <Form.Label>LPA / KPM</Form.Label>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" style={{ backgroundColor: '#FFFFFF', color: '#1D2A64' }} id="dropdown-basic">
                                                LPA
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">LPA</Dropdown.Item>
                                                <Dropdown.Item href="#">KPM</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>


                            <div style={{ flex: 2 }}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control as="textarea" rows={12} placeholder="Type" />
                                </Form.Group>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <div style={{ padding: '0px 40px 30px 30px', textAlign: 'end' }}>
                    <div style={{ color: '#D3D3D3', fontWeight: '600', fontSize: '16px', paddingBottom: '15px' }}>Limit: 300 words</div>
                    <Button variant="secondary" style={{ width: '200px', padding: '15px 35px', fontSize: '15px', fontWeight: '600', borderRadius: '8px', backgroundColor: '#FFFFFF', border: '1px solid #1D2A64', color: '#1D2A64', marginRight: '30px' }} onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" className="appbutton" style={{ width: '200px' }} onClick={() => setShow(false)}>
                        Submit
                    </Button>
                </div>
            </Modal>

        </div>
    )
}

export default DashboardPage;
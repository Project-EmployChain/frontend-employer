import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { IconCheck } from '../assets/icon';

class CompSteps extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex', width: '35%' }}>
                                {this.props.verifystep > 1 ?
                                    <div className="stepNo" style={{ backgroundColor: "#7DD982" }}> <IconCheck /> </div>
                                    :
                                    <div className="stepNo" style={{ backgroundColor: this.props.verifystep === 1 ? "#1D2A64" : "#EEEEEE", color: this.props.verifystep === 1 ? "#FFFFFF" : "#BFBFBF" }}>1</div>
                                }
                                {/* <div className="stepNo" style={{ backgroundColor: this.props.verifystep===1?"#1D2A64":"#EEEEEE", color: this.props.verifystep===1?"#FFFFFF":"#BFBFBF" }}>1</div> */}
                                <span style={{ paddingTop: '15px', paddingLeft: '15px', fontWeight: '700', color: this.props.verifystep === 1 ? "#1D2A64" : "#BFBFBF" }}>Fill Details</span>
                                <div style={{ paddingTop: '10px', paddingLeft: '15px', paddingRight: '15px', width: '65%' }}>
                                    <hr style={{ width: 'auto' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', width: '45%' }}>
                                {this.props.verifystep > 2 ?
                                    <div className="stepNo" style={{ backgroundColor: "#7DD982" }}> <IconCheck /> </div>
                                    :
                                    <div className="stepNo" style={{ backgroundColor: this.props.verifystep === 2 ? "#1D2A64" : "#EEEEEE", color: this.props.verifystep === 2 ? "#FFFFFF" : "#BFBFBF" }}>2</div>
                                }
                                <span style={{ paddingTop: '15px', paddingLeft: '15px', fontWeight: '700', color: this.props.verifystep === 2 ? "#1D2A64" : "#BFBFBF" }}>Create Metamask Wallet</span>
                                <div style={{ paddingTop: '10px', paddingLeft: '15px', paddingRight: '15px', width: '55%' }}>
                                    <hr style={{ width: 'auto' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', float: 'end' }}>
                                <div className="stepNo " style={{ backgroundColor: this.props.verifystep === 3 ? "#1D2A64" : "#EEEEEE", color: this.props.verifystep === 3 ? "#FFFFFF" : "#BFBFBF" }}>3</div>
                                <span style={{ paddingTop: '15px', paddingLeft: '15px', fontWeight: '700', color: this.props.verifystep === 3 ? "#1D2A64" : "#BFBFBF" }}>Complete Verification</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CompSteps;
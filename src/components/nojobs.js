import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import nojobs from '../assets/NoJobs.png';

function NoJobs() {
    return (
        <Col xs={12} style={{}}>
            <div className="nojobs">
                <img src={nojobs} alt="nojobs" style={{ width: '400px' }} />
            </div>
        </Col>
    )
}

export default NoJobs;
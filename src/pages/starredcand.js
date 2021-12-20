import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CardStarred from '../components/cardstarred';

function StarredCandidate() {
    return (
        <Container>
            <Row>
                <h4 style={{ textAlign: 'start' }}>Starred Candidates</h4>
                <Col xs={12}>
                    <div style={{ paddingTop: '15px', maxHeight: '87vh', overflowX: 'auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', alignItems: 'center' }}>
                        <CardStarred />
                        <CardStarred />
                        <CardStarred />
                        <CardStarred />
                        <CardStarred />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default StarredCandidate;
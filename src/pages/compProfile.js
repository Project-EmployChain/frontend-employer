import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/navbar';

import { IconEdit, IconWallet, IconPreferences, IconSettings, IconHelp, IconLogout } from '../assets/icon';

import GoogleLogo from '../assets/google_png.png';

function CompanyProfilePage() {
    return (
        <div className="dashboardpage">
            <NavBar />
            <Container style={{ paddingTop: '30px' }}>
                <Row>
                    <Col xs={3} style={{ textAlign: 'center' }}>
                        <div className="company-left-bar">
                            <div style={{ width: '100%', paddingTop: '20px', paddingBottom: '20px', backgroundColor: '#FFFFFF' }}>
                                <img src={GoogleLogo} />
                            </div>
                            <div className="company-left-bar-content">
                                <div style={{ marginTop: '-50px', width: '100%', textAlign: 'end', position: 'relative' }}>
                                    <div className="company-edit"><IconEdit /></div>
                                </div>
                                <h5 style={{ textAlign: 'start', fontWeight: '600', color: '#1D2A64', clear: 'both' }}>About Company</h5>
                                <p style={{ fontSize: '12px', color: '#787878', fontWeight: '500', paddingTop: '15px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor imperdiet nunc turpis at dui. Integer egestas diam faucibus sed suspendisse sollicitudin velit sapien, luctus. Quam leo vel mollis congue id laoreet. Arcu, proin enim in proin. Cursus scelerisque neque vitae turpis gravida cras sed. In lacinia eget enim dui integer. Dui orci enim id ut dis.
                                    Vulputate pellentesque massa praesent amet, volutpat commodo tellus. Amet nisl.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div className="profile-small-card" style={{ marginTop: '0px', marginRight: '40px', padding: '30px 15px' }}>
                            <div style={{ display: 'flex', color: '#1D2A64', fontWeight: '600' }}>
                                <div style={{ flex: 1 , borderRight: '1px solid #D3D3D3' }}>
                                    <div>Jobs Posted</div>
                                    <div style={{ fontSize: '22px' }}>6</div>
                                </div>
                                <div style={{ flex: 1 , borderRight: '1px solid #D3D3D3'}}>
                                    <div>Candidates hired</div>
                                    <div style={{ fontSize: '22px' }}>10</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div>Total Applicants</div>
                                    <div style={{ fontSize: '22px' }}>3k</div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-small-card" style={{  marginRight: '40px', padding: '5px 10px'}}>
                            <div className="settings-option">
                                <IconWallet/><span style={{ paddingLeft: '30px' }}>Metamask Wallet</span>
                            </div>
                            <div className="settings-option">
                                <IconPreferences/><span style={{ paddingLeft: '30px' }}>Preferences</span>
                            </div>
                            <div className="settings-option">
                                <IconSettings/><span style={{ paddingLeft: '30px' }}>Settings</span>
                            </div>
                            <div className="settings-option">
                                <IconHelp/><span style={{ paddingLeft: '30px' }}>Help</span>
                            </div>
                            <div className="settings-option" style={{ borderBottom: 'none' }}>
                                <IconLogout/><span style={{ paddingLeft: '30px', color: '#B60C0C' }}>Logout</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default CompanyProfilePage;
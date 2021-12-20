import React, { Component } from 'react';
import test from '../assets/test.png';

import { IconLocation, IconNext } from '../assets/icon';

function CardCandidate(props) {
    return (
        <div className="cardcand">
            <img className="cardcand-img" src={test}/>
            <div style={{ paddingTop: '25px' }}>
                <div style={{ fontSize: '18px', fontWeight: '600' }}>Raksha S</div>
                <div style={{ fontSize: '14px', paddingTop: '5px'}}><IconLocation/> Bangalore</div>
                <div style={{ paddingLeft: '5%', paddingRight: '5%' }}><hr/></div>
                <div style={{ fontSize: '14px', fontWeight: '600', display: 'flex'}}>
                    <div style={{ flex: 1, color: '#1D2A64'}}>Exp : 2 Years</div>
                    <div style={{ flex: 1, color: '#1D2A64'}}>View Profile <IconNext/></div>
                </div>
            </div>
        </div>
    )
}

export default CardCandidate;
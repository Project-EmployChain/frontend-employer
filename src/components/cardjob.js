import React, { Component } from 'react';
import { IconNext, IconLocation } from '../assets/icon';

function CardJob(props){
    console.log(props);
    return(
        <div className="card-job">
            <p style={{ color: '#1D2A64', fontSize: '20px', fontWeight: '500' }}>{props.job.jobrole}<span style={{ color: "#D3D3D3", fontSize: '15px', float: 'right', marginRight: '20px', paddingTop: '5px' }}>3 days ago</span></p>
            <div>
                <p style={{ color: '#473F44', fontWeight: '500' }}>{props.job.jobtype}<span style={{ float: 'right', marginRight: '20px', fontWeight: '600' }}>{props.job.salary}</span></p>
            </div>
            <div style={{ paddingRight: '25px' }}><hr/></div>
            <div>
            <p style={{ color: '#473F44', fontWeight: '500' }}><IconLocation />{' '}{props.job.location}<span style={{ float: 'right', marginRight: '20px', fontWeight: '600', fontSize: '15px' }}>{props.job.applicants} Applicants <IconNext/></span></p>
            </div>
        </div>
    )
}

export default CardJob;
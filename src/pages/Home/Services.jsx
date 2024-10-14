import React, { useState } from 'react';
import './Services.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Services() {

    const [actService, setActService] = useState(1)
    return (
        <div className='services-section' id='services'>
            <div>
                <h1>Services</h1>
            </div>
            <div className='services-section-boxes'>
                <div className='service-boxes' style={{ display: 'flex' }}>
                    <div className={actService == 1 ? "box-color ms-5" : ""} onClick={() => {
                        setActService(1)
                    }}>WEB DEVELOPMENT SERVICES</div>
                    <div className={actService == 2 ? "box-color ms-5" : ""} onClick={() => {
                        setActService(2)
                    }}>DESIGN SERVICES</div>
                    <div className={actService == 3 ? "box-color ms-5" : ""} onClick={() => {
                        setActService(3)
                    }}>PACKAGING SERVICES</div>
                </div>
                <div>
                    {actService == 1 ? (<div className='service-item'>
                        <p>JavaScript - HTML 5 - CSS 3 - jQuery - Vue - React - PHP - MySQL</p>
                        <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Website development</div>
                        <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Corporate website</div>
                        <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Startup websites</div>
                        <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />E-commerce</div>
                        <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Web applications development</div>
                        <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Wordpress development</div>
                    </div>) : actService == 2 ? (
                        (<div className='service-item'>
                            <p>Photoshop - Illustrator - Sketch - Creative Suite - Axure - Adobe XD - Figma</p>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Web design</div>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Mobile App design</div>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />UX, UI design</div>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Logo design</div>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Brand design</div>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Banner ad design</div>
                        </div>)
                    ) : (<div>Packaging </div>)}
                </div>
            </div>
        </div>
    );
}

export default Services;
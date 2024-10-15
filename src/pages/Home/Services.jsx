import React, { useState } from 'react';
import './Services.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';
import { useMediaQuery } from 'react-responsive';


function Services() {


    const [activeBox, setActiveBox] = useState(null);

    const toggleDropdown = (boxNumber) => {
        setActiveBox(activeBox === boxNumber ? null : boxNumber);
    };


    const [actService, setActService] = useState(1)

    const isMobile = useMediaQuery({ maxWidth: 1060 });

    return (
        <div>
            {isMobile ? (

                <div className='services-section' id='services'>
                    <div>
                        <h1 className='text-shadow'>Services</h1>
                    </div>
                    <div className='service-boxes' style={{ display: 'flex', justifyContent: "center", alignItems: "center", textAlign: 'center' }}>
                        <div className={activeBox == 1 ? "box-color" : ""} onClick={() => toggleDropdown(1)}>WEB DEVELOPMENT SERVICES</div>
                        {activeBox === 1 && (
                            (<div className='service-item'>
                                <p>JavaScript - HTML 5 - CSS 3 - jQuery - Vue - React - PHP - MySQL</p>
                                <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Website development</p>
                                <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Corporate website</p>
                                <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />E-commerce</p>
                                <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Startup websites</p>
                                <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Web applications development</p>
                                <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Wordpress development</p>
                                < button className="btn shadow-lg pe-5 ps-5" style={{ color: "blue", fontWeight: "700", borderRadius: "50px", padding: "15px" }}>Read more</button>
                            </div>
                            )

                        )}

                        <div className={activeBox == 2 ? "box-color" : ""} onClick={() => toggleDropdown(2)}>DESIGN SERVICES</div>
                        {activeBox === 2 && (
                            (
                                (<div className='service-item'>
                                    <p>Photoshop - Illustrator - Sketch - Creative Suite - Axure - Adobe XD - Figma</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Web design</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Mobile App design</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />UX, UI design</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Logo design</p>
                                    p   <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Brand design</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Banner ad design</p>
                                    < button className="btn shadow-lg pe-5 ps-5" style={{ color: "blue", fontWeight: "700", borderRadius: "50px", padding: "15px" }}>Read more</button>
                                </div>)
                            )
                        )}

                        <div href="#services" className={activeBox == 3 ? "box-color" : ""} onClick={() => toggleDropdown(3)}>DIGITAL MARKETING</div>
                        {activeBox === 3 && (
                            (
                                (<div className='service-item'>
                                    <p>Value Proposition Canvas - Google Ads - Facebook Ad - Social Media</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Conversion marketing</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Content marketing</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />PPC services</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Social media marketing services</p>
                                    < button className="btn shadow-lg pe-5 ps-5" style={{ color: "blue", fontWeight: "700", borderRadius: "50px", padding: "15px" }}>Read more</button>
                                </div>
                                )
                            )
                        )}

                        <div className={activeBox == 4 ? "box-color" : ""} onClick={() => toggleDropdown(4)}>DIGITAL MARKETING</div>
                        {activeBox === 4 && (
                            (
                                (<div className='service-item'>
                                    <p>WordPress - Woocommerce PHP - AngularJS - Sketch - Figma - Axure RP</p>
                                    <p style={{ fontWeight: 700 }}><ArrowRightAltIcon />Fixed price website</p>
                                    < button className="btn shadow-lg pe-5 ps-5" style={{ color: "blue", fontWeight: "700", borderRadius: "50px", padding: "15px" }}>Read more</button>
                                </div>)
                            )
                        )}


                    </div>
                </div>


            ) : (<div className=' dis-none services-section' id='services'>
                <div>
                    <h1 className='text-shadow'>Services</h1>
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
                        }}>DIGITAL MARKETING</div>
                        <div className={actService == 4 ? "box-color ms-5" : ""} onClick={() => {
                            setActService(4)
                        }}>BUSINESS PACKAGES</div>
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
                        ) : actService == 3 ? (<div className='service-item'>
                            <p>Value Proposition Canvas - Google Ads - Facebook Ad - Social Media</p>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Conversion marketing</div>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Content marketing</div>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />PPC services</div>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Social media marketing services</div>
                        </div>) : (<div className='service-item'>
                            <p>WordPress - Woocommerce PHP - AngularJS - Sketch - Figma - Axure RP</p>
                            <div style={{ fontWeight: 700 }}><ArrowRightAltIcon />Fixed price website</div>
                        </div>)}
                        < button className="btn shadow-lg pe-5 ps-5" style={{ color: "blue", fontWeight: "700", borderRadius: "50px", padding: "15px" }}>Read more</button>

                        <div>
                            <img src="https://test.sknd.in/wp-content/uploads/2024/10/services-fig-3.png" alt="" className='hover-image' />
                            <img src="https://test.sknd.in/wp-content/uploads/2024/10/services-fig-2.png" alt="" className='hover-image' />
                            <img src="https://test.sknd.in/wp-content/uploads/2024/10/services-fig-1.png" alt="" className='hover-image' />
                        </div>

                    </div>
                </div>
            </div>)
            }
        </div >

    );
}

export default Services;
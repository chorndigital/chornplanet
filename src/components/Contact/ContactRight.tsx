import "@/styles/about.scss"

import React from "react";
import {InfoTranslation} from "@/data/info/main/InfoTranslation";
import {
    FaEnvelope,
    FaMapMarkedAlt,
    FaMobileAlt,
    FaPhone,
    FaPlaneDeparture,
    FaShoppingBag,
    FaUniversity,
    FaWhatsapp
} from "react-icons/fa";

export default function ContactRight({lang}: { lang: string }) {
    return (
        <div className="col-lg-8 contact-col-right">
            <div className="about-content about-contact">
                <div className="roles">
                    {InfoTranslation[lang].Contact.contactInfo.roles.map((item, index) => {
                        return (
                            <div key={index} className="role">
                                <h3>{item.title}<span>{item.span}</span></h3>
                                <>
                                    {
                                        item.email &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaEnvelope/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.email}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.officePhone &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaPhone/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.officePhone}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.locations &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon">
                                                    <FaMapMarkedAlt/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                <a target={"_blank"} href={item.location.link}>
                                                    {item.locations.office}
                                                </a>
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyShopping &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaShoppingBag/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyShopping}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyUniversity1 &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaUniversity/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyUniversity1}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyUniversity2 &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaUniversity/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyUniversity2}
                                            </div>
                                        </div>
                                    }

                                    {
                                        item.nearbyAirport &&
                                        <div className="item">
                                            <div className="icon-container">
                                                <div className="icon nearby">
                                                    <FaPlaneDeparture/>
                                                </div>
                                            </div>
                                            <div className="label">
                                                {item.nearbyAirport}
                                            </div>
                                        </div>
                                    }
                                </>
                            </div>
                        )
                    })}
                </div>

                <div className="contact-social-container">
                    <h3>Social & GitHub</h3>

                    {/* LinkedIn */}
                    <div className="contact-social-item">
                        <div className="about-icon-symbol">
                            <a href="https://www.linkedin.com/in/khachornchit"
                               className="linkedin"
                               target="_blank"
                            >
                                <i className="bx bxl-linkedin hover-rotate"/>
                            </a>
                        </div>
                        <div className="linkedin-text">
                            <a href="https://www.linkedin.com/in/khachornchit"
                               target="_blank"
                            >
                                www.linkedin.com
                            </a>
                        </div>
                    </div>

                    {/* Facebook */}
                    <div className="contact-social-item">
                        <div className="about-icon-symbol">
                            <a href="https://www.facebook.com/chorndigital"
                               className="facebook"
                               target="_blank"
                            >
                                <i className="bx bxl-facebook hover-rotate"/>
                            </a>
                        </div>
                        <div className="linkedin-text">
                            <a href="https://www.facebook.com/chorndigital"
                               target="_blank"
                            >
                                www.facebook.com/chorndigital
                            </a>
                        </div>
                    </div>

                    {/* GitHub */}
                    <div className="contact-social-item">
                        <div className="about-icon-symbol">
                            <a href="https://github.com/chorndigital/"
                               className="github"
                               target="_blank"
                            >
                                <i className="bx bxl-github hover-rotate"/>
                            </a>
                        </div>
                        <div className="linkedin-text">
                            <a href="https://github.com/chorndigital/"
                               target="_blank"
                            >
                                www.github.com/chorndigital
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {Row, Col, Button} from "antd";
import {PhoneOutlined} from "@ant-design/icons";

const FloatingContact = ({
                             title = 'Call us now!',
                             description = 'Click the call Icon',
                             phoneNumber = "+91 8099997489"
                         }) => {

    const [is_mobile_width, set_is_mobile_width] = useState(false);

    useEffect(() => {
        const width = document.body.clientWidth;
        if (width < 1024) {
            set_is_mobile_width(true);
        } else {
            set_is_mobile_width(false);
        }
    }, []);


    return (
        <div className="fixed inset-x-0 bottom-0 flex justify-center z-50">
            <Col
                style={{
                    padding: "20px",
                    backgroundColor: "white",
                    width: "320px",
                    height: "100px",
                    position: "relative", // Changed to relative
                    left: is_mobile_width ? '9%': "30vw", // Maintain desktop positioning
                    bottom: "4vh",
                    borderTop: "8px solid #b02636",
                    borderRadius: 20,
                    boxShadow:
                        "2px 6px 10px 0 rgba(0, 0, 0, 0.2), 2px 8px 22px 0 rgba(0, 0, 0, 0.19)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    maxWidth: "73%", // Prevent overflow on smaller screens
                }}
                className="mobile-responsive-container" // Added for potential additional styling
            >
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "-12px",
                    }}
                >
                    <div
                        style={{
                            color: "#00215b",
                            fontFamily: "'Josh', sans-serif",
                            fontSize: "17px",
                            fontWeight: "bold",
                            maxWidth: '200px', // Prevent overflow
                        }}
                    >
                        {title}
                    </div>

                </Row>
                <Row
                    style={{
                        color: "#555",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: "bold",
                        maxWidth: '280px', // Prevent overflow
                    }}
                >
                    {description}
                </Row>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<PhoneOutlined style={{fontSize: "32px"}}/>}
                    href={`tel:${phoneNumber}`}
                    style={{
                        backgroundColor: "#b02636",
                        borderColor: "#b02636",
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: 'absolute',
                        right: 16,
                        top: 16,
                    }}
                />
            </Col>
        </div>
    );
};

FloatingContact.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
};

export default FloatingContact;

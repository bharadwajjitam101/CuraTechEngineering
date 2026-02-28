import { Row, Col, Typography, Space } from "antd";
import logoImage from "../../assets/Cura Tech Enginnering WithoutB.png";
import { Link as RouterLink } from "react-router-dom";

const { Title, Text, Link } = Typography;

const FooterComponent = () => {
    return (
        <div style={{ color: "#fff" }}>
            <style>
                {`
                /* General Footer Styles */
                .footer-logo img {
                    width: 300px;
                    height: auto;
                }
                .footer-text {
                    font-size: 14px;
                }
                .footer-section {
                    padding: 66px;
                }
                .footer-links a {
                    font-size: 16px;
                    color: #fff;
                }

                /* Responsive Styles for Mobile Screens */
                @media (max-width: 768px) {
                    .footer-section {
                        padding: 24px 16px !important;
                    }
                    .footer-logo {
                        text-align: center; /* Center the logo horizontally */
                    }

                    .footer-logo img {
                        width: 180px !important; /* Adjust the logo size for smaller screens */
                        height: auto;
                        margin: 0 auto; /* Ensures horizontal centering */
                        display: block;
                    }
                }
                    .footer-left {
                        text-align: center;
                        padding: 16px 0;
                    }
                    .footer-text {
                        text-align: center;
                        margin-top: 0;
                        font-size: 13px !important;
                    }
                    .footer-links {
                        text-align: center;
                        margin-top: 16px;
                    }
                    .footer-title {
                        font-size: 18px !important;
                        text-align: center;
                    }
                    .footer-section .ant-col {
                        margin-bottom: 24px;
                    }
                    .footer-copyright {
                        text-align: center !important;
                        font-size: 12px;
                        margin-top: 64px !important;
                    }
                }
                `}
            </style>

            <Row>
                {/* Left Section with Logo */}
                <Col
                    xs={24}
                    md={6}
                    style={{
                        backgroundColor: "#b02636",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    className="footer-left"
                >
                    <Row
                        style={{
                            flexDirection: "column",
                            gap: "20px",
                        }}
                        className="footer-logo"
                    >
                        <Row>
                            <img
                                src={logoImage}
                                alt="Dustro Logo"
                                style={{ width: "300px", height: "auto" }}
                            />
                        </Row>
                        <Row>
                            <Text className="footer-text">
                                Complete engineering solutions under one roof.
                            </Text>
                        </Row>
                    </Row>
                </Col>

                {/* Right Section */}
                <Col
                    xs={24}
                    md={18}
                    style={{
                        backgroundColor: "#00215b",
                        padding: "66px 66px 0px 66px",
                    }}
                    className="footer-section"
                >
                    <Row gutter={[16, 16]}>
                        {/* Quick Links */}
                        <Col xs={24} md={12} className="footer-links">
                            <Title
                                level={2}
                                style={{ color: "#fff" }}
                                className="footer-title"
                            >
                                Quick Links
                            </Title>
                            <Space direction="vertical">
                                <Link href="#">About Company</Link>
                                <Link href="#">Our Services</Link>
                                <Link href="#">Our Projects</Link>
                                {/*<Link href="#">Pricings</Link>*/}
                                <Link href="#">Contacts</Link>
                            </Space>
                        </Col>

                        {/* Clients Support */}
                        <Col xs={24} md={12} className="footer-links">
                            <Title
                                level={2}
                                style={{ color: "#fff" }}
                                className="footer-title"
                            >
                                Clients Support
                            </Title>
                            <Space direction="vertical">
                                <Link href="#">Careers</Link>
                                <Link href="#">Our Process</Link>
                                {/*<Link href="#">FAQs</Link>*/}
                                <Link href="#">Clients Testimonials</Link>
                                {/*<Link href="#">Our Blog</Link>*/}
                            </Space>
                        </Col>

                        {/* Our News */}
                        {/*<Col xs={24} md={8} className="footer-links">*/}
                        {/*    <Title*/}
                        {/*        level={2}*/}
                        {/*        style={{ color: "#fff" }}*/}
                        {/*        className="footer-title"*/}
                        {/*    >*/}
                        {/*        Our News*/}
                        {/*    </Title>*/}
                        {/*    <Space direction="vertical" size="large">*/}
                        {/*        <div>*/}
                        {/*            <Link href="#">*/}
                        {/*                Agile Construction <br /> Management*/}
                        {/*                Building*/}
                        {/*            </Link>*/}
                        {/*            <br />*/}
                        {/*            <Text*/}
                        {/*                style={{*/}
                        {/*                    color: "#ddd",*/}
                        {/*                    fontSize: "12px",*/}
                        {/*                }}*/}
                        {/*            >*/}
                        {/*                20 Nov 2020 &nbsp; by merkulove*/}
                        {/*            </Text>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <Link href="#">*/}
                        {/*                Top Saas Construction <br /> Products*/}
                        {/*                Information*/}
                        {/*            </Link>*/}
                        {/*            <br />*/}
                        {/*            <Text*/}
                        {/*                style={{*/}
                        {/*                    color: "#ddd",*/}
                        {/*                    fontSize: "12px",*/}
                        {/*                }}*/}
                        {/*            >*/}
                        {/*                29 Nov 2020 &nbsp;by merkulove*/}
                        {/*            </Text>*/}
                        {/*        </div>*/}
                        {/*    </Space>*/}
                        {/*</Col>*/}
                    </Row>

                    {/* Copyright */}
                    <Row style={{ width: '100%', justifyContent: 'center', marginTop: 50, marginBottom: 2 }}>
                        <RouterLink to="/privacy-policy" style={{ color: '#fff', fontSize: 16, textAlign: 'center', fontWeight: 500 }}>
                            Privacy Policy
                        </RouterLink>
                    </Row>
                    <Row className="footer-copyright" style={{marginTop: 0, marginBottom: 0, width: '100%', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                        <Text style={{ color: "#fff", fontSize: "14px", textAlign: 'center', marginRight: 8 }}>
                            © 2024 CURA TECH ENGINEERING. All rights reserved.
                        </Text>
                        <span style={{ color: '#fff', fontSize: 14, margin: '0 8px' }}>|</span>
                        <Text style={{ color: "#fff", fontSize: "14px", textAlign: 'center', marginLeft: 8 }}>
                            ©2025, Proudly developed by Clear Solutions Services
                        </Text>
                    </Row>
                    <style>{`.footer-copyright { margin-top: 0 !important; margin-bottom: 0 !important; }`}</style>
                </Col>
            </Row>
        </div>
    );
};

export default FooterComponent;

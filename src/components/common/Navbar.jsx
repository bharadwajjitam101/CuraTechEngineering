import React, { useState } from "react";
import { Row, Col, Menu, Drawer, Button } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../../assets/Cura Tech Enginnering WithoutB.png";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation(); // Get current location

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    // Close the drawer when clicking a link
    const handleMenuItemClick = () => {
        setIsDrawerOpen(false);
    };

    const menuItems = [
        { label: <Link to="/" onClick={handleMenuItemClick}>Home</Link>, key: "home" },
        {
            label: (
                <span>
                    Services{" "}
                    <DownOutlined style={{ fontSize: "10px", marginLeft: "5px" }} />
                </span>
            ),
            key: "services",
            children: [
                {
                    label: (
                        <Link to="/our-service" onClick={handleMenuItemClick}>
                            Our Services
                        </Link>
                    ),
                    key: "OurService",
                },
                {
                    label: (
                        <Link to="/civil-archive" onClick={handleMenuItemClick}>
                            Civil Work Archive
                        </Link>
                    ),
                    key: "CivilArchive",
                },
                {
                    label: (
                        <Link to="/mech-archive" onClick={handleMenuItemClick}>
                            Mechanical Work Archive
                        </Link>
                    ),
                    key: "MechArchive",
                },
            ],
        },
        {
            label: (
                <span>
                    Projects{" "}
                    <DownOutlined style={{ fontSize: "10px", marginLeft: "5px" }} />
                </span>
            ),
            key: "projects",
            children: [
                {
                    label: (
                        <Link to="/single-project" onClick={handleMenuItemClick}>
                            Ongoing Project
                        </Link>
                    ),
                    key: "singleProject",
                },
                {
                    label: (
                        <Link to="/portfolio" onClick={handleMenuItemClick}>
                            Portfolio
                        </Link>
                    ),
                    key: "portfolio",
                },
            ],
        },
        { label: <Link to="/about-us" onClick={handleMenuItemClick}>About Us</Link>, key: "aboutUs" },
        { label: <Link to="/contact" onClick={handleMenuItemClick}>Contact Us</Link>, key: "contacts" },
    ];

    return (
        <div
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                background: "#fff",
                borderBottom: "1px solid #e8e8e8",
                padding: "8px 16px",
            }}
        >
            {/* Inline Responsive Styles */}
            <style>
                {`
                @media (max-width: 768px) {
                    .navbar-container {
                        padding: 8px 12px;
                        font-weight: bold;
                    }
                    .logo {
                        width: 50px;
                    }
                    .drawer-button {
                        display: block;
                        text-align: right;
                        font-weight: bold;
                    }
                    .ant-menu-item,
                    .ant-menu-submenu-title {
                        font-size: 14px;
                        font-weight: bold;
                    }
                    .ant-drawer-content {
                        width: 80%;
                    }
                    .ant-menu-submenu-popup {
                        position: relative !important;
                        left: 134px !important; 
                        box-shadow: none !important;
                        width: 60% !important;
                        margin-top: 46px;
                    }
                    .ant-menu-submenu-arrow{
                        display: none;
                    }
                }
                @media (min-width: 768px) {
                    .drawer-button {
                        display: none;
                        font-weight: bold;
                    }
                }
                `}
            </style>

            <Row
                className="navbar-container"
                justify="space-between"
                align="middle"
            >
                {/* Logo Section */}
                <Col xs={18} md={6}>
                    <img
                        src={logoImage}
                        alt="Logo"
                        className="logo"
                        style={{ width: "60px" }}
                    />
                </Col>

                {/* Desktop Menu */}
                <Col xs={0} md={18}>
                    <Menu
                        mode="horizontal"
                        style={{
                            borderBottom: "none",
                            justifyContent: "right",
                            fontSize: "17px",
                            fontWeight: "bold",
                        }}
                        className="navbar-menu"
                    >
                        {menuItems.map((item) =>
                            item.children ? (
                                <Menu.SubMenu key={item.key} title={item.label}>
                                    {item.children.map((child) => (
                                        <Menu.Item key={child.key}>
                                            {child.label}
                                        </Menu.Item>
                                    ))}
                                </Menu.SubMenu>
                            ) : (
                                <Menu.Item key={item.key}>
                                    {item.label}
                                </Menu.Item>
                            )
                        )}
                    </Menu>
                </Col>

                {/* Mobile Menu Button */}
                <Col xs={6} md={0} className="drawer-button">
                    <Button
                        type="text"
                        icon={
                            <MenuOutlined
                                style={{ fontSize: "24px", color: "#00215b" }}
                            />
                        }
                        onClick={handleDrawerOpen}
                    />
                </Col>
            </Row>

            {/* Mobile Drawer */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={handleDrawerClose}
                open={isDrawerOpen}
                destroyOnClose={true}
                bodyStyle={{
                    padding: 0,
                    overflow: "auto", // Enable scrolling for long menus
                }}
                width={300} // Fixed drawer width
            >
                <Menu
                    mode="vertical"
                    style={{
                        borderRight: "none",
                    }}
                    expandIconPosition="null" // Position the expand icon to the end
                >
                    {menuItems.map((item) =>
                        item.children ? (
                            <Menu.SubMenu
                                key={item.key}
                                title={item.label}
                                popupClassName="ant-menu-submenu-popup" // Use custom class for alignment
                            >
                                {item.children.map((child) => (
                                    <Menu.Item key={child.key}>
                                        {child.label}
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        ) : (
                            <Menu.Item key={item.key}>
                                {item.label}
                            </Menu.Item>
                        )
                    )}
                </Menu>
            </Drawer>
        </div>
    );
};

export default Navbar;

import { Col, Typography } from "antd";
import ruler from "../assets/ruler.png";
import measuringTool from "../assets/measuring-tool.png";
import engineer from "../assets/engineer.png";


const { Title } = Typography;
const FeatureSection = () => {
    const features = [
        {
            icon: (
                <img

                    src={engineer}
                    alt="Engineer Logo"
                    style={{ width: "40px", height: "40px" }}
                />
            ),
            title: "General Contract",
            description:
                " Full-service construction, delivered on time and within budget.",
        },
        {
            icon: (
                <img
                    src={ruler}
                    alt="ruler Logo"
                    style={{ width: "40px", height: "40px" }}
                />
            ),
            title: "Project Planning",
            description:
                "Streamlined strategies for smooth, efficient execution.",
        },
        {
            icon: (
                <img
                    src={measuringTool}
                    alt="measuringTool Logo"
                    style={{ width: "40px", height: "40px" }}
                />
            ),
            title: "Turnkey Solutions",
            description:
                "End-to-end service for a hassle-free project journey.",
        },
    ];

    return (
        <Col
            style={{
                padding: "36px 52px",
                backgroundColor: "white",
                width: "400px",
                borderTop: "5px solid #001ED3",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                bottom: "16vh",
            }}
        >
            <Title level={3} style={{ color: "#00215b", textAlign: "left" }}>
                We Construct, Consult and Create Infrastructures
            </Title>
            <Col gutter={[16, 24]} style={{ marginTop: "24px" }}>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            marginTop: "16px",
                        }}
                    >
                        <div style={{ marginTop: "8px" }}>{feature.icon}</div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                textAlign: "left",
                            }}
                        >
                            <div style={{ color: "#00215b", fontSize: "16px" }}>
                                {feature.title}
                            </div>
                            <div style={{ color: "#555" }}>
                                {feature.description}
                            </div>
                        </div>
                    </div>
                ))}
            </Col>
        </Col>
    );
};

export default FeatureSection;

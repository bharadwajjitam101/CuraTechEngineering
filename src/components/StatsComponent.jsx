import { Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const StatsComponent = () => {
    return (
        <Row
            style={{
                textAlign: "center",
                display: "flex",
                height: "160px",
                width: "360px",
                left: "12vw",
            }}
        >
            <Col
                span={12}
                style={{
                    backgroundColor: "#00215b",
                    color: "white",
                    padding: "24px 16px",
                }}
            >
                <Title
                    level={1}
                    style={{ color: "white", marginBottom: "8px" }}
                >
                    20+
                </Title>
                <Text style={{ color: "white", fontSize: "16px" }}>
                    Completed Projects
                </Text>
            </Col>
            <Col
                span={12}


                style={{
                    backgroundColor: "#d32f2f",
                    color: "white",
                    padding: "24px 16px",
                }}
            >
                <Title
                    level={1}
                    style={{ color: "white", marginBottom: "8px" }}
                >
                    15+
                </Title>
                <Text style={{ color: "white", fontSize: "16px" }}>
                    Years of Experience
                </Text>
            </Col>
        </Row>
    );
};

export default StatsComponent;

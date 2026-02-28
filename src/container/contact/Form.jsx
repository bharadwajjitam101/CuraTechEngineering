import { Button, Form, Input, Row, Col, message } from "antd";
import styles from "../../container/contact/Contact.module.css";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

const SubmitForm = () => {
    const [form] = Form.useForm();
    const [is_mobile_width, set_is_mobile_width] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const width = document.body.clientWidth;
        if (width < 600) {
            set_is_mobile_width(true);
        } else {
            set_is_mobile_width(false);
        }
    }, []);

    const inputStyle = {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        borderRadius: "6px",
        minHeight: "60px",
        width: '100%',
    };

    const handleSubmit = async (values) => {
        setIsSubmitting(true);
        
      
        console.log('Attempting to send email with values:', values);

        try {
         
            const serviceId = 'service_e57rdgb'; 
            const templateId = 'template_10cy7fd';
            const publicKey = 'iaPNOiyivAHf0wIS0';

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Missing EmailJS credentials');
            }

            const templateParams = {
                from_name: values.user_name,
                user_name: values.user_name,
                user_email: values.user_email,
                phone: values.phone,
                address: values.address,
                message: values.message,
            };

            console.log('Sending with template params:', templateParams);

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            console.log('EmailJS Response:', response);

            if (response.status === 200) {
                message.success({
                    content: 'Message sent successfully!',
                    duration: 5,
                });
                form.resetFields();
            }
        } catch (error) {
            console.error('Detailed error:', error);
            
            let errorMessage = 'Failed to send message. ';
            
            if (error.message === 'Missing EmailJS credentials') {
                errorMessage += 'Email service not properly configured.';
            } else if (error.text) {
                errorMessage += error.text;
            } else {
                errorMessage += 'Please check your network connection and try again.';
            }

            message.error({
                content: errorMessage,
                duration: 5,
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
        }}>
            <Form
                form={form}
                onFinish={handleSubmit}
                scrollToFirstError={{
                    behavior: "instant",
                    focus: true,
                }}
                style={{
                    borderRadius: "8px",
                    width: is_mobile_width ? '80%' : "60%",
                    padding: "20px",
                    maxWidth: is_mobile_width ? null : "60vw",
                }}
                labelCol={{
                    span: 6,
                }}
            >
                {}
                {is_mobile_width ? (
                    <>
                        <Form.Item
                            name="user_name"
                            rules={[{ required: true, message: "Please enter your full name" }]}
                        >
                            <Input placeholder="Your Full Name" style={inputStyle} />
                        </Form.Item>
                        <Form.Item
                            name="user_email"
                            rules={[
                                { required: true, message: "Please enter your email address" },
                                { type: 'email', message: "Please enter a valid email address" }
                            ]}
                        >
                            <Input placeholder="Your Email Address" style={inputStyle} />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: "Please enter your address" }]}
                        >
                            <Input placeholder="Your Address" style={inputStyle} />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: "Please enter your phone number" }]}
                        >
                            <Input placeholder="Your Phone Number" style={inputStyle} />
                        </Form.Item>
                        <Form.Item name="message">
                            <Input.TextArea rows={8} placeholder="Additional Information" style={inputStyle} />
                        </Form.Item>
                    </>
                ) : (
                    <>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="user_name"
                                    rules={[{ required: true, message: "Please enter your full name" }]}
                                >
                                    <Input placeholder="Your Full Name" style={inputStyle} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="user_email"
                                    rules={[
                                        { required: true, message: "Please enter your email address" },
                                        { type: 'email', message: "Please enter a valid email address" }
                                    ]}
                                >
                                    <Input placeholder="Your Email Address" style={inputStyle} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="address"
                                    rules={[{ required: true, message: "Please enter your address" }]}
                                >
                                    <Input placeholder="Your Address" style={inputStyle} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="phone"
                                    rules={[{ required: true, message: "Please enter your phone number" }]}
                                >
                                    <Input placeholder="Your Phone Number" style={inputStyle} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item name="message">
                            <Input.TextArea rows={8} placeholder="Additional Information" style={inputStyle} />
                        </Form.Item>
                    </>
                )}

                <Form.Item>
                    <div className={styles.actionContainer}>
                        <button 
                            type="submit" 
                            className={styles.contactButton}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit Form'}
                        </button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SubmitForm;
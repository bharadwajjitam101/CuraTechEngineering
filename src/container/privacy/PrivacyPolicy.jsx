import styles from "../../components/common/Common.module.css";
import React from "react";
import Navbar from "../../components/common/Navbar";

const purposes = [
    "Respond to Inquiries",
    "Improve Website Experience",
    "Run & Measure Marketing Campaigns",
    "Ensure Project Readiness & Compliance"
];
const details = [
    "Provide quotes, follow-up communications, project proposals",
    "Understand traffic, optimize content and performance",
    "On Meta and Google to drive lead generation",
    "For construction/plumbing/firefighting designs and planning"
];

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />
            <section className={styles.Container} style={{backgroundColor: '#fff', minHeight: '60vh', flexDirection: 'column', justifyContent: 'flex-start'}}>
                <div className={styles.title} style={{marginBottom: 24, color: '#00215b', textAlign: 'center'}}>Privacy Policy</div>
                <div
                    className={styles.description}
                    style={{
                        maxWidth: 900,
                        margin: '0 auto',
                        color: '#333',
                        fontSize: 16,
                        lineHeight: 1.7,
                        textAlign: 'justify',
                        paddingLeft: 0,
                        paddingRight: 0,
                    }}
                >
                    <style>{`
                        @media (max-width: 600px) {
                            .${styles.description} {
                                margin-left: 5vw !important;
                                margin-right: 5vw !important;
                            }
                        }
                    `}</style>
                    <p><strong>Effective Date:</strong> July 01, 2025</p>
                    <p>
                        Welcome to Cura Tech Engineering (“we,” “us,” “our”). We are a trusted leader in civil & mechanical engineering, offering turnkey solutions—from architectural & structural design to construction, pipeline installations, and firefighting systems—for residential, commercial, and industrial projects. With over 15 years of experience and a commitment to safety, quality, and regulatory compliance, we serve clients throughout the region. Learn more on our site: <i>“15+ Years of Experience… Civil & Mechanical Engineering Services”</i> <a href="https://curatechengineering.com/" target="_blank" rel="noopener noreferrer">curatechengineering.com</a> 
                    </p>
                    <p>This Privacy Policy explains how we collect, use, share, and secure your data when you:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>Visit or interact with our website: <a href="https://curatechengineering.com/" target="_blank" rel="noopener noreferrer">https://curatechengineering.com/</a></li>
                        <li>Request a quote or use our “Call us now” functionality</li>
                        <li>Engage with our marketing campaigns (e.g. Google Ads or Meta Lead Ads)</li>
                    </ul>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>1. Information We Collect</h2>
                    <h3 className={styles.subheading} style={{marginTop: 16}}>A. Personal & Contact Details</h3>
                    <p>Through contact forms and quote requests, we collect:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>Name, company/role, email address, phone number, project requirements (e.g., pipeline, firefighting, construction) (curatechengineering.com).</li>
                    </ul>
                    <h3 className={styles.subheading} style={{marginTop: 16}}>B. Technical & Usage Data</h3>
                    <p>Collected automatically when you visit our website:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>IP address, browser/device type, pages visited, referral URLs, session timings</li>
                        <li>Retrieved via cookies, analytics tools, and tracking pixels</li>
                    </ul>
                    <h3 className={styles.subheading} style={{marginTop: 16}}>C. Advertising Interaction Data</h3>
                    <p>Includes clicks, form submissions, and impressions on ads delivered via Google or Meta platforms.</p>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>2. How We Use Your Information</h2>
                    <p>We utilize the collected data to:</p>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 2fr',
                            gap: 0,
                            border: '1px solid #eee',
                            borderRadius: 8,
                            overflow: 'hidden',
                            margin: '24px 0',
                            fontSize: 15,
                        }}
                    >
                        <style>{`
                            @media (max-width: 600px) {
                                .privacy-table-cell {
                                    word-break: break-word !important;
                                    white-space: normal !important;
                                    font-size: 14px !important;
                                    padding-left: 4px !important;
                                    padding-right: 4px !important;
                                }
                            }
                        `}</style>
                        <div style={{background: '#f5f5f5', fontWeight: 600, padding: '16px 12px', borderRight: '1px solid #eee', color: '#00215b'}} className="privacy-table-cell">Purpose</div>
                        <div style={{background: '#f5f5f5', fontWeight: 600, padding: '16px 12px', color: '#00215b'}} className="privacy-table-cell">Details</div>
                        {purposes.map((purpose, idx) => (
                            <React.Fragment key={purpose}>
                                <div style={{padding: '14px 12px', borderRight: '1px solid #eee', borderTop: idx === 0 ? 'none' : '1px solid #eee'}} className="privacy-table-cell">{purpose}</div>
                                <div style={{padding: '14px 12px', borderTop: idx === 0 ? 'none' : '1px solid #eee'}} className="privacy-table-cell">{details[idx]}</div>
                            </React.Fragment>
                        ))}
                    </div>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>3. Legal Basis for Processing</h2>
                    <p>Our processing is based on:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>Consent, when you submit forms or request quotes</li>
                        <li>Legitimate Interests, for marketing, analytics, and business operations</li>
                        <li>Legal Requirements, if required for compliance or regulatory reporting</li>
                    </ul>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>4. Cookies & Tracking Technologies</h2>
                    <p>We use cookies, web beacons, and similar technologies to:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>Monitor website performance and visitor behavior</li>
                        <li>Enable remarketing and personalized ad experiences across Google/Meta</li>
                        <li>Deliver secure and consistent browsing experience</li>
                    </ul>
                    <p>Manage your preferences:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>Control browser cookies directly</li>
                        <li>Adjust Meta ad settings via Facebook/Instagram</li>
                        <li>Configure preferences in your Google account’s Ad Settings</li>
                    </ul>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>5. Disclosure of Your Information</h2>
                    <p>We do not sell your personal data. We may share information with:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>Service providers: hosting, analytics, CRM, form-handling, project management</li>
                        <li>Ad platforms: Google, Facebook/Instagram—only for campaign deployment and tracking</li>
                        <li>Legal authorities, if required by law or court order</li>
                    </ul>
                    <p>All partners are bound by confidentiality agreements and data protection principles.</p>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>6. Your Rights & Choices</h2>
                    <p>Depending on your jurisdiction, you have the right to:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>Access data we hold about you</li>
                        <li>Correct or update inaccurate personal information</li>
                        <li>Delete your data or withdraw consent</li>
                        <li>Opt-out of marketing communications at any time</li>
                        <li>Disable cookies via your browser settings</li>
                    </ul>
                    <p>To exercise these rights, contact us at:</p>
                    <div style={{marginLeft: 16, marginBottom: 16, maxWidth: 350}}>
                        <div style={{textAlign: 'left'}}>Email: <a href="mailto:curatechengineering@gmail.com">curatechengineering@gmail.com</a></div>
                        <div style={{textAlign: 'left'}}>Contact Number: +91 8099997489</div>
                    </div>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>7. Data Security & Retention</h2>
                    <p>We maintain appropriate technical and organizational safeguards—like encrypted databases, secure hosting, and access controls—to protect your data. We retain information only as long as necessary for legitimate business or legal obligations. Once completed, or upon your request, we will delete or anonymize your data.</p>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>8. Third-Party Links & Integrations</h2>
                    <p>Our website may include links or integrations with third-party services (e.g., maps, form processors). We are not liable for their privacy practices—please review their individual policies.</p>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>9. Children’s Privacy</h2>
                    <p>Our services are designed for professionals and organizations. We do not knowingly collect data from individuals under 16. If you believe we have collected such data, please reach out so we can delete it.</p>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>10. Changes to This Policy</h2>
                    <p>We may periodically update this Privacy Policy. Changes will be reflected with an updated Effective Date. We encourage you to review this page from time to time.</p>

                    <h2 className={styles.heading} style={{marginTop: 32, color: '#b02636'}}>11. Contact Us</h2>
                    <p>If you have any questions or requests about this Privacy Policy or your personal data:</p>
                    <ul style={{marginLeft: 24}}>
                        <li>Cura Tech Engineering</li>
                        <li>Jayanagar, Guwahati, Assam – House No 06, 781022</li>
                        <li>Email: <a href="mailto:curatechengineering@gmail.com">curatechengineering@gmail.com</a></li>
                        <li>Contact Number: +91 8099997489</li>
                        <li><a href="https://curatechengineering.com/" target="_blank" rel="noopener noreferrer">https://curatechengineering.com/</a></li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy; 
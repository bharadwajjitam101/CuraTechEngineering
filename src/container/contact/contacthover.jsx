import React, {useState, useEffect, useRef} from 'react';
import {FaFacebook, FaYoutube, FaInstagram, FaMobile, FaMailBulk} from 'react-icons/fa';
import './contacthover.css';

const SocialContact = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({x: window.innerWidth - 60, y: window.innerHeight / 2});
    const [side, setSide] = useState('right');
    const [hover, setHover] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(null);

    const containerRef = useRef(null);

    const onHover = (index) => {
        setHover(true);
        setHoverIndex(index);
    };

    const socialLinks = [
        {
            icon: <FaMailBulk/>,
            href: 'contact',
            label: 'Enquiry',
            color: '#001d52'
        },
        {
            icon: <FaFacebook/>,
            href: 'https://www.facebook.com/profile.php?id=61568431042708&mibextid=wwXIfr&mibextid=wwXIfr',
            label: 'Facebook',
            color: '#1877F2',
        },
        {
            icon: <FaInstagram/>,
            href: 'https://www.instagram.com/cura_tech_engineering/profilecard/?igsh=Z2k5emlnNjlkeTJp',
            label: 'Instagram',
            color: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        },

        {
            icon: <FaYoutube/>,
            href: 'https://youtube.com/@curatechengineering?si=uw75isJOo-dKPWHT',
            label: 'YouTube',
            color: '#FF0000',
        },

        {
            icon: <FaMobile/>,
            href: 'tel:8099997489',
            label: 'Phone Call',
            color: '#317873',
        },
    ];

    const handleMouseDown = (e) => {
        setIsDragging(true);

        // Calculate offset of mouse from container's top-left
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            containerRef.current.dataset.offsetX = e.clientX - rect.left;
            containerRef.current.dataset.offsetY = e.clientY - rect.top;
        }

        // Prevent text selection
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        if (containerRef.current) {
            const offsetX = parseFloat(containerRef.current.dataset.offsetX || 0);
            const offsetY = parseFloat(containerRef.current.dataset.offsetY || 0);

            // Calculate new position
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            // Constrain to window bounds
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const containerWidth = containerRef.current.offsetWidth;
            const containerHeight = containerRef.current.offsetHeight;

            const constrainedX = Math.max(0, Math.min(newX, windowWidth - containerWidth));
            const constrainedY = Math.max(0, Math.min(newY, windowHeight - containerHeight));

            setPosition({x: constrainedX, y: constrainedY});
        }
    };

    const handleMouseUp = () => {
        if (!isDragging) return;

        setIsDragging(false);

        // Determine which side to snap to
        if (containerRef.current) {
            const windowWidth = window.innerWidth;
            const containerWidth = containerRef.current.offsetWidth;

            if (position.x < windowWidth / 2) {
                setSide('left');
                setPosition(prev => ({...prev, x: 0}));
            } else {
                setSide('right');
                setPosition(prev => ({
                    ...prev,
                    x: windowWidth - containerWidth
                }));
            }
        }
    };

    useEffect(() => {
        // Add global event listeners
        const handleGlobalMouseMove = (e) => {
            if (isDragging) {
                handleMouseMove(e);
            }
        };

        const handleGlobalMouseUp = () => {
            if (isDragging) {
                setIsDragging(false);
            }
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleGlobalMouseMove);
            window.addEventListener('mouseup', handleGlobalMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleGlobalMouseMove);
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className={`social-contact ${side === 'left' ? 'social-contact-left' : 'social-contact-right'} ${isDragging ? 'dragging' : ''}`}
            style={{
                position: 'fixed',
                right: 0,
                cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => {
                setHoverIndex(null);
                setHover(false);
            }}
        >
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    onMouseEnter={() => onHover(index)}
                    href={link.href}
                    target={index !== 0 ? "_blank" : ''}
                    rel="noopener noreferrer"
                    className="social-icon"
                    // title={link.label}
                    style={{
                        background: link.color ? link.color : 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                        padding: 24,
                        borderTopLeftRadius: index === 0 ? 12 : 0,
                        borderBottomLeftRadius: index === socialLinks.length - 1 ? 12 : 0,
                        display: "flex",
                        flexDirection: 'row',
                        height: index === 0 ? 100 : null,
                        gap: 6,
                    }}
                >
                    {index !== 0 ? <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: index === 0 ? 'rotate(90deg)' : null,
                    }}>
                        {link.icon}
                    </div> : null}
                    {index === 0 ? <div style={{
                        fontSize: 16,
                        width: 80,
                        textAlign: 'center',
                        transform: 'rotate(90deg)',
                    }}>{link.label}</div> : <div/>}
                </a>
            ))}
        </div>
    );
};

export default SocialContact;

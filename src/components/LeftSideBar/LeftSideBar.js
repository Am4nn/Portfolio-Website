import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Icon } from '../Icons';
import styles from './LeftSideBar.module.css';

const socialMedia = [
    {
        name: 'GitHub',
        url: 'https://github.com/Am4nn',
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/include._',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/company/include-sgsits/',
    },
    {
        name: 'Email',
        url: 'mailto:125aryaaman@gmail.com',
    }
];

const mountDelay = 600 + 1000;
const loaderDelay = 1000;
const animationClass = "fadeup";

const LeftBottomSide = ({ children }) => {
    return (
        <div className={[styles.StyledSideElement, styles.left].join(" ")}>
            {children}
        </div>
    );
};

const SocialSideBar = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), mountDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <LeftBottomSide>
            <ul className={styles.StyledSocialList}>
                <TransitionGroup component={null}>
                    {isMounted && socialMedia && [{}, ...socialMedia, {}].map(({ url, name }, i) => (
                        <CSSTransition mountOnEnter={false} key={i} classNames={animationClass} timeout={loaderDelay}>
                            {url ? <li style={{ transitionDelay: `${i + 1}00ms` }} key={i}>
                                <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                                    <Icon name={name} />
                                </a>
                            </li> : <div className={styles.bar} style={{ transitionDelay: `${i + 1}00ms` }} />}
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </LeftBottomSide>
    )
};

export default SocialSideBar;
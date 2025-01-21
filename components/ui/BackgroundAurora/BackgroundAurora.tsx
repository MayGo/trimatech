'use client';
import React, { ReactNode } from 'react';
import styles from './BackgroundAurora.module.css';

interface AuroraBackgroundProps {
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({ showRadialGradient = true, ...props }: AuroraBackgroundProps) => {
    return (
        <div className={`${styles.container}`} {...props}>
            <div className={styles.wrapper}>
                <div className={`${styles.aurora} ${showRadialGradient ? styles.radialMask : ''}`} />
            </div>
        </div>
    );
};

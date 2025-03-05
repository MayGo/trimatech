'use client';
import { useRef } from 'react';
import { useEffect } from 'react';
import dedicatedMaintenanceAnimation from './dedicated-maintenance.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export const DedicatedMaintananceImage = () => {
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.5);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={dedicatedMaintenanceAnimation}
            loop={true}
            style={{ height: '120%', width: '120%', objectFit: 'contain' }}
        />
    );
};

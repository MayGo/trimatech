'use client';
import manWorkingAnimation from './man-working.json';
import Lottie, { LottieRef } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const ManWorking = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.2);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={manWorkingAnimation}
            loop={true}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

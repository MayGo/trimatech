'use client';
import businessValueAnimation from './business-value.json';
import Lottie, { LottieRef } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const BusinessValue = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.2);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={businessValueAnimation}
            loop={true}
            style={{ height: '110%', width: '110%', objectFit: 'contain' }}
        />
    );
};

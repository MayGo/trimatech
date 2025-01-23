'use client';
import customerAssistanceAnimation from './customer-assistance.json';
import Lottie, { LottieRef } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const CustomerAssistance = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.6);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={customerAssistanceAnimation}
            loop={true}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

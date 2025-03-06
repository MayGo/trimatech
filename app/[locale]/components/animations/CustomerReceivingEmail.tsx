'use client';
import customerReceivingEmailAnimation from './customer-receiving-email2.json';
import Lottie, { LottieRef } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const CustomerReceivingEmail = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.1);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={customerReceivingEmailAnimation}
            loop={true}
            style={{ height: '140%', width: '140%', objectFit: 'contain' }}
        />
    );
};

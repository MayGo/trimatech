'use client';
import businessAgreementAnimation from './business-agreement.json';
import Lottie, { LottieRef } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const BusinessAgreement = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.8);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={businessAgreementAnimation}
            loop={true}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

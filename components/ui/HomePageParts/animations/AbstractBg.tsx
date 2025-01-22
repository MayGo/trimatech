'use client';
import abstractBgAnimation from './Abstract-Waves-Circles2.json';
import Lottie, { LottieRef } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const AbstractBg = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.1);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={abstractBgAnimation}
            loop={true}
            style={{ height: '150%', width: '150%', objectFit: 'contain' }}
        />
    );
};

'use client';
import { useRef } from 'react';
import { useEffect } from 'react';
import adaptiveInterfaceAnimation from './adaptive-interface.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export const AdaptiveInterface = () => {
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.3);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={adaptiveInterfaceAnimation}
            loop={true}
            style={{ height: '120%', width: '120%', objectFit: 'contain' }}
        />
    );
};

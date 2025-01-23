'use client';
import developerCommunicationsAnimation from './developer-communications.json';
import Lottie, { LottieRef } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const DeveloperCommunications = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.2);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={developerCommunicationsAnimation}
            loop={true}
            style={{ height: '120%', width: '120%', objectFit: 'contain' }}
        />
    );
};

'use client';
import questionsAnimation from './questions.json';
import Lottie, { LottieRef } from 'lottie-react';
import { useRef, useEffect } from 'react';

export const Questions = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.3);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={questionsAnimation}
            loop={true}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

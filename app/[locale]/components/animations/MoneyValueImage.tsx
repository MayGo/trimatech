'use client';
import { useRef } from 'react';
import { useEffect } from 'react';
//import moneyValueAnimation from './money-value.json';
import financialInnovationAnimation from './financial-innovation.json';
import Lottie, { LottieRef } from 'lottie-react';

export const MoneyValueImage = () => {
    const lottieRef: LottieRef = useRef(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.05);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={financialInnovationAnimation}
            loop={true}
            style={{ height: '170%', width: '170%', objectFit: 'contain' }}
        />
    );
};

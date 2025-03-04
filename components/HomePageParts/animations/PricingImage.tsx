'use client';
import pricingAnimation from './pricing.json';
import Lottie from 'lottie-react';

export const PricingImage = () => {
    return (
        <Lottie
            animationData={pricingAnimation}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

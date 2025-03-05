'use client';
import heroAnimation from './hero-animation.json';
import Lottie from 'lottie-react';

export const HeroImage = () => {
    return (
        <Lottie
            animationData={heroAnimation}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

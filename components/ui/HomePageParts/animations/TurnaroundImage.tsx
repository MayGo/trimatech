'use client';
import turnaroundAnimation from './turnaround.json';
import Lottie from 'lottie-react';

export const TurnaroundImage = () => {
    return (
        <Lottie
            animationData={turnaroundAnimation}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

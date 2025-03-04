'use client';
import discussAnimation from './discuss.json';
import Lottie from 'lottie-react';

export const DiscussImage = () => {
    return (
        <Lottie
            animationData={discussAnimation}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

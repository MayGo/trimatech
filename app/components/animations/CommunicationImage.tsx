'use client';
import communicationAnimation from './communication.json';
import Lottie from 'lottie-react';

export const CommunicationImage = () => {
    return (
        <Lottie
            animationData={communicationAnimation}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

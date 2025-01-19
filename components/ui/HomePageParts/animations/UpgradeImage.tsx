'use client';
import upgradeAnimation from './upgrade.json';
import Lottie from 'lottie-react';

export const UpgradeImage = () => {
    return (
        <Lottie
            animationData={upgradeAnimation}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

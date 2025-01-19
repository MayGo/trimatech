'use client';
import dedicatedMaintenanceAnimation from './dedicated-maintenance.json';
import Lottie from 'lottie-react';

export const DedicatedMaintananceImage = () => {
    return (
        <Lottie
            animationData={dedicatedMaintenanceAnimation}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

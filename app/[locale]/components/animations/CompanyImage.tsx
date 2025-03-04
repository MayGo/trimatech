'use client';
import companyImage from './company.json';
import Lottie from 'lottie-react';

export const CompanyImage = () => {
    return (
        <Lottie
            animationData={companyImage}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

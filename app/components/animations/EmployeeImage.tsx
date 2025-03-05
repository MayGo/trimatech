'use client';
import employeeImage from './employee.json';
import Lottie from 'lottie-react';

export const EmployeeImage = () => {
    return (
        <Lottie
            animationData={employeeImage}
            loop={false}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
        />
    );
};

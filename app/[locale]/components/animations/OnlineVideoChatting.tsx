'use client';
import { useRef } from 'react';
import { useEffect } from 'react';
import onlineVideoChattingAnimation from './online-video-chatting.json';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

export const OnlineVideoChatting = () => {
    const lottieRef = useRef<LottieRefCurrentProps | null>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.5);
        }
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={onlineVideoChattingAnimation}
            loop={true}
            style={{ height: '120%', width: '120%', objectFit: 'contain' }}
        />
    );
};

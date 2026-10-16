'use client';
import { useEffect } from 'react';

export const ScrollToAnchorOnPageLoad = () => {
    useEffect(() => {
        // Check if there's a hash in the URL
        const hash = window.location.hash;
        if (hash) {
            // Remove the '#' from the hash to get the element ID
            const elementId = hash.substring(1);
            const element = document.getElementById(elementId);
            if (element) {
                // Scroll to the element
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return undefined;
};

import { useEffect } from 'react';

const Analytics = () => {
    useEffect(() => {

        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID`;
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'YOUR_TRACKING_ID');
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default Analytics;

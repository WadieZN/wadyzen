import React, { useEffect, useState } from 'react';

const PageLoad = () => {
    const [loadImg, setLoadImg] = useState(1);

    useEffect(() => {
        const loadAnimation = () => {
            for (let i = 1; i <= 10; i++) {
                setTimeout(() => {
                    if (i < 11) {
                        setLoadImg(i);
                    }
                }, i * 70);
            }
            setTimeout(() => {
                setLoadImg(0);
            }, 770); 
        };
        
        loadAnimation();
    }, []);

    return (
        <div className={`pageLoad ${loadImg === 0 ? 'animated' : ''}`} loadimg={loadImg}>
        </div>
    );
};

export default PageLoad;

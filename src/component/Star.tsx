import { useEffect, useState } from 'react';

const Star = () => {
    const [style, setStyle] = useState({
        top: '0%',
        left: '0%',
        size: '10px',
        opacity: 1,
    });

    useEffect(() => {
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        const randomSize = Math.random() * 55 + 20;
        const randomOpacity = Math.random() * 0.5 + 0.5;

        setStyle({
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
            size: `${randomSize}px`,
            opacity: randomOpacity,
        });
    }, []);

    return (
        <div
            className="star"
            style={{
                top: style.top,
                left: style.left,
                width: style.size,
                height: style.size,
                opacity: style.opacity,
            }}
        ></div>
    );
};

export default Star;

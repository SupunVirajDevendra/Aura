import Star from './Star';

const StarsContainer = () => {
    const stars = Array.from({ length: 30 });

    return (
        <>
            {stars.map((_, index) => (
                <Star key={index} />
            ))}
        </>
    );
};

export default StarsContainer;

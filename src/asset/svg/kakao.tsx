import { withIconWrapper } from './withSvgWrapper';

function Icon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C6.477 3 2 6.477 2 10.8C2 13.7853 3.9947 16.3777 6.97733 17.7093C6.64133 18.8853 5.96533 21.144 5.83333 21.6307C5.668 22.2507 6.01267 22.2467 6.26933 22.0773C6.47333 21.9467 9.29067 20.0507 10.5987 19.144C11.0613 19.2013 11.5293 19.2307 12 19.2307C17.523 19.2307 22 15.7537 22 10.8C22 6.477 17.523 3 12 3Z" fill="currentColor" />
        </svg>
    );
}

export const IconKakao = withIconWrapper(Icon);

import { withIconWrapper } from './withSvgWrapper';

function Icon() {
    return (
        <svg viewBox="0 0 328.5 328.49999" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 595.28h841.89V0H0Z" />
                </clipPath>
            </defs>
            <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 -396.919 560.853)">
                <path d="M0 0h-234.306a6 6 0 0 0-6 6v234.306a6 6 0 0 0 6 6H0a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6" fill="currentColor" transform="translate(537.995 174.334)" />
                <path d="M0 0h-75.126a3.058 3.058 0 0 1-3.058-3.058v-121.003a3.017 3.017 0 0 1 3.017-3.017h31.375a3.017 3.017 0 0 1 3.017 3.017v87.408h32.219c13.422 0 24.303-10.881 24.303-24.303v-63.105a3.017 3.017 0 0 1 3.017-3.017h31.527a3.017 3.017 0 0 1 3.017 3.017v70.753C53.308-23.867 29.44 0 0 0" fill="#fff" transform="translate(433.28 361.026)" />
            </g>
        </svg>
    );
}

export const IconNate = withIconWrapper(Icon);

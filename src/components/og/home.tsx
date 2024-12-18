import { generate } from './generate';

export const OG = async () => {
    return await generate(layout());
};

const layout = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0b0b0b',
                fontFamily: '"Montserrat", serif',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                }}
            >
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg width="128" viewBox="0 0 192 192" fill="white">
                    <g transform="matrix(0.184786,0,0,0.184786,1.38942,5.35096)">
                        <path d="M716.083,529.14L518.595,331.652L392.053,458.194L590.612,656.754L321.329,926.037L573.748,926.703L843.697,656.754L843.308,656.365L955.756,543.917L828.531,416.692L716.083,529.14ZM321.329,457.237L435.92,342.646L309.378,216.104L68.244,457.237L389.999,778.992L516.541,652.45L321.329,457.237ZM597.679,181.645L470.454,54.42L343.268,181.606L470.493,308.831L597.679,181.645Z" />
                    </g>
                </svg>
                <span
                    style={{
                        fontFamily: '"Montserrat", serif',
                        fontSize: '72px',
                        fontWeight: 'bold',
                        letterSpacing: '0.025em',
                        color: 'white',
                    }}
                >
                    Liria Docs
                </span>
            </div>
        </div>
    );
};

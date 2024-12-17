import { ImageResponse } from '@vercel/og';

export const generateOG = async ({ image }: { image: string }) => {
    return new ImageResponse(<OG image={image} />, {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: 'Montserrat',
                data:
                    (await fetchFont(
                        'https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap'
                    )) ?? new ArrayBuffer(0),
                style: 'normal',
            },
        ],
    });
};

const fetchFont = async (url: string) => {
    const css = await (
        await fetch(url, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
            },
        })
    ).text();

    const resource = css.match(
        /src: url\((.+)\) format\('(opentype|truetype)'\)/
    );

    if (!resource) return null;
    const res = await fetch(resource[1]);
    return res.arrayBuffer();
};

const OG = ({ image }: { image: string }) => {
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
            <div tw="size-full flex items-center">
                <img
                    src={image}
                    alt=""
                    style={{
                        width: '640px',
                        height: '640px',
                    }}
                />
            </div>
            <div
                style={{
                    width: '100%',
                    height: '60%',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    display: 'block',
                    backgroundImage:
                        'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '3rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    color: '#f5f5f5',
                }}
            >
                {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg width="96" viewBox="0 0 192 192" fill="white">
                    <g transform="matrix(0.184786,0,0,0.184786,1.38942,5.35096)">
                        <path
                            className="main"
                            d="M716.083,529.14L518.595,331.652L392.053,458.194L590.612,656.754L321.329,926.037L573.748,926.703L843.697,656.754L843.308,656.365L955.756,543.917L828.531,416.692L716.083,529.14ZM321.329,457.237L435.92,342.646L309.378,216.104L68.244,457.237L389.999,778.992L516.541,652.45L321.329,457.237ZM597.679,181.645L470.454,54.42L343.268,181.606L470.493,308.831L597.679,181.645Z"
                        />
                    </g>
                </svg>
                <span
                    style={{
                        fontFamily: '"Montserrat", serif',
                        fontSize: '64px',
                        fontWeight: 'bold',
                        letterSpacing: '0.025em',
                    }}
                >
                    Liria Docs
                </span>
            </div>
        </div>
    );
};

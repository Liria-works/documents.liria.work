import { ImageResponse } from '@vercel/og';
import type { ReactElement } from 'react';

export const generate = async (element:ReactElement) => {
    const font = await fetchFont(
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap'
    );
    if (!font) return new Response('Font fetch error', { status: 500 });

    return new ImageResponse(element, {
        width: 1200,
        height: 630,
        fonts: [
            {
                name: 'Montserrat',
                data: font,
                style: 'normal',
            },
        ],
        status: 200,
        headers: {
            'Content-Type': 'image/png',
            'Vercel-CDN-Cache-Control': 'max-age=0, s-maxage=604800',
            'Cache-Control': 'public, immutable, no-transform, max-age=604800',
        },
    });
};

const fetchFont = async (url: string) => {
    const css = await (await fetch(url)).text();

    const resource = css.match(
        /src: url\((.+)\) format\('(opentype|truetype)'\)/
    );

    if (!resource) return null;
    const res = await fetch(resource[1]);
    return res.arrayBuffer();
};
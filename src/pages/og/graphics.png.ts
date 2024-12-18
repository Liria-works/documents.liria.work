import { OG } from '@/components/og/graphics';

export const prerender = false;
export const config = {
    runtime: 'edge',
};

export const GET = async () => {
    return OG();
};

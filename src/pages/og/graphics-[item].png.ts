import { getArticles } from '@/lib/graphics';
import { OG } from '@/components/og/graphics-item';

export const prerender = false;
export const config = {
    runtime: 'edge',
};

export const GET = async ({ params }: { params: { item: string } }) => {
    const articles = await getArticles();
    const article = articles.contents.find(
        (article) => article.id === params.item
    );

    if (!article) return new Response('Not Found', { status: 404 });

    return await OG({
        image: article.thumbnail.url,
    });
};

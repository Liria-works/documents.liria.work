import { getSlugs, getArticles } from '@/lib/graphics';
import { generateOG } from '@/components/og';

export const prerender = false;
export const config = {
    runtime: 'edge',
};

export async function getStaticPaths() {
    return await getSlugs();
}

export const GET = async ({ params }: { params: { slug: string } }) => {
    const articles = await getArticles();
    const article = articles.contents.find(
        (article) => article.id === params.slug
    );

    if (!article) return new Response('Not Found', { status: 404 });

    return generateOG({
        image: article.thumbnail.url,
    });
};

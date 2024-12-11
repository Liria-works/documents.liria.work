import { client } from "./microcms";
import type { MicroCMSQueries } from "microcms-js-sdk";

export type liriaGraphics = {
	contents: {
		id: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		revisedAt: string;
		title: { ja: string; en: string };
		thumbnail: { url: string; width: number; height: number };
		price: number | undefined;
		booth: number | undefined;
		saledAt: string | undefined;
		description: string;
		contents: { name: string; type: string; description: string }[] | null;
		details:
			| {
					model: string;
					tris: string;
					materials: string;
					textures: string;
					bones: string;
					shapekeys: { name: string; description: string }[] | null;
					notes: string;
			  }[]
			| null;
		packages: { name: string; version: string; annotation: string }[] | null;
		usage: string;
		notForSale: boolean;
		changeLogs: { version: string; date: string; content: string }[] | null;
	}[];
};

export const getSlugs = async (
	queries?: MicroCMSQueries,
): Promise<{ params: { slug: string } }[]> => {
	const data = await client.get<liriaGraphics>({
		endpoint: "liria-graphics",
		queries,
	});

	return data.contents.map((content) => ({
		params: { slug: content.id },
	}));
};

export const getArticles = async (
	queries?: MicroCMSQueries,
): Promise<liriaGraphics> => {
	const data = await client.get<liriaGraphics>({
		endpoint: "liria-graphics",
		queries,
	});

	return data;
};

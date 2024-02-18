import type { PageServerLoad } from './$types';
import { NOTION_WISHLIST_SECRET, NOTION_WISHLIST_ID } from '$env/static/private';
import { Client } from '@notionhq/client';

// Initializing a client
const notion = new Client({
	auth: NOTION_WISHLIST_SECRET
});

export const load: PageServerLoad = async () => {
    let wishlist: object[] = [];
	const { results } = await notion.databases.query({ database_id: NOTION_WISHLIST_ID });

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	results.map((e: any) => {
        const resultsProps = e.properties;
        wishlist = [
            ...wishlist,
            {
                title: resultsProps.Title.title[0].plain_text,
                price: resultsProps.Price.number,
            }
        ];
    });

	return {
		wishlist: wishlist,
	};
};
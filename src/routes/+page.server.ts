import type { PageServerLoad } from './$types';
import { NOTION_WISHLIST_SECRET, NOTION_WISHLIST_ID } from '$env/static/private';
import { Client, isFullPage } from '@notionhq/client';

// custom types based off return Notion JSON
export interface WishlistItem {
	Title: { title: [{ plain_text: string }] };
	Price: { number: number };
	Image: { files: [{ external: { url: string }; file: { url: string } }] };
	Notes: { rich_text: [{ plain_text: string }] };
}

// Initializing a client
const notion = new Client({ auth: NOTION_WISHLIST_SECRET });

export const load: PageServerLoad = async ({isDataRequest}) => {
	// PagaData
	return {
		wishlist: isDataRequest ? streamNotionData() : await streamNotionData() // only stream promise when client-side routing
	};
	// get Notion data via Promise
	async function streamNotionData() {
		let wishlist: { id: string; title: string; price: number; image: string; note: string }[] = [];
		const { results } = await notion.databases.query({ database_id: NOTION_WISHLIST_ID });
		for (const page of results) {
			if (!isFullPage(page)) continue;
			const wishlistItem = page.properties as unknown as WishlistItem;
			wishlist = [
				...wishlist,
				{
					id: page.id,
					title: wishlistItem.Title.title[0].plain_text,
					price: wishlistItem.Price.number,
					image: wishlistItem.Image.files[0]?.external?.url ? wishlistItem.Image.files[0]?.external?.url : wishlistItem.Image.files[0]?.file?.url,
					note: wishlistItem.Notes.rich_text[0]?.plain_text
				}
			];
		}
		return wishlist;
	}
};

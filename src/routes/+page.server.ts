import type { PageServerLoad } from './$types';
import { NOTION_WISHLIST_SECRET, NOTION_WISHLIST_ID } from '$env/static/private';
import { Client } from '@notionhq/client';


// Initializing a client
const notion = new Client({
  auth: NOTION_WISHLIST_SECRET,
})


export const load: PageServerLoad = async () => {
    const {results} = await notion.databases.query({ database_id: NOTION_WISHLIST_ID });
    return {
        wishllist: results,
    }
}
import type { PageServerLoad } from './$types';
import { NOTION_WISHLIST_SECRET, NOTION_WISHLIST_ID } from '$env/static/private';
import { Client } from '@notionhq/client';

// Initializing a client
const notion = new Client({
	auth: NOTION_WISHLIST_SECRET
});

// time in milliseconds before resorting to data streaming
const MAX_RESLOVE_TIME = 200;

export const load: PageServerLoad = async () => {

  // Promise race for data streaming 
  const notionData = await Promise.race([delay(MAX_RESLOVE_TIME), streamNotionData()]);

  // PagaData
  return {
    streamed: {
      wishlist: notionData ? notionData as ReturnType<typeof streamNotionData> : streamNotionData()
    }
	};

  // get Notion data via Promise
  async function streamNotionData() {
    let wishlist: { title: string, price: number, image: string, note: string }[] = [];
    const { results } = await notion.databases.query({ database_id: NOTION_WISHLIST_ID });
    results.map((e) => {
            const resultsProps = e.properties;
            wishlist = [
                ...wishlist,
                {
                    title: resultsProps.Title.title[0].plain_text,
                    price: resultsProps.Price.number,
                    image: resultsProps.Image.files[0]?.external?.url ? resultsProps.Image.files[0]?.external?.url : resultsProps.Image.files[0]?.file?.url,
                    note: resultsProps.Notes.rich_text[0]?.plain_text
                }
            ];
        });
    return wishlist
  }

  // delayed Promise for resolve race
  function delay(ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }
};

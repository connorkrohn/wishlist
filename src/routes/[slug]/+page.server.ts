import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { NOTION_WISHLIST_SECRET } from '$env/static/private';
import { Client } from '@notionhq/client';

// Initializing a client
const notion = new Client({
	auth: NOTION_WISHLIST_SECRET
});

export const load: PageServerLoad = async ({ params }) => {
  const pageId = params.slug;
  // eslint-disable-next-line
  const result: any = await notion.pages.retrieve({ page_id: pageId });
	if (result) {
	  const resultProps = result.properties;
	  const item =
			{
			  id: result.id as string,
	      title: resultProps.Title.title[0].plain_text as string,
				price: resultProps.Price.number as number,
				image: resultProps.Image.files[0]?.external?.url ? resultProps.Image.files[0]?.external?.url : resultProps.Image.files[0]?.file?.url as string,
				note: resultProps.Notes.rich_text[0]?.plain_text as string
			};
		return {
		  item: item,
		};
	}

	error(404, 'Not found');
};

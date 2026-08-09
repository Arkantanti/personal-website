// Blog RSS feed at /rss.xml. Drafts stay out; placeholder posts are
// included only while they exist on the site itself (delete the file,
// they leave the feed too).
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Jakub Pieczonka — blog',
    description: 'AI research, projects, writing.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}

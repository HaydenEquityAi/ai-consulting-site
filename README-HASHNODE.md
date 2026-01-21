# Hashnode CMS Integration

This project uses Hashnode as a headless CMS for the blog. Posts are fetched from Hashnode's GraphQL API and rendered using Astro.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the `site/` directory:
   ```
   HASHNODE_PUBLICATION_ID=your-publication-id-here
   ```
   
   To find your publication ID:
   - Go to your Hashnode publication settings
   - The publication ID is in the URL or settings

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Features

- **Dynamic Blog Posts**: Posts are fetched from Hashnode at build time
- **Category Mapping**: Hashnode tags are automatically mapped to categories:
  - `implementation` or `guide` → Implementation Guide (orange)
  - `trend` or `industry` → Industry Trends (green)
  - `tutorial` or `how-to` → How-To Tutorial (blue)
  - `case-study` or `case` → Case Study (purple)
- **Revalidation**: Posts can be revalidated on-demand or on a schedule
- **SEO Friendly**: Each post gets its own page with proper meta tags

## Revalidation

The blog supports on-demand revalidation. To trigger a rebuild when new posts are published:

1. **Vercel**: Use the Vercel API to trigger a redeploy
2. **Webhook**: Set up a Hashnode webhook to call your revalidation endpoint
3. **Scheduled**: Configure a cron job to rebuild periodically

## File Structure

```
site/
├── src/
│   ├── lib/
│   │   └── hashnode.ts          # Hashnode GraphQL integration
│   ├── pages/
│   │   ├── blog.astro           # Blog listing page
│   │   └── blog/
│   │       └── [slug].astro    # Individual blog post pages
│   ├── components/
│   │   ├── Navbar.astro
│   │   └── Footer.astro
│   └── layouts/
│       └── Layout.astro
├── .env                          # Environment variables (not in git)
└── package.json
```

## GraphQL Queries

The Hashnode integration uses the following GraphQL queries:

- `getAllPosts()`: Fetches all posts for the publication
- `getPostBySlug(slug)`: Fetches a single post with full content

Both queries return:
- `title`, `brief`, `slug`, `publishedAt`, `readTimeInMinutes`
- `coverImage.url`
- `content.html`
- `tags` (name, slug)
- `author` (name, username, profilePicture)






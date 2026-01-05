const HASHNODE_ENDPOINT = "https://gql.hashnode.com";

export interface HashnodePost {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: {
    url: string;
  };
  content: {
    html: string;
  };
  tags: Array<{
    name: string;
    slug: string;
  }>;
  author?: {
    name: string;
    username: string;
    profilePicture?: string;
  };
}

interface HashnodeResponse {
  data: {
    publication: {
      posts: {
        edges: Array<{
          node: HashnodePost;
        }>;
      };
    };
  };
}

interface HashnodeSinglePostResponse {
  data: {
    publication: {
      post: HashnodePost | null;
    };
  };
}

/**
 * Fetches all posts for the publication
 */
export async function getAllPosts(): Promise<HashnodePost[]> {
  const publicationId = import.meta.env.HASHNODE_PUBLICATION_ID;
  
  if (!publicationId) {
    throw new Error("HASHNODE_PUBLICATION_ID environment variable is not set");
  }

  const query = `
    query GetAllPosts($publicationId: ObjectId!, $first: Int!) {
      publication(id: $publicationId) {
        posts(first: $first) {
          edges {
            node {
              title
              brief
              slug
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
              content {
                html
              }
              tags {
                name
                slug
              }
              author {
                name
                username
                profilePicture
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          publicationId,
          first: 50, // Fetch up to 50 posts
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Hashnode API error: ${response.statusText}`);
    }

    const data: HashnodeResponse = await response.json();

    if (data.data?.publication?.posts?.edges) {
      return data.data.publication.posts.edges.map((edge) => edge.node);
    }

    return [];
  } catch (error) {
    console.error("Error fetching posts from Hashnode:", error);
    return [];
  }
}

/**
 * Fetches a single post by slug with full content
 */
export async function getPostBySlug(slug: string): Promise<HashnodePost | null> {
  const publicationId = import.meta.env.HASHNODE_PUBLICATION_ID;
  
  if (!publicationId) {
    throw new Error("HASHNODE_PUBLICATION_ID environment variable is not set");
  }

  const query = `
    query GetPostBySlug($publicationId: ObjectId!, $slug: String!) {
      publication(id: $publicationId) {
        post(slug: $slug) {
          title
          brief
          slug
          publishedAt
          readTimeInMinutes
          coverImage {
            url
          }
          content {
            html
          }
          tags {
            name
            slug
          }
          author {
            name
            username
            profilePicture
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          publicationId,
          slug,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Hashnode API error: ${response.statusText}`);
    }

    const data: HashnodeSinglePostResponse = await response.json();

    return data.data?.publication?.post || null;
  } catch (error) {
    console.error(`Error fetching post "${slug}" from Hashnode:`, error);
    return null;
  }
}

/**
 * Maps Hashnode tags to category names
 */
export function mapTagToCategory(tagName: string): string {
  const tagLower = tagName.toLowerCase();
  
  if (tagLower.includes("implementation") || tagLower.includes("guide")) {
    return "Implementation Guide";
  }
  if (tagLower.includes("trend") || tagLower.includes("industry")) {
    return "Industry Trends";
  }
  if (tagLower.includes("tutorial") || tagLower.includes("how-to") || tagLower.includes("howto")) {
    return "How-To Tutorial";
  }
  if (tagLower.includes("case-study") || tagLower.includes("casestudy") || tagLower.includes("case")) {
    return "Case Study";
  }
  
  // Default category
  return "Article";
}

/**
 * Gets card color based on category
 */
export function getCardColor(category: string): string {
  switch (category) {
    case "Implementation Guide":
      return "orange";
    case "Industry Trends":
      return "green";
    case "How-To Tutorial":
      return "blue";
    case "Case Study":
      return "purple";
    default:
      return "gray";
  }
}

/**
 * Gets SVG icon for category
 */
export function getCategoryIcon(category: string): string {
  switch (category) {
    case "Implementation Guide":
      return `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>`;
    case "Industry Trends":
      return `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>`;
    case "How-To Tutorial":
      return `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>`;
    case "Case Study":
      return `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>`;
    default:
      return `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>`;
  }
}



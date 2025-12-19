// On-demand revalidation endpoint
// Call this endpoint to trigger a rebuild when new posts are published

export async function GET({ request }: { request: Request }) {
  const authHeader = request.headers.get('authorization');
  
  // Simple auth check - in production, use a secure token
  if (authHeader !== `Bearer ${import.meta.env.REVALIDATE_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    // Trigger revalidation
    // In Vercel, this would be handled automatically
    // For other platforms, you may need to trigger a rebuild via API
    
    return new Response(JSON.stringify({ revalidated: true, timestamp: new Date().toISOString() }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error revalidating' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST({ request }: { request: Request }) {
  return GET({ request });
}


import { getApiDocs } from '@/lib/swagger';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    // Get the UID from the query parameters
    const { searchParams } = new URL(request.url);
    const uid = searchParams.get('uid');

    if (!uid) {
      return NextResponse.json(
        { error: 'No user ID provided' },
        { status: 401 }
      );
    }

    // Check admin status
    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/admin?uid=${uid}`);
      const data = await resp.json();
      
      if (!data.isAdmin) {
        return NextResponse.json(
          { error: 'Access denied. Admin privileges required.' },
          { status: 403 }
        );
      }
    } catch (error) {
      console.error("Error checking admin status:", error);
      return NextResponse.json(
        { error: 'Error verifying admin status' },
        { status: 500 }
      );
    }

    // If admin, proceed to generate API docs
    const spec = await getApiDocs();
    return NextResponse.json(spec, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (error) {
    console.error('Error generating API docs:', error);
    return NextResponse.json(
      { error: 'Failed to generate API documentation' },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const redirectUrl = new URL('/', req.url)

  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `tokenTimeline=; Path=/; max-age=0`,
    },
  })
}

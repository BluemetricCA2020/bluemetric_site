import { next } from '@vercel/edge'

export default function middleware(request: Request) {
  const cookieHeader = request.headers.get('cookie') || ''

  if (cookieHeader.includes('country=')) {
    return next()
  }

  const lang = 'en'
  return next({
    headers: {
      'set-cookie': `country=${lang}; path=/; max-age=31536000`,
    },
  })
}

export const config = {
  matcher: '/((?!_next|api|favicon|images|og-).*)',
}

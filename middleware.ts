import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless'

export function middleware(request) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  // Skip redirection for static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg')
  ) {
    return NextResponse.next();
  }

  // Skip redirection for public routes like login and signup
  const publicRoutes = ['/', '/login', '/signup'];
  const isPublicRoute = publicRoutes.includes(pathname);

  const hasAccount = checkIfUserHasAccount(request); // Replace this with your actual logic

  if (!hasAccount && !isPublicRoute) {
    url.pathname = '/'; // Redirect to home page if no account and not on a public route
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

async function checkIfUserHasAccount(request) {

    let dataEstadoUsuario = ''
    let stateOfUser = false
    if (typeof window !== 'undefined') {
      dataEstadoUsuario = localStorage.getItem('dadosInforEstadoUsuario')
      console.log(dataEstadoUsuario)
  
      if (dataEstadoUsuario) {
        const sql = neon(
          'postgres://default:DEsoX6JqN1AM@ep-green-silence-a4qtd6to-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15'
        )

        stateOfUser =
        await sql`SELECT "usuarioEstaCadastrado" FROM usuarios WHERE "usuarioEstaCadastrado" IS NOT NULL`;

      }

    }
  
      console.log(stateOfUser)
  return stateOfUser; // For now, it always returns true (dummy logic)
}

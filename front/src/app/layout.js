import "./app.css"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from './authContext';

export const metadata = {
  title: 'vive-le-français',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head />
      <body>
        <main>
          <AuthProvider>
            {children}
          </AuthProvider>
        </main>
        <Toaster />
      </body>
    </html>

  )
}

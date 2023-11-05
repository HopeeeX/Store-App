import "./globals.css"
import '@fontsource-variable/crimson-pro';

export const metadata = {
  title: 'Store App',
  description: 'A store app created by hopeee',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
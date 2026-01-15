import type { Metadata } from 'next'
// import 'suneditor/dist/css/suneditor.min.css';
import './globals.css'

export const metadata: Metadata = {
  title: 'React SunEditor Wrapper Demo',
  description: 'A demo of the react-suneditor-wrapper package',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

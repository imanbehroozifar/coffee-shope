import './globals.css'

export const metadata = {
  title: 'کافی شاپ',
  description: '... ',
  icons: {
    icon: { url:'images/app-logo.png', type:"image/png" }
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Dana">
        {children}
      </body>
    </html>
  )
} 

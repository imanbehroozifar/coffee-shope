import Header from '@/Components/modules/Header/Header'
import './globals.css'

export const metadata = {
  title: 'کافی شاپ',
  description: '... ',
  icons: {
    icon: { url: 'images/app-logo.png', type: "image/png" }
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'  >
      <body className="font-Dana bg-gray-100 dark:bg-zinc-800">
        <Header />
        {children}
      </body>
    </html>
  )
} 

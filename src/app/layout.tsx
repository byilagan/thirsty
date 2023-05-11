import './globals.css'
import { Roboto_Slab, Courgette} from 'next/font/google'
import Link from 'next/link';

const slab = Roboto_Slab({ subsets: ['latin'] })
const courgette = Courgette({subsets: ['latin'], weight: "400"}); 

export const metadata = {
  title: 'Thirsty',
  description: 'Find recipes to all your favorite drinks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={slab.className}>
        <nav>
          <Link href="/" className={`${courgette.className} p-4 pb-0 text-[32px] block`}>Thirsty</Link> 
        </nav>
        {children}
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sandeep Nilaji",
  description:
    "Portfolio of Sandeep Nilaji, Front End web developer. A result-driven, self-motivated and resourceful engineer with a proven ability to develop websites, web applications, and cross-platform applications. Worked with a team of web designers, back-end developers and UX designers to meet project goals and create compelling user experiences with digital products incorporating a range of technologies. Use skills in debugging to check code, improve code and enhance the functionality and user experience of web applications and computer programs.",
  icons: {
    icon: "/assets/favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

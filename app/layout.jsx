import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/hooks/theme-provider"
import { Toaster } from "sonner"

const roboto = Roboto({
  subsets: ["latin"],
})

export const metadata = {
  title: "Cloud Storage for Nothing™ | The Useless SaaS",
  description:
    "Upload your files with confidence. We'll take them, delete them instantly, and thank you for trusting us with absolutely nothing.",
  keywords: [
    "useless SaaS",
    "funny SaaS",
    "cloud storage parody",
    "delete files app",
    "dark humor app",
    "Cloud Storage for Nothing",
  ],
  authors: [{ name: "Cloud Storage for Nothing™ Team" }],
  openGraph: {
    title: "Cloud Storage for Nothing™",
    description:
      "The most secure cloud storage ever — we delete your files instantly.",
    url: "https://cfn-five.vercel.app/",
    siteName: "Cloud Storage for Nothing™",
    images: [
      {
        url: "https://cfn-five.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloud Storage for Nothing™",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Storage for Nothing™",
    description:
      "Upload files. We delete them. It's that simple.",
    images: ["https://cfn-five.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://cfn-five.vercel.app/"),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster />
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
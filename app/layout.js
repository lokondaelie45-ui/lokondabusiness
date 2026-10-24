export const metadata = {
  title: 'Lokonda Business',
  description: 'Plateforme pour petites entreprises',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

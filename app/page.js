export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#0f172a', color: '#ffffff', minHeight: '100vh', padding: '40px' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', color: '#fbbf24', marginBottom: '10px' }}>LOKONDA BUSINESS</h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#94a3b8' }}>« Les idées deviennent des entreprises. »</p>
        <p style={{ marginTop: '15px', color: '#38bdf8' }}>Plateforme numérique pour les petites entreprises au Québec et en République Démocratique du Congo.</p>
      </header>

      <section style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ background: '#1e293b', padding: '25px', borderRadius: '10px', width: '300px', border: '1px solid #334155' }}>
          <h2 style={{ color: '#fbbf24' }}>🛍️ La Marketplace</h2>
          <p style={{ color: '#cbd5e1', marginTop: '10px' }}>Présentez vos produits et services en ligne, connectez les marchés locaux et internationaux.</p>
        </div>

        <div style={{ background: '#1e293b', padding: '25px', borderRadius: '10px', width: '300px', border: '1px solid #334155' }}>
          <h2 style={{ color: '#fbbf24' }}>🤖 Studio IA</h2>
          <p style={{ color: '#cbd5e1', marginTop: '10px' }}>Créez facilement du contenu promotionnel et gérez vos informations commerciales grâce à l'intelligence artificielle.</p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', marginTop: '60px', color: '#64748b' }}>
        <p>&copy; 2026 LOKONDA BUSINESS — Tous droits réservés.</p>
      </footer>
    </main>
  );
}

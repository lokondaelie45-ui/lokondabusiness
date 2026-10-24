'use client';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('accueil');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      {/* Barre de navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #1e293b' }}>
        <h1 style={{ color: '#f59e0b', fontSize: '24px', margin: 0, cursor: 'pointer' }} onClick={() => setPage('accueil')}>
          LOKONDA BUSINESS
        </h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button onClick={() => setPage('accueil')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '16px' }}>Accueil</button>
          <button onClick={() => setPage('marketplace')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '16px' }}>Marketplace</button>
          <button onClick={() => setPage('studio')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '16px' }}>Studio IA</button>
          <button onClick={() => setPage('dashboard')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '16px' }}>Tableau de bord</button>
          <button onClick={() => setPage('connexion')} style={{ backgroundColor: '#f59e0b', border: 'none', color: '#0f172a', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Connexion</button>
        </div>
      </nav>

      {/* Contenu dynamique selon la page choisie */}
      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {page === 'accueil' && (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '48px', color: '#f59e0b', marginBottom: '10px' }}>LOKONDA BUSINESS</h2>
            <p style={{ fontStyle: 'italic', fontSize: '20px', color: '#94a3b8', marginBottom: '30px' }}>« Les idées deviennent des entreprises. »</p>
            <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto 40px', lineHeight: '1.6', color: '#cbd5e1' }}>
              Plateforme numérique de référence pour soutenir les petites entreprises au Québec et en République Démocratique du Congo.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <button onClick={() => setPage('marketplace')} style={{ backgroundColor: '#f59e0b', color: '#0f172a', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Découvrir la Marketplace</button>
              <button onClick={() => setPage('connexion')} style={{ backgroundColor: '#1e293b', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', border: '1px solid #475569', cursor: 'pointer' }}>Se connecter</button>
            </div>
          </div>
        )}

        {page === 'marketplace' && (
          <div>
            <h2 style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '20px' }}>🛍️ La Marketplace</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '30px' }}>Présentez vos produits et services en ligne, et connectez les marchés locaux et internationaux.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px' }}>
                <h3>Boutique Exemple 1</h3>
                <p style={{ color: '#94a3b8' }}>Produits artisanaux et locaux (RDC / Québec)</p>
              </div>
              <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px' }}>
                <h3>Services Professionnels</h3>
                <p style={{ color: '#94a3b8' }}>Accompagnement et mentorat d'entreprise</p>
              </div>
            </div>
          </div>
        )}

        {page === 'studio' && (
          <div>
            <h2 style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '20px' }}>🤖 Studio IA</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '30px' }}>Créez facilement du contenu promotionnel et gérez vos informations commerciales grâce à l'intelligence artificielle.</p>
            <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '10px' }}>
              <h3>Générateur de description</h3>
              <textarea placeholder="Décrivez votre produit ici..." style={{ width: '100%', height: '100px', backgroundColor: '#0f172a', color: '#fff', border: '1px solid #475569', borderRadius: '6px', padding: '10px', marginTop: '10px' }}></textarea>
              <button style={{ backgroundColor: '#f59e0b', color: '#0f172a', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '15px' }}>Générer avec l'IA</button>
            </div>
          </div>
        )}

        {page === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: '32px', color: '#f59e0b', marginBottom: '20px' }}>📊 Tableau de bord</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '30px' }}>Suivez vos performances, vos vues et vos activités en temps réel.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <h3>Visiteurs</h3>
                <p style={{ fontSize: '28px', color: '#f59e0b', fontWeight: 'bold' }}>1,240</p>
              </div>
              <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <h3>Produits</h3>
                <p style={{ fontSize: '28px', color: '#f59e0b', fontWeight: 'bold' }}>12</p>
              </div>
              <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                <h3>Ventes</h3>
                <p style={{ fontSize: '28px', color: '#f59e0b', fontWeight: 'bold' }}>$450</p>
              </div>
            </div>
          </div>
        )}

        {page === 'connexion' && (
          <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#1e293b', padding: '40px', borderRadius: '12px' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '20px', textAlign: 'center' }}>Connexion</h2>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#cbd5e1' }}>Email</label>
              <input type="email" placeholder="votre@email.com" style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#fff' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#cbd5e1' }}>Mot de passe</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#fff' }} />
            </div>
            <button style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0f172a', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Se connecter</button>
          </div>
        )}
      </main>
    </div>
  );
}

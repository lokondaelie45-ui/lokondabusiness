'use client';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('accueil');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      {/* Barre de navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #1e293b', flexWrap: 'wrap', gap: '10px' }}>
        <h1 style={{ color: '#f59e0b', fontSize: '20px', margin: 0, cursor: 'pointer' }} onClick={() => setPage('accueil')}>
          LOKONDA BUSINESS
        </h1>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '14px' }}>
          <button onClick={() => setPage('accueil')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Accueil</button>
          <button onClick={() => setPage('marketplace')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Marketplace</button>
          <button onClick={() => setPage('studio')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Studio IA</button>
          <button onClick={() => setPage('dashboard')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Dashboard</button>
          <button onClick={() => setPage('connexion')} style={{ backgroundColor: '#f59e0b', border: 'none', color: '#0f172a', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Connexion</button>
        </div>
      </nav>

      {/* Contenu dynamique */}
      <main style={{ padding: '20px 15px', maxWidth: '1200px', margin: '0 auto' }}>
        {page === 'accueil' && (
          <div>
            {/* Bannière / Photo d'en-tête professionnelle */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              marginBottom: '30px', 
              height: '250px',
              backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '20px'
            }}>
              <h2 style={{ fontSize: '28px', color: '#f59e0b', marginBottom: '10px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>LOKONDA BUSINESS</h2>
              <p style={{ fontStyle: 'italic', fontSize: '16px', color: '#e2e8f0', marginBottom: '15px' }}>« Les idées deviennent des entreprises. »</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setPage('marketplace')} style={{ backgroundColor: '#f59e0b', color: '#0f172a', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Explorer</button>
                <button onClick={() => setPage('connexion')} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', border: '1px solid #fff', cursor: 'pointer' }}>Se connecter</button>
              </div>
            </div>

            <div style={{ textAlign: 'center', padding: '10px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto' }}>
                Plateforme numérique de référence pour soutenir les petites entreprises au Québec et en République Démocratique du Congo.
              </p>
            </div>
          </div>
        )}

        {page === 'marketplace' && (
          <div>
            <h2 style={{ fontSize: '24px', color: '#f59e0b', marginBottom: '15px' }}>🛍️ La Marketplace</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>Présentez vos produits et services en ligne, et connectez les marchés locaux et internationaux.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '10px' }}>
                <h3>Boutique Exemple 1</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px' }}>Produits artisanaux et locaux (RDC / Québec)</p>
              </div>
              <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '10px' }}>
                <h3>Services Professionnels</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px' }}>Accompagnement et mentorat d'entreprise</p>
              </div>
            </div>
          </div>
        )}

        {page === 'studio' && (
          <div>
            <h2 style={{ fontSize: '24px', color: '#f59e0b', marginBottom: '15px' }}>🤖 Studio IA</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>Créez facilement du contenu promotionnel grâce à l'intelligence artificielle.</p>
            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px' }}>
              <h3>Générateur de description</h3>
              <textarea placeholder="Décrivez votre produit ici..." style={{ width: '100%', height: '80px', backgroundColor: '#0f172a', color: '#fff', border: '1px solid #475569', borderRadius: '6px', padding: '10px', marginTop: '10px', boxSizing: 'border-box' }}></textarea>
              <button style={{ backgroundColor: '#f59e0b', color: '#0f172a', padding: '10px 15px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '10px', width: '100%' }}>Générer</button>
            </div>
          </div>
        )}

        {page === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: '24px', color: '#f59e0b', marginBottom: '15px' }}>📊 Tableau de bord</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>Visiteurs</h3>
                <p style={{ fontSize: '24px', color: '#f59e0b', fontWeight: 'bold', margin: 0 }}>1,240</p>
              </div>
              <div style={{ backgroundColor: '#1e293b', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '16px', margin: '0 0 5px 0' }}>Produits</h3>
                <p style={{ fontSize: '24px', color: '#f59e0b', fontWeight: 'bold', margin: 0 }}>12</p>
              </div>
            </div>
          </div>
        )}

        {page === 'connexion' && (
          <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '12px' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '15px', textAlign: 'center', fontSize: '22px' }}>Connexion</h2>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#cbd5e1', fontSize: '14px' }}>Email</label>
              <input type="email" placeholder="votre@email.com" style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#fff', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#cbd5e1', fontSize: '14px' }}>Mot de passe</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#fff', boxSizing: 'border-box' }} />
            </div>
            <button style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0f172a', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Se connecter</button>
          </div>
        )}
      </main>
    </div>
  );
}

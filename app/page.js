'use client';
import { useState } from 'react';

export default function Home() {
  const [page, setPage] = useState('accueil');
  const [isRegistering, setIsRegistering] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(isRegistering ? "Compte créé avec succès ! Bienvenue sur Lokonda Business." : "Connexion réussie !");
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#ffffff', fontFamily: 'sans-serif' }}>
      {/* Barre de navigation professionnelle */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', borderBottom: '1px solid #1e293b', flexWrap: 'wrap', gap: '10px', backgroundColor: '#090d16' }}>
        <h1 style={{ color: '#f59e0b', fontSize: '18px', margin: 0, cursor: 'pointer' }} onClick={() => setPage('accueil')}>
          LOKONDA BUSINESS
        </h1>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '13px', alignItems: 'center' }}>
          <button onClick={() => setPage('accueil')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Accueil</button>
          <button onClick={() => setPage('marketplace')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Marketplace</button>
          <button onClick={() => setPage('studio')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Studio IA</button>
          <button onClick={() => setPage('dashboard')} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>Dashboard</button>
          <button onClick={() => { setPage('connexion'); setIsRegistering(false); }} style={{ backgroundColor: '#1e293b', border: '1px solid #f59e0b', color: '#f59e0b', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Connexion</button>
          <button onClick={() => { setPage('connexion'); setIsRegistering(true); }} style={{ backgroundColor: '#f59e0b', border: 'none', color: '#0f172a', padding: '6px 12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>S'inscrire</button>
        </div>
      </nav>

      {/* Contenu principal */}
      <main style={{ padding: '25px 15px', maxWidth: '1200px', margin: '0 auto' }}>
        {page === 'accueil' && (
          <div>
            {/* Bannière d'en-tête */}
            <div style={{ 
              position: 'relative', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              marginBottom: '25px', 
              height: '240px',
              backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '15px'
            }}>
              <h2 style={{ fontSize: '24px', color: '#f59e0b', marginBottom: '8px', fontWeight: 'bold' }}>LOKONDA BUSINESS</h2>
              <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#e2e8f0', marginBottom: '20px' }}>« Les idées deviennent des entreprises. »</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setPage('marketplace')} style={{ backgroundColor: '#f59e0b', color: '#0f172a', padding: '10px 18px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>Explorer la Marketplace</button>
                <button onClick={() => { setPage('connexion'); setIsRegistering(true); }} style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', padding: '10px 18px', borderRadius: '6px', fontWeight: 'bold', border: '1px solid #fff', cursor: 'pointer' }}>Créer mon compte</button>
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: '#1e293b', borderRadius: '10px' }}>
              <h3 style={{ color: '#f59e0b', marginBottom: '10px' }}>Soutenir les petites entreprises</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#cbd5e1', margin: 0 }}>
                Plateforme numérique de référence pour connecter, développer et propulser les activités commerciales au Québec et en République Démocratique du Congo.
              </p>
            </div>
          </div>
        )}

        {page === 'marketplace' && (
          <div>
            <h2 style={{ fontSize: '22px', color: '#f59e0b', marginBottom: '15px' }}>🛍️ La Marketplace</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '20px', fontSize: '14px' }}>Présentez vos produits et services en ligne et touchez de nouveaux marchés.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '18px', borderRadius: '10px', borderLeft: '4px solid #f59e0b' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Boutique Artisanale RDC-Québec</h3>
                <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Mise en relation directe entre producteurs locaux et acheteurs internationaux.</p>
              </div>
            </div>
          </div>
        )}

        {page === 'studio' && (
          <div>
            <h2 style={{ fontSize: '22px', color: '#f59e0b', marginBottom: '15px' }}>🤖 Studio IA</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '15px', fontSize: '14px' }}>Générez des descriptions de produits et optimisez votre visibilité commerciale instantanément.</p>
            <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px' }}>
              <h3 style={{ fontSize: '15px', margin: '0 0 10px 0' }}>Assistant Marketing IA</h3>
              <textarea placeholder="Décrivez votre produit ou service..." style={{ width: '100%', height: '90px', backgroundColor: '#0f172a', color: '#fff', border: '1px solid #475569', borderRadius: '6px', padding: '10px', boxSizing: 'border-box' }}></textarea>
              <button style={{ backgroundColor: '#f59e0b', color: '#0f172a', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '12px', width: '100%' }}>Générer le contenu</button>
            </div>
          </div>
        )}

        {page === 'dashboard' && (
          <div>
            <h2 style={{ fontSize: '22px', color: '#f59e0b', marginBottom: '15px' }}>📊 Tableau de bord</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '18px', borderRadius: '10px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '15px', margin: '0 0 5px 0', color: '#cbd5e1' }}>Visiteurs Actifs</h3>
                <p style={{ fontSize: '28px', color: '#f59e0b', fontWeight: 'bold', margin: 0 }}>1,240</p>
              </div>
            </div>
          </div>
        )}

        {page === 'connexion' && (
          <div style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '12px', maxWidth: '420px', margin: '0 auto', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '15px', textAlign: 'center', fontSize: '22px' }}>
              {isRegistering ? "Créer un compte LOKONDA" : "Connexion à LOKONDA"}
            </h2>

            {successMessage && (
              <div style={{ backgroundColor: '#065f46', color: '#d1fae5', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '13px', textAlign: 'center' }}>
                {successMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {isRegistering && (
                <div style={{ marginBottom: '15px' }}>
                  <label style={{ display: 'block', marginBottom: '5px', color: '#cbd5e1', fontSize: '13px' }}>Nom complet ou de l'entreprise</label>
                  <input type="text" required placeholder="Ex: Entreprise Kin-Québec" style={{ width: '100%', padding: '12px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#fff', boxSizing: 'border-box' }} />
                </div>
              )}

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#cbd5e1', fontSize: '13px' }}>Adresse Email</label>
                <input type="email" required placeholder="votre@email.com" style={{ width: '100%', padding: '12px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#fff', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#cbd5e1', fontSize: '13px' }}>Mot de passe</label>
                <input type="password" required placeholder="••••••••" style={{ width: '100%', padding: '12px', borderRadius: '6px', backgroundColor: '#0f172a', border: '1px solid #475569', color: '#fff', boxSizing: 'border-box' }} />
              </div>

              <button type="submit" style={{ width: '100%', backgroundColor: '#f59e0b', color: '#0f172a', padding: '12px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '15px', marginBottom: '15px' }}>
                {isRegistering ? "S'inscrire maintenant" : "Se connecter"}
              </button>
            </form>

            <div style={{ textAlign: 'center', borderTop: '1px solid #334155', paddingTop: '15px' }}>
              <button 
                onClick={() => setIsRegistering(!isRegistering)} 
                style={{ background: 'none', border: 'none', color: '#f59e0b', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}>
                {isRegistering ? "Déjà un compte ? Se connecter" : "Pas de compte ? S'inscrire"}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

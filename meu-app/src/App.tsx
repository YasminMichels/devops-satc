import React, { useState } from 'react';

const App: React.FC = () => {
  const [active, setActive] = useState(false);

  // Estilos Refinados
  const styles = {
    container: {
      backgroundColor: '#050505',
      backgroundImage: 'radial-gradient(circle, #1a0505 0%, #050505 100%)',
      color: '#eee',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      padding: '20px',
      overflow: 'hidden'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '40px',
      maxWidth: '500px',
      width: '100%',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      textAlign: 'center' as const
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '900',
      color: '#ff0000',
      margin: '0 0 10px 0',
      letterSpacing: '-2px',
      textTransform: 'uppercase' as const,
      filter: 'drop-shadow(0 0 10px rgba(255,0,0,0.5))'
    },
    statusBadge: {
      display: 'inline-block',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      backgroundColor: active ? '#ff0000' : '#1a1a1a',
      color: '#fff',
      marginBottom: '20px',
      transition: '0.3s'
    },
    button: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#ff0000',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
      boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
    }
  };

  return (
    <div style={styles.container}>
      {/* Import de fonte externa direto no componente para facilitar o deploy */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap');`}
      </style>

      <div style={styles.card}>
        <div style={styles.statusBadge}>
          {active ? "SISTEMA COMPROMETIDO" : "SERVIDOR PROTEGIDO"}
        </div>
        
        <h1 style={styles.title}>SCREAM</h1>
        <p style={{ opacity: 0.7, lineHeight: '1.6' }}>
          "Hello, Yasmin. É uma honra estar no seu deploy."
        </p>

        <div style={{ margin: '30px 0', textAlign: 'left', fontSize: '0.9rem' }}>
          <div style={{ borderBottom: '1px solid #333', padding: '10px 0' }}>
            <strong>Versão:</strong> 1.0.0-stab
          </div>
          <div style={{ borderBottom: '1px solid #333', padding: '10px 0' }}>
            <strong>Deploy:</strong> Produção (Vercel/Netlify)
          </div>
          <div style={{ padding: '10px 0' }}>
            <strong>Local:</strong> Woodsboro, CA
          </div>
        </div>

        <button 
          style={styles.button}
          onClick={() => setActive(!active)}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {active ? "DESLIGAR CHAMADA" : "ATENDER TELEFONE"}
        </button>
      </div>

      <footer style={{ marginTop: '30px', color: '#444', fontSize: '0.75rem' }}>
        FACULDADE DE TECNOLOGIA - DISCIPLINA DE CI/CD & DEPLOY
      </footer>
    </div>
  );
};

export default App;
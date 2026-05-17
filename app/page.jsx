export default function Home() {
  return (
    <div style={{
      background: '#000',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '60px',
        color: '#22c55e'
      }}>
        Juwan Store
      </h1>

      <p style={{
        fontSize: '22px',
        color: '#aaa',
        marginTop: '20px'
      }}>
        أفضل متجر لتحميل التطبيقات والبرامج
      </p>

      <div style={{
        marginTop: '50px',
        display: 'grid',
        gap: '20px'
      }}>
        <div style={{
          background: '#111',
          padding: '25px',
          borderRadius: '20px'
        }}>
          <h2>VPN Fast Pro</h2>
          <button style={{
            background: '#22c55e',
            color: 'black',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 'bold'
          }}>
            تحميل التطبيق
          </button>
        </div>

        <div style={{
          background: '#111',
          padding: '25px',
          borderRadius: '20px'
        }}>
          <h2>Game Booster X</h2>
          <button style={{
            background: '#22c55e',
            color: 'black',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '12px',
            fontWeight: 'bold'
          }}>
            تحميل التطبيق
          </button>
        </div>
      </div>
    </div>
  );
}

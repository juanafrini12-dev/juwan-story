export default function Home() {
  const apps = [
    {
      name: "VPN Fast Pro",
      image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      description: "أفضل تطبيق VPN سريع وآمن لتغيير موقعك وحماية اتصالك.",
      downloads: "12K",
      link: "#"
    },
    {
      name: "Game Booster X",
      image:"https://images.unsplash.com/photo-1542751110-97427bbecf20",
      description: "تسريع الألعاب وتحسين أداء الهاتف للألعاب الثقيلة.",
      downloads: "8K",
      link: "#"
    },
    {
      name: "Ultra Cleaner",
      image:"https://images.unsplash.com/photo-1518770660439-4636190af475",
      description: "تنظيف الهاتف وتسريع النظام بضغطه واحدة.",
      downloads: "15K",
      link: "#"
    }
  ];

  return (
    <div style={{
      background: "#0a0a0a",
      minHeight: "100vh",
      color: "white",
      fontFamily: "sans-serif",
      padding: "30px"
    }}>
      <h1 style={{
        textAlign: "center",
        color: "#22c55e",
        fontSize: "55px"
      }}>
        Juwan Store
      </h1>

      <p style={{
        textAlign: "center",
        color: "#aaa",
        fontSize: "20px",
        marginBottom: "40px"
      }}>
        أفضل متجر لتحميل التطبيقات والبرامج
      </p>

      <input
        placeholder="ابحث عن تطبيق..."
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          marginBottom: "35px",
          fontSize: "18px",
          background: "#1a1a1a",
          color: "white"
        }}
      />

      <div style={{
        display: "grid",
        gap: "25px"
      }}>
        {apps.map((app, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid #222"
            }}
          >
            <img
              src={app.image}
              alt={app.name}
              style={{
                width: "100%"
              }}
            />

            <div style={{
              padding: "20px"
            }}>
              <h2>{app.name}</h2>

              <p style={{
                color: "#aaa",
                lineHeight: "1.7"
              }}>
                {app.description}
              </p>

              <p style={{
                color: "#22c55e",
                marginTop: "10px"
              }}>
                عدد التحميلات: {app.downloads}
              </p>

              <div style={{
                display: "flex",
                gap: "15px",
                marginTop: "20px"
              }}>
                <a
                  href={app.link}
                  style={{
                    background: "#22c55e",
                    color: "black",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "bold"
                  }}
                >
                  تحميل التطبيق
                </a>

                <button
                  style={{
                    background: "#222",
                    color: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "10px"
                  }}
                >
                  التفاصيل
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}<script src="https://pl29470146.effectivecpmnetwork.com/82/28/d5/8228d520aa317c3e6187d50fbe29c9e8.js"></script>

<scr

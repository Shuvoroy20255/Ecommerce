function App() {
  return (
    <div>
      <nav style={{ padding: "20px", background: "#111", color: "#fff" }}>
        <h2>ShopEase</h2>
      </nav>

      <section style={{ padding: "50px", textAlign: "center" }}>
        <h1>Find Your Perfect Product</h1>
        <p>Fast delivery • Best prices • Trusted reviews</p>
        <button>Shop Now</button>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          padding: "20px"
        }}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            width="250"
          />
          <h3>Nike Shoes</h3>
          <p>$99</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            width="250"
          />
          <h3>Smart Watch</h3>
          <p>$149</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            width="250"
          />
          <h3>Headphones</h3>
          <p>$79</p>
        </div>
      </section>
    </div>
  );
}

export default App;
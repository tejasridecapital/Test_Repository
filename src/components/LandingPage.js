import "./LandingPage.css";
import LiveAuctions from "./LiveAuctions/LiveAuctions";
function LandingPage() {
  return (
    <div>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        
        <div className="nav-left">
  <img src="/logo.png" alt="Logo" className="logo" />
</div>
        <nav className="nav-center">
          <a href="#home">Home</a>
          <a href="#about">Who We Are</a>
          <a href="#trusted-auctions">Auction</a>
          <a href="#whyus">Why Us</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-right">
          <button className="cta-btn">Start Bidding Now</button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
      <img src="/bgi.jpg" className="bg-image" alt=""/>
       <div className="gradient-overlay-dark"></div>
        <div className="gradient-overlay-purple"></div>
        <div className="hero-content">
        <h4 className="head">WHERE EVERY BID WINS TRUST</h4>
          <h1 className="heading">Where Auctions Are <br/>Transparent and Trusted</h1>
          <p>
            A transparent auction platform connecting verified buyers and
            sellers through real-time, secure bidding.
          </p>
          <button className="btn_primary">Get Started for free</button>
          <button className="btn_secondary">Browse Auctions<span className="arrow"> →</span></button>
        </div>
      </section>
      {/*===================IMAGE SECTION=================*/}
      <section className="image-section">
        <img src="/home.png" alt="Showcase" className="between-image"></img>
      </section>
      {/* ================= WHO WE ARE ================= */}
     <section id="about" className="who-we-are">
  <div className="who-container">
    {/* LEFT IMAGE */}
    <div className="who-image">
      <img src="/carswithdetails.png" alt="cars" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="who-content">
      <span className="who-tag">WHO WE ARE</span>

      <h2>Built on trust, powered by Technology</h2>

      <p className="who-desc">
        We are a secure digital auction platform connecting verified buyers and
        sellers through transparent, real-time bidding. Our goal is to simplify
        auctions while maintaining trust, compliance and efficiency for every participant.
      </p>

      <div className="who-points">
        <details open>
          <summary>Verified & Trusted</summary>
          <p>
            Every user and listing is verified to ensure safe, genuine, and
            transparent auctions.
          </p>
        </details>

        <details>
          <summary>Real-Time Transparency</summary>
          <p>
            Live bidding updates, full vehicle history, and no hidden fees.
          </p>
        </details>

        <details>
          <summary>Secure End-to-End Platform</summary>
          <p>
            From bidding to payments and delivery, everything is protected with
            enterprise-grade security.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>

{/* ================= TRUSTED AUCTIONS ================= */}
      <section className="trusted-auctions">
        <div className="trusted-container">
          <span className="section-tag">LIVE AUCTIONS</span>
          <h2 className="trusted-title">Real-Time Auctions You Can Trust</h2>
          <p className="trusted-subtitle">
            Bid on verified listings with full visibility and clear pricing.
          </p>
          <button className="trusted-btn">Browse Auctions</button>
        </div>
        <LiveAuctions/>
      </section>


      {/* ================= VISUAL FEATURES ================= */}
      <section className="visual-features">
        <div className="visual-inner">

          <div className="visual-header">
            <span className="tag">FEATURES</span>
            <h2>Powerful Features Built for Auctions</h2>
            <p>
              Advanced features that ensure fairness, security, and real-time
              performance
            </p>
          </div>

          {/* Feature 1 */}
          <div className="feature-row">
            <div className="feature-text">
              <h3>Built for Serious Dealers</h3>
              <p>
                A professional auction experience with verified access,
                real-time bidding, full vehicle transparency, and a secure
                post-auction process.
              </p>
              <button className="text-link">Learn more →</button>
            </div>

            <div className="feature-image">
              <img
                src="/f1.png"
                alt="Auction Dashboard"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-row reverse">
            <div className="feature-text">
              <h3>Professional Auctions, End to End</h3>
              <p>
                From registration to delivery, we handle the complete auction
                lifecycle with secure payments and verified vehicle history.
              </p>
              <button className="text-link">Learn more →</button>
            </div>

            <div className="feature-image">
              <img
                src="/f2.png"
                alt="Auction Platform"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-row">
            <div className="feature-text">
              <h3>Transparent Vehicle Auctions</h3>
              <p>
                No hidden fees, no undisclosed damage. Full inspection reports
                and detailed photo galleries for every vehicle.
              </p>
              <button className="text-link">Learn more →</button>
            </div>

            <div className="feature-image">
              <img src="/f3.png" alt="vehicle Auction"/>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section id="whyus" className="features">
        <h5>WHY DEALERS CHOOSE US</h5>
        <h2>Built for professional trading</h2>
        <p>Every auction is designed to deliver verified access, real-time control, and predictable outcomes</p>

        <div className="feature-list">
          <div className="feature-card">
          <img src="/DeviceMobileSpeaker.png" alt="Icon"/>
            <h6>Dealer-Only Access </h6>
            <p>Our platform is exclusively for verified professionals, ensuring serious participation, genuine listings, and higher-quality auctions</p>
          </div>

          <div className="feature-card">
          <img src="Clock.png" alt="Icon"/>
            <h6>Total Transparency</h6>
            <p>From detailed vehicle reports to real-time bidding activity, you see everything before and during the auction no hidden information</p>
          </div>

          <div className="feature-card">
          <img src="/CarProfile.png" alt="Icon"/>
            <h6>Predictable Post-Auction Flow</h6>
            <p>Clear next steps after winning, fast settlement, and secure documentation so you always know what happens next</p>
          </div>
        </div>
        <h5>TESTIMONIALS</h5>
        <h2>Trusted by Dealers Nationwide</h2>
        <p>Hear from professionals who rely on our platform for transparent<br/>and secure auctions</p>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>

        <details>
          <summary>How do I create a seller account?</summary>
          <p>You can sign up and complete the verification process.</p>
        </details>

        <details>
          <summary>What are the fees for listing a car?</summary>
          <p>Fees depend on the auction type and vehicle category.</p>
        </details>

        <details>
            <summary>How does the shipping process work?</summary>
            <p> We partner with certified auto transport companies nationwide. After winning an auction, you can arrange shipping directly through our platform for a smooth and secure delivery experience.</p>
        </details>

        <details>
          <summary>Are there any volume discounts for dealers?</summary>
          <p>Yes. We offer tiered subscription plans for professional dealers who buy or list multiple vehicles each month, helping you save more as your volume grows.</p>
        </details>

        <details>
          <summary>What payment methods are supported?</summary>
          <p>We support secure bank transfers, major credit cards and integrated escrow services to ensure buyer protection and safe transactions</p>
        </details>

      </section>

      {/* ================= PRE FOOTER ================= */}
      <section className="pre-footer">
        <h2>Join a Trusted Dealer Auction Network</h2>
        <p>Join Ireland's trusted vehicle auctions and unlock exclusive deals</p>

        <div className="pre-footer-buttons">
          <button className="primary-btn">Get Started Free</button>
          <button className="secondary-btn">Browse Auctions<span className="arrow"> →</span></button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
  <div className="footer-container">
    {/* Left brand */}
    <div className="footer-brand">
      <h3>AutoBid Pro</h3>
    </div>

    {/* Columns */}
    <div className="footer-columns">
    <div className="footer-column">
      <h4>ABOUT</h4>
      <button className="footer-link">Overview</button>
      <button className="footer-link">Features</button>
      <button className="footer-link">Solutions</button>
      <button className="footer-link">Tutorials</button>
      <button className="footer-link">Pricing</button>
    </div>

    <div className="footer-column">
      <h4>COMPANY</h4>
      <button className="footer-link">About Us</button>
      <button className="footer-link">Careers</button>
      <button className="footer-link">Press</button>
      <button className="footer-link">News</button>
      <button className="footer-link">Contact</button>
    </div>

    <div className="footer-column">
      <h4>LEGAL</h4>
      <button className="footer-link">Terms of Service</button>
      <button className="footer-link">Privacy Policy</button>
      <button className="footer-link">Cookie Policy</button>
      <button className="footer-link">Disclaimer</button>
    </div>
  </div>
    </div>
    <div className="footer-bottom">
    © 2026 AutoBid Pro. All rights reserved.
    </div>
    </footer>    
    </div>
  );
}

export default LandingPage;

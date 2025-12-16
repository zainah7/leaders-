const { useState } = React;

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="logo-container">
                    <img src="images/Asset 39.png" alt="Logo" className="logo" />
                    <div className="logo-text">
                        <span>The Global</span>
                        <span>Leaders</span>
                        <span>Week in Dubai</span>
                    </div>
                </div>
                <div className="header-info">
                    <span className="header-date">May 4-7, 2026 • Dubai – UAE</span>
                    <img src="images/Asset 41.png" alt="Calendar" className="calendar-icon blue-filter" />
                </div>
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
            <div className="header-bottom">
                 <p></p>
            </div>
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                <a href="#">HOME</a> | <a href="#">DATAMATIX</a> | <a href="#">Excellence Awards</a> | <a href="#">PROFILE</a> | <a href="#">AGENDA</a> | <a href="#">SPEAKERS</a> | <a href="#">REGISTRATION</a> | <a href="#">PARTNERSHIP</a>
            </nav>
        </header>
    );
}

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Innovating,<br/>Implementing<br/>and Inspiring<br/>by Transforming<br/>Governance<br/>Worldwide</h1>
            </div>
        </section>
    );
}

const DatamatixInfo = () => {
    return (
        <section className="datamatix-info">
            <div className="datamatix-info-content">
                <p>Datamatix Established Since: May 13, 1989 34 years 1 month 13 days 23 hours 40 minutes 35 seconds</p>
                <button className="photo-gallery-button">Photo Gallery</button>
            </div>
        </section>
    );
}

const Stats = () => {
    return (
        <section className="stats">
            <div className="stat-item">
                <i className="fas fa-calendar-alt"></i>
                <span>37+</span>
                <p>Years in Business</p>
            </div>
            <div className="stat-item">
                <i className="fas fa-trophy"></i>
                <span>2500+</span>
                <p>Successful Events</p>
            </div>
            <div className="stat-item">
                <i className="fas fa-users"></i>
                <span>5000+</span>
                <p>Satisfied Clients</p>
            </div>
            <div className="stat-item">
                <i className="fas fa-broadcast-tower"></i>
                <span>500+</span>
                <p>Media Partners</p>
            </div>
            <div className="stat-item">
                <i className="fas fa-handshake"></i>
                <span>500+</span>
                <p>Platinum Partners</p>
            </div>
            <div className="stat-item">
                <i className="fas fa-heart"></i>
                <span>300+</span>
                <p>Other Supporters</p>
            </div>
        </section>
    );
}

const CountdownSection = () => {
    return (
        <section className="countdown-section">
            <div className="countdown">
                <div>
                    <span>75</span>
                    <p>Days</p>
                </div>
                <div>
                    <span>13</span>
                    <p>Hours</p>
                </div>
                <div>
                    <span>33</span>
                    <p>Minutes</p>
                </div>
                <div>
                    <span>58</span>
                    <p>Seconds</p>
                </div>
                <div className="countdown-actions">
                    <div className="event-date-container">
                        <p>May 5-8, 2026 • Dubai, UAE</p>
                    </div>
                    <div className="event-buttons">
                        <button className="register-btn">Register Now</button>
                        <button className="partnership-btn">Partnership</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

const EventsIntro = () => {
    return (
        <div className="events-intro-section">
            <div className="events-intro-left-bar"></div>
            <div className="events-intro-red-square">
                <img src="images/Asset 41.png" alt="Events Calendar Icon" className="events-intro-icon-image" />
            </div>
           <div className="events-intro-content">
             <h2 className="events-schedule-title">
             • The Global Aviation Industry Week in Dubai<br/>EVENTS SCHEDULE
             </h2>            
             </div>
            <div className="events-intro-right-bar"></div>
        </div>
    );
}

const Events = () => {
    return (
        <section className="events">
            <div className="event-grid">
                <div className="event-card">
                    <img src="images/Asset 46.png" alt="GLOBAL AUTOMOTIVE INDUSTRY WEEK IN DUBAI" />
                    <h3>GLOBAL AUTOMOTIVE<br/>INDUSTRY WEEK IN<br/>DUBAI</h3>
                    <p>4-7 May 2026, Dubai – UAE</p>
                </div>
                <div className="event-card">
                    <img src="images/Asset 47.png" alt="GLOBAL AUTONOMOUS VEHICLE LEGISLATION SUMMIT" />
                    <h3>GLOBAL AUTONOMOUS<br/>VEHICLE LEGISLATION<br/>SUMMIT</h3>
                    <p>4 May 2026, Dubai – UAE</p>
                </div>
                <div className="event-card">
                    <img src="images/Asset 48.png" alt="GLOBAL AUTOMOTIVE MANUFACTURER SUMMIT" />
                    <h3>GLOBAL AUTOMOTIVE<br/>MANUFACTURER<br/>SUMMIT</h3>
                    <p>4 May 2026, Dubai – UAE</p>
                </div>
                <div className="event-card">
                    <img src="images/Asset 43.png" alt="GLOBAL AUTOMOTIVE CONCEPT DESIGNERS’ SUMMIT" />
                    <h3>GLOBAL AUTOMOTIVE<br/>CONCEPT DESIGNERS’<br/>SUMMIT</h3>
                    <p>5 May 2026, Dubai – UAE</p>
                </div>
                <div className="event-card">
                    <img src="images/Asset 44.png" alt="GLOBAL AUTOMOTIVE SPARE PARTS MANUFACTURERS’ SUMMIT" />
                    <h3>GLOBAL AUTOMOTIVE<br/>SPARE PARTS<br/>MANUFACTURERS’<br/>SUMMIT</h3>
                    <p>6 May 2026, Dubai – UAE</p>
                </div>
                <div className="event-card">
                    <img src="images/Asset 45.png" alt="DEBATE: CONVENTIONAL CAR VS. ELECTRICAL AUTOMOTIVE SUMMIT" />
                    <h3>DEBATE: CONVENTIONAL<br/>CAR VS. ELECTRICAL<br/>AUTOMOTIVE SUMMIT</h3>
                    <p>6 May 2026, Dubai – UAE</p>
                </div>
            </div>
        </section>
    );
}

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <img src="images/Asset 49.png" alt="Logo" className="footer-logo" />
                <h3>Uniting Leaders to Deliver Exceptional Efficiency in Public Service</h3>
            </div>
            <div className="footer-middle">
                <div className="footer-col">
                    <h4>Datamatix Profile</h4>
                    <ul>
                        <li><a href="#">&gt; Welcome</a></li>
                        <li><a href="#">&gt; Who we are</a></li>
                        <li><a href="#">&gt; Photo Gallery</a></li>
                        <li><a href="#">&gt; Testimonials</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Datamatix Events</h4>
                    <ul>
                        <li><a href="#">&gt; Conferences</a></li>
                        <li><a href="#">&gt; Executives Programs</a></li>
                        <li><a href="#">&gt; Round Table Meetings</a></li>
                        <li><a href="#">&gt; Business Delegations</a></li>
                        <li><a href="#">&gt; Knowledge Exchange</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Datamatix Services</h4>
                    <ul>
                        <li><a href="#">&gt; Our Services</a></li>
                        <li><a href="#">&gt; Consultancies</a></li>
                        <li><a href="#">&gt; Events Management</a></li>
                        <li><a href="#">&gt; inDubai Services</a></li>
                        <li><a href="#">&gt; Research Center</a></li>
                    </ul>
                </div>
                <div className="footer-col no-border">
                    <h4>Global Platform</h4>
                    <ul>
                        <li><a href="#">&gt; World Conferences</a></li>
                        <li><a href="#">&gt; World Rea Estate Events</a></li>
                        <li><a href="#">&gt; World Influencers Council</a></li>
                        <li><a href="#">&gt; Woibex Int. Council</a></li>
                        <li><a href="#">&gt; Int. Remote Work Council</a></li>
                        <li><a href="#">&gt; World Government Platform</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Events Speakers</h4>
                    <ul>
                        <li><a href="#">&gt; Celebrities</a></li>
                        <li><a href="#">&gt; Keynotes Speakers</a></li>
                        <li><a href="#">&gt; MC’s and Presenters</a></li>
                        <li><a href="#">&gt; Partnership</a></li>
                        <li><a href="#">&gt; Sugguestions</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Traveling Services</h4>
                    <ul>
                        <li><a href="#">&gt; City Information</a></li>
                        <li><a href="#">&gt; Airlines Information</a></li>
                        <li><a href="#">&gt; Shopping malls</a></li>
                        <li><a href="#">&gt; Restaurants Information</a></li>
                        <li><a href="#">&gt; Hotels Information</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Careers and Jobs</h4>
                    <ul>
                        <li><a href="#">&gt; Mentoring</a></li>
                        <li><a href="#">&gt; Intership</a></li>
                        <li><a href="#">&gt; Volunteer</a></li>
                        <li><a href="#">&gt; Recruitment</a></li>
                        <li><a href="#">&gt; Remote Working</a></li>
                    </ul>
                </div>
                <div className="footer-col no-border">
                    <h4>Media and News</h4>
                    <ul>
                        <li><a href="#">&gt; Press Releases</a></li>
                        <li><a href="#">&gt; Datamatix Tv</a></li>
                        <li><a href="#">&gt; Datamatix Radio</a></li>
                        <li><a href="#">&gt; Datamatix Podcast</a></li>
                        <li><a href="#">&gt; Interviews</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-subscribe">
                <h4>Subscribe to our special offers</h4>
                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your email" />
                    <button className="submit-btn">Submit</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2025-2030 © Datamatix Group - Copyright All Rights Reserved</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
}

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <DatamatixInfo />
            <Stats />
            <EventsIntro />
            <CountdownSection />
            <Events />
            <Footer />
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
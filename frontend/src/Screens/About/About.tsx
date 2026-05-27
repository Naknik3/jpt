import "./About.css";

export function About() {
    return (
        <div className="about-screen">
            <div className="about-avatar">G.L.H</div>
            <h1 className="about-name">Guy Hass</h1>
            <p className="about-title">Fullstack Developer</p>
            <p className="about-bio">
                Fullstack developer who loves building clean, purposeful web applications — from smooth UIs to solid backends.
            </p>
            <div className="about-links">
                <a href="https://github.com/Naknik3" target="_blank" rel="noreferrer">GitHub</a>
                <a href="mailto:guylhass@gmail.com">Email</a>
            </div>
        </div>
    );
}

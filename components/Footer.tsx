const socials = {
    "discord": "https://www.discord.gg/yW6YyFtkXz",
    "twitter": "https://twitter.com/Octovon",
    "github": "https://github.com/Octovon-MC"
}

export default function Footer() {
    return (
        <div id="footer">
            <h1>© The Octovon Team</h1>
            <h2>Made with love from across the world!</h2>
            <div id="footer-inner">
                {Object.entries(socials).map(([key, value]) => (
                    <a href={value} target="_blank">
                        <img src={`./assets/social/${key}.png`} alt={key} />
                    </a>
                ))}
            </div>
        </div>
    )
}

class Footer {
    constructor() {
        this.placeholder = document.getElementById('footer-placeholder');
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        this.placeholder.innerHTML = `
            <footer class="main-footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-column">
                            <h4>Naptech Precision Engineering</h4>
                            <p style="opacity: 0.8; margin-bottom: 1rem;">Quality You Can Trust</p>
                            <p style="font-size: 0.9rem; opacity: 0.7;">ISO 9001:2015 Certified Company</p>
                        </div>
                        <div class="footer-column">
                            <h4>Quick Links</h4>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="capabilities.html">Capabilities</a></li>
                                <li><a href="contact.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h4>Contact Info</h4>
                            <p style="margin-bottom: 0.5rem;">Plot No. 17/1, Basai Industrial Area,<br>Basai, Gurgaon – 122001, Haryana, India</p>
                            <p>Email: <a href="mailto:info@naptech.com" style="color: var(--white);">info@naptech.com</a></p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} Naptech Precision Engineering. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    new Footer();
});

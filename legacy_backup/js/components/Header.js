class Header {
    constructor() {
        this.placeholder = document.getElementById('header-placeholder');
        this.init();
    }

    init() {
        this.render();
        // this.setupMobileMenu(); // Re-implement or adapt if needed
    }

    render() {
        const navLinks = [
            { name: 'Home', url: 'index.html' },
            {
                name: 'Company',
                url: '#',
                dropdown: [
                    { name: 'About Us', url: 'about.html' },
                    { name: 'Our Team', url: 'team.html' },
                    { name: 'Clients', url: 'clients.html' },
                    { name: 'Industries Served', url: 'industries.html' }
                ]
            },
            {
                name: 'Infrastructure',
                url: '#',
                dropdown: [
                    { name: 'Overview', url: 'infrastructure.html' },
                    { name: 'Shop Floor', url: 'shop-floor.html' },
                    { name: 'CNC Machine Shop', url: 'cnc-machine-shop.html' },
                    { name: 'Machine List', url: 'machine-list.html' },
                    { name: 'Fixtures', url: 'fixtures.html' }
                ]
            },
            {
                name: 'Capabilities',
                url: '#',
                dropdown: [
                    { name: 'Overview', url: 'capabilities.html' },
                    { name: 'Solution Provider', url: 'solution-provider.html' },
                    { name: 'Process Chain', url: 'process-chain.html' },
                    { name: 'Materials', url: 'materials.html' },
                    { name: 'Operation Management', url: 'operation-management.html' }
                ]
            },
            {
                name: 'Products',
                url: '#',
                dropdown: [
                    { name: 'Overview', url: 'products.html' },
                    { name: 'Hubs', url: 'hubs.html' },
                    { name: 'Precision Parts', url: 'precision-parts.html' }
                ]
            },
            {
                name: 'Quality',
                url: '#',
                dropdown: [
                    { name: 'Quality System', url: 'quality-system.html' },
                    { name: 'Quality Policy', url: 'quality-policy.html' },
                    { name: 'Quality Objectives', url: 'quality-objectives.html' },
                    { name: 'Certifications', url: 'certifications.html' },
                    { name: 'Instrumentation', url: 'quality-instrumentation.html' }
                ]
            },
            { name: 'Contact', url: 'contact.html' }
        ];

        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        this.placeholder.innerHTML = `
            <header class="header glass" style="position: sticky; top: 0; z-index: 1000; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(0,0,0,0.05);">
                <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 0;">
                    <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
                        <img src="assets/images/logo.png" alt="Naptech" style="height: 45px; width: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div style="display:none; width:45px; height:45px; background:var(--primary-color); color:white; border-radius:8px; align-items:center; justify-content:center; font-weight:800; font-size:1.5rem;">N</div>
                        <div style="display: flex; flex-direction: column; line-height: 1;">
                            <span style="font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 1.5rem; color: #000; letter-spacing: 1px;">NAPTECH</span>
                            <span style="font-family: 'Outfit', sans-serif; font-size: 0.7rem; color: #000; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">Precision Engineering</span>
                        </div>
                    </a>

                    <nav class="nav-menu" style="display: flex; gap: 1.5rem; align-items: center;">
                        ${navLinks.map(link => {
            const isActive = link.url === currentPath || (link.dropdown && link.dropdown.some(d => d.url === currentPath));
            if (link.dropdown) {
                return `
                    <div class="nav-item-dropdown">
                        <a href="${link.url}" class="nav-link ${isActive ? 'active' : ''}" style="display: flex; align-items: center; gap: 4px;">
                            ${link.name} 
                            <svg width="10" height="6" viewBox="0 0 10 6" style="fill: currentColor; opacity: 0.5;"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
                        </a>
                        <div class="dropdown-menu glass">
                            ${link.dropdown.map(subItem => `
                                <a href="${subItem.url}" class="dropdown-link ${subItem.url === currentPath ? 'active' : ''}">
                                    ${subItem.name}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            return `<a href="${link.url}" class="nav-link ${isActive ? 'active' : ''}">${link.name}</a>`;
        }).join('')}
                    </nav>
                </div>
            </header>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Header();
});

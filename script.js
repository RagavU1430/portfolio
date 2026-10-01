// Realistic Shooting Star Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
// Hide old outline since we use canvas trail now
if (cursorOutline) {
    cursorOutline.style.display = 'none';
}

// Create canvas for the trail
const trailCanvas = document.createElement('canvas');
trailCanvas.id = 'cursor-trail';
document.body.appendChild(trailCanvas);
const ctx = trailCanvas.getContext('2d');

trailCanvas.style.position = 'fixed';
trailCanvas.style.top = '0';
trailCanvas.style.left = '0';
trailCanvas.style.width = '100vw';
trailCanvas.style.height = '100vh';
trailCanvas.style.pointerEvents = 'none';
trailCanvas.style.zIndex = '9998'; // Just below cursor-dot

let width = trailCanvas.width = window.innerWidth;
let height = trailCanvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    width = trailCanvas.width = window.innerWidth;
    height = trailCanvas.height = window.innerHeight;
});

const particles = [];
let mouse = { x: width/2, y: height/2, active: false };
let lastMouse = { x: width/2, y: height/2 };

window.addEventListener('mousemove', (e) => {
    lastMouse.x = mouse.x;
    lastMouse.y = mouse.y;
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;


    const dx = mouse.x - lastMouse.x;
    const dy = mouse.y - lastMouse.y;
    const distance = Math.sqrt(dx*dx + dy*dy);
    
    // Create particles based on speed
    if (distance > 0) { 
        // Remove speed limit, and interpolate better so it's smooth during fast movement
        const numParticles = Math.min(Math.max(Math.floor(distance / 3), 1), 60);
        for (let i = 0; i < numParticles; i++) {
            const spread = Math.random() * 4 - 2;
            particles.push({
                x: lastMouse.x + dx * (i / numParticles) + spread,
                y: lastMouse.y + dy * (i / numParticles) + spread,
                vx: -dx * 0.02 + (Math.random() - 0.5) * 0.5, // smoother spread tail
                vy: -dy * 0.02 + (Math.random() - 0.5) * 0.5, // remove gravity for a pure tail
                life: 1, // 0 to 1
                size: Math.random() * 2.5 + 1.5,
                decay: Math.random() * 0.03 + 0.02, // slightly faster fade to handle more particles
                hue: 180 + Math.random() * 40 // cyan to blue colors
            });
        }
    }
});

function drawTrail() {
    ctx.clearRect(0, 0, width, height);
    
    // Sync dot position smoothly with animation frames to avoid DOM thrashing
    if (cursorDot && mouse.active) {
        cursorDot.style.left = `${mouse.x}px`;
        cursorDot.style.top = `${mouse.y}px`;
    }

    // Safety cap to prevent lag if particles array gets too large
    if (particles.length > 200) {
        particles.splice(0, particles.length - 200);
    }
    
    // Glowing blending
    ctx.globalCompositeOperation = 'lighter';
    
    for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Fast pseudo-glow (Avoids expensive shadowBlur)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${p.life * 0.3})`;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 80%, ${p.life})`;
        ctx.fill();
        
        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        
        // Remove dead
        if (p.life <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
    
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(drawTrail);
}

drawTrail();

// Interactive Elements Hover
const interactiveElements = document.querySelectorAll('a, button, .skill-category, .project-card, input, textarea');

if (cursorDot) {
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursorDot.style.backgroundColor = '#fff';
            cursorDot.style.boxShadow = '0 0 15px #fff, 0 0 30px var(--accent-primary)';
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.backgroundColor = 'var(--accent-primary)';
            cursorDot.style.boxShadow = '0 0 10px var(--accent-primary)';
        });
    });
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.section, .project-card, .timeline-item, .skill-category');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease-out';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();


// Number Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // The lower the slower

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

// Trigger counter animation when the stats section is in view
let countersTriggered = false;
const statsSection = document.querySelector('.stats-grid');

if (statsSection) {
    window.addEventListener('scroll', () => {
        if (!statsSection) return;
        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos && !countersTriggered) {
            animateCounters();
            countersTriggered = true;
        }
    });
}

// Matrix Background Effect
const canvas = document.getElementById('matrix-bg');
if (canvas) {
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    let columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }

    const draw = () => {
        // Fade out previous frame to create trail effect
        // Using theme background color with very high opacity for fade
        ctx.fillStyle = 'rgba(11, 15, 25, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00f0ff'; // Cyber Cyan to match theme
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    setInterval(draw, 30);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        // Optionally reset drops or just let them fall
    });
}

// 3D Profile Card Interactive Rotation
const tiltCard = document.getElementById('tilt-card');
if (tiltCard) {
    let isDraggingImage = false;
    let imgStartX = 0, imgStartY = 0;
    let currentRotX = 0, currentRotY = 0;

    // Hover effect for subtle 3D tilt
    tiltCard.addEventListener('mousemove', (e) => {
        if (isDraggingImage) return;
        
        const rect = tiltCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Tilt up to 25 degrees
        const rotateY = ((x - centerX) / centerX) * 25;
        const rotateX = -((y - centerY) / centerY) * 25;
        
        tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    tiltCard.addEventListener('mouseleave', () => {
        if (!isDraggingImage) {
            tiltCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
            tiltCard.style.transition = 'transform 0.5s ease';
        }
    });

    tiltCard.addEventListener('mouseenter', () => {
        if (!isDraggingImage) {
            tiltCard.style.transition = 'transform 0.1s ease';
        }
    });

    // Drag effect for free 3D rotation
    tiltCard.addEventListener('mousedown', (e) => {
        isDraggingImage = true;
        imgStartX = e.clientX;
        imgStartY = e.clientY;
        tiltCard.style.transition = 'none';
        tiltCard.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDraggingImage) return;
        
        const deltaX = e.clientX - imgStartX;
        const deltaY = e.clientY - imgStartY;
        
        currentRotY += deltaX * 0.6; // slightly more sensitive
        currentRotX -= deltaY * 0.6;
        
        imgStartX = e.clientX;
        imgStartY = e.clientY;
        
        tiltCard.style.transform = `rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;
    });

    window.addEventListener('mouseup', () => {
        if (isDraggingImage) {
            isDraggingImage = false;
            tiltCard.style.cursor = 'grab';
            tiltCard.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            tiltCard.style.transform = `rotateX(0deg) rotateY(0deg)`;
            currentRotX = 0;
            currentRotY = 0;
        }
    });
}

// ========================================================
// CERTIFICATIONS SHOWCASE: FILTERING, SEARCH, PAGINATION & LIGHTBOX
// ========================================================
const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let currentActiveFilter = 'all';
let currentSearchQuery = '';
let currentFilteredCards = [];
let currentModalIndex = 0;

// View Switcher (Grid / List)
const viewGridBtn = document.getElementById('viewGridBtn');
const viewListBtn = document.getElementById('viewListBtn');
const certGrid = document.getElementById('certGrid');

if (viewGridBtn && viewListBtn && certGrid) {
    viewGridBtn.addEventListener('click', () => {
        certGrid.classList.remove('list-view');
        viewGridBtn.classList.add('active');
        viewListBtn.classList.remove('active');
    });

    viewListBtn.addEventListener('click', () => {
        certGrid.classList.add('list-view');
        viewListBtn.classList.add('active');
        viewGridBtn.classList.remove('active');
    });
}

// Smooth scroll to top of cert section on page change
function scrollToCertSection() {
    const certSection = document.getElementById('certifications');
    if (certSection) {
        const navHeight = 70;
        const targetPos = certSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    }
}

// Filter, Search, and Paginate
function filterCertificates(resetToPageOne = true) {
    if (resetToPageOne) {
        currentPage = 1;
    }

    const cards = Array.from(document.querySelectorAll('#certGrid .cert-card'));
    const emptyState = document.getElementById('certEmptyState');
    const paginationContainer = document.getElementById('certPaginationContainer');

    // 1. Filter matching cards
    currentFilteredCards = cards.filter(card => {
        const category = card.getAttribute('data-category');
        const searchKeywords = (card.getAttribute('data-search') || '').toLowerCase();
        const matchesCategory = (currentActiveFilter === 'all' || category === currentActiveFilter);
        const matchesSearch = !currentSearchQuery || searchKeywords.includes(currentSearchQuery);
        return matchesCategory && matchesSearch;
    });

    const totalItems = currentFilteredCards.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    // 2. Hide all cards
    cards.forEach(card => card.classList.add('hidden'));

    // 3. Show current page slice
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

    for (let i = startIndex; i < endIndex; i++) {
        const card = currentFilteredCards[i];
        if (card) {
            card.classList.remove('hidden');
        }
    }

    // 4. Update Empty State & Pagination Bar
    if (totalItems === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (paginationContainer) paginationContainer.style.display = 'none';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        if (paginationContainer) paginationContainer.style.display = 'flex';
        renderPagination(totalItems, totalPages, startIndex, endIndex);
    }
}

function renderPagination(totalItems, totalPages, startIndex, endIndex) {
    const pageInfo = document.getElementById('certPageInfo');
    const pagination = document.getElementById('certPagination');

    if (pageInfo) {
        pageInfo.textContent = `Showing ${startIndex + 1}–${endIndex} of ${totalItems} credential${totalItems === 1 ? '' : 's'}`;
    }

    if (!pagination) return;
    pagination.innerHTML = '';

    if (totalPages <= 1) {
        return; // No pagination buttons needed for single page
    }

    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn page-btn-prev';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.title = 'Previous Page';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            filterCertificates(false);
            scrollToCertSection();
        }
    });
    pagination.appendChild(prevBtn);

    // Page Numbers
    for (let p = 1; p <= totalPages; p++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${p === currentPage ? 'active' : ''}`;
        pageBtn.textContent = p;
        pageBtn.title = `Page ${p}`;
        pageBtn.addEventListener('click', () => {
            if (currentPage !== p) {
                currentPage = p;
                filterCertificates(false);
                scrollToCertSection();
            }
        });
        pagination.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn page-btn-next';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.title = 'Next Page';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            filterCertificates(false);
            scrollToCertSection();
        }
    });
    pagination.appendChild(nextBtn);

    attachCursorEvents();
}

// Category Tabs Click Handlers
const filterButtons = document.querySelectorAll('.cert-filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentActiveFilter = btn.getAttribute('data-filter') || 'all';
        filterCertificates(true);
    });
});

// Search Box Input & Clear
const searchInput = document.getElementById('certSearchInput');
const searchClear = document.getElementById('certSearchClear');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.trim().toLowerCase();
        if (searchClear) {
            searchClear.style.display = currentSearchQuery ? 'block' : 'none';
        }
        filterCertificates(true);
    });
}

if (searchClear) {
    searchClear.addEventListener('click', () => {
        if (searchInput) {
            searchInput.value = '';
            currentSearchQuery = '';
            searchClear.style.display = 'none';
            searchInput.focus();
            filterCertificates(true);
        }
    });
}

function resetCertFilters() {
    currentActiveFilter = 'all';
    currentSearchQuery = '';
    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';
    filterButtons.forEach(b => {
        if (b.getAttribute('data-filter') === 'all') {
            b.classList.add('active');
        } else {
            b.classList.remove('active');
        }
    });
    filterCertificates(true);
}

// Lightbox Modal Functions
function openCertModal(certId) {
    if (typeof CERTIFICATES_DATA === 'undefined') return;
    
    const allFilteredIds = currentFilteredCards.map(c => c.getAttribute('data-id')).filter(Boolean);
    const index = allFilteredIds.indexOf(certId);
    if (index !== -1) {
        currentModalIndex = index;
    } else {
        currentModalIndex = 0;
    }

    renderModalContent(certId);
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function renderModalContent(certId) {
    if (typeof CERTIFICATES_DATA === 'undefined') return;
    const cert = CERTIFICATES_DATA.find(c => c.id === certId);
    if (!cert) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalBadge = document.getElementById('modalBadge');
    const modalIssuer = document.getElementById('modalIssuer');
    const modalDesc = document.getElementById('modalDesc');
    const modalTags = document.getElementById('modalTags');
    const modalImg = document.getElementById('modalImg');
    const modalDirectLink = document.getElementById('modalDirectLink');
    const modalNewTab = document.getElementById('modalNewTab');

    if (modalTitle) modalTitle.textContent = cert.title;
    if (modalBadge) {
        modalBadge.textContent = cert.badge || 'Verified Credential';
        modalBadge.style.display = cert.badge ? 'inline-block' : 'none';
    }
    if (modalIssuer) modalIssuer.innerHTML = `<i class="${cert.icon}"></i> ${cert.issuer}`;
    if (modalDesc) modalDesc.textContent = cert.desc;
    if (modalImg) {
        modalImg.src = cert.thumb;
        modalImg.alt = cert.title;
    }
    if (modalDirectLink) {
        modalDirectLink.href = cert.file;
        modalDirectLink.setAttribute('download', cert.file.split('/').pop());
    }
    if (modalNewTab) modalNewTab.href = cert.file;

    if (modalTags) {
        modalTags.innerHTML = '';
        (cert.tags || []).forEach(tag => {
            const span = document.createElement('span');
            span.className = 'cert-tag';
            span.textContent = tag;
            modalTags.appendChild(span);
        });
    }
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

function nextCertModal() {
    const allFilteredIds = currentFilteredCards.map(c => c.getAttribute('data-id')).filter(Boolean);
    if (allFilteredIds.length === 0) return;
    currentModalIndex = (currentModalIndex + 1) % allFilteredIds.length;
    renderModalContent(allFilteredIds[currentModalIndex]);
}

function prevCertModal() {
    const allFilteredIds = currentFilteredCards.map(c => c.getAttribute('data-id')).filter(Boolean);
    if (allFilteredIds.length === 0) return;
    currentModalIndex = (currentModalIndex - 1 + allFilteredIds.length) % allFilteredIds.length;
    renderModalContent(allFilteredIds[currentModalIndex]);
}

// Keyboard Listeners for Modal
window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('certModal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        closeCertModal();
    } else if (e.key === 'ArrowRight') {
        nextCertModal();
    } else if (e.key === 'ArrowLeft') {
        prevCertModal();
    }
});

// Update interactive cursor hover elements
function attachCursorEvents() {
    if (!cursorDot) return;
    const certInteractives = document.querySelectorAll(
        '.cert-filter-btn, .cert-btn-view, .cert-btn-link, .cert-card-media, .cert-modal-nav, .cert-modal-close, .cert-view-btn, .page-btn, .contact-item, .btn-submit-whatsapp, .footer-socials a'
    );
    certInteractives.forEach(el => {
        el.onmouseenter = () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2.2)';
            cursorDot.style.backgroundColor = '#fff';
            cursorDot.style.boxShadow = '0 0 15px #fff, 0 0 30px var(--accent-primary)';
        };
        el.onmouseleave = () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.backgroundColor = 'var(--accent-primary)';
            cursorDot.style.boxShadow = '0 0 10px var(--accent-primary)';
        };
    });
}

// WhatsApp Quick Contact Form
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (document.getElementById('name')?.value || '').trim();
        const email = (document.getElementById('email')?.value || '').trim();
        const message = (document.getElementById('message')?.value || '').trim();

        let text = `Hello Ragav, my name is ${name}.%0A`;
        if (email) text += `Email: ${email}%0A`;
        text += `Message: ${encodeURIComponent(message)}`;

        const phone = '919360376757';
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    filterCertificates(true);
    attachCursorEvents();
});


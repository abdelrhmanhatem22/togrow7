// ============================================================
// RENDER COURSES (supports language, translates "Months")
// ============================================================
window.renderCourses = function(lang = "en") {
    const coursesGrid = document.getElementById("coursesGrid");
    if (!coursesGrid) return;
    const t = TRANSLATIONS[lang];
    coursesGrid.innerHTML = COURSES.map(c => {
        const match = c.duration.match(/(\d+)\s+(\w+)/);
        let translatedDuration = c.duration;
        if (match && t?.months) {
            translatedDuration = `${match[1]} ${t.months}`;
        }
        const title = lang === "ar" && c.title_ar
    ? c.title_ar
    : c.title;

const short = lang === "ar" && c.short_ar
    ? c.short_ar
    : c.short;
        return `
            <article class="course-card">
                <div class="course-img">
                    
                    
                    <img src="${c.img}" alt="${c.name}">
                
                </div>
                <div class="course-body">
                    <h4>${title}</h4>
                    <p class="muted small">${short}</p>
                    <div class="course-meta">
                        <span>
                            <i class="fa-regular fa-clock"></i>
                            ${translatedDuration}
                        </span>
                    </div>
                    <a href="course.html?slug=${c.slug}" class="btn btn-outline w-full">
                        ${t?.view_details || 'View Details'}
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </article>
        `;
    }).join("");
};

// ============================================================
// RENDER TRAINERS (10 trainers with Arabic/English support)
// ============================================================
window.renderTrainers = function(lang = "en") {
    const trainersGrid = document.getElementById("trainersGrid");
    if (!trainersGrid) return;
    trainersGrid.innerHTML = TRAINERS.map(t => {
        const role = lang === "ar" ? t.role_ar : t.role_en;
        const bio = lang === "ar" ? t.bio_ar : t.bio_en;
        return `
            <article class="trainer-card">
                <div class="trainer-img">
                    <img src="${t.img}" alt="${t.name}">
                </div>
                <h4>${t.name}</h4>
                <span class="role">${role}</span>
                <p class="muted small">${bio}</p>
                <div class="socials center">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </article>
        `;
    }).join("");
};

// ============================================================
// RENDER OFFERS (7 offers with translation for button)
// ============================================================
window.renderOffers = function(lang = "en") {
    const offersGrid = document.getElementById("offersGrid");
    if (!offersGrid) return;
    const t = TRANSLATIONS[lang];
    offersGrid.innerHTML = OFFERS.map(o => `
        <article class="offer-card">
            <div class="offer-img" style="background-image:url('${o.img}')">
                <span class="discount">-${o.discount}%</span>
            </div>
            <div class="offer-body">
                <h4>${o.course}</h4>
                <div class="prices">
                    <span class="old">${o.oldPrice} EGP</span>
                    <span class="new">${o.newPrice} EGP</span>
                </div>
                <p class="muted small">
                    <i class="fa-regular fa-clock"></i>
                    ${o.duration}
                </p>
                <a href="#contact" class="btn btn-primary w-full">
                    ${t?.register_now || 'Register Now'}
                </a>
            </div>
        </article>
    `).join("");
};

// ============================================================
// PROJECTS & GRADUATION GALLERY (tabbed)
// ============================================================
function buildTabbed(tabsEl, galleryEl, data) {
    const keys = Object.keys(data);
    let current = keys[0];
    function render() {
        tabsEl.innerHTML = keys.map(k => `<button class="tab ${k === current ? 'active' : ''}" data-k="${k}">${k}</button>`).join("");
        tabsEl.querySelectorAll(".tab").forEach(b => b.onclick = () => { current = b.dataset.k; render(); });
        galleryEl.innerHTML = data[current].map((item) => {
            if (item.type === "image") return `<figure class="g-item" data-type="image" data-src="${item.src}"><img src="${item.src}" alt="${item.title}"><figcaption>${item.title}</figcaption></figure>`;
if (item.type === "video")
    return `
        <figure class="g-item">
            <div class="g-video">
                <iframe src="${item.src}" allowfullscreen></iframe>
            </div>
            <figcaption>${item.title}</figcaption>
        </figure>
    `;
            if (item.type === "link") return `<a class="g-item link" href="${item.src}" target="_blank"><img src="${item.img}" alt="${item.title}"><figcaption>${item.title} <i class="fa-solid fa-arrow-up-right-from-square"></i></figcaption></a>`;
            return "";
        }).join("");
        galleryEl.querySelectorAll(".g-item[data-type='image']").forEach(el => {
            el.onclick = () => openLightbox(`<img src="${el.dataset.src}">`);
        });
    }
    render();
}

const projTabs = document.getElementById("projectTabs");
const projGal = document.getElementById("projectGallery");
if (projTabs && projGal) buildTabbed(projTabs, projGal, PROJECTS);

const gradTabs = document.getElementById("gradTabs");
const gradGal = document.getElementById("gradGallery");
if (gradTabs && gradGal) buildTabbed(gradTabs, gradGal, GRADUATION);

// ============================================================
// LIGHTBOX
// ============================================================
const lightbox = document.getElementById("lightbox");
const lbContent = document.getElementById("lbContent");

function openLightbox(html) {
    if (!lightbox) return;
    lbContent.innerHTML = html;
    lightbox.classList.add("open");
}

document.getElementById("lbClose")?.addEventListener("click", () => {
    lightbox.classList.remove("open");
    lbContent.innerHTML = "";
});

lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("open");
        lbContent.innerHTML = "";
    }
});

// ============================================================
// TESTIMONIALS SLIDER (fully working with re-render)
// ============================================================
let testimonialInterval;

window.renderTestimonials = function(lang = "en") {
    const track = document.getElementById("testiTrack");
    const dotsContainer = document.getElementById("testiDots");
    if (!track || !dotsContainer) return;

    if (testimonialInterval) clearInterval(testimonialInterval);

const t = TRANSLATIONS[lang];
const items = t?.testimonials_list || TESTIMONIALS;

    track.innerHTML = items.map(item => `
        <article class="testi-slide">
            <div class="stars">${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}</div>
            <p>"${item.text}"</p>
            <div class="testi-foot">
                <img src="${item.img}" alt="${item.name}">
                <div>
                    <strong>${item.name}</strong>
                    <small>${item.role}</small>
                </div>
            </div>
        </article>
    `).join("");

    dotsContainer.innerHTML = items.map((_, i) => `
        <button class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>
    `).join("");

    let currentIndex = 0;
    const total = items.length;

    function goToSlide(index) {
        currentIndex = (index + total) % total;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    const prevBtn = document.getElementById("testiPrev");
    const nextBtn = document.getElementById("testiNext");

    if (prevBtn) prevBtn.onclick = () => {
        clearInterval(testimonialInterval);
        goToSlide(currentIndex - 1);
        testimonialInterval = setInterval(() => goToSlide(currentIndex + 1), 6000);
    };
    if (nextBtn) nextBtn.onclick = () => {
        clearInterval(testimonialInterval);
        goToSlide(currentIndex + 1);
        testimonialInterval = setInterval(() => goToSlide(currentIndex + 1), 6000);
    };

    document.querySelectorAll(".dot").forEach(dot => {
        dot.onclick = () => {
            clearInterval(testimonialInterval);
            goToSlide(parseInt(dot.dataset.index));
            testimonialInterval = setInterval(() => goToSlide(currentIndex + 1), 6000);
        };
    });

    goToSlide(0);
    testimonialInterval = setInterval(() => goToSlide(currentIndex + 1), 6000);
};

// ============================================================
// CONTACT FORM HANDLER
// ============================================================
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    alert(`Thank you ${formData.name}! We received your message and will contact you soon.`);
    e.target.reset();
});

// ============================================================
// THEME TOGGLE (Dark/Light Mode)
// ============================================================
const themeBtn = document.getElementById("themeToggle");
themeBtn?.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    document.documentElement.setAttribute("data-theme", isLight ? "dark" : "light");
    themeBtn.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
});

// ============================================================
// MOBILE MENU TOGGLE
// ============================================================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ============================================================
// ACTIVE NAVIGATION ON SCROLL & BACK TO TOP
// ============================================================
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 140) {
            current = section.id;
        }
    });
    navAnchors.forEach(anchor => {
        anchor.classList.toggle("active", anchor.getAttribute("href") === "#" + current);
    });
    const toTopBtn = document.getElementById("toTop");
    if (toTopBtn) toTopBtn.classList.toggle("show", window.scrollY > 400);
});

document.getElementById("toTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================================
// INITIAL RENDER (call after all definitions)
// ============================================================
if (window.renderCourses) window.renderCourses("en");
if (window.renderTrainers) window.renderTrainers("en");
if (window.renderOffers) window.renderOffers("en");
if (window.renderTestimonials) window.renderTestimonials("en");
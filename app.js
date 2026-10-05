/**
 * KROMA STUDIO &bull; ARCHITECTURAL COLOR & 3D SIMULATION SUITE
 * Core Controller: Ambient Canvas, Catalog, 3D Engine Sync, HSL Wheel, and Vault.
 * Zero Emoji Compliance & Clean Professional Engineering.
 */

// ==========================================================================
// 1. DATABASE PRESET WARNA ARSITEKTUR PILIHAN
// ==========================================================================
const ARCHITECTURAL_SPECIFICATIONS = [
  // --- ZONA RUANG TAMU & KELUARGA ---
  {
    id: "tamu-01",
    name: "Tuscan Olive & Heirloom Tomato",
    category: "cat-ruang-tamu",
    categoryName: "Ruang Tamu & Keluarga",
    mood: "hangat",
    desc: "Kontras editorial legendaris. Dinding perimeter hijau zaitun Tuscan yang bersahaja dipadukan dengan focal feature wall merah tomat matang dan aksen kapur hangat. Memberikan dinamika visual dramatis, berselera tinggi, dan berjiwa Mediterania kontemporer.",
    roles: ["Feature Wall (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen Pintu", "Aksen Sofa"],
    colors: ["#CE3B27", "#4A5D33", "#F4EFE6", "#1C2414", "#D87D4A"]
  },
  {
    id: "tamu-02",
    name: "Capri Sun Yellow & Royal Klein Blue",
    category: "cat-ruang-tamu",
    categoryName: "Ruang Tamu & Keluarga",
    mood: "mewah",
    desc: "Ketegasan artistik Bauhaus dan energi pesisir Capri. Dinding biru royal Klein yang elektrik dan berwibawa diimbangi aksen kuning lemon Capri yang menyala terang dan plafon putih salju bersih.",
    roles: ["Dinding Aksen (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen Logam", "Aksen Dekoratif"],
    colors: ["#FFD027", "#0E38B1", "#FFFFFF", "#091E5E", "#FFAA00"]
  },
  {
    id: "tamu-03",
    name: "Klein Cobalt & Warm Apricot Peach",
    category: "cat-ruang-tamu",
    categoryName: "Ruang Tamu & Keluarga",
    mood: "mewah",
    desc: "Vibransi seni modern galeri kontemporer. Biru kobalt murni Yves Klein yang menghipnotis dipadukan dengan kehangatan lembut daging buah aprikot peach dan marmer putih susu.",
    roles: ["Feature Wall (30%)", "Dinding Ruang (60%)", "Plafon (10%)", "Kusen Pintu", "Aksen Upholstery"],
    colors: ["#FF9A76", "#002FA7", "#FFFDF9", "#001859", "#FF7E5F"]
  },

  // --- ZONA KAMAR TIDUR ---
  {
    id: "kamar-01",
    name: "Roasted Espresso & Velvet Blush",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "mewah",
    desc: "Pesona modernisme Milan 1970-an. Kepekatan dinding cokelat espresso sangrai pekat bertemu kelembutan velvet blush baby pink dan aksen kuarsa mawar. Menciptakan kedalaman intim, menenangkan, sekaligus sensual dan mewah.",
    roles: ["Headboard Aksen (30%)", "Dinding Kamar (60%)", "Plafon & Lis (10%)", "Kusen Kayu", "Tekstil & Bedding"],
    colors: ["#F2B5B8", "#2B1D19", "#FFF6F4", "#180F0D", "#E5989B"]
  },
  {
    id: "kamar-02",
    name: "Sicilian Pistachio & Bordeaux Rouge",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "mewah",
    desc: "Sentuhan aristokrat Italia pertengahan abad. Dinding hijau pistachio lembut yang meneduhkan mata dipadukan dengan aksen mewah merah anggur Bordeaux pekat dan marmer Carrara putih.",
    roles: ["Focal Wall (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen Pintu", "Tekstil Velvet"],
    colors: ["#6B1724", "#A8C5A5", "#FAF9F6", "#3B0A13", "#8A2839"]
  },
  {
    id: "kamar-03",
    name: "Botanical Sage & Sunset Coral",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "hangat",
    desc: "Kehangatan pesisir California modern. Dinding perimeter hijau sage botani yang menenangkan dipadukan dengan focal wall koral jingga kemerahan yang hangat bersahaja.",
    roles: ["Headboard Aksen (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen Kayu", "Tekstil Linen"],
    colors: ["#F06553", "#738E76", "#FAF9F5", "#354538", "#FFA07A"]
  },
  {
    id: "kamar-04",
    name: "Dark Ganache Chocolate & Crisp Mint",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "tenang",
    desc: "Perpaduan mewah khas salon Eropa abad pertengahan. Dinding cokelat ganache gelap yang lezat dan teduh dipadukan dengan aksen hijau mint dingin yang menyegarkan pikiran.",
    roles: ["Dinding Aksen (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen Pintu", "Aksen Bantal"],
    colors: ["#8DE0B8", "#35201B", "#F9FAF7", "#1B0E0B", "#52B788"]
  },

  // --- ZONA FASAD EKSTERIOR ---
  {
    id: "fasad-01",
    name: "Deep Forest Pine & Baked Terracotta",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "hangat",
    desc: "Harmoni organik arsitektur kontemporer Nordik dan Jepang. Massa kanopi hijau pinus pekat berpadu solid dengan bidang terakota tanah liat panggang hangat dan lisplang travertine alami.",
    roles: ["Tower Aksen (30%)", "Dinding Fasad (60%)", "Lisplang Overhang (10%)", "Kusen Jendela", "Batu Alam"],
    colors: ["#C85A32", "#183329", "#F5EFE6", "#0E1E18", "#E07A5F"]
  },
  {
    id: "fasad-02",
    name: "Brutalist Charcoal & Electric Tangerine",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "modern",
    desc: "Ekspresi monolitik arsitektur kontemporer berani. Fasad beton arang gelap matte yang masif dipertegas kolom arsitektural oranye tangerine elektrik yang penuh energi presisi.",
    roles: ["Tower Aksen (30%)", "Dinding Utama (60%)", "Lisplang Beton (10%)", "Kusen Hitam", "Detail Pintu"],
    colors: ["#FF5500", "#1E2024", "#F1F3F5", "#121316", "#FF8C42"]
  },
  {
    id: "fasad-03",
    name: "Santorini Aqua & Aegean Terracotta",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "mewah",
    desc: "Drama arsitektur pesisir Laut Aegea. Biru aqua laut Santorini yang jernih dan berani berpadu kontras dengan volume terakota merah karat dan dinding putih kapur Mediterania.",
    roles: ["Tower Kantilever (30%)", "Dinding Utama (60%)", "Overhang Kanopi (10%)", "Pintu Masuk", "Aksen Dinding"],
    colors: ["#C24E2E", "#0372A8", "#FFFFFF", "#013550", "#E57850"]
  },
  {
    id: "fasad-04",
    name: "Kyoto Matcha & Blackened Walnut",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "modern",
    desc: "Filosofi Wabi-sabi modern Kyoto. Dinding plester hijau matcha organik dipadukan dengan massa kisi kayu kenari bakar shou sugi ban dan aksen kertas washi alami.",
    roles: ["Massa Aksen (30%)", "Dinding Fasad (60%)", "Plafon Teras (10%)", "Kisi Kayu", "Detail Kanopi"],
    colors: ["#6B7B47", "#222421", "#F2EFE8", "#111210", "#8A9A65"]
  },

  // --- ZONA DAPUR & PANTRI ---
  {
    id: "dapur-01",
    name: "Midnight Ink Navy & French Buttercream",
    category: "cat-dapur",
    categoryName: "Dapur & Pantri",
    mood: "hangat",
    desc: "Kemewahan dapur klasik bistro Prancis. Kabinet dan dinding biru tinta malam yang dalam dipasangkan dengan kuning buttercream hangat yang lembut dan lis kuningan antik berkelas.",
    roles: ["Backsplash Aksen (30%)", "Dinding Pantri (60%)", "Plafon Dapur (10%)", "Top Table", "Aksen Handle"],
    colors: ["#F5D061", "#0D1B2A", "#FDFBF7", "#070F18", "#E0A938"]
  },
  {
    id: "dapur-02",
    name: "Parisian Lavender & Burnt Toffee",
    category: "cat-dapur",
    categoryName: "Dapur & Pantri",
    mood: "hangat",
    desc: "Chic apartemen Haussmann Paris. Dinding ungu lavender kapur yang anggun dan sejuk diperkaya aksen kabinet cokelat karamel toffee bakar yang gurih dan berbobot.",
    roles: ["Backsplash (30%)", "Dinding Pantri (60%)", "Plafon (10%)", "Top Table", "Aksen Rak"],
    colors: ["#9680BA", "#9E5828", "#FAF7F5", "#4A230B", "#B59EC9"]
  },

  // --- ZONA RUANG KERJA / STUDIO ---
  {
    id: "kerja-01",
    name: "Deep Aubergine & Electric Chartreuse",
    category: "cat-kerja",
    categoryName: "Ruang Kerja & Studio",
    mood: "mewah",
    desc: "Kombinasi eksentrik favorit desainer interior haute-couture. Bidang ungu terong tua yang misterius dan mewah dipecah oleh sengatan hijau chartreuse elektrik, memicu stimulasi kreativitas tanpa batas.",
    roles: ["Panel Feature (30%)", "Dinding Studio (60%)", "Plafon & Drop (10%)", "Kusen Pintu", "Aksen Rak"],
    colors: ["#C5EB34", "#2B132C", "#F7F4F0", "#170818", "#8E3E75"]
  },
  {
    id: "kerja-02",
    name: "Abyssal Teal & Dijon Mustard",
    category: "cat-kerja",
    categoryName: "Ruang Kerja & Studio",
    mood: "mewah",
    desc: "Estetika sinematik bergaya Wes Anderson. Dinding biru teal laut dalam yang imersif dan fokus, disandingkan dengan aksen kuning mustard Dijon tajam dan lis perunggu gelap.",
    roles: ["Bidang Presentasi (30%)", "Dinding Studio (60%)", "Plafon (10%)", "Meja Desain", "Aksen Rak"],
    colors: ["#D8972C", "#0E434F", "#FBF8F1", "#07232B", "#B87B1E"]
  },
  {
    id: "kerja-03",
    name: "Tokyo Carbon & Acid Citron",
    category: "cat-kerja",
    categoryName: "Ruang Kerja & Studio",
    mood: "modern",
    desc: "Futurisme brutalist studio arsitektur Tokyo. Bidang monokrom karbon hitam legam berdaya serap cahaya tinggi, disengat garis lampu dan panel kuning acid citron hiper-modern.",
    roles: ["Dinding Konsep (30%)", "Dinding Studio (60%)", "Plafon Drop (10%)", "Meja Kerja", "Aksen Akrilik"],
    colors: ["#CEF518", "#141518", "#ECEFF1", "#090A0C", "#98BF00"]
  },

  // --- ZONA KAMAR MANDI / SPA ---
  {
    id: "mandi-01",
    name: "Desert Ochre & Powder Sky Blue",
    category: "cat-mandi",
    categoryName: "Kamar Mandi & Spa",
    mood: "tenang",
    desc: "Atmosfer riad Maroko dan langit Santa Fe. Dinding tadelakt kuning ochre gurun yang hangat dipasangkan dengan biru langit pucat yang sejuk, menciptakan ruang spa dengan kesegaran alami.",
    roles: ["Area Basah (30%)", "Dinding Kering (60%)", "Plafon Spa (10%)", "Kusen Jendela", "Aksen Cermin"],
    colors: ["#7BA3D0", "#B86524", "#FDF7EE", "#5C310F", "#4070A0"]
  },
  {
    id: "mandi-02",
    name: "Port Wine Velvet & Heritage Powder Blue",
    category: "cat-mandi",
    categoryName: "Kamar Mandi & Spa",
    mood: "mewah",
    desc: "Eklektisisme elegan manor Inggris. Dinding merah port wine yang megah dan dramatis diimbangi panel biru powder klasik yang hening serta perangkat saniter krom mewah.",
    roles: ["Dinding Aksen (30%)", "Dinding Ruang (60%)", "Plafon Spa (10%)", "Kusen Jendela", "Aksen Cermin"],
    colors: ["#7AA2B8", "#5A1221", "#FAF8F6", "#2B050D", "#9FBCCB"]
  }
];

// ==========================================================================
// 2. AMBIENT GENERATIVE CANVAS ENGINE (FLUID ARCHITECTURAL ART)
// ==========================================================================
const AmbientCanvasEngine = (() => {
  let canvas, ctx;
  let animationId = null;
  let width, height;
  let orbs = [];

  const AMBIENT_PALETTES = [
    { name: "Olive & Tomato", colors: ["#ce3b27", "#4a5d33", "#2b331a", "#0d130a"] },
    { name: "Espresso & Blush", colors: ["#f2b5b8", "#9e5828", "#2b1d19", "#0d0908"] },
    { name: "Capri & Royal Blue", colors: ["#ffd027", "#0e38b1", "#061b57", "#060912"] },
    { name: "Aubergine & Chartreuse", colors: ["#c5eb34", "#7c3aed", "#2b132c", "#0d050d"] },
    { name: "Forest & Terracotta", colors: ["#c85a32", "#183329", "#0e1e18", "#080f0c"] },
    { name: "Charcoal & Tangerine", colors: ["#ff5500", "#ff8c42", "#1e2024", "#08080a"] },
    { name: "Pistachio & Bordeaux", colors: ["#6b1724", "#a8c5a5", "#3b0a13", "#0c0406"] },
    { name: "Cobalt & Apricot", colors: ["#ff9a76", "#002fa7", "#ff7e5f", "#040817"] }
  ];

  let currentPaletteIdx = 0;

  function init() {
    canvas = document.getElementById("ambient-canvas");
    if (!canvas) return;
    ctx = canvas.getContext("2d");

    resize();
    window.addEventListener("resize", resize);

    applyPalette(AMBIENT_PALETTES[0]);
    animate();
  }

  function resize() {
    if (!canvas) return;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function applyPalette(pal) {
    orbs = [
      { x: width * 0.2, y: height * 0.25, r: Math.min(width, height) * 0.55, vx: 0.35, vy: 0.25, color: pal.colors[0] },
      { x: width * 0.8, y: height * 0.2, r: Math.min(width, height) * 0.6, vx: -0.28, vy: 0.32, color: pal.colors[1] },
      { x: width * 0.5, y: height * 0.75, r: Math.min(width, height) * 0.65, vx: 0.2, vy: -0.3, color: pal.colors[2] },
      { x: width * 0.15, y: height * 0.85, r: Math.min(width, height) * 0.5, vx: -0.25, vy: -0.2, color: pal.colors[0] }
    ];
  }

  function nextPalette() {
    currentPaletteIdx = (currentPaletteIdx + 1) % AMBIENT_PALETTES.length;
    const pal = AMBIENT_PALETTES[currentPaletteIdx];
    applyPalette(pal);
    return pal.name;
  }

  function animate() {
    if (!ctx) return;

    ctx.fillStyle = "#080b11";
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = "screen";

    orbs.forEach(orb => {
      orb.x += orb.vx;
      orb.y += orb.vy;

      if (orb.x < -orb.r * 0.2 || orb.x > width + orb.r * 0.2) orb.vx *= -1;
      if (orb.y < -orb.r * 0.2 || orb.y > height + orb.r * 0.2) orb.vy *= -1;

      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
      grad.addColorStop(0, orb.color + "99"); // 60% opacity
      grad.addColorStop(0.5, orb.color + "33"); // 20% opacity
      grad.addColorStop(1, "transparent");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalCompositeOperation = "source-over";
    animationId = requestAnimationFrame(animate);
  }

  return { init, nextPalette };
})();

// ==========================================================================
// 3. COLOR UTILITIES
// ==========================================================================
function hexToRgb(hex) {
  let c = hex.replace("#", "");
  if (c.length === 3) c = c.split("").map(x => x + x).join("");
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const h = Math.round(Math.max(0, Math.min(255, x))).toString(16);
    return h.length === 1 ? "0" + h : h;
  }).join("").toUpperCase();
}

function hslToRgb(h, s, l) {
  h = h / 360; s = s / 100; l = l / 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return { h: Math.round(h), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function copyToClipboard(text, triggerEl = null) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`HEX ${text} disalin ke clipboard`);
    if (triggerEl) {
      triggerEl.style.transform = "scale(0.95)";
      setTimeout(() => triggerEl.style.transform = "", 150);
    }
  }).catch(() => {
    showToast(`Gagal menyalin ${text}`);
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// ==========================================================================
// 4. KATALOG WARNA & PENCARIAN
// ==========================================================================
const paintContainer = document.getElementById("paint-palettes-container");
const paintSearchInput = document.getElementById("paint-search");
const paintTagFilters = document.querySelectorAll("#paint-tag-filters .pill-chip");
const moodTagFilters = document.querySelectorAll("#mood-tag-filters .mood-chip");

let currentCategoryFilter = "all";
let currentMoodFilter = "all";
let currentSearchQuery = "";

function renderArchitecturalCatalog() {
  if (!paintContainer) return;

  const filtered = ARCHITECTURAL_SPECIFICATIONS.filter(p => {
    const matchCategory = (currentCategoryFilter === "all" || p.category === currentCategoryFilter);
    const matchMood = (currentMoodFilter === "all" || p.mood === currentMoodFilter);
    const q = currentSearchQuery.toLowerCase();
    const matchSearch = (
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.colors.some(c => c.toLowerCase().includes(q))
    );
    return matchCategory && matchMood && matchSearch;
  });

  if (filtered.length === 0) {
    paintContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: #94a3b8;">
        <p style="font-weight: 600;">Tidak ditemukan kombinasi warna yang cocok.</p>
        <p style="font-size: 0.8125rem; margin-top: 0.35rem; color: #64748b;">Gunakan kata kunci pencarian yang lebih umum atau pilih kategori lain.</p>
      </div>
    `;
    return;
  }

  paintContainer.innerHTML = filtered.map(spec => {
    const mainCol = spec.colors[1] || spec.colors[0];
    const accentCol = spec.colors[0];
    const trimCol = spec.colors[2] || "#FFFFFF";

    const swatchesHtml = spec.colors.map(col => `
      <div class="swatch-chip" style="background-color: ${col};" data-color="${col}" title="Klik untuk salin ${col}"></div>
    `).join("");

    return `
      <div class="palette-card">
        <!-- 60-30-10 Ratio Strip -->
        <div class="palette-ratio-strip" title="Rasio Arsitektural: 60% Utama, 30% Aksen, 10% Lisplang/Plafon">
          <div class="ratio-seg seg-main" style="background-color: ${mainCol};" data-color="${mainCol}">
            <span class="seg-badge">60% UTAMA</span>
            <span class="seg-hex">${mainCol}</span>
          </div>
          <div class="ratio-seg seg-accent" style="background-color: ${accentCol};" data-color="${accentCol}">
            <span class="seg-badge">30% AKSEN</span>
            <span class="seg-hex">${accentCol}</span>
          </div>
          <div class="ratio-seg seg-trim" style="background-color: ${trimCol};" data-color="${trimCol}">
            <span class="seg-badge">10%</span>
            <span class="seg-hex">${trimCol}</span>
          </div>
        </div>

        <!-- 5 Swatches Strip -->
        <div class="palette-swatches-strip">
          ${swatchesHtml}
        </div>

        <!-- Card Body -->
        <div class="palette-card-body">
          <div class="card-meta-row">
            <h3 class="card-palette-title">${spec.name}</h3>
            <span class="card-category-tag">${spec.categoryName}</span>
          </div>
          <p class="card-palette-desc">${spec.desc}</p>
          <div class="card-actions-row">
            <button class="btn btn-primary" data-apply-id="${spec.id}">
              Uji di Ruang 3D
            </button>
            <button class="btn btn-outline" data-copy-json-id="${spec.id}" title="Salin semua kode warna HEX">
              Salin HEX
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Event Listeners for Swatches & Segments
  paintContainer.querySelectorAll(".swatch-chip, .ratio-seg").forEach(el => {
    el.addEventListener("click", () => {
      const color = el.getAttribute("data-color");
      if (color) copyToClipboard(color, el);
    });
  });

  // Apply to 3D Button
  paintContainer.querySelectorAll("[data-apply-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-apply-id");
      const target = ARCHITECTURAL_SPECIFICATIONS.find(p => p.id === id);
      if (target) {
        switchTab("tab-studio");
        applyToElevationStudio(target);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  // Copy JSON Button
  paintContainer.querySelectorAll("[data-copy-json-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-copy-json-id");
      const target = ARCHITECTURAL_SPECIFICATIONS.find(p => p.id === id);
      if (target) {
        copyToClipboard(target.colors.join(", "), btn);
      }
    });
  });
}

// Search & Filter Events
if (paintSearchInput) {
  paintSearchInput.addEventListener("input", (e) => {
    currentSearchQuery = e.target.value.trim();
    renderArchitecturalCatalog();
  });
}

paintTagFilters.forEach(btn => {
  btn.addEventListener("click", () => {
    paintTagFilters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategoryFilter = btn.getAttribute("data-filter");
    renderArchitecturalCatalog();
  });
});

moodTagFilters.forEach(btn => {
  btn.addEventListener("click", () => {
    moodTagFilters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentMoodFilter = btn.getAttribute("data-mood");
    renderArchitecturalCatalog();
  });
});

// ==========================================================================
// 5. 3D STUDIO VIEWER SYNCHRONIZATION
// ==========================================================================
let activeElevationSpec = ARCHITECTURAL_SPECIFICATIONS[0];

function applyToElevationStudio(spec) {
  if (!spec || !spec.colors) return;
  activeElevationSpec = spec;

  // Title
  const titleEl = document.getElementById("spec-display-title");
  if (titleEl) titleEl.textContent = spec.name;

  // Ratios
  const mainCol = spec.colors[1] || spec.colors[0];
  const accentCol = spec.colors[0];
  const trimCol = spec.colors[2] || "#FFFFFF";

  const boxMain = document.getElementById("room-ratio-main");
  const boxAccent = document.getElementById("room-ratio-accent");
  const boxTrim = document.getElementById("room-ratio-ceiling");

  if (boxMain) {
    boxMain.style.backgroundColor = mainCol;
    const hex = document.getElementById("room-hex-main");
    if (hex) hex.textContent = mainCol;
  }
  if (boxAccent) {
    boxAccent.style.backgroundColor = accentCol;
    const hex = document.getElementById("room-hex-accent");
    if (hex) hex.textContent = accentCol;
  }
  if (boxTrim) {
    boxTrim.style.backgroundColor = trimCol;
    const hex = document.getElementById("room-hex-ceiling");
    if (hex) hex.textContent = trimCol;
  }

  // Interactive Swatches Strip
  const swatchesStrip = document.getElementById("room-swatches-strip");
  if (swatchesStrip) {
    const roles = spec.roles || ["Aksen (30%)", "Utama (60%)", "Plafon (10%)", "Kusen", "Detail"];
    swatchesStrip.innerHTML = spec.colors.map((c, i) => `
      <div class="live-swatch-chip" data-color="${c}" title="Klik salin ${c}">
        <span class="swatch-color-pill" style="background-color: ${c};"></span>
        <div class="swatch-label-block">
          <span class="swatch-role-name">${roles[i] || 'Warna ' + (i + 1)}</span>
          <span class="swatch-hex-val">${c}</span>
        </div>
      </div>
    `).join("");

    swatchesStrip.querySelectorAll(".live-swatch-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const col = chip.getAttribute("data-color");
        if (col) copyToClipboard(col, chip);
      });
    });
  }

  // Sync to Arch3DEngine
  if (typeof Arch3DEngine !== "undefined") {
    Arch3DEngine.applyPalette(spec);
  }
}

// 3D Scene Selector
const sceneBtns = document.querySelectorAll("#elevation-scene-selector .tool-btn");
sceneBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    sceneBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const sceneId = btn.getAttribute("data-scene");
    if (typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.switchScene(sceneId);
    }
  });
});

// Lighting Kelvin Selector
const lightBtns = document.querySelectorAll("[data-light]");
lightBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    lightBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.getAttribute("data-light");
    if (typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.setKelvin(mode);
    }
  });
});

// Camera Presets
const camBtns = document.querySelectorAll("[data-preset]");
camBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    camBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const preset = btn.getAttribute("data-preset");
    if (typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.setCameraPreset(preset);
    }
  });
});

// Auto-Rotate 360
const autoRotateBtn = document.getElementById("toggle-autorotate-btn");
if (autoRotateBtn) {
  autoRotateBtn.addEventListener("click", () => {
    if (typeof Arch3DEngine !== "undefined") {
      const active = Arch3DEngine.toggleAutoRotate();
      autoRotateBtn.classList.toggle("active", active);
      showToast(active ? "Tur 360 derajat aktif" : "Tur 360 derajat nonaktif");
    }
  });
}

// Finish / Sheen Selector
const finishBtns = document.querySelectorAll("#shader-selector .finish-btn");
finishBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    finishBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const shader = btn.getAttribute("data-shader");
    if (typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.setFinish(shader);
      showToast(`Tekstur Kilap: ${btn.textContent}`);
    }
  });
});

// Click Interaction on 3D Surfaces
if (typeof Arch3DEngine !== "undefined") {
  Arch3DEngine.onSurfaceClick((userData) => {
    if (userData && userData.surfaceName) {
      const hex = activeElevationSpec.colors[0]; // fallback
      copyToClipboard(hex);
      showToast(`Bidang: ${userData.surfaceName}`);
    }
  });
}

// ==========================================================================
// 6. RODA HARMONI KROMATIK (HSL ENGINE) & KALKULATOR CAT
// ==========================================================================
const baseColorPicker = document.getElementById("base-color-picker");
const baseHexText = document.getElementById("base-hex-text");
const sliderHue = document.getElementById("slider-hue");
const sliderSat = document.getElementById("slider-sat");
const sliderLum = document.getElementById("slider-lum");
const valHue = document.getElementById("val-hue");
const valSat = document.getElementById("val-sat");
const valLum = document.getElementById("val-lum");

const schemeMono = document.getElementById("scheme-mono");
const schemeAnalog = document.getElementById("scheme-analog");
const schemeComp = document.getElementById("scheme-comp");
const schemeTriad = document.getElementById("scheme-triad");

function refreshHslCalculations(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  if (sliderHue) sliderHue.value = hsl.h;
  if (sliderSat) sliderSat.value = hsl.s;
  if (sliderLum) sliderLum.value = hsl.l;
  if (valHue) valHue.innerHTML = `${hsl.h}&deg;`;
  if (valSat) valSat.textContent = `${hsl.s}%`;
  if (valLum) valLum.textContent = `${hsl.l}%`;

  if (baseHexText) baseHexText.value = hex.toUpperCase();
  if (baseColorPicker) baseColorPicker.value = hex;

  renderHarmonyRow(schemeMono, [
    hslToHex(hsl.h, hsl.s, Math.max(12, hsl.l - 24)),
    hslToHex(hsl.h, hsl.s, hsl.l),
    hslToHex(hsl.h, hsl.s, Math.min(94, hsl.l + 24))
  ]);

  renderHarmonyRow(schemeAnalog, [
    hslToHex((hsl.h + 330) % 360, hsl.s, hsl.l),
    hslToHex(hsl.h, hsl.s, hsl.l),
    hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l)
  ]);

  renderHarmonyRow(schemeComp, [
    hslToHex(hsl.h, hsl.s, hsl.l),
    hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l)
  ]);

  renderHarmonyRow(schemeTriad, [
    hslToHex(hsl.h, hsl.s, hsl.l),
    hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l),
    hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l)
  ]);

  recalculatePaintVolume();
}

function hslToHex(h, s, l) {
  const rgb = hslToRgb(h, s, l);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function renderHarmonyRow(container, hexList) {
  if (!container) return;
  container.innerHTML = hexList.map(hex => `
    <div class="harmony-color-card" style="background-color: ${hex};" data-color="${hex}" title="Klik salin ${hex}">
      <span class="harmony-hex">${hex}</span>
    </div>
  `).join("");

  container.querySelectorAll(".harmony-color-card").forEach(c => {
    c.addEventListener("click", () => {
      const col = c.getAttribute("data-color");
      if (col) copyToClipboard(col, c);
    });
  });
}

if (baseColorPicker) {
  baseColorPicker.addEventListener("input", (e) => {
    refreshHslCalculations(e.target.value);
  });
}

if (baseHexText) {
  baseHexText.addEventListener("change", (e) => {
    let val = e.target.value.trim();
    if (!val.startsWith("#")) val = "#" + val;
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
      refreshHslCalculations(val);
    }
  });
}

[sliderHue, sliderSat, sliderLum].forEach(sl => {
  if (sl) {
    sl.addEventListener("input", () => {
      const hex = hslToHex(parseInt(sliderHue.value), parseInt(sliderSat.value), parseInt(sliderLum.value));
      refreshHslCalculations(hex);
    });
  }
});

// Paint Volume Estimator
const inputLength = document.getElementById("room-length");
const inputWidth = document.getElementById("room-width");
const inputHeight = document.getElementById("room-height");
const selectCoats = document.getElementById("calc-coats");
const paintResults = document.getElementById("paint-volume-results");

function recalculatePaintVolume() {
  if (!inputLength || !inputWidth || !inputHeight || !paintResults) return;

  const L = parseFloat(inputLength.value) || 4.0;
  const W = parseFloat(inputWidth.value) || 3.5;
  const H = parseFloat(inputHeight.value) || 3.0;
  const coats = parseInt(selectCoats.value) || 2;

  const wallArea = (2 * (L + W) * H) * 0.85; // 15% opening deduction
  const ceilingArea = L * W;
  const coveragePerLiter = 11.0; // 11 m2 per liter

  const wallLiters = Math.ceil(((wallArea * coats) / coveragePerLiter) * 10) / 10;
  const ceilingLiters = Math.ceil(((ceilingArea * coats) / coveragePerLiter) * 10) / 10;

  paintResults.innerHTML = `
    <div class="calc-res-item">
      <div class="res-name">Cat Dinding (${wallArea.toFixed(1)} m&sup2;)</div>
      <div class="res-val">${wallLiters} Liter</div>
    </div>
    <div class="calc-res-item">
      <div class="res-name">Cat Plafon (${ceilingArea.toFixed(1)} m&sup2;)</div>
      <div class="res-val">${ceilingLiters} Liter</div>
    </div>
  `;
}

[inputLength, inputWidth, inputHeight, selectCoats].forEach(input => {
  if (input) input.addEventListener("input", recalculatePaintVolume);
});

// ==========================================================================
// 7. TAB ROUTING ENGINE
// ==========================================================================
const navTabs = document.querySelectorAll(".nav-tab");
const workspacePanes = document.querySelectorAll(".workspace-pane");

function switchTab(targetId) {
  navTabs.forEach(t => {
    if (t.getAttribute("data-tab") === targetId) {
      t.classList.add("active");
      t.setAttribute("aria-selected", "true");
    } else {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    }
  });

  workspacePanes.forEach(pane => {
    if (pane.id === targetId) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });

  if (targetId === "tab-studio" && typeof Arch3DEngine !== "undefined") {
    setTimeout(() => {
      Arch3DEngine.resize();
    }, 60);
  }
}

navTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");
    switchTab(target);
  });
});

// ==========================================================================
// 8. KOLEKSI TERSIMPAN (CUSTOM VAULT)
// ==========================================================================
const VAULT_STORAGE_KEY = "kroma_custom_vault_palettes";
const customVaultGrid = document.getElementById("custom-vault-grid");
const customBadge = document.getElementById("custom-count-badge");
const createModalBtn = document.getElementById("create-new-palette-btn");
const customModal = document.getElementById("custom-palette-modal");
const closeModalBtn = document.getElementById("close-custom-modal");
const cancelModalBtn = document.getElementById("cancel-custom-modal");
const saveCustomBtn = document.getElementById("save-custom-palette-btn");

function getCustomVault() {
  try {
    const raw = localStorage.getItem(VAULT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCustomVault(list) {
  localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(list));
  updateVaultBadge();
  renderCustomVault();
}

function updateVaultBadge() {
  const count = getCustomVault().length;
  if (customBadge) customBadge.textContent = count;
}

function renderCustomVault() {
  if (!customVaultGrid) return;
  const list = getCustomVault();

  if (list.length === 0) {
    customVaultGrid.innerHTML = `
      <div class="vault-empty-state">
        <p style="font-weight: 600;">Belum ada palet kustom yang tersimpan.</p>
        <p style="font-size: 0.8125rem; margin-top: 0.35rem;">Klik tombol "Rancang Palet Baru" untuk merancang komposisi warna Anda sendiri.</p>
      </div>
    `;
    return;
  }

  customVaultGrid.innerHTML = list.map(item => `
    <div class="palette-card">
      <div class="palette-ratio-strip">
        <div class="ratio-seg seg-main" style="background-color: ${item.colors[1]};">
          <span class="seg-badge">60%</span>
          <span class="seg-hex">${item.colors[1]}</span>
        </div>
        <div class="ratio-seg seg-accent" style="background-color: ${item.colors[0]};">
          <span class="seg-badge">30%</span>
          <span class="seg-hex">${item.colors[0]}</span>
        </div>
        <div class="ratio-seg seg-trim" style="background-color: ${item.colors[2]};">
          <span class="seg-badge">10%</span>
          <span class="seg-hex">${item.colors[2]}</span>
        </div>
      </div>
      <div class="palette-card-body">
        <div class="card-meta-row">
          <h3 class="card-palette-title">${item.name}</h3>
          <span class="card-category-tag">${item.categoryName}</span>
        </div>
        <div class="card-actions-row" style="margin-top: 1rem;">
          <button class="btn btn-primary" data-apply-vault-id="${item.id}">Uji di Ruang 3D</button>
          <button class="btn btn-outline" data-del-vault-id="${item.id}">Hapus</button>
        </div>
      </div>
    </div>
  `).join("");

  customVaultGrid.querySelectorAll("[data-apply-vault-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-apply-vault-id");
      const target = getCustomVault().find(p => p.id === id);
      if (target) {
        switchTab("tab-studio");
        applyToElevationStudio(target);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  customVaultGrid.querySelectorAll("[data-del-vault-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-del-vault-id");
      const filtered = getCustomVault().filter(p => p.id !== id);
      saveCustomVault(filtered);
      showToast("Palet berhasil dihapus");
    });
  });
}

if (createModalBtn) {
  createModalBtn.addEventListener("click", () => {
    if (customModal) customModal.classList.add("open");
  });
}

function closeCustomModal() {
  if (customModal) customModal.classList.remove("open");
}

if (closeModalBtn) closeModalBtn.addEventListener("click", closeCustomModal);
if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeCustomModal);

if (saveCustomBtn) {
  saveCustomBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("custom-palette-name");
    const roomSelect = document.getElementById("custom-palette-room");
    const c0 = document.getElementById("cp-color-0")?.value || "#2C3E50";
    const c1 = document.getElementById("cp-color-1")?.value || "#E5E5E5";
    const c2 = document.getElementById("cp-color-2")?.value || "#FFFFFF";
    const c3 = document.getElementById("cp-color-3")?.value || "#1A252F";
    const c4 = document.getElementById("cp-color-4")?.value || "#7F8C8D";

    const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Palet Kustom Saya";
    const catName = roomSelect ? roomSelect.options[roomSelect.selectedIndex].text : "Kamar Tidur";
    const catId = roomSelect ? roomSelect.value : "cat-kamar";

    const newPal = {
      id: `custom-${Date.now()}`,
      name: name,
      category: catId,
      categoryName: catName,
      desc: "Kombinasi palet mandiri hasil kreasi Anda.",
      colors: [c0, c1, c2, c3, c4]
    };

    const vault = getCustomVault();
    vault.unshift(newPal);
    saveCustomVault(vault);

    closeCustomModal();
    if (nameInput) nameInput.value = "";
    showToast(`Palet "${name}" tersimpan di Koleksi`);
  });
}

// ==========================================================================
// 9. HEADER GENERATE NUANSA BUTTON
// ==========================================================================
const generateBgBtn = document.getElementById("generate-bg-stripe-btn");
if (generateBgBtn) {
  generateBgBtn.addEventListener("click", () => {
    const palName = AmbientCanvasEngine.nextPalette();
    showToast(`Nuansa Abstrak: ${palName}`);
  });
}

// ==========================================================================
// 10. INISIALISASI SAAT HALAMAN SELESAI DIMUAT
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  AmbientCanvasEngine.init();
  renderArchitecturalCatalog();

  const stageEl = document.getElementById("elevation-stage");
  if (typeof Arch3DEngine !== "undefined" && stageEl) {
    Arch3DEngine.init(stageEl);
  }

  if (ARCHITECTURAL_SPECIFICATIONS.length > 0) {
    applyToElevationStudio(ARCHITECTURAL_SPECIFICATIONS[0]);
  }

  updateVaultBadge();
  renderCustomVault();

  if (baseColorPicker) {
    refreshHslCalculations(baseColorPicker.value);
  }
});

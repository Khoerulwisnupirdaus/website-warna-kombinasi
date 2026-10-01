/**
 * ENTERPRISE ARCHITECTURAL COLOR SUITE (COLOR SPECIFIER PRO)
 * Core System Engine: Colorimetry Formulas, WCAG 2.2 Auditing,
 * 2.5D Architectural Elevation, Volumetric Material Metering,
 * and Code Export Generation (CSS Variables & Tailwind Config).
 * 
 * Strict Compliance: Zero Emoji Policy & Technical Accuracy.
 * Micro-Interaction Engine: Universal Tactile Haptic Ripple & Pulse.
 */

// ==========================================================================
// 1. DATABASE PRESET SPESIFIKASI ARSITEKTUR LENGKAP
// ==========================================================================
const ARCHITECTURAL_SPECIFICATIONS = [
  // --- ZONA KAMAR TIDUR ---
  {
    id: "spec-kamar-01",
    name: "Misty Sage & Warm Cream",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "tenang",
    desc: "Aksen hijau sage dingin pada dinding kepala ranjang dipadu krem hangat pada bidang perimeter. Mereduksi stres visual dan menunjang pemulihan denyut jantung saat istirahat.",
    roles: ["Dinding Aksen (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen Jendela", "Pintu Masuk"],
    finishing: ["Matte / Doff Rendah Pantulan", "Eggshell Washable", "Flat Ceiling White", "Semi-Gloss Kayu", "Satin"],
    resin: ["Pure Acrylic Emulsion", "Vinyl Acrylic", "Styrene Acrylic", "Waterborne Polyurethane", "Alkyd Enamel"],
    colors: ["#588157", "#DAD7CD", "#F8FAFC", "#344E41", "#A3B18A"]
  },
  {
    id: "spec-kamar-02",
    name: "Nordic Fog & Midnight Navy",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "mewah",
    desc: "Abu-abu kabut dingin dengan focal wall biru malam pekat. Menciptakan kedalaman ruang tanpa pantulan silau untuk kamar utama berstandar presidential suite.",
    roles: ["Dinding Aksen (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen Pintu", "Aksen Furniture"],
    finishing: ["Deep Matte", "Eggshell Lembut", "Flat White", "Satin Black", "Matte Poly"],
    resin: ["Acrylic Copolymer", "Vinyl Acrylic", "PVA Ceiling Paint", "Polyurethane 2K", "Acrylic Emulsion"],
    colors: ["#1E293B", "#E2E8F0", "#FFFFFF", "#0F172A", "#64748B"]
  },
  {
    id: "spec-kamar-03",
    name: "Dusty Rose & Cashmere Warmth",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "hangat",
    desc: "Komposisi terakota merah muda redup dengan krem kasmir. Memberikan temperatur hangat dan visual feminin modern yang stabil tanpa kesan kekanakan.",
    roles: ["Dinding Aksen (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen", "Detail Aksen"],
    finishing: ["Velvet Matte", "Eggshell", "Flat White", "Semi-Gloss", "Satin"],
    resin: ["Modified Acrylic", "Vinyl Acrylic", "Acrylic Emulsion", "Waterborne Enamel", "Satin Acrylic"],
    colors: ["#C99E94", "#EFE8E1", "#FFFFFF", "#7C4F44", "#DFD3C3"]
  },
  {
    id: "spec-kamar-04",
    name: "Eucalyptus Calm & Oat Linen",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "tenang",
    desc: "Karakter villa tropis modern. Hijau eukaliptus redup dengan serat linen krem oat yang mengoptimalkan sirkulasi pencahayaan alami di pagi hari.",
    roles: ["Dinding Aksen (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen", "Detail Pintu"],
    finishing: ["Matte", "Eggshell", "Flat Ceiling", "Wood Stain Doff", "Satin"],
    resin: ["100% Acrylic", "Vinyl Emulsion", "PVA Base", "Natural Oil Stain", "Waterborne Acrylic"],
    colors: ["#606C38", "#FEFAE0", "#FAEDCD", "#283618", "#DDA15E"]
  },
  {
    id: "spec-kamar-05",
    name: "Deep Indigo & Walnut Suite",
    category: "cat-kamar",
    categoryName: "Kamar Tidur",
    mood: "mewah",
    desc: "Kamar tidur pria kontemporer. Indigo gelap pada dinding aksen dengan abu wol lembut dan panel kayu walnut bertekstur arsitektural.",
    roles: ["Dinding Aksen (30%)", "Dinding Utama (60%)", "Plafon & Lis (10%)", "Kusen Pintu", "Detail Aksen"],
    finishing: ["Deep Matte", "Eggshell", "Flat White", "Semi-Gloss Doff", "Wood Polish"],
    resin: ["Pure Acrylic", "Vinyl Acrylic", "Flat Acrylic", "Polyurethane", "Lacquer"],
    colors: ["#1B263B", "#E0E1DD", "#FFFFFF", "#0D1B2A", "#778DA9"]
  },

  // --- ZONA FASAD / EKSTERIOR ---
  {
    id: "spec-fasad-01",
    name: "Modern Industrial Charcoal & Teak",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "modern",
    desc: "Fasad semen arsitektur industrial. Abu arang tegas tahan UV dengan plester semen netral, kusen aluminium powder-coat, dan pintu jati solid.",
    roles: ["Focal Fasad (30%)", "Dinding Eksterior (60%)", "Lisplang Plafon (10%)", "Kusen Aluminium", "Pintu Kayu Jati"],
    finishing: ["Elastomeric Weather-proof", "Exterior Acrylic Matte", "Exterior Flat", "Powder Coating Black", "PU Wood Exterior"],
    resin: ["Elastomeric Acrylic", "Silicon Acrylic", "Acrylic Emulsion", "Fluoropolymer", "Solvent-based PU"],
    colors: ["#27272A", "#E4E4E7", "#FFFFFF", "#18181B", "#B45309"]
  },
  {
    id: "spec-fasad-02",
    name: "Mediterranean Terracotta & White Stucco",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "hangat",
    desc: "Gaya residensi pesisir Spanyol. Plester kapur hangat bertekstur dipadu bata terakota ekspos dan profil lis zaitun tua.",
    roles: ["Aksen Bata Terakota (30%)", "Dinding Kapur Utama (60%)", "Lis Atap Plafon (10%)", "Kusen Pintu", "Aksen Zaitun"],
    finishing: ["Textured Exterior", "Exterior Matte Silicate", "Exterior Flat", "Satin Wood Outdoor", "Semi-Gloss"],
    resin: ["Silicate Potassium", "Pure Acrylic Exterior", "Acrylic Latex", "Polyurethane", "Exterior Enamel"],
    colors: ["#BC6C25", "#FDF8F0", "#FFFFFF", "#6B3E11", "#556B2F"]
  },
  {
    id: "spec-fasad-03",
    name: "Hamptons Coastal Slate Blue",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "mewah",
    desc: "Arsitektur pesisir klasik Amerika. Dinding luar biru batu tulis (slate) dengan kusen putih bersih tebal dan batu alam abu pasir.",
    roles: ["Dinding Aksen (30%)", "Dinding Eksterior (60%)", "Kusen Lis Putih (10%)", "Pintu Masuk", "Batu Alam"],
    finishing: ["Exterior Satin", "Exterior Satin", "High-Gloss Exterior White", "Semi-Gloss Navy", "Stone Penetrating Sealer"],
    resin: ["100% Acrylic Resin", "Acrylic Emulsion", "Silicone Alkyd", "Waterborne Enamel", "Siloxane Sealer"],
    colors: ["#475569", "#F1F5F9", "#FFFFFF", "#1E293B", "#94A3B8"]
  },
  {
    id: "spec-fasad-04",
    name: "Japandi Greige & Matte Black",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "modern",
    desc: "Perpaduan abu-krem (greige) ala Jepang modern. Redup di bawah terik siang hari, garis kusen hitam doff memberi ketegasan geometris.",
    roles: ["Focal Aksen (30%)", "Dinding Greige (60%)", "Overstek Plafon (10%)", "Kusen Hitam Doff", "Aksen Batu"],
    finishing: ["Exterior Matte", "Exterior Matte", "Exterior Flat", "Powder Coating Matte", "Stone Finish"],
    resin: ["Pure Acrylic", "Silicone Modified Acrylic", "Acrylic Latex", "Epoxy Polyester", "Acrylic Sealer"],
    colors: ["#8D8175", "#ECE8E1", "#FFFFFF", "#1C1917", "#C4BAAF"]
  },
  {
    id: "spec-fasad-05",
    name: "Balinese Modern Stone & Merbau",
    category: "cat-rumah",
    categoryName: "Fasad Eksterior",
    mood: "hangat",
    desc: "Residensi tropis Bali. Warna abu batu paras, plester pasir krem hangat, dan panel kayu merbau tahan cuaca kelembaban tinggi.",
    roles: ["Aksen Fasad (30%)", "Dinding Utama (60%)", "Plafon Kayu/Lis (10%)", "Kusen", "Detail Kayu Merbau"],
    finishing: ["Natural Stone Sealer", "Exterior Matte", "Wood Stain Teak", "Outdoor Doff", "Natural Wood Oil"],
    resin: ["Silane Siloxane", "Acrylic Emulsion", "Polyurethane Oil", "Waterborne Acrylic", "Linseed Wood Oil"],
    colors: ["#3D3A37", "#EDE8DF", "#FFFFFF", "#2B2625", "#8C4825"]
  },

  // --- ZONA RUANG TAMU & KELUARGA ---
  {
    id: "spec-tamu-01",
    name: "Warm Olive & Toasted Almond",
    category: "cat-ruang-tamu",
    categoryName: "Ruang Tamu & Keluarga",
    mood: "hangat",
    desc: "Nuansa bersahabat untuk area pertemuan keluarga. Hijau zaitun hangat pada panel backdrop diimbangi dinding almond lembut.",
    roles: ["Dinding Aksen TV (30%)", "Dinding Ruang Tamu (60%)", "Plafon/Lis (10%)", "Kusen Pintu", "Furniture/Sofa"],
    finishing: ["Eggshell Washable", "Eggshell", "Flat White", "Semi-Gloss Wood", "Satin"],
    resin: ["Acrylic Latex", "Vinyl Acrylic", "PVA Paint", "Polyurethane", "Acrylic Enamel"],
    colors: ["#525946", "#EFECE6", "#FFFFFF", "#2E3326", "#C7B299"]
  },
  {
    id: "spec-tamu-02",
    name: "Mid-Century Teal & Amber Ocher",
    category: "cat-ruang-tamu",
    categoryName: "Ruang Tamu & Keluarga",
    mood: "modern",
    desc: "Karakter kuat retro abad pertengahan. Dinding teal pekat bersanding dengan furnitur mustard/oker hangat dan krem netral.",
    roles: ["Focal Wall (30%)", "Dinding Netral (60%)", "Plafon/Lis (10%)", "Kusen Kayu Gelap", "Aksen Oker"],
    finishing: ["Matte", "Eggshell", "Flat White", "Satin Wood", "Gloss Accent"],
    resin: ["Pure Acrylic", "Vinyl Acrylic", "Acrylic Emulsion", "Solvent Polyurethane", "Waterborne Gloss"],
    colors: ["#1D4A50", "#F3F1EC", "#FFFFFF", "#0E292C", "#D97706"]
  },
  {
    id: "spec-tamu-03",
    name: "Scandinavian Warm White & Oak",
    category: "cat-ruang-tamu",
    categoryName: "Ruang Tamu & Keluarga",
    mood: "tenang",
    desc: "Maksimalisasi pantulan pencahayaan alami (high LRV). Dinding putih hangat gading dengan aksen abu awan tipis dan panel kayu ek.",
    roles: ["Dinding Aksen Abu (30%)", "Dinding Putih Hangat (60%)", "Plafon (10%)", "Kusen", "Panel Kayu Ek"],
    finishing: ["Eggshell", "Matte Washable", "Flat Ceiling", "White Semi-Gloss", "Wood Doff"],
    resin: ["Vinyl Acrylic", "Acrylic Emulsion", "PVA", "Acrylic Enamel", "Waterborne PU"],
    colors: ["#D8D8D8", "#F9F8F6", "#FFFFFF", "#525252", "#C29B72"]
  },

  // --- ZONA DAPUR & PANTRI ---
  {
    id: "spec-dapur-01",
    name: "Modern Sage & Brushed Brass",
    category: "cat-dapur",
    categoryName: "Dapur & Pantri",
    mood: "tenang",
    desc: "Kitchen cabinet hijau sage dipadu dinding subway tile putih dan aksen handle kuningan anti-karat.",
    roles: ["Kabinet/Aksen (30%)", "Dinding Dapur (60%)", "Plafon (10%)", "Kusen/Trim", "Aksen Brass/Kuningan"],
    finishing: ["Semi-Gloss Washable", "Satin Anti-Jamur", "Flat Moisture-Resistant", "Semi-Gloss", "Metallic Coating"],
    resin: ["Waterborne Acrylic Enamel", "Epoxy Modified Acrylic", "PVA Anti-Fungus", "Polyurethane", "Lacquer"],
    colors: ["#73867B", "#F6F7F5", "#FFFFFF", "#36493F", "#D4AF37"]
  },
  {
    id: "spec-dapur-02",
    name: "Moody Charcoal & Walnut Kitchen",
    category: "cat-dapur",
    categoryName: "Dapur & Pantri",
    mood: "mewah",
    desc: "Dapur kontemporer maskulin. Kabinet arang pekat dengan dinding abu terang anti-minyak dan aksen kayu walnut hangat.",
    roles: ["Kabinet Dapur (30%)", "Dinding Dapur (60%)", "Plafon (10%)", "Kusen", "Kayu Walnut"],
    finishing: ["Anti-Fingerprint Matte", "Satin Washable", "Flat White", "Semi-Gloss", "Natural Wood Polish"],
    resin: ["Melamine / Acrylic Poly", "Silicone Acrylic", "PVA Paint", "Polyurethane", "Hardwax Oil"],
    colors: ["#2B2D42", "#EDF2F4", "#FFFFFF", "#8D99AE", "#6F4E37"]
  },

  // --- ZONA RUANG KERJA & STUDIO ---
  {
    id: "spec-kerja-01",
    name: "Deep Forest & Parchment Study",
    category: "cat-kerja",
    categoryName: "Ruang Kerja / Studio",
    mood: "tenang",
    desc: "Dinding hijau hutan gelap di belakang meja kerja meredakan kelelahan mata saat menatap monitor seharian, dipadu krem perkamen.",
    roles: ["Dinding Meja Kerja (30%)", "Dinding Studio (60%)", "Plafon (10%)", "Kusen Pintu", "Aksen Meja Kayu"],
    finishing: ["Deep Matte", "Eggshell", "Flat White", "Semi-Gloss Doff", "Wood Oil"],
    resin: ["Pure Acrylic", "Vinyl Acrylic", "Acrylic Emulsion", "Waterborne Poly", "Danish Oil"],
    colors: ["#2D4030", "#F4F1EA", "#FFFFFF", "#18241A", "#A68A56"]
  },
  {
    id: "spec-kerja-02",
    name: "Concrete Greige & Amber Focus",
    category: "cat-kerja",
    categoryName: "Ruang Kerja / Studio",
    mood: "modern",
    desc: "Kombinasi modern studio arsitek. Suasana netral semen dengan aksen kuning amber untuk memicu konsentrasi ide kreatif.",
    roles: ["Dinding Aksen (30%)", "Dinding Utama (60%)", "Plafon (10%)", "Kusen", "Aksen Lampu/Detail"],
    finishing: ["Matte Tekstur Semen", "Eggshell", "Flat White", "Semi-Gloss Black", "Gloss Amber"],
    resin: ["Stucco Acrylic", "Acrylic Emulsion", "Flat PVA", "Polyurethane", "Enamel"],
    colors: ["#4A4E51", "#E5E7EB", "#FFFFFF", "#1F2937", "#EAB308"]
  },

  // --- ZONA KAMAR MANDI & SPA ---
  {
    id: "spec-mandi-01",
    name: "Zen Travertine & Moss Spa",
    category: "cat-mandi",
    categoryName: "Kamar Mandi / Spa",
    mood: "tenang",
    desc: "Kamar mandi relaksasi bernuansa spa batu alam travertine hangat dengan cat dinding anti-jamur hijau lumut lembut.",
    roles: ["Dinding Shower (30%)", "Dinding Kering (60%)", "Plafon Anti-Lembab (10%)", "Kusen Aluminium", "Aksen Batu Kali"],
    finishing: ["Satin Anti-Mildew", "Semi-Gloss Moisture Barrier", "Flat Water-Resistant", "Anodized Black", "Stone Matte"],
    resin: ["Epoxy Acrylic", "Modified Acrylic", "Waterborne Waterproofing", "Anodized Oxide", "Silicone Sealer"],
    colors: ["#6B7A68", "#E8E2D5", "#FFFFFF", "#242E23", "#3F3B36"]
  },
  {
    id: "spec-mandi-02",
    name: "Monochrome Carrara & Matte Brass",
    category: "cat-mandi",
    categoryName: "Kamar Mandi / Spa",
    mood: "mewah",
    desc: "Kamar mandi marmer bersih. Dinding abu terang dingin dipadu aksen hitam doff dan keran kuningan matte mewah.",
    roles: ["Aksen Vanity (30%)", "Dinding Utama (60%)", "Plafon (10%)", "Kusen Kaca", "Fitting Kuningan"],
    finishing: ["Gloss Tile / Semi-Gloss", "Semi-Gloss Washable", "Flat Ceiling Anti-Fungus", "Matte Black", "Brushed Brass"],
    resin: ["Waterproof Acrylic", "Acrylic Polyurethane", "Fungicidal Emulsion", "Powder Coating", "PVD Coating"],
    colors: ["#334155", "#F1F5F9", "#FFFFFF", "#0F172A", "#D4AF37"]
  }
];

// ==========================================================================
// 2. KALKULASI KOLORIMETRI PRESISI (HEX, RGB, HSL, CMYK, LRV, WCAG 2.2)
// ==========================================================================

function hexToRgb(hex) {
  let clean = hex.replace("#", "").trim();
  if (clean.length === 3) clean = clean.split("").map(c => c + c).join("");
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function rgbToHex(r, g, b) {
  const clamp = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0").toUpperCase();
  return `#${clamp(r)}${clamp(g)}${clamp(b)}`;
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
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function hslToRgb(h, s, l) {
  h = (h % 360 + 360) % 360;
  s = s / 100;
  l = l / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
  else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
  else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
  else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
  else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
  else if (h >= 300 && h < 360) { r = c; g = 0; b = x; }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}

function hslToHex(h, s, l) {
  const { r, g, b } = hslToRgb(h, s, l);
  return rgbToHex(r, g, b);
}

// Konversi ke CMYK untuk spesifikasi pencampuran cat & printing
function rgbToCmyk(r, g, b) {
  if (r === 0 && g === 0 && b === 0) return { c: 0, m: 0, y: 0, k: 100 };
  const c = 1 - (r / 255);
  const m = 1 - (g / 255);
  const y = 1 - (b / 255);
  const k = Math.min(c, m, y);
  return {
    c: Math.round(((c - k) / (1 - k)) * 100),
    m: Math.round(((m - k) / (1 - k)) * 100),
    y: Math.round(((y - k) / (1 - k)) * 100),
    k: Math.round(k * 100)
  };
}

// Light Reflectance Value (LRV / CIE Y Value) - Standar Arsitektur ASTM
function calculateLrv(r, g, b) {
  const toLinear = (val) => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  };
  const y = 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  return Math.round(y * 100);
}

// Relatif Luminance WCAG 2.2
function getLuminance(r, g, b) {
  const toLinear = (val) => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function getContrastRatio(lum1, lum2) {
  const max = Math.max(lum1, lum2);
  const min = Math.min(lum1, lum2);
  return (max + 0.05) / (min + 0.05);
}

function getRandomHex() {
  const hexChars = '0123456789ABCDEF';
  let out = '#';
  for (let i = 0; i < 6; i++) out += hexChars[Math.floor(Math.random() * 16)];
  return out;
}

// ==========================================================================
// 3. TOAST & NOTIFIKASI SISTEM (ZERO EMOJI)
// ==========================================================================
const toastElement = document.getElementById("toast");
let toastTimer;

function showToast(text) {
  if (toastTimer) clearTimeout(toastTimer);
  toastElement.textContent = text;
  toastElement.classList.add("show");
  toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2200);
}

function copyToClipboard(content, sourceElement = null) {
  navigator.clipboard.writeText(content).then(() => {
    showToast(`Disalin: ${content}`);
    if (sourceElement) {
      sourceElement.classList.add("swatch-copied-pulse");
      const hexTag = sourceElement.querySelector(".hex-tag");
      if (hexTag) {
        const originalText = hexTag.textContent;
        hexTag.textContent = "TERSALIN";
        setTimeout(() => {
          hexTag.textContent = originalText;
          sourceElement.classList.remove("swatch-copied-pulse");
        }, 850);
      } else {
        setTimeout(() => sourceElement.classList.remove("swatch-copied-pulse"), 450);
      }
    }
  }).catch(() => {
    showToast(`Tersalin ke clipboard: ${content}`);
  });
}

// ==========================================================================
// 4. ENGINE TACTILE HAPTIC RIPPLE (PADA SETIAP TOMBOL)
// ==========================================================================
function triggerTactileRipple(e, element) {
  const rect = element.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "touch-ripple";
  const size = Math.max(rect.width, rect.height) * 1.5;
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  
  const clientX = e.clientX !== undefined ? e.clientX : (rect.left + rect.width / 2);
  const clientY = e.clientY !== undefined ? e.clientY : (rect.top + rect.height / 2);

  ripple.style.left = `${clientX - rect.left - size / 2}px`;
  ripple.style.top = `${clientY - rect.top - size / 2}px`;

  element.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

// Global Delegated Listener untuk PointerDown Haptic Feedback
document.addEventListener("pointerdown", (e) => {
  const interactiveTarget = e.target.closest(
    ".btn, .chip-btn, .mood-btn, .kelvin-btn, .nav-item, .swatch-column, .colorimetry-col, .datum-spec-chip, .modal-close-trigger, .text-action-link"
  );
  if (interactiveTarget) {
    triggerTactileRipple(e, interactiveTarget);
  }
});

// ==========================================================================
// 5. PERSISTENT STORAGE (WORKSPACE MANDIRI & FAVORIT)
// ==========================================================================
const STORAGE_CUSTOM_KEY = "arch_custom_palettes_v3";

function getCustomVault() {
  try {
    const raw = localStorage.getItem(STORAGE_CUSTOM_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCustomVault(data) {
  localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(data));
  updateVaultBadge();
  renderCustomVault();
}

function updateVaultBadge() {
  const count = getCustomVault().length;
  document.getElementById("custom-count-badge").textContent = count;
}

// ==========================================================================
// 6. STUDIO ELEVASI 2.5D & SUHU PENCAHAYAAN (LIGHTING SIMULATOR)
const roomLightingFilter = document.getElementById("room-lighting-filter");
const roomLegend = document.getElementById("room-legend");
const currentRoomPaletteName = document.getElementById("current-room-palette-name");
const elevationStageElement = document.getElementById("elevation-stage");
const surfaceInspectorHud = document.getElementById("surface-inspector-hud");
const defaultHudText = "Arahkan kursor atau sentuh bidang arsitektural untuk inspeksi material, rasio, dan LRV";

let activeElevationSpec = ARCHITECTURAL_SPECIFICATIONS[0];

function applyToElevationStudio(spec) {
  if (!spec || !spec.colors) return;
  activeElevationSpec = spec;

  const accentHex = spec.colors[0];
  const mainHex = spec.colors[1] || spec.colors[0];
  const ceilingHex = spec.colors[2] || "#FFFFFF";
  const frameHex = spec.colors[3] || spec.colors[0];
  const doorHex = spec.colors[4] || spec.colors[1] || spec.colors[0];

  // Dynamically set CSS variables for Photorealistic 3D Perspective Scenes
  if (elevationStageElement) {
    elevationStageElement.style.setProperty("--spec-accent", accentHex);
    elevationStageElement.style.setProperty("--spec-main", mainHex);
    elevationStageElement.style.setProperty("--spec-ceiling", ceilingHex);
    elevationStageElement.style.setProperty("--spec-frame", frameHex);
    elevationStageElement.style.setProperty("--spec-detail", doorHex);
  }
  document.documentElement.style.setProperty("--spec-accent", accentHex);
  document.documentElement.style.setProperty("--spec-main", mainHex);
  document.documentElement.style.setProperty("--spec-ceiling", ceilingHex);
  document.documentElement.style.setProperty("--spec-frame", frameHex);
  document.documentElement.style.setProperty("--spec-detail", doorHex);

  // Sync to Three.js WebGL Real-Time 3D PBR Engine
  if (typeof Arch3DEngine !== "undefined") {
    Arch3DEngine.applyPalette(spec);
  }

  currentRoomPaletteName.innerHTML = `Spesifikasi: <strong>${spec.name}</strong>`;

  const roles = spec.roles || ["Aksen (30%)", "Dinding Utama (60%)", "Plafon/Lis (10%)", "Kusen", "Pintu/Detail"];
  const finishing = spec.finishing || ["Matte", "Eggshell", "Flat", "Semi-Gloss", "Satin"];

  roomLegend.innerHTML = spec.colors.slice(0, 5).map((col, idx) => {
    const rgb = hexToRgb(col);
    const lrv = calculateLrv(rgb.r, rgb.g, rgb.b);
    return `
      <div class="datum-spec-chip" onclick="copyToClipboard('${col}', this)" title="Klik untuk salin ${col}">
        <span class="datum-dot" style="background-color: ${col};"></span>
        <span><strong>${roles[idx]}:</strong> ${col} (LRV: ${lrv}% &bull; ${finishing[idx] || 'Standar'})</span>
      </div>
    `;
  }).join("");

  recalculatePaintVolume();
}

// Scene Selector Logic
let currentElevationScene = "bedroom";
const sceneButtons = document.querySelectorAll(".scene-btn");

function setElevationScene(sceneId) {
  currentElevationScene = sceneId;
  sceneButtons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-scene") === sceneId);
  });
  const scenes = {
    bedroom: document.getElementById("scene-bedroom"),
    facade: document.getElementById("scene-facade"),
    living: document.getElementById("scene-living")
  };
  Object.keys(scenes).forEach(k => {
    if (scenes[k]) {
      scenes[k].style.display = (k === sceneId) ? "flex" : "none";
    }
  });
  if (elevationStageElement) {
    elevationStageElement.classList.remove("scene-bedroom", "scene-facade", "scene-living");
    elevationStageElement.classList.add(`scene-${sceneId}`);
  }

  // Sync to Three.js WebGL 3D Engine
  if (typeof Arch3DEngine !== "undefined") {
    Arch3DEngine.switchScene(sceneId);
  }

  showToast(`Model 3D: ${sceneId === "bedroom" ? "Kamar Tidur Utama" : sceneId === "facade" ? "Fasad Rumah Eksterior" : "Ruang Tamu & TV Slat"}`);
}

sceneButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    setElevationScene(btn.getAttribute("data-scene"));
  });
});

// Kontrol Suhu Lampu
const kelvinBtns = document.querySelectorAll(".kelvin-btn");
kelvinBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    kelvinBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.getAttribute("data-light");

    roomLightingFilter.className = "elevation-viewport";
    roomLightingFilter.classList.add(`light-${mode}`);

    // Sync to Three.js WebGL Light Temperature
    if (typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.setKelvin(mode);
    }

    showToast(`Filter Suhu Kelvin: ${mode.toUpperCase()}`);
  });
});

// Engine Mode Selector (3D WebGL vs Elevasi Vektor)
const engineModeBtns = document.querySelectorAll("#engine-mode-selector .shader-btn");
engineModeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    engineModeBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.getAttribute("data-engine");
    if (elevationStageElement) {
      elevationStageElement.classList.toggle("engine-webgl", mode === "webgl");
      elevationStageElement.classList.toggle("engine-vector", mode === "vector");
    }
    if (mode === "webgl" && typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.resize();
    }
    showToast(`Engine Visualizer: ${mode === "webgl" ? "3D Real-Time WebGL (PBR)" : "Elevasi Vektor Skematik"}`);
  });
});

// Shader Finishing Cat (Matte / Satin / Semi-Gloss)
const shaderButtons = document.querySelectorAll("#shader-selector .shader-btn");
shaderButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    shaderButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const shader = btn.getAttribute("data-shader");
    if (elevationStageElement) {
      elevationStageElement.classList.remove("finish-matte", "finish-satin", "finish-semigloss");
      elevationStageElement.classList.add(`finish-${shader}`);
    }

    // Sync to Three.js WebGL PBR Roughness/Metalness
    if (typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.setFinish(shader);
    }

    const labels = {
      matte: "Matte Doff (Zero Glare)",
      satin: "Satin Sheen (Mid-Reflectance)",
      semigloss: "Semi-Gloss (Tinggi Reflektansi)"
    };
    showToast(`Tekstur Kilap: ${labels[shader] || shader}`);
  });
});

// Toggles Efek Optik (Sinar Matahari & Lampu Aksen)
const toggleSunbeamBtn = document.getElementById("toggle-sunbeam-btn");
if (toggleSunbeamBtn) {
  toggleSunbeamBtn.addEventListener("click", () => {
    if (elevationStageElement) {
      const isHidden = elevationStageElement.classList.toggle("hide-sunbeam");
      toggleSunbeamBtn.classList.toggle("active", !isHidden);

      // Sync to Three.js WebGL Sun Light
      if (typeof Arch3DEngine !== "undefined") {
        Arch3DEngine.toggleSun(!isHidden);
      }

      showToast(`Efek Sinar Matahari: ${!isHidden ? "Aktif" : "Dinonaktifkan"}`);
    }
  });
}

const toggleLightsBtn = document.getElementById("toggle-lights-btn");
if (toggleLightsBtn) {
  toggleLightsBtn.addEventListener("click", () => {
    if (elevationStageElement) {
      const isHidden = elevationStageElement.classList.toggle("hide-lights");
      toggleLightsBtn.classList.toggle("active", !isHidden);

      // Sync to Three.js WebGL Spot & Point Lights
      if (typeof Arch3DEngine !== "undefined") {
        Arch3DEngine.toggleLights(!isHidden);
      }

      showToast(`Efek Lampu Aksen: ${!isHidden ? "Aktif" : "Dinonaktifkan"}`);
    }
  });
}

// 3D Camera Controls Toolbar Handlers
document.querySelectorAll(".cam-preset-btn[data-preset]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cam-preset-btn[data-preset]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const preset = btn.getAttribute("data-preset");
    if (typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.setCameraPreset(preset);
    }
    showToast(`Sudut Kamera 3D: ${btn.textContent.trim()}`);
  });
});

const toggleAutoRotateBtn = document.getElementById("toggle-autorotate-btn");
if (toggleAutoRotateBtn) {
  toggleAutoRotateBtn.addEventListener("click", () => {
    if (typeof Arch3DEngine !== "undefined") {
      const active = Arch3DEngine.toggleAutoRotate();
      toggleAutoRotateBtn.classList.toggle("active", active);
      showToast(`Tur Ruang 360°: ${active ? "Aktif (Memutar)" : "Dinonaktifkan"}`);
    }
  });
}

const resetCameraBtn = document.getElementById("reset-camera-btn");
if (resetCameraBtn) {
  resetCameraBtn.addEventListener("click", () => {
    if (typeof Arch3DEngine !== "undefined") {
      Arch3DEngine.setCameraPreset("default");
      document.querySelectorAll(".cam-preset-btn[data-preset]").forEach(b => b.classList.remove("active"));
      const defBtn = document.querySelector(".cam-preset-btn[data-preset='default']");
      if (defBtn) defBtn.classList.add("active");
      showToast("Posisi Kamera Direset ke Sudut Arsitek");
    }
  });
}

// Surface Inspector HUD Engine (Vector & Three.js WebGL Raycaster)
function initSurfaceInspector() {
  document.querySelectorAll(".arch-surface").forEach(el => {
    const getSurfaceColor = () => {
      if (!activeElevationSpec) return "#ffffff";
      const surfaceType = el.getAttribute("data-surface") || "main";
      if (surfaceType === "accent") return activeElevationSpec.colors[0];
      if (surfaceType === "ceiling") return activeElevationSpec.colors[2] || "#FFFFFF";
      if (surfaceType === "frame") return activeElevationSpec.colors[3] || activeElevationSpec.colors[0];
      if (surfaceType === "detail") return activeElevationSpec.colors[4] || activeElevationSpec.colors[1] || activeElevationSpec.colors[0];
      return activeElevationSpec.colors[1] || activeElevationSpec.colors[0];
    };

    const handleInspect = () => {
      if (!surfaceInspectorHud || !activeElevationSpec) return;
      const surfaceName = el.getAttribute("data-surface-name") || "Bidang Permukaan";
      const colorHex = getSurfaceColor();
      const rgb = hexToRgb(colorHex);
      const lrv = calculateLrv(rgb.r, rgb.g, rgb.b);

      surfaceInspectorHud.innerHTML = `
        <span class="hud-dot" style="background-color: ${colorHex};"></span>
        <span><strong>${surfaceName}:</strong> ${colorHex} &bull; LRV: ${lrv}% &bull; Formula: ${activeElevationSpec.name}</span>
      `;
      surfaceInspectorHud.classList.add("active");
    };

    const handleLeave = () => {
      if (!surfaceInspectorHud) return;
      surfaceInspectorHud.innerHTML = defaultHudText;
      surfaceInspectorHud.classList.remove("active");
    };

    el.addEventListener("mouseenter", handleInspect);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("click", () => {
      const colorHex = getSurfaceColor();
      copyToClipboard(colorHex, el);
    });
  });

  // Hubungkan Raycaster WebGL ke HUD
  if (typeof Arch3DEngine !== "undefined") {
    Arch3DEngine.onSurfaceHover((userData) => {
      if (!surfaceInspectorHud) return;
      if (!userData) {
        surfaceInspectorHud.innerHTML = defaultHudText;
        surfaceInspectorHud.classList.remove("active");
        return;
      }
      const surfaceName = userData.surfaceName || "Bidang Arsitektural 3D";
      const surfaceType = userData.surfaceType || "main";
      let colorHex = activeElevationSpec.colors[1] || activeElevationSpec.colors[0];
      if (surfaceType === "accent") colorHex = activeElevationSpec.colors[0];
      else if (surfaceType === "ceiling") colorHex = activeElevationSpec.colors[2] || "#FFFFFF";
      else if (surfaceType === "frame") colorHex = activeElevationSpec.colors[3] || activeElevationSpec.colors[0];
      else if (surfaceType === "detail") colorHex = activeElevationSpec.colors[4] || activeElevationSpec.colors[1] || activeElevationSpec.colors[0];

      const rgb = hexToRgb(colorHex);
      const lrv = calculateLrv(rgb.r, rgb.g, rgb.b);

      surfaceInspectorHud.innerHTML = `
        <span class="hud-dot" style="background-color: ${colorHex};"></span>
        <span><strong>${surfaceName}:</strong> ${colorHex} &bull; LRV: ${lrv}% &bull; Formula: ${activeElevationSpec.name}</span>
      `;
      surfaceInspectorHud.classList.add("active");
    });

    Arch3DEngine.onSurfaceClick((userData) => {
      if (!userData) return;
      const surfaceType = userData.surfaceType || "main";
      let colorHex = activeElevationSpec.colors[1] || activeElevationSpec.colors[0];
      if (surfaceType === "accent") colorHex = activeElevationSpec.colors[0];
      else if (surfaceType === "ceiling") colorHex = activeElevationSpec.colors[2] || "#FFFFFF";
      else if (surfaceType === "frame") colorHex = activeElevationSpec.colors[3] || activeElevationSpec.colors[0];
      else if (surfaceType === "detail") colorHex = activeElevationSpec.colors[4] || activeElevationSpec.colors[1] || activeElevationSpec.colors[0];
      copyToClipboard(colorHex);
    });
  }
}

// ==========================================================================
// 7. KALKULATOR VOLUMETRIK 60-30-10 & DAYA SEBAR
// ==========================================================================
const inputLength = document.getElementById("room-length");
const inputWidth = document.getElementById("room-width");
const inputHeight = document.getElementById("room-height");
const selectCoats = document.getElementById("paint-coats");
const calcResultsContainer = document.getElementById("calc-results");

function recalculatePaintVolume() {
  const length = parseFloat(inputLength.value) || 4.0;
  const width = parseFloat(inputWidth.value) || 3.0;
  const height = parseFloat(inputHeight.value) || 3.2;
  const coats = parseInt(selectCoats.value, 10) || 2;

  // Luas bruto dinding = 2 * (P + L) * T
  const grossWallArea = 2 * (length + width) * height;
  // Deduksi 15% untuk bukaan arsitektural (pintu & jendela)
  const netWallArea = grossWallArea * 0.85;
  // Luas Plafon = P * L
  const ceilingArea = length * width;

  // Daya sebar standar emulsi akrilik: 11 m² per liter per lapis
  const coverageRate = 11.0;

  const mainArea = netWallArea * 0.60;
  const accentArea = netWallArea * 0.30;
  const trimArea = (netWallArea * 0.10) + ceilingArea;

  const mainLiters = ((mainArea * coats) / coverageRate).toFixed(1);
  const accentLiters = ((accentArea * coats) / coverageRate).toFixed(1);
  const trimLiters = ((trimArea * coats) / coverageRate).toFixed(1);

  const canEstimate = (liters) => {
    const l = parseFloat(liters);
    if (l <= 2.5) return "1 Pail Kecil (2.5L)";
    const cans = Math.ceil(l / 2.5);
    return `${cans} Pail (@2.5L)`;
  };

  calcResultsContainer.innerHTML = `
    <div class="meter-card">
      <div class="meter-label">Dinding Utama (60% Bidang)</div>
      <div class="meter-metric">${mainLiters} L</div>
      <div class="meter-meta">${canEstimate(mainLiters)} &bull; Luas Netto: ${mainArea.toFixed(1)} m²</div>
    </div>
    <div class="meter-card">
      <div class="meter-label">Dinding Aksen (30% Bidang)</div>
      <div class="meter-metric">${accentLiters} L</div>
      <div class="meter-meta">${canEstimate(accentLiters)} &bull; Luas Netto: ${accentArea.toFixed(1)} m²</div>
    </div>
    <div class="meter-card">
      <div class="meter-label">Plafon & Lisplang (10% + Plafon)</div>
      <div class="meter-metric">${trimLiters} L</div>
      <div class="meter-meta">${canEstimate(trimLiters)} &bull; Luas Netto: ${trimArea.toFixed(1)} m²</div>
    </div>
  `;
}

[inputLength, inputWidth, inputHeight, selectCoats].forEach(input => {
  input.addEventListener("input", recalculatePaintVolume);
});

// ==========================================================================
// 8. KATALOG SPESIFIKASI ARSITEKTURAL & MULTI-FILTER
// ==========================================================================
const paintContainer = document.getElementById("paint-palettes-container");
const paintSearchInput = document.getElementById("paint-search");
const paintTagFilters = document.querySelectorAll("#paint-tag-filters .chip-btn");
const moodTagFilters = document.querySelectorAll("#mood-tag-filters .mood-btn");

let currentCategoryFilter = "all";
let currentMoodFilter = "all";
let currentSearchQuery = "";

function renderArchitecturalCatalog() {
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
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: #64748b; background: #ffffff; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm);">
        <p style="font-weight: 700;">Tidak ditemukan spesifikasi yang cocok dengan parameter kueri.</p>
        <p style="font-size: 0.8125rem; margin-top: 0.25rem;">Gunakan filter kategori zonasi atau kata kunci pencarian yang lebih umum.</p>
      </div>
    `;
    return;
  }

  paintContainer.innerHTML = filtered.map(spec => {
    const roles = spec.roles || ["Aksen", "Utama", "Plafon", "Kusen", "Detail"];

    // Swatches strip
    const swatchesHtml = spec.colors.map((color, idx) => `
      <div class="swatch-column" style="background-color: ${color}" data-color="${color}" title="Klik salin ${color}">
        <span class="swatch-tag-role">${roles[idx]}</span>
        <span class="hex-tag">${color}</span>
      </div>
    `).join("");

    // Micro Colorimetry Table (HEX, LRV)
    const microTableHtml = spec.colors.map(color => {
      const rgb = hexToRgb(color);
      const lrv = calculateLrv(rgb.r, rgb.g, rgb.b);
      return `
        <div class="colorimetry-col" data-color="${color}" title="Salin ${color}">
          <span class="colorimetry-swatch-box" style="background-color: ${color};"></span>
          <span class="colorimetry-hex">${color}</span>
          <span class="colorimetry-lrv">LRV ${lrv}%</span>
        </div>
      `;
    }).join("");

    // 60-30-10 Proportional Ratio Bar
    const mainCol = spec.colors[1] || spec.colors[0];
    const accentCol = spec.colors[0];
    const ceilingCol = spec.colors[2] || "#FFFFFF";
    const ratioBarHtml = `
      <div class="palette-ratio-bar" title="Proporsi Arsitektur: 60% Utama, 30% Aksen, 10% Plafon/Lis">
        <div class="ratio-segment ratio-60" style="background-color: ${mainCol};" data-color="${mainCol}" title="Dinding Utama 60%: ${mainCol}">
          <span class="ratio-label">60% UTAMA</span>
        </div>
        <div class="ratio-segment ratio-30" style="background-color: ${accentCol};" data-color="${accentCol}" title="Dinding Aksen 30%: ${accentCol}">
          <span class="ratio-label">30% AKSEN</span>
        </div>
        <div class="ratio-segment ratio-10" style="background-color: ${ceilingCol};" data-color="${ceilingCol}" title="Plafon/Lis 10%: ${ceilingCol}">
          <span class="ratio-label">10%</span>
        </div>
      </div>
    `;

    return `
      <div class="palette-spec-card">
        <div class="swatches-header-strip">
          ${swatchesHtml}
        </div>
        ${ratioBarHtml}
        <div class="palette-spec-body">
          <div class="spec-card-head">
            <div>
              <h3 class="spec-name">${spec.name}</h3>
            </div>
            <span class="spec-zone-badge">${spec.categoryName}</span>
          </div>
          <p class="spec-description">${spec.desc}</p>
          <div class="colorimetry-table">
            ${microTableHtml}
          </div>
          <div class="spec-card-actions">
            <button class="btn btn-primary" data-apply-id="${spec.id}">
              Terapkan ke Elevasi
            </button>
            <button class="btn btn-outline" data-copy-json-id="${spec.id}" title="Salin array HEX ke clipboard">
              Salin JSON
            </button>
            <button class="text-action-link" data-spec-id="${spec.id}">
              Spesifikasi Teknis
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Bind Swatches, Micro Table & Ratio Segments Clicks
  paintContainer.querySelectorAll(".swatch-column, .colorimetry-col, .ratio-segment").forEach(el => {
    el.addEventListener("click", () => {
      const color = el.getAttribute("data-color");
      if (color) copyToClipboard(color, el);
    });
  });

  // Bind Salin JSON Array
  paintContainer.querySelectorAll("[data-copy-json-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-copy-json-id");
      const target = ARCHITECTURAL_SPECIFICATIONS.find(p => p.id === id);
      if (target) {
        copyToClipboard(JSON.stringify(target.colors), btn);
      }
    });
  });

  // Bind Terapkan ke Elevasi
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

  // Bind Spesifikasi Teknis Modal
  paintContainer.querySelectorAll("[data-spec-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-spec-id");
      const target = ARCHITECTURAL_SPECIFICATIONS.find(p => p.id === id);
      if (target) openTechnicalSpecModal(target);
    });
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

paintSearchInput.addEventListener("input", (e) => {
  currentSearchQuery = e.target.value.trim();
  renderArchitecturalCatalog();
});

// ==========================================================================
// 9. KOMPARASI BERDAMPINGAN (SIDE-BY-SIDE ANALYTICS)
// ==========================================================================
const selectPaletteA = document.getElementById("select-palette-a");
const selectPaletteB = document.getElementById("select-palette-b");
const compareColA = document.getElementById("compare-col-a");
const compareColB = document.getElementById("compare-col-b");

function initComparisonSelectors() {
  const optionsHtml = ARCHITECTURAL_SPECIFICATIONS.map(p => `
    <option value="${p.id}">${p.name} [${p.categoryName}]</option>
  `).join("");

  selectPaletteA.innerHTML = optionsHtml;
  selectPaletteB.innerHTML = optionsHtml;

  if (ARCHITECTURAL_SPECIFICATIONS.length >= 2) {
    selectPaletteA.value = ARCHITECTURAL_SPECIFICATIONS[0].id;
    selectPaletteB.value = ARCHITECTURAL_SPECIFICATIONS[1].id;
  }
  renderComparisonCells();
}

function renderSingleCompareUnit(container, spec) {
  if (!spec) return;

  const swatchesHtml = spec.colors.map(color => `
    <div style="flex: 1; height: 55px; background: ${color}; display: flex; align-items: flex-end; justify-content: center; padding: 4px; cursor: pointer;" onclick="copyToClipboard('${color}', this)">
      <span style="font-family: var(--font-mono); font-size: 0.62rem; color: #fff; background: rgba(15,23,42,0.75); padding: 1px 3px; border-radius: 2px;">${color}</span>
    </div>
  `).join("");

  const detailRows = spec.colors.map((color, idx) => {
    const role = (spec.roles && spec.roles[idx]) || `Bidang ${idx + 1}`;
    const finish = (spec.finishing && spec.finishing[idx]) || `Standar`;
    const rgb = hexToRgb(color);
    const lrv = calculateLrv(rgb.r, rgb.g, rgb.b);
    return `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.45rem 0; border-bottom: 1px solid var(--border-subtle); font-size: 0.8rem;">
        <div style="display: flex; align-items: center; gap: 0.45rem;">
          <span style="width: 12px; height: 12px; background: ${color}; border-radius: 2px; border: 1px solid rgba(0,0,0,0.15);"></span>
          <strong>${role}:</strong> <span style="font-family: var(--font-mono);">${color}</span>
        </div>
        <span style="color: var(--text-muted); font-size: 0.72rem; font-family: var(--font-mono);">${finish} &bull; LRV ${lrv}%</span>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div>
      <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 0.2rem;">${spec.name}</h3>
      <span class="spec-zone-badge">${spec.categoryName}</span>
      <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.45;">${spec.desc}</p>
    </div>

    <div style="display: flex; border-radius: var(--radius-xs); overflow: hidden; border: 1px solid var(--border-subtle);">
      ${swatchesHtml}
    </div>

    <div>${detailRows}</div>

    <button class="btn btn-primary" onclick="setElevationTarget('${spec.id}')" style="margin-top: 0.5rem;">
      Simulasikan Opsi Ini di Elevasi &rarr;
    </button>
  `;
}

function renderComparisonCells() {
  const pA = ARCHITECTURAL_SPECIFICATIONS.find(p => p.id === selectPaletteA.value);
  const pB = ARCHITECTURAL_SPECIFICATIONS.find(p => p.id === selectPaletteB.value);
  renderSingleCompareUnit(compareColA, pA);
  renderSingleCompareUnit(compareColB, pB);
}

selectPaletteA.addEventListener("change", renderComparisonCells);
selectPaletteB.addEventListener("change", renderComparisonCells);

window.setElevationTarget = function(id) {
  const target = ARCHITECTURAL_SPECIFICATIONS.find(p => p.id === id);
  if (target) {
    switchTab("tab-studio");
    applyToElevationStudio(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

document.getElementById("send-to-compare-a-btn").addEventListener("click", () => {
  selectPaletteA.value = activeElevationSpec.id;
  renderComparisonCells();
  switchTab("tab-komparasi");
  showToast("Spesifikasi aktif ditetapkan ke Opsi A.");
});

document.getElementById("send-to-compare-b-btn").addEventListener("click", () => {
  selectPaletteB.value = activeElevationSpec.id;
  renderComparisonCells();
  switchTab("tab-komparasi");
  showToast("Spesifikasi aktif ditetapkan ke Opsi B.");
});

// ==========================================================================
// 10. MODAL LEMBAR SPESIFIKASI TEKNIS & CETAK RESMI
// ==========================================================================
const specModal = document.getElementById("spec-modal");
const modalPaletteTitle = document.getElementById("modal-palette-title");
const modalPaletteSub = document.getElementById("modal-palette-sub");
const modalBodyContent = document.getElementById("modal-body-content");
const modalCloseBtn = document.getElementById("modal-close-btn");
const openSpecModalBtn = document.getElementById("open-spec-modal-btn");
const copyCssVarsBtn = document.getElementById("copy-css-vars-btn");
const copyTailwindBtn = document.getElementById("copy-tailwind-btn");

let currentActiveSpec = ARCHITECTURAL_SPECIFICATIONS[0];

function openTechnicalSpecModal(spec) {
  currentActiveSpec = spec;
  modalPaletteTitle.textContent = spec.name;
  modalPaletteSub.textContent = `Zonasi: ${spec.categoryName} • Standar ASTM D2805 Cakupan Emulsi`;

  const roles = spec.roles || ["Aksen (30%)", "Dinding Utama (60%)", "Plafon/Lis (10%)", "Kusen", "Detail"];
  const finish = spec.finishing || ["Matte", "Eggshell", "Flat", "Semi-Gloss", "Satin"];
  const resin = spec.resin || ["Pure Acrylic", "Vinyl Acrylic", "Acrylic Emulsion", "Polyurethane", "Alkyd"];

  const rows = spec.colors.map((color, idx) => {
    const rgb = hexToRgb(color);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    const lrv = calculateLrv(rgb.r, rgb.g, rgb.b);
    return `
      <tr>
        <td><strong>${roles[idx]}</strong></td>
        <td>
          <span style="display: inline-flex; align-items: center; gap: 0.4rem; font-family: var(--font-mono); font-weight: 700;">
            <span style="width: 12px; height: 12px; background: ${color}; border-radius: 2px; display: inline-block;"></span>
            ${color}
          </span>
        </td>
        <td style="font-family: var(--font-mono); font-size: 0.72rem;">C:${cmyk.c} M:${cmyk.m} Y:${cmyk.y} K:${cmyk.k} (LRV ${lrv}%)</td>
        <td>${finish[idx]}</td>
        <td style="font-family: var(--font-mono); font-size: 0.72rem;">${resin[idx] || 'Acrylic'}</td>
      </tr>
    `;
  }).join("");

  modalBodyContent.innerHTML = `
    <table class="spec-matrix-table">
      <thead>
        <tr>
          <th>Bidang Arsitektur</th>
          <th>Kode HEX</th>
          <th>Formulasi CMYK & LRV</th>
          <th>Tingkat Kilap</th>
          <th>Tipe Basis Resin</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <div class="tech-bullet-box">
      <strong>Protokol Pengecatan Standar Divisi Finishing:</strong>
      <ol>
        <li>Kelembaban substrat dinding wajib &le; 14% (Protometer) dengan derajat keasaman pH 7 - 8 sebelum aplikasi primer alkali sealer.</li>
        <li>Interval pengeringan minimum antar lapisan: 2 hingga 4 jam pada suhu ruang 28°C - 32°C.</li>
        <li>Untuk dinding aksen (${spec.colors[0]}), terapkan minimum 3 lapis untuk mencapai opasitas 98% (ASTM D2805).</li>
      </ol>
    </div>
  `;

  specModal.classList.add("active");
}

modalCloseBtn.addEventListener("click", () => specModal.classList.remove("active"));
specModal.addEventListener("click", (e) => {
  if (e.target === specModal) specModal.classList.remove("active");
});
openSpecModalBtn.addEventListener("click", () => openTechnicalSpecModal(activeElevationSpec));

// Export CSS Variables
copyCssVarsBtn.addEventListener("click", () => {
  const s = currentActiveSpec;
  const css = `:root {\n` +
    s.colors.map((c, i) => `  --color-${i + 1}: ${c}; /* ${(s.roles && s.roles[i]) || 'Bidang'} */`).join("\n") +
    `\n}`;
  copyToClipboard(css);
});

// Export Tailwind CSS Config
copyTailwindBtn.addEventListener("click", () => {
  const s = currentActiveSpec;
  const colorsObj = {};
  s.colors.forEach((c, i) => {
    const key = `accent-${i + 1}`;
    colorsObj[key] = c;
  });
  const tailwindSnippet = `module.exports = {\n  theme: {\n    extend: {\n      colors: ${JSON.stringify(colorsObj, null, 8)}\n    }\n  }\n};`;
  copyToClipboard(tailwindSnippet);
});

// ==========================================================================
// 11. WORKSPACE MANDIRI (PERSISTENT VAULT)
// ==========================================================================
const customPalettesContainer = document.getElementById("custom-palettes-container");
const createPaletteForm = document.getElementById("create-palette-form");
const btnRandomizeCustom = document.getElementById("btn-randomize-custom");
const clearAllCustomBtn = document.getElementById("clear-all-custom-btn");
const exportAllDataBtn = document.getElementById("export-all-data-btn");

function renderCustomVault() {
  const vault = getCustomVault();

  if (vault.length === 0) {
    customPalettesContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: #ffffff; border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm); color: #64748b;">
        <p style="font-weight: 700;">Database workspace mandiri kosong.</p>
        <p style="font-size: 0.8125rem; margin-top: 0.25rem;">Gunakan formulir di atas untuk merumuskan palet mandiri atau simpan dari kalkulator roda HSL.</p>
      </div>
    `;
    return;
  }

  customPalettesContainer.innerHTML = vault.map(spec => {
    const roles = spec.roles || ["Aksen", "Utama", "Plafon", "Kusen", "Detail"];

    const swatchesHtml = spec.colors.map((color, idx) => `
      <div class="swatch-column" style="background-color: ${color}" data-color="${color}" title="Klik salin ${color}">
        <span class="swatch-tag-role">${roles[idx]}</span>
        <span class="hex-tag">${color}</span>
      </div>
    `).join("");

    const microTableHtml = spec.colors.map(color => {
      const rgb = hexToRgb(color);
      const lrv = calculateLrv(rgb.r, rgb.g, rgb.b);
      return `
        <div class="colorimetry-col" data-color="${color}" title="Salin ${color}">
          <span class="colorimetry-swatch-box" style="background-color: ${color};"></span>
          <span class="colorimetry-hex">${color}</span>
          <span class="colorimetry-lrv">LRV ${lrv}%</span>
        </div>
      `;
    }).join("");

    // 60-30-10 Proportional Ratio Bar
    const mainCol = spec.colors[1] || spec.colors[0];
    const accentCol = spec.colors[0];
    const ceilingCol = spec.colors[2] || "#FFFFFF";
    const ratioBarHtml = `
      <div class="palette-ratio-bar" title="Proporsi Arsitektur: 60% Utama, 30% Aksen, 10% Plafon/Lis">
        <div class="ratio-segment ratio-60" style="background-color: ${mainCol};" data-color="${mainCol}" title="Dinding Utama 60%: ${mainCol}">
          <span class="ratio-label">60% UTAMA</span>
        </div>
        <div class="ratio-segment ratio-30" style="background-color: ${accentCol};" data-color="${accentCol}" title="Dinding Aksen 30%: ${accentCol}">
          <span class="ratio-label">30% AKSEN</span>
        </div>
        <div class="ratio-segment ratio-10" style="background-color: ${ceilingCol};" data-color="${ceilingCol}" title="Plafon/Lis 10%: ${ceilingCol}">
          <span class="ratio-label">10%</span>
        </div>
      </div>
    `;

    return `
      <div class="palette-spec-card">
        <div class="swatches-header-strip">
          ${swatchesHtml}
        </div>
        ${ratioBarHtml}
        <div class="palette-spec-body">
          <div class="spec-card-head">
            <h3 class="spec-name">${spec.name}</h3>
            <span class="spec-zone-badge">${spec.category}</span>
          </div>
          <p class="spec-description">${spec.desc || 'Spesifikasi kustom workspace mandiri.'}</p>
          <div class="colorimetry-table">
            ${microTableHtml}
          </div>
          <div class="spec-card-actions">
            <button class="btn btn-primary" data-apply-vault="${spec.id}">
              Terapkan ke Elevasi
            </button>
            <button class="btn btn-outline" data-copy-json-vault="${spec.id}">
              Salin JSON
            </button>
            <button class="text-action-link" style="color: var(--color-danger);" data-del-vault="${spec.id}">
              Hapus Arsip
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  customPalettesContainer.querySelectorAll(".swatch-column, .colorimetry-col, .ratio-segment").forEach(el => {
    el.addEventListener("click", () => {
      const color = el.getAttribute("data-color");
      if (color) copyToClipboard(color, el);
    });
  });

  customPalettesContainer.querySelectorAll("[data-copy-json-vault]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-copy-json-vault");
      const target = getCustomVault().find(p => p.id === id);
      if (target) copyToClipboard(JSON.stringify(target.colors), btn);
    });
  });

  customPalettesContainer.querySelectorAll("[data-apply-vault]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-apply-vault");
      const target = getCustomVault().find(p => p.id === id);
      if (target) {
        switchTab("tab-studio");
        applyToElevationStudio(target);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  customPalettesContainer.querySelectorAll("[data-del-vault]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-del-vault");
      const filtered = getCustomVault().filter(p => p.id !== id);
      saveCustomVault(filtered);
      showToast("Arsip formulasi dihapus.");
    });
  });
}

// Sinkronisasi Input Color Picker Form
for (let i = 1; i <= 5; i++) {
  const pInput = document.getElementById(`c-color-${i}`);
  const hInput = document.getElementById(`c-hex-${i}`);
  if (pInput && hInput) {
    pInput.addEventListener("input", (e) => {
      hInput.value = e.target.value.toUpperCase();
    });
    hInput.addEventListener("input", (e) => {
      let val = e.target.value.trim();
      if (!val.startsWith("#")) val = "#" + val;
      if (/^#[0-9A-Fa-f]{6}$/.test(val)) pInput.value = val;
    });
  }
}

btnRandomizeCustom.addEventListener("click", () => {
  for (let i = 1; i <= 5; i++) {
    const col = getRandomHex();
    document.getElementById(`c-color-${i}`).value = col;
    document.getElementById(`c-hex-${i}`).value = col;
  }
  showToast("Spektrum acak ter-generate");
});

createPaletteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("custom-name").value.trim();
  const category = document.getElementById("custom-category").value;
  const desc = document.getElementById("custom-desc").value.trim();

  const colors = [];
  for (let i = 1; i <= 5; i++) {
    colors.push(document.getElementById(`c-hex-${i}`).value.trim().toUpperCase());
  }

  const newEntry = {
    id: "spec-vault-" + Date.now(),
    name: name,
    category: category,
    categoryName: category,
    desc: desc || `Formulasi arsitektural untuk zonasi ${category}.`,
    colors: colors,
    roles: ["Aksen (30%)", "Dinding Utama (60%)", "Plafon/Lis (10%)", "Kusen", "Detail"],
    finishing: ["Matte", "Eggshell", "Flat White", "Semi-Gloss", "Satin"],
    resin: ["Pure Acrylic", "Vinyl Acrylic", "Acrylic Emulsion", "Polyurethane", "Enamel"]
  };

  const vault = getCustomVault();
  vault.unshift(newEntry);
  saveCustomVault(vault);
  createPaletteForm.reset();
  showToast(`Formula "${name}" disimpan`);
});

clearAllCustomBtn.addEventListener("click", () => {
  if (confirm("Konfirmasi: Kosongkan seluruh database workspace mandiri?")) {
    saveCustomVault([]);
    showToast("Seluruh database lokal dikosongkan.");
  }
});

exportAllDataBtn.addEventListener("click", () => {
  const dump = {
    schemaVersion: "3.4.0",
    engine: "Color Specifier Enterprise",
    exportedTimestamp: new Date().toISOString(),
    specifications: getCustomVault()
  };
  const blob = new Blob([JSON.stringify(dump, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `color-spec-vault-${Date.now()}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("Schema JSON berhasil diekspor.");
});

// ==========================================================================
// 12. KALKULATOR RODA HSL & WCAG 2.2
// ==========================================================================
const baseColorPicker = document.getElementById("base-color-picker");
const baseColorHex = document.getElementById("base-color-hex");
const sampleWhite = document.getElementById("sample-white");
const sampleBlack = document.getElementById("sample-black");
const stripComplementary = document.getElementById("strip-complementary");
const stripAnalogous = document.getElementById("strip-analogous");
const stripTriadic = document.getElementById("strip-triadic");
const stripMonochrome = document.getElementById("strip-monochrome");
const saveCurrentHarmonyBtn = document.getElementById("save-current-harmony-btn");

const mockBadge = document.getElementById("mock-badge");
const mockBtnPrimary = document.getElementById("mock-btn-primary");
const mockBtnSecondary = document.getElementById("mock-btn-secondary");
const mockHeading = document.getElementById("mock-heading");
const mockBadgeDark = document.getElementById("mock-badge-dark");
const mockBtnDarkPrimary = document.getElementById("mock-btn-dark-primary");

function calculateMathematicalHarmonies(hex) {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  return {
    base: hex.toUpperCase(),
    complementary: [
      hex.toUpperCase(),
      hslToHex(hsl.h, Math.max(10, hsl.s - 25), Math.min(90, hsl.l + 20)),
      hslToHex(hsl.h + 180, hsl.s, hsl.l),
      hslToHex(hsl.h + 180, Math.min(100, hsl.s + 15), Math.max(20, hsl.l - 15))
    ],
    analogous: [
      hslToHex(hsl.h - 40, hsl.s, hsl.l),
      hslToHex(hsl.h - 20, hsl.s, hsl.l),
      hex.toUpperCase(),
      hslToHex(hsl.h + 20, hsl.s, hsl.l),
      hslToHex(hsl.h + 40, hsl.s, hsl.l)
    ],
    triadic: [
      hex.toUpperCase(),
      hslToHex(hsl.h + 120, hsl.s, hsl.l),
      hslToHex(hsl.h + 240, hsl.s, hsl.l)
    ],
    monochromatic: [
      hslToHex(hsl.h, hsl.s, 18),
      hslToHex(hsl.h, hsl.s, 38),
      hex.toUpperCase(),
      hslToHex(hsl.h, Math.max(15, hsl.s - 20), 75),
      hslToHex(hsl.h, Math.max(10, hsl.s - 40), 92)
    ]
  };
}

function renderSwatchStripElement(container, colorList) {
  container.innerHTML = "";
  colorList.forEach(color => {
    const item = document.createElement("div");
    item.className = "swatch-item";
    item.style.backgroundColor = color;
    item.title = `Klik salin ${color}`;

    const codeSpan = document.createElement("span");
    codeSpan.className = "swatch-code";
    codeSpan.textContent = color;
    item.appendChild(codeSpan);

    item.addEventListener("click", () => copyToClipboard(color, item));
    container.appendChild(item);
  });
}

function renderSvgPolarColorWheel(hex) {
  const wheelSvg = document.getElementById("hsl-polar-wheel-svg");
  const spectrumRing = document.getElementById("wheel-spectrum-ring");
  const geometryVectors = document.getElementById("wheel-geometry-vectors");
  const markerNodes = document.getElementById("wheel-marker-nodes");
  const centerText = document.getElementById("wheel-center-hue-text");
  const legendMetrics = document.getElementById("wheel-legend-metrics");
  if (!wheelSvg || !spectrumRing || !geometryVectors || !markerNodes) return;

  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const baseHue = hsl.h;
  const radius = 130;
  const cx = 160;
  const cy = 160;

  // 1. Gambar Ring Spektrum Annular (36 Segmen)
  if (spectrumRing.children.length === 0) {
    const totalSegments = 36;
    const step = 360 / totalSegments;
    let ringMarkup = "";
    for (let i = 0; i < totalSegments; i++) {
      const startAngle = i * step;
      const endAngle = (i + 1) * step;
      const midAngle = (startAngle + endAngle) / 2;
      const segColor = hslToHex(midAngle, 90, 52);

      const rad1 = (startAngle - 90) * (Math.PI / 180);
      const rad2 = (endAngle - 90) * (Math.PI / 180);

      const rOuter = 145;
      const rInner = 120;

      const x1 = cx + rOuter * Math.cos(rad1);
      const y1 = cy + rOuter * Math.sin(rad1);
      const x2 = cx + rOuter * Math.cos(rad2);
      const y2 = cy + rOuter * Math.sin(rad2);
      const x3 = cx + rInner * Math.cos(rad2);
      const y3 = cy + rInner * Math.sin(rad2);
      const x4 = cx + rInner * Math.cos(rad1);
      const y4 = cy + rInner * Math.sin(rad1);

      ringMarkup += `<path d="M ${x1} ${y1} A ${rOuter} ${rOuter} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${rInner} ${rInner} 0 0 0 ${x4} ${y4} Z" fill="${segColor}" stroke="none" />`;
    }
    spectrumRing.innerHTML = ringMarkup;
  }

  // Polar Coordinate Calculator
  const polarCoord = (angle, r = radius) => {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  };

  const compHue = (baseHue + 180) % 360;
  const triad1Hue = (baseHue + 120) % 360;
  const triad2Hue = (baseHue + 240) % 360;
  const ana1Hue = (baseHue - 30 + 360) % 360;
  const ana2Hue = (baseHue + 30) % 360;

  const basePt = polarCoord(baseHue);
  const compPt = polarCoord(compHue);
  const triad1Pt = polarCoord(triad1Hue);
  const triad2Pt = polarCoord(triad2Hue);

  // 2. Garis Vektor Geometri Harmoni (Polygon & Chords)
  geometryVectors.innerHTML = `
    <!-- Triad Equilateral Polygon -->
    <polygon points="${basePt.x},${basePt.y} ${triad1Pt.x},${triad1Pt.y} ${triad2Pt.x},${triad2Pt.y}"
      fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,4" />
    <!-- Complementary Chord Line -->
    <line x1="${basePt.x}" y1="${basePt.y}" x2="${compPt.x}" y2="${compPt.y}"
      stroke="#ef4444" stroke-width="1.8" stroke-dasharray="2,2" />
    <!-- Center Ray to Base -->
    <line x1="${cx}" y1="${cy}" x2="${basePt.x}" y2="${basePt.y}"
      stroke="#0f172a" stroke-width="2" />
  `;

  // 3. Titik Node Interaktif Roda
  const nodes = [
    { hue: baseHue, col: hex, label: "BASE", isBase: true },
    { hue: compHue, col: hslToHex(compHue, hsl.s, hsl.l), label: "180°", isBase: false },
    { hue: triad1Hue, col: hslToHex(triad1Hue, hsl.s, hsl.l), label: "+120°", isBase: false },
    { hue: triad2Hue, col: hslToHex(triad2Hue, hsl.s, hsl.l), label: "-120°", isBase: false },
    { hue: ana1Hue, col: hslToHex(ana1Hue, hsl.s, hsl.l), label: "-30°", isBase: false, r: 95 },
    { hue: ana2Hue, col: hslToHex(ana2Hue, hsl.s, hsl.l), label: "+30°", isBase: false, r: 95 }
  ];

  markerNodes.innerHTML = nodes.map(n => {
    const pt = polarCoord(n.hue, n.r || radius);
    const nodeR = n.isBase ? 10 : 7;
    return `
      <g class="wheel-node-group" filter="url(#node-glow)">
        <circle cx="${pt.x}" cy="${pt.y}" r="${nodeR + 3}" fill="#ffffff" stroke="#0f172a" stroke-width="1.5" />
        <circle cx="${pt.x}" cy="${pt.y}" r="${nodeR}" fill="${n.col}" />
        <text x="${pt.x}" y="${pt.y + (n.isBase ? -14 : 16)}" text-anchor="middle" font-size="8" font-family="ui-monospace, monospace" font-weight="700" fill="#0f172a">${n.label}</text>
      </g>
    `;
  }).join("");

  if (centerText) {
    centerText.textContent = `${baseHue}°`;
  }

  // 4. Panel Ringkasan Metrik Vektor
  if (legendMetrics) {
    legendMetrics.innerHTML = `
      <div class="legend-metric-chip">
        <span class="metric-chip-label">Base Hue</span>
        <span class="metric-chip-val">${baseHue}° [${hex}]</span>
      </div>
      <div class="legend-metric-chip">
        <span class="metric-chip-label">Komplementer</span>
        <span class="metric-chip-val">${compHue}°</span>
      </div>
      <div class="legend-metric-chip">
        <span class="metric-chip-label">Sumbu Triadik</span>
        <span class="metric-chip-val">${triad1Hue}° / ${triad2Hue}°</span>
      </div>
      <div class="legend-metric-chip">
        <span class="metric-chip-label">Delta Analog</span>
        <span class="metric-chip-val">${ana1Hue}° & ${ana2Hue}°</span>
      </div>
    `;
  }
}

function refreshHslCalculations(hex) {
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return;

  const harmonies = calculateMathematicalHarmonies(hex);
  renderSwatchStripElement(stripComplementary, harmonies.complementary);
  renderSwatchStripElement(stripAnalogous, harmonies.analogous);
  renderSwatchStripElement(stripTriadic, harmonies.triadic);
  renderSwatchStripElement(stripMonochrome, harmonies.monochromatic);

  // Update Roda Warna Polar SVG
  renderSvgPolarColorWheel(hex);

  // Evaluasi Kontras WCAG 2.2
  const rgb = hexToRgb(hex);
  const bgLum = getLuminance(rgb.r, rgb.g, rgb.b);
  const whiteRatio = getContrastRatio(1.0, bgLum).toFixed(2);
  const blackRatio = getContrastRatio(bgLum, 0.0).toFixed(2);

  const evaluateCompliance = (ratio) => {
    const r = parseFloat(ratio);
    if (r >= 7.0) return "AAA PASS";
    if (r >= 4.5) return "AA PASS";
    return "FAIL";
  };

  sampleWhite.style.backgroundColor = hex;
  sampleWhite.style.color = "#ffffff";
  sampleWhite.textContent = `Teks Putih: ${whiteRatio}:1 [${evaluateCompliance(whiteRatio)}]`;

  sampleBlack.style.backgroundColor = hex;
  sampleBlack.style.color = "#000000";
  sampleBlack.textContent = `Teks Hitam: ${blackRatio}:1 [${evaluateCompliance(blackRatio)}]`;

  // Update UI Digital Mockup
  mockBadge.style.backgroundColor = harmonies.monochromatic[4];
  mockBadge.style.color = hex;
  mockHeading.style.color = hex;
  mockBtnPrimary.style.backgroundColor = hex;
  mockBtnPrimary.style.color = parseFloat(whiteRatio) >= 4.5 ? "#ffffff" : "#0f172a";
  mockBtnSecondary.style.borderColor = hex;
  mockBtnSecondary.style.color = hex;

  mockBadgeDark.style.backgroundColor = hex;
  mockBadgeDark.style.color = parseFloat(whiteRatio) >= 4.5 ? "#ffffff" : "#0f172a";
  mockBtnDarkPrimary.style.backgroundColor = hex;
  mockBtnDarkPrimary.style.color = parseFloat(whiteRatio) >= 4.5 ? "#ffffff" : "#0f172a";
}

// Click & Drag pada Roda Warna SVG
const wheelSvgElement = document.getElementById("hsl-polar-wheel-svg");
if (wheelSvgElement) {
  const updateHueFromWheel = (e) => {
    const rect = wheelSvgElement.getBoundingClientRect();
    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0].clientX);
    const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0].clientY);
    if (clientX === undefined || clientY === undefined) return;

    const clickX = clientX - rect.left - rect.width / 2;
    const clickY = clientY - rect.top - rect.height / 2;

    let rad = Math.atan2(clickY, clickX);
    let deg = Math.round(rad * (180 / Math.PI)) + 90;
    if (deg < 0) deg += 360;
    deg = deg % 360;

    const rgb = hexToRgb(baseColorPicker.value);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const newHex = hslToHex(deg, Math.max(35, hsl.s), hsl.l);

    baseColorPicker.value = newHex;
    baseColorHex.value = newHex.toUpperCase();
    refreshHslCalculations(newHex);
  };

  let isWheelDragging = false;
  wheelSvgElement.addEventListener("pointerdown", (e) => {
    isWheelDragging = true;
    updateHueFromWheel(e);
  });
  window.addEventListener("pointermove", (e) => {
    if (isWheelDragging) updateHueFromWheel(e);
  });
  window.addEventListener("pointerup", () => {
    isWheelDragging = false;
  });
}

baseColorPicker.addEventListener("input", (e) => {
  const val = e.target.value.toUpperCase();
  baseColorHex.value = val;
  refreshHslCalculations(val);
});

baseColorHex.addEventListener("input", (e) => {
  let val = e.target.value.trim();
  if (!val.startsWith("#")) val = "#" + val;
  if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
    baseColorPicker.value = val;
    refreshHslCalculations(val.toUpperCase());
  }
});

saveCurrentHarmonyBtn.addEventListener("click", () => {
  const currentHex = baseColorHex.value;
  const harmonies = calculateMathematicalHarmonies(currentHex);

  const entry = {
    id: "spec-harmony-" + Date.now(),
    name: `Harmoni Sumbu ${currentHex}`,
    category: "Harmoni Roda HSL",
    categoryName: "Harmoni",
    desc: `Formulasi roda warna trigonometris dari titik acuan ${currentHex}.`,
    colors: [
      currentHex,
      harmonies.complementary[2],
      harmonies.analogous[0],
      harmonies.triadic[1],
      harmonies.monochromatic[3]
    ],
    roles: ["Acuan (30%)", "Komplementer (60%)", "Plafon/Lis (10%)", "Analog", "Monokromatik"],
    finishing: ["Matte", "Eggshell", "Flat White", "Semi-Gloss", "Satin"],
    resin: ["Pure Acrylic", "Vinyl Acrylic", "Acrylic Emulsion", "Polyurethane", "Enamel"]
  };

  const vault = getCustomVault();
  vault.unshift(entry);
  saveCustomVault(vault);
  showToast(`Harmoni ${currentHex} diarsipkan ke Workspace`);
});

// ==========================================================================
// 13. SISTEM ROUTING TAB NAVIGASI
// ==========================================================================
const navItems = document.querySelectorAll(".nav-item");
const workspacePanes = document.querySelectorAll(".workspace-pane");

function switchTab(targetId) {
  navItems.forEach(t => {
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
    }, 50);
  }
}

navItems.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-tab");
    switchTab(target);
  });
});

// ==========================================================================
// ==========================================================================
// 14. GENERATOR LATAR ABSTRAK ARSITEKTURAL (ABSTRACT GENERATIVE ART)
// ==========================================================================
const ABSTRACT_THEMES = [
  {
    id: "obsidian-gold",
    name: "Obsidian & Amber Gold",
    base: "#090d16",
    colors: ["#b45309", "#78350f", "#451a03", "#d97706", "#1e293b", "#0f172a"]
  },
  {
    id: "emerald-velvet",
    name: "Emerald Velvet & Forest Mist",
    base: "#022c22",
    colors: ["#047857", "#065f46", "#0f766e", "#10b981", "#0f172a", "#134e4a"]
  },
  {
    id: "nordic-twilight",
    name: "Nordic Twilight & Ice Berg",
    base: "#0b1329",
    colors: ["#1d4ed8", "#0369a1", "#0284c7", "#312e81", "#1e293b", "#0f172a"]
  },
  {
    id: "terracotta-bauhaus",
    name: "Terracotta Bauhaus & Raw Clay",
    base: "#181412",
    colors: ["#9a3412", "#c2410c", "#7c2d12", "#78350f", "#27272a", "#3f3f46"]
  },
  {
    id: "cyber-amethyst",
    name: "Cyber Amethyst & Royal Quartz",
    base: "#0b0716",
    colors: ["#581c87", "#701a75", "#4c1d95", "#0e7490", "#1e1b4b", "#090d16"]
  },
  {
    id: "titanium-monochrome",
    name: "Titanium Architect Monochrome",
    base: "#090d16",
    colors: ["#334155", "#475569", "#64748b", "#1e293b", "#0f172a", "#18181b"]
  },
  {
    id: "deep-abyssal",
    name: "Deep Abyssal Bioluminescence",
    base: "#030712",
    colors: ["#0891b2", "#0f766e", "#1e3a8a", "#059669", "#111827", "#0284c7"]
  },
  {
    id: "dusk-crimson",
    name: "Dusk Crimson & Warm Concrete",
    base: "#0f0e17",
    colors: ["#831843", "#4c1d95", "#9f1239", "#3f3f46", "#1e1b4b", "#18181b"]
  }
];

let currentAbstractThemeIndex = 0;
let activeAbstractStyle = "fluid"; // fluid | topography | prism | bauhaus
let activeAbstractIntensity = "deep"; // deep | balanced | vivid
let activeAbstractThemeObj = ABSTRACT_THEMES[0];

function generateDynamicSalur(theme = null) {
  generateDynamicAbstract(theme);
}

function generateDynamicAbstract(theme = null) {
  if (theme) {
    activeAbstractThemeObj = theme;
  } else {
    currentAbstractThemeIndex = (currentAbstractThemeIndex + 1) % ABSTRACT_THEMES.length;
    activeAbstractThemeObj = ABSTRACT_THEMES[currentAbstractThemeIndex];
  }

  reapplyCurrentAbstractBackground();
  showToast(`Komposisi Abstrak: ${activeAbstractThemeObj.name}`);
}

function reapplyCurrentAbstractBackground() {
  const cols = activeAbstractThemeObj.colors;
  const base = activeAbstractThemeObj.base || "#090d16";
  let meshGradient = "";

  if (activeAbstractStyle === "topography") {
    meshGradient = `repeating-radial-gradient(circle at 22% 28%, ${cols[0]} 0px, transparent 18px, ${cols[1]} 24px, transparent 44px), repeating-radial-gradient(circle at 78% 72%, ${cols[2] || cols[0]} 0px, transparent 24px, ${cols[3] || cols[1]} 32px, transparent 58px), radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.7) 0%, transparent 80%)`;
  } else if (activeAbstractStyle === "prism") {
    meshGradient = `linear-gradient(135deg, ${cols[0]} 0%, transparent 50%), linear-gradient(225deg, ${cols[1]} 0%, transparent 55%), linear-gradient(315deg, ${cols[2]} 0%, transparent 50%), radial-gradient(circle at 50% 30%, ${cols[3] || cols[0]} 0%, transparent 65%)`;
  } else if (activeAbstractStyle === "bauhaus") {
    meshGradient = `linear-gradient(90deg, ${cols[0]} 0%, transparent 40%), linear-gradient(0deg, ${cols[1]} 0%, transparent 45%), radial-gradient(circle at 80% 20%, ${cols[2]} 0%, transparent 55%), linear-gradient(135deg, ${cols[3] || cols[0]} 0%, transparent 50%)`;
  } else {
    // Default: Fluid Organic Mesh Gradient
    meshGradient = `radial-gradient(circle at 18% 22%, ${cols[0]} 0%, transparent 55%), radial-gradient(circle at 82% 16%, ${cols[1]} 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.6) 0%, transparent 70%), radial-gradient(circle at 15% 82%, ${cols[2]} 0%, transparent 55%), radial-gradient(circle at 85% 85%, ${cols[3] || cols[0]} 0%, transparent 60%), radial-gradient(circle at 50% 10%, ${cols[4] || cols[1]} 0%, transparent 50%)`;
  }

  document.documentElement.style.setProperty('--bg-abstract-mesh', meshGradient);
  document.documentElement.style.setProperty('--bg-base-color', base);
  document.body.style.backgroundColor = base;

  // Update Ribbon Header
  const ribbonEl = document.querySelector('.chromatic-spectrum-ribbon');
  if (ribbonEl) {
    ribbonEl.style.background = `linear-gradient(90deg, ${cols.slice(0, 4).join(', ')})`;
  }
}

function generateRandomAlgorithmicSalur() {
  generateRandomAlgorithmicAbstract();
}

function generateRandomAlgorithmicAbstract() {
  // Generate 5 harmonic architectural colors using golden ratio hue progression
  const goldenRatioConjugate = 0.618033988749895;
  let startHue = Math.floor(Math.random() * 360);
  const colors = [];

  for (let i = 0; i < 5; i++) {
    startHue = (startHue + goldenRatioConjugate * 360) % 360;
    const sat = 65 + Math.floor(Math.random() * 25);
    const lum = 32 + Math.floor(Math.random() * 20);
    colors.push(hslToHex(startHue, sat, lum));
  }

  const customTheme = {
    id: `custom-abstract-${Date.now()}`,
    name: `Algoritmik Abstrak #${Math.floor(1000 + Math.random() * 9000)}`,
    base: "#090d16",
    colors: colors
  };

  generateDynamicAbstract(customTheme);
}

// Stripe / Abstract Studio Drawer Toggle & Controls
const toggleStripePanelBtn = document.getElementById("toggle-stripe-panel-btn");
const stripeStudioDrawer = document.getElementById("stripe-studio-drawer");
const stripeThemeChips = document.getElementById("stripe-theme-chips");
const stripeRandomAlgoBtn = document.getElementById("stripe-random-algo-btn");
const generateBgStripeBtn = document.getElementById("generate-bg-stripe-btn");

if (toggleStripePanelBtn && stripeStudioDrawer) {
  toggleStripePanelBtn.addEventListener("click", () => {
    const isOpen = stripeStudioDrawer.classList.toggle("open");
    toggleStripePanelBtn.classList.toggle("active", isOpen);
  });
}

function initStripeStudioControls() {
  if (!stripeThemeChips) return;

  // Render Theme Chips
  stripeThemeChips.innerHTML = ABSTRACT_THEMES.map((th, idx) => `
    <button class="stripe-theme-btn ${idx === currentAbstractThemeIndex ? 'active' : ''}" data-theme-idx="${idx}" title="${th.name}">
      <span class="theme-swatch-pip" style="background: radial-gradient(circle, ${th.colors[0]}, ${th.colors[1]});"></span>
      <span>${th.name}</span>
    </button>
  `).join("");

  stripeThemeChips.querySelectorAll(".stripe-theme-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-theme-idx"), 10);
      currentAbstractThemeIndex = idx;
      stripeThemeChips.querySelectorAll(".stripe-theme-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      generateDynamicAbstract(ABSTRACT_THEMES[idx]);
    });
  });

  // Abstract Style Controls
  const styleBtns = document.querySelectorAll("#abstract-style-controls .pill-mini");
  styleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      styleBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeAbstractStyle = btn.getAttribute("data-style") || "fluid";
      reapplyCurrentAbstractBackground();
      showToast(`Komposisi Seni: ${btn.textContent.trim()}`);
    });
  });

  // Intensity Controls
  const intensityBtns = document.querySelectorAll("#stripe-intensity-controls .pill-mini");
  intensityBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      intensityBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mode = btn.getAttribute("data-intensity");
      activeAbstractIntensity = mode;

      let overlayVal = "radial-gradient(ellipse 85% 65% at 50% 20%, rgba(15, 23, 42, 0.22) 0%, rgba(9, 13, 22, 0.78) 100%)";
      if (mode === "deep") {
        overlayVal = "radial-gradient(ellipse 90% 70% at 50% 15%, rgba(15, 23, 42, 0.42) 0%, rgba(9, 13, 22, 0.88) 100%)";
      } else if (mode === "vivid") {
        overlayVal = "radial-gradient(ellipse 80% 60% at 50% 25%, rgba(15, 23, 42, 0.08) 0%, rgba(9, 13, 22, 0.55) 100%)";
      }
      document.documentElement.style.setProperty("--bg-abstract-overlay", overlayVal);
      showToast(`Intensitas Latar: ${btn.textContent.trim()}`);
    });
  });

  if (stripeRandomAlgoBtn) {
    stripeRandomAlgoBtn.addEventListener("click", () => {
      generateRandomAlgorithmicAbstract();
    });
  }
}

if (generateBgStripeBtn) {
  generateBgStripeBtn.addEventListener("click", () => {
    generateDynamicAbstract();
  });
}

// ==========================================================================
// 15. BOOTSTRAP INISIALISASI SISTEM
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderArchitecturalCatalog();
  const stageEl = document.getElementById("elevation-stage");
  if (typeof Arch3DEngine !== "undefined" && stageEl) {
    Arch3DEngine.init(stageEl);
  }
  if (ARCHITECTURAL_SPECIFICATIONS.length > 0) {
    applyToElevationStudio(ARCHITECTURAL_SPECIFICATIONS[0]);
  }
  initSurfaceInspector();
  initComparisonSelectors();
  updateVaultBadge();
  renderCustomVault();
  refreshHslCalculations(baseColorPicker.value);
  initStripeStudioControls();
  // Generate motif latar abstrak awal
  generateDynamicAbstract(ABSTRACT_THEMES[0]);
});


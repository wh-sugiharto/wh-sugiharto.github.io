/**
 * common.js
 * Modul utilitas umum untuk memuat konfigurasi profil dan menangani navigasi situs.
 */

// Fungsi untuk mengambil data profil dari data/profile.json
async function loadProfile() {
  try {
    const response = await fetch("data/profile.json");
    if (!response.ok) {
      throw new Error("Failed to load profile data.");
    }
    const profile = await response.json();
    populateProfileData(profile);
    return profile;
  } catch (error) {
    console.error("Error loading profile:", error);
    return null;
  }
}

// Mengisi elemen HTML dengan informasi profil yang dimuat
function populateProfileData(profile) {
  if (!profile) return;

  // Memperbarui nama pada tautan brand navigasi
  const brandElements = document.querySelectorAll(".profile-brand-name");
  brandElements.forEach((el) => {
    el.textContent = profile.name;
  });

  // Memperbarui informasi di footer
  const footerName = document.getElementById("footer-name");
  if (footerName) {
    footerName.textContent = profile.name;
  }

  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Menangani avatar foto profil jika tersedia
  const avatarContainer = document.getElementById("profile-avatar-container");
  if (avatarContainer) {
    if (profile.avatarUrl && profile.avatarUrl.trim() !== "") {
      avatarContainer.innerHTML = `
        <img src="${escapeHtml(profile.avatarUrl)}" alt="${escapeHtml(profile.name)}" 
             class="rounded-circle img-thumbnail" style="width: 120px; height: 120px; object-fit: cover;">
      `;
    } else {
      avatarContainer.innerHTML = `
        <div class="bg-secondary-subtle text-secondary rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 110px; height: 110px;">
          <i class="bi bi-person-fill display-4"></i>
        </div>
      `;
    }
  }

  // Memperbarui elemen profil pada halaman indeks jika ada
  const nameEl = document.getElementById("profile-name");
  if (nameEl) nameEl.textContent = profile.name;

  const titleEl = document.getElementById("profile-title");
  if (titleEl) titleEl.textContent = profile.title;

  const institutionEl = document.getElementById("profile-institution");
  if (institutionEl) {
    institutionEl.textContent = `${profile.institution}, ${profile.university}`;
  }

  const bioEl = document.getElementById("profile-bio");
  if (bioEl) bioEl.textContent = profile.bio;

  const locationEl = document.getElementById("profile-location");
  if (locationEl) locationEl.textContent = profile.location;

  // Memperbarui tautan media sosial dan akademik
  setLinkHref("link-github", profile.github);
  setLinkHref("link-scholar", profile.googleScholar);
  setLinkHref("link-orcid", profile.orcid);
  setLinkHref("link-linkedin", profile.linkedin);
  setLinkHref("link-email", profile.email ? `mailto:${profile.email}` : "");
}

// Utilitas pembantu untuk mengatur atribut href
function setLinkHref(elementId, url) {
  const element = document.getElementById(elementId);
  if (element && url) {
    element.href = url;
    element.classList.remove("d-none");
  } else if (element && !url) {
    element.classList.add("d-none");
  }
}

// Menandai tautan menu aktif berdasarkan alamat URL halaman saat ini
function setActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

// Sanitasi karakter khusus teks
function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Menjalankan inisialisasi saat dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  setActiveNavLink();
  loadProfile();
});

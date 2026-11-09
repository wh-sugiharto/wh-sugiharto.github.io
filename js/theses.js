/**
 * theses.js
 * Logika untuk memuat, mencari, memfilter, dan menampilkan data skripsi mahasiswa bimbingan.
 */

let allTheses = [];

// Mengambil data skripsi dari berkas JSON
async function fetchTheses() {
  const container = document.getElementById("theses-list");
  if (!container) return;

  try {
    const response = await fetch("data/theses.json");
    if (!response.ok) {
      throw new Error("Unable to retrieve theses list.");
    }
    allTheses = await response.json();
    populateYearFilterOptions(allTheses);
    renderTheses(allTheses);
    setupThesesFilters();
  } catch (error) {
    console.error("Error loading theses:", error);
    container.innerHTML = `
      <div class="alert alert-warning" role="alert">
        Failed to load thesis data. Please verify <code>data/theses.json</code>.
      </div>
    `;
  }
}

// Menambahkan opsi tahun secara dinamis ke dropdown filter
function populateYearFilterOptions(theses) {
  const yearSelect = document.getElementById("filter-year");
  if (!yearSelect) return;

  const years = Array.from(new Set(theses.map((t) => t.year))).sort((a, b) => b - a);
  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });
}

// Menampilkan kartu proyek skripsi ke dalam kontainer
function renderTheses(theses) {
  const container = document.getElementById("theses-list");
  const countEl = document.getElementById("theses-count");
  if (!container) return;

  if (countEl) {
    countEl.textContent = `${theses.length} project${theses.length === 1 ? "" : "s"} listed`;
  }

  if (theses.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 text-muted">
        <p class="mb-0">No thesis projects match your selection.</p>
      </div>
    `;
    return;
  }

  const html = theses
    .map((thesis) => {
      // Menyiapkan lencana topik
      const topicsHtml = (thesis.topics || [])
        .map((t) => `<span class="badge topic-badge me-1 mb-1">${escapeHtml(t)}</span>`)
        .join("");

      // Status proyek skripsi
      const isCompleted = thesis.status === "Completed";
      const statusBadge = isCompleted
        ? `<span class="badge bg-success-subtle text-success border border-success-subtle">Completed</span>`
        : `<span class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle">In Progress</span>`;

      // Tombol tautan repositori mahasiswa
      const repoButton = thesis.repoUrl
        ? `<a href="${escapeHtml(thesis.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark">
             <i class="bi bi-github me-1"></i> Student Repository
           </a>`
        : "";

      // Tombol live demo atau artefak jika tersedia
      const demoButton = thesis.demoUrl
        ? `<a href="${escapeHtml(thesis.demoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary ms-2">
             <i class="bi bi-box-arrow-up-right me-1"></i> Live Demo
           </a>`
        : "";

      return `
        <div class="card item-card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
              <div>
                <h6 class="mb-1 fw-bold text-dark">${escapeHtml(thesis.title)}</h6>
                <div class="text-muted small">
                  <strong>Student:</strong> ${escapeHtml(thesis.studentName)} 
                  ${thesis.studentId ? `(${escapeHtml(thesis.studentId)})` : ""} 
                  &bull; <strong>Year:</strong> ${escapeHtml(thesis.year)}
                </div>
              </div>
              <div>${statusBadge}</div>
            </div>
            <p class="card-text text-secondary small mb-3">${escapeHtml(thesis.abstract)}</p>
            <div class="mb-3">${topicsHtml}</div>
            <div class="d-flex align-items-center">
              ${repoButton}
              ${demoButton}
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = html;
}

// Menyiapkan pencarian dan filter status atau tahun
function setupThesesFilters() {
  const searchInput = document.getElementById("search-theses");
  const yearFilter = document.getElementById("filter-year");
  const statusFilter = document.getElementById("filter-status");

  function applyFilter() {
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const selectedYear = yearFilter ? yearFilter.value : "all";
    const selectedStatus = statusFilter ? statusFilter.value : "all";

    const filtered = allTheses.filter((thesis) => {
      const matchQuery =
        thesis.title.toLowerCase().includes(query) ||
        thesis.studentName.toLowerCase().includes(query) ||
        (thesis.abstract && thesis.abstract.toLowerCase().includes(query)) ||
        (thesis.topics || []).some((topic) => topic.toLowerCase().includes(query));

      const matchYear = selectedYear === "all" || String(thesis.year) === selectedYear;
      const matchStatus =
        selectedStatus === "all" ||
        (thesis.status && thesis.status.toLowerCase() === selectedStatus.toLowerCase());

      return matchQuery && matchYear && matchStatus;
    });

    renderTheses(filtered);
  }

  if (searchInput) searchInput.addEventListener("input", applyFilter);
  if (yearFilter) yearFilter.addEventListener("change", applyFilter);
  if (statusFilter) statusFilter.addEventListener("change", applyFilter);
}

// Utilitas sanitasi input string
function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", fetchTheses);

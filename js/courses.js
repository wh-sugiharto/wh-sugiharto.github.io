/**
 * courses.js
 * Logika untuk memuat, mencari, memfilter, dan menampilkan daftar mata kuliah.
 */

let allCourses = [];

// Mengambil data perkuliahan dari berkas JSON
async function fetchCourses() {
  const container = document.getElementById("courses-list");
  if (!container) return;

  try {
    const response = await fetch("data/courses.json");
    if (!response.ok) {
      throw new Error("Unable to retrieve course list.");
    }
    allCourses = await response.json();
    renderCourses(allCourses);
    setupCourseFilters();
  } catch (error) {
    console.error("Error loading courses:", error);
    container.innerHTML = `
      <div class="alert alert-warning" role="alert">
        Failed to load course data. Please ensure <code>data/courses.json</code> is accessible.
      </div>
    `;
  }
}

// Menampilkan kartu mata kuliah ke dalam antarmuka
function renderCourses(courses) {
  const container = document.getElementById("courses-list");
  const countEl = document.getElementById("course-count");
  if (!container) return;

  if (countEl) {
    countEl.textContent = `${courses.length} course${courses.length === 1 ? "" : "s"} found`;
  }

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 text-muted">
        <p class="mb-0">No courses match the specified criteria.</p>
      </div>
    `;
    return;
  }

  const html = courses
    .map((course) => {
      // Menyiapkan lencana topik
      const topicsHtml = (course.topics || [])
        .map((t) => `<span class="badge topic-badge me-1 mb-1">${escapeHtml(t)}</span>`)
        .join("");

      // Tombol tautan repositori materi perkuliahan
      const repoButton = course.repoUrl
        ? `<a href="${escapeHtml(course.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark me-2 mb-1">
             <i class="bi bi-github me-1"></i> Course Materials (${escapeHtml(course.code)})
           </a>`
        : "";

      // Tombol repositori induk bersama jika ada
      const mainRepoButton = course.mainRepoUrl
        ? `<a href="${escapeHtml(course.mainRepoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary me-2 mb-1">
             <i class="bi bi-folder2-open me-1"></i> Main Repository (emb_sys_umk)
           </a>`
        : "";

      // Tombol tautan silabus perkuliahan jika ada
      const syllabusButton = course.syllabusUrl
        ? `<a href="${escapeHtml(course.syllabusUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-secondary mb-1">
             <i class="bi bi-file-earmark-text me-1"></i> Syllabus
           </a>`
        : "";

      // Status mata kuliah aktif atau arsip
      const statusClass = course.status === "Active" ? "bg-success" : "bg-secondary";
      const creditsBadge = course.credits ? `<span class="badge bg-info-subtle text-info-emphasis border border-info-subtle me-2">${escapeHtml(course.credits)}</span>` : "";
      const typeBadge = course.type ? `<span class="badge bg-light text-dark border me-2">${escapeHtml(course.type)}</span>` : "";

      return `
        <div class="card item-card mb-3">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
              <div>
                <span class="badge bg-primary text-uppercase me-2">${escapeHtml(course.code)}</span>
                ${creditsBadge}
                ${typeBadge}
                <span class="badge ${statusClass} me-2">${escapeHtml(course.status || "Active")}</span>
                <span class="text-muted small">${escapeHtml(course.term)} (${escapeHtml(course.level)})</span>
              </div>
            </div>
            <h5 class="card-title text-dark mb-2">${escapeHtml(course.title)}</h5>
            <p class="card-text text-secondary mb-3">${escapeHtml(course.description)}</p>
            <div class="mb-3">${topicsHtml}</div>
            <div class="d-flex align-items-center flex-wrap">
              ${repoButton}
              ${mainRepoButton}
              ${syllabusButton}
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = html;
}

// Menyiapkan event listener untuk pencarian dan filter
function setupCourseFilters() {
  const searchInput = document.getElementById("search-courses");
  const statusFilter = document.getElementById("filter-status");

  function applyFilter() {
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const selectedStatus = statusFilter ? statusFilter.value : "all";

    const filtered = allCourses.filter((course) => {
      const matchQuery =
        course.title.toLowerCase().includes(query) ||
        course.code.toLowerCase().includes(query) ||
        (course.type && course.type.toLowerCase().includes(query)) ||
        course.description.toLowerCase().includes(query) ||
        (course.topics || []).some((topic) => topic.toLowerCase().includes(query));

      const matchStatus =
        selectedStatus === "all" ||
        (course.status && course.status.toLowerCase() === selectedStatus.toLowerCase());

      return matchQuery && matchStatus;
    });

    renderCourses(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilter);
  }
  if (statusFilter) {
    statusFilter.addEventListener("change", applyFilter);
  }
}

// Fungsi sanitasi sederhana untuk mencegah injeksi HTML
function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", fetchCourses);


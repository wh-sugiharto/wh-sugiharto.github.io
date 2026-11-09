/**
 * home.js
 * Memuat dan menampilkan ringkasan data terbaru untuk halaman beranda.
 */

async function loadHomeHighlights() {
  await Promise.all([
    loadRecentResearch(),
    loadActiveCourses(),
    loadRecentTheses()
  ]);
}

// Menampilkan publikasi unggulan pada halaman beranda
async function loadRecentResearch() {
  const container = document.getElementById("home-featured-research");
  if (!container) return;

  try {
    const res = await fetch("data/research.json");
    if (!res.ok) return;
    const papers = await res.json();
    const featured = papers.filter((p) => p.featured).slice(0, 2);
    const toShow = featured.length > 0 ? featured : papers.slice(0, 2);

    if (toShow.length === 0) {
      container.innerHTML = `<p class="text-muted small mb-0">No publications available.</p>`;
      return;
    }

    container.innerHTML = toShow
      .map((p) => `
        <div class="card item-card mb-2">
          <div class="card-body p-3">
            <h6 class="fw-bold text-dark mb-1">${escapeHtml(p.title)}</h6>
            <p class="text-muted small mb-1">${escapeHtml((p.authors || []).join(", "))}</p>
            <p class="text-secondary small fst-italic mb-2">${escapeHtml(p.venue)} (${escapeHtml(p.year)})</p>
            <div class="d-flex gap-2">
              ${p.doi ? `<a href="${escapeHtml(p.doi)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary py-0 px-2 small">DOI</a>` : ""}
              ${p.pdfUrl ? `<a href="${escapeHtml(p.pdfUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-danger py-0 px-2 small">PDF</a>` : ""}
              ${p.codeUrl ? `<a href="${escapeHtml(p.codeUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark py-0 px-2 small"><i class="bi bi-github"></i> Code</a>` : ""}
            </div>
          </div>
        </div>
      `)
      .join("");
  } catch (err) {
    console.error("Failed to load featured research:", err);
  }
}

// Menampilkan mata kuliah aktif pada halaman beranda
async function loadActiveCourses() {
  const container = document.getElementById("home-active-courses");
  if (!container) return;

  try {
    const res = await fetch("data/courses.json");
    if (!res.ok) return;
    const courses = await res.json();
    const active = courses.filter((c) => c.status === "Active").slice(0, 2);

    if (active.length === 0) {
      container.innerHTML = `<p class="text-muted small mb-0">No active courses currently.</p>`;
      return;
    }

    container.innerHTML = active
      .map((c) => `
        <div class="card item-card mb-2">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <div>
                <span class="badge bg-primary text-uppercase me-1">${escapeHtml(c.code)}</span>
                ${c.credits ? `<span class="badge bg-info-subtle text-info-emphasis border border-info-subtle me-1">${escapeHtml(c.credits)}</span>` : ""}
                ${c.type ? `<span class="badge bg-light text-dark border">${escapeHtml(c.type)}</span>` : ""}
              </div>
              <span class="text-muted small">${escapeHtml(c.term)}</span>
            </div>
            <h6 class="fw-bold text-dark mb-1">${escapeHtml(c.title)}</h6>
            <p class="text-secondary small mb-2 text-truncate">${escapeHtml(c.description)}</p>
            ${c.repoUrl ? `<a href="${escapeHtml(c.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark py-0 px-2 small"><i class="bi bi-github"></i> Course Materials</a>` : ""}
          </div>
        </div>
      `)
      .join("");
  } catch (err) {
    console.error("Failed to load active courses:", err);
  }
}

// Menampilkan skripsi mahasiswa terbaru pada halaman beranda
async function loadRecentTheses() {
  const container = document.getElementById("home-recent-theses");
  if (!container) return;

  try {
    const res = await fetch("data/theses.json");
    if (!res.ok) return;
    const theses = await res.json();
    const recent = theses.slice(0, 2);

    if (recent.length === 0) {
      container.innerHTML = `<p class="text-muted small mb-0">No thesis records available.</p>`;
      return;
    }

    container.innerHTML = recent
      .map((t) => `
        <div class="card item-card mb-2">
          <div class="card-body p-3">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <span class="text-muted small"><strong>Student:</strong> ${escapeHtml(t.studentName)} (${escapeHtml(t.year)})</span>
              <span class="badge ${t.status === "Completed" ? "bg-success-subtle text-success border border-success-subtle" : "bg-warning-subtle text-warning-emphasis border border-warning-subtle"} small">${escapeHtml(t.status)}</span>
            </div>
            <h6 class="fw-bold text-dark mb-1">${escapeHtml(t.title)}</h6>
            ${t.repoUrl ? `<a href="${escapeHtml(t.repoUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark py-0 px-2 small"><i class="bi bi-github"></i> Student Repository</a>` : ""}
          </div>
        </div>
      `)
      .join("");
  } catch (err) {
    console.error("Failed to load recent theses:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadHomeHighlights);


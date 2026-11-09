/**
 * home.js
 * Memuat dan menampilkan ringkasan data terbaru untuk halaman beranda
 * dengan pendekatan desain editorial tanpa kotak kartu yang padat.
 */

async function loadHomeHighlights() {
  await Promise.all([
    loadRecentResearch(),
    loadActiveCourses(),
    loadRecentTheses()
  ]);
}

// Menampilkan publikasi unggulan dalam format list editorial
async function loadRecentResearch() {
  const container = document.getElementById("home-featured-research");
  if (!container) return;

  try {
    const res = await fetch("data/research.json");
    if (!res.ok) return;
    const papers = await res.json();
    const featured = papers.filter((p) => p.featured).slice(0, 3);
    const toShow = featured.length > 0 ? featured : papers.slice(0, 3);

    if (toShow.length === 0) {
      container.innerHTML = `<p class="text-muted small py-2">No publications listed currently.</p>`;
      return;
    }

    container.innerHTML = toShow
      .map((p) => `
        <article class="editorial-item">
          <div class="item-title">${escapeHtml(p.title)}</div>
          <div class="item-meta">
            ${escapeHtml((p.authors || []).join(", "))} &bull; <em>${escapeHtml(p.venue)}</em> (${escapeHtml(p.year)})
          </div>
          <div class="item-actions mt-2">
            ${p.doi ? `<a href="${escapeHtml(p.doi)}" target="_blank" rel="noopener noreferrer">DOI</a>` : ""}
            ${p.pdfUrl ? `<a href="${escapeHtml(p.pdfUrl)}" target="_blank" rel="noopener noreferrer">PDF</a>` : ""}
            ${p.codeUrl ? `<a href="${escapeHtml(p.codeUrl)}" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> Code</a>` : ""}
          </div>
        </article>
      `)
      .join("");
  } catch (err) {
    console.error("Failed to load featured research:", err);
  }
}

// Menampilkan mata kuliah aktif dalam format list editorial
async function loadActiveCourses() {
  const container = document.getElementById("home-active-courses");
  if (!container) return;

  try {
    const res = await fetch("data/courses.json");
    if (!res.ok) return;
    const courses = await res.json();
    const active = courses.filter((c) => c.status === "Active");

    if (active.length === 0) {
      container.innerHTML = `<p class="text-muted small py-2">No active courses currently.</p>`;
      return;
    }

    container.innerHTML = active
      .map((c) => `
        <article class="editorial-item">
          <div class="d-flex align-items-baseline gap-2 mb-1">
            <span class="minimal-badge">${escapeHtml(c.code)}</span>
            ${c.credits ? `<span class="minimal-badge">${escapeHtml(c.credits)}</span>` : ""}
            ${c.type ? `<span class="minimal-badge">${escapeHtml(c.type)}</span>` : ""}
            <span class="text-muted small">${escapeHtml(c.term)}</span>
          </div>
          <div class="item-title">${escapeHtml(c.title)}</div>
          <div class="item-description">${escapeHtml(c.description)}</div>
          <div class="item-actions">
            ${c.repoUrl ? `<a href="${escapeHtml(c.repoUrl)}" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> Course Materials (${escapeHtml(c.code)})</a>` : ""}
            ${c.mainRepoUrl ? `<a href="${escapeHtml(c.mainRepoUrl)}" target="_blank" rel="noopener noreferrer"><i class="bi bi-folder2-open"></i> Main Repository (emb_sys_umk)</a>` : ""}
          </div>
        </article>
      `)
      .join("");
  } catch (err) {
    console.error("Failed to load active courses:", err);
  }
}

// Menampilkan skripsi mahasiswa terbaru dalam format list editorial
async function loadRecentTheses() {
  const container = document.getElementById("home-recent-theses");
  if (!container) return;

  try {
    const res = await fetch("data/theses.json");
    if (!res.ok) return;
    const theses = await res.json();
    const recent = theses.slice(0, 2);

    if (recent.length === 0) {
      container.innerHTML = `<p class="text-muted small py-2">No thesis records available.</p>`;
      return;
    }

    container.innerHTML = recent
      .map((t) => `
        <article class="editorial-item">
          <div class="item-title">${escapeHtml(t.title)}</div>
          <div class="item-meta">
            Student: ${escapeHtml(t.studentName)} &bull; ${escapeHtml(t.year)} &bull; <span class="text-secondary">${escapeHtml(t.status)}</span>
          </div>
          <div class="item-description">${escapeHtml(t.abstract)}</div>
          <div class="item-actions">
            ${t.repoUrl ? `<a href="${escapeHtml(t.repoUrl)}" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> Student Repository</a>` : ""}
            ${t.demoUrl ? `<a href="${escapeHtml(t.demoUrl)}" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-arrow-up-right"></i> Demo</a>` : ""}
          </div>
        </article>
      `)
      .join("");
  } catch (err) {
    console.error("Failed to load recent theses:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadHomeHighlights);

/**
 * research.js
 * Logika untuk memuat, mengelompokkan, dan menampilkan publikasi penelitian serta ekspor BibTeX.
 */

let allPublications = [];
let currentGroupBy = "category"; // Opsi pengelompokan: 'category' atau 'year'

// Mengambil data publikasi dari berkas JSON
async function fetchResearch() {
  const container = document.getElementById("research-container");
  if (!container) return;

  try {
    const response = await fetch("data/research.json");
    if (!response.ok) {
      throw new Error("Unable to retrieve research papers.");
    }
    allPublications = await response.json();
    populateCategoryFilter(allPublications);
    renderGroupedResearch(allPublications);
    setupResearchFilters();
  } catch (error) {
    console.error("Error loading research papers:", error);
    container.innerHTML = `
      <div class="alert alert-warning" role="alert">
        Failed to load publication data. Please verify <code>data/research.json</code>.
      </div>
    `;
  }
}

// Menambahkan kategori ke dropdown filter
function populateCategoryFilter(papers) {
  const select = document.getElementById("filter-category");
  if (!select) return;

  // Prioritas urutan kategori penelitian: Water, Air, Land
  const categoryOrder = ["Water (Air)", "Air (Udara)", "Land"];
  const categories = Array.from(new Set(papers.map((p) => p.category)))
    .filter(Boolean)
    .sort((a, b) => {
      const idxA = categoryOrder.indexOf(a);
      const idxB = categoryOrder.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.localeCompare(b);
    });

  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    select.appendChild(option);
  });
}

// Mengelompokkan data berdasarkan kategori atau tahun dan menampilkannya
function renderGroupedResearch(papers) {
  const container = document.getElementById("research-container");
  const countEl = document.getElementById("research-count");
  if (!container) return;

  if (countEl) {
    countEl.textContent = `${papers.length} publication${papers.length === 1 ? "" : "s"} listed`;
  }

  if (papers.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5 text-muted">
        <p class="mb-0">No publications found matching your filter.</p>
      </div>
    `;
    return;
  }

  // Mengelompokkan publikasi
  const grouped = {};
  papers.forEach((paper) => {
    const key = currentGroupBy === "year" ? paper.year : (paper.category || "General");
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(paper);
  });

  // Mengurutkan grup
  const categoryOrder = ["Water (Air)", "Air (Udara)", "Land"];
  const groupKeys = Object.keys(grouped).sort((a, b) => {
    if (currentGroupBy === "year") {
      return Number(b) - Number(a); // Urutan tahun menurun
    }
    const idxA = categoryOrder.indexOf(a);
    const idxB = categoryOrder.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b); // Urutan abjad cadangan
  });

  const html = groupKeys
    .map((groupKey) => {
      const groupPapers = grouped[groupKey];
      // Urutkan makalah dalam grup berdasarkan tahun menurun
      groupPapers.sort((a, b) => b.year - a.year);

      const papersHtml = groupPapers.map((paper) => renderPaperCard(paper)).join("");

      return `
        <div class="mb-4">
          <div class="d-flex align-items-center mb-3">
            <h5 class="fw-bold text-dark mb-0">${escapeHtml(groupKey)}</h5>
            <span class="badge bg-secondary-subtle text-secondary ms-2">${groupPapers.length}</span>
          </div>
          <div class="ps-1">
            ${papersHtml}
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = html;
}

// Menghasilkan representasi HTML untuk sebuah kartu publikasi
function renderPaperCard(paper) {
  const authorsStr = (paper.authors || []).join(", ");
  const bibtexId = `bibtex-${paper.id}`;

  const doiLink = paper.doi
    ? `<a href="${escapeHtml(paper.doi)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-primary me-2">
         <i class="bi bi-link-45deg me-1"></i> DOI
       </a>`
    : "";

  const pdfLink = paper.pdfUrl
    ? `<a href="${escapeHtml(paper.pdfUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-danger me-2">
         <i class="bi bi-file-earmark-pdf me-1"></i> PDF
       </a>`
    : "";

  const codeLink = paper.codeUrl
    ? `<a href="${escapeHtml(paper.codeUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark me-2">
         <i class="bi bi-github me-1"></i> Code Repository
       </a>`
    : "";

  const bibtexBtn = paper.bibtex
    ? `<button class="btn btn-sm btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#${bibtexId}">
         <i class="bi bi-quote me-1"></i> BibTeX
       </button>`
    : "";

  const bibtexBox = paper.bibtex
    ? `<div class="collapse mt-2" id="${bibtexId}">
         <div class="bibtex-box position-relative">
           <button class="btn btn-sm btn-light border position-absolute top-0 end-0 m-2" onclick="copyBibtex('${bibtexId}-content')">
             <i class="bi bi-clipboard"></i> Copy
           </button>
           <pre id="${bibtexId}-content" class="mb-0 text-muted">${escapeHtml(paper.bibtex)}</pre>
         </div>
       </div>`
    : "";

  return `
    <div class="card item-card mb-3">
      <div class="card-body">
        <h6 class="fw-bold text-dark mb-1">${escapeHtml(paper.title)}</h6>
        <p class="text-secondary small mb-1">${escapeHtml(authorsStr)}</p>
        <p class="text-muted small fst-italic mb-2">
          ${escapeHtml(paper.venue)} (${escapeHtml(paper.year)})
        </p>
        <div class="d-flex align-items-center flex-wrap gap-1 mt-2">
          ${doiLink}
          ${pdfLink}
          ${codeLink}
          ${bibtexBtn}
        </div>
        ${bibtexBox}
      </div>
    </div>
  `;
}

// Menyalin teks BibTeX ke papan klip
function copyBibtex(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  navigator.clipboard.writeText(el.innerText).then(() => {
    alert("BibTeX citation copied to clipboard.");
  });
}

// Menyiapkan penyaringan dan pengelompokan
function setupResearchFilters() {
  const searchInput = document.getElementById("search-research");
  const categoryFilter = document.getElementById("filter-category");
  const groupBtns = document.querySelectorAll('input[name="groupby"]');

  function applyFilter() {
    const query = (searchInput ? searchInput.value : "").trim().toLowerCase();
    const selectedCategory = categoryFilter ? categoryFilter.value : "all";

    const filtered = allPublications.filter((paper) => {
      const matchQuery =
        paper.title.toLowerCase().includes(query) ||
        (paper.authors || []).some((author) => author.toLowerCase().includes(query)) ||
        (paper.venue && paper.venue.toLowerCase().includes(query)) ||
        (paper.category && paper.category.toLowerCase().includes(query));

      const matchCategory =
        selectedCategory === "all" ||
        (paper.category && paper.category.toLowerCase() === selectedCategory.toLowerCase());

      return matchQuery && matchCategory;
    });

    renderGroupedResearch(filtered);
  }

  if (searchInput) searchInput.addEventListener("input", applyFilter);
  if (categoryFilter) categoryFilter.addEventListener("change", applyFilter);

  groupBtns.forEach((btn) => {
    btn.addEventListener("change", (e) => {
      currentGroupBy = e.target.value;
      applyFilter();
    });
  });
}

// Utilitas sanitasi teks
function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", fetchResearch);


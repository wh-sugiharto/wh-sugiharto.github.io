# Academic Homepage for GitHub Pages

A clean, responsive personal academic homepage built with Bootstrap 5.3, designed for deployment on GitHub Pages (`username.github.io`).

## Structure

The site stores its records in structured JSON files under `data/`, allowing direct editing via GitHub web commits without any local build tools:

- `index.html`: Main landing page with biography, affiliations, and quick links.
- `courses.html`: Teaching directory with course details and links to course repositories.
- `theses.html`: Supervised undergraduate theses with student repository links and project abstracts.
- `research.html`: Publications grouped by research topic or year, with DOI, PDF, code repository links, and BibTeX citations.

## Directory Layout

```text
.
├── CHANGELOG.md        # Record of project updates and decisions
├── README.md           # Setup and deployment documentation
├── index.html          # Overview and biography
├── courses.html        # Menu 1: Courses and teaching repos
├── theses.html         # Menu 2: Supervised student thesis repos
├── research.html       # Menu 3: Grouped research papers
├── css/
│   └── style.css       # Custom styling extending Bootstrap
├── js/
│   ├── common.js       # Shared profile loader and navigation
│   ├── courses.js      # Filter and render course list
│   ├── theses.js       # Filter and render supervised theses
│   └── research.js     # Group and render publications
└── data/
    ├── profile.json    # Personal details, affiliation, and contact links
    ├── courses.json    # Course catalog and repository URLs
    ├── theses.json     # Student thesis records and student code repositories
    └── research.json   # Research papers grouped by topic
```

## How to Deploy on GitHub Pages

1. Create a repository on GitHub named `username.github.io` (replace `username` with your GitHub username).
2. Push this project code to the `main` branch.
3. In GitHub, open **Settings** > **Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
5. Select branch `main` and folder `/ (root)`.
6. Click **Save**. Your site will be accessible at `https://username.github.io`.

## Updating Content

To add or modify data:
- Edit `data/profile.json` to change your name, affiliation, and academic links.
- Edit `data/courses.json` to add new courses or repository links.
- Edit `data/theses.json` to add new student thesis repositories.
- Edit `data/research.json` to add new papers and BibTeX citations.


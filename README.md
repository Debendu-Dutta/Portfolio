# Debendu Dutta — Personal Website

A static personal blog + portfolio with mathematical animations. No build step.

## Files
| File | Purpose |
|---|---|
| `index.html` | Page structure (sections: Fourier, About, Journey, Blog, 2D Graph, 3D Graph, Library, Gallery, Contact) |
| `style.css` | Design, dark/light theme, responsive layout |
| `script.js` | Animations (Fourier epicycles, torus, Cantor set, Lissajous, particle background) and rendering |
| `fourier.html` | Interactive Fourier square-wave lab (embedded in the Fourier section) |
| `plotline.html` | Plotline: 2D graphing calculator (embedded) |
| `plotline3d.html` | Plotline 3D: 3D graphing calculator (embedded; loads three.js from cdnjs) |
| `data.js` | **All your content**: bio, posts, PDFs, gallery, links |
| `assets/` | Images (replace `profile.jpg` with your real photo) |
| `pdfs/` | Your PDFs (CV already included) |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Publish on GitHub Pages
1. Create a GitHub account → **New repository**.
   - For a personal URL, name it exactly `YOUR-USERNAME.github.io` (Public).
   - Otherwise any name works (site will be at `YOUR-USERNAME.github.io/REPO-NAME/`).
2. Open the repo → **Add file → Upload files** → drag in the *contents* of this folder (`index.html`, `style.css`, `script.js`, `data.js`, `fourier.html`, `plotline.html`, `plotline3d.html`, `assets`, `pdfs`, `.nojekyll`) → **Commit changes**.
   (`index.html` must be at the top level of the repo.)
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source = **Deploy from a branch**, Branch = **main**, folder = **/(root)** → **Save**.
4. Wait 1–2 minutes. Your site is live at the URL shown on that page.

### Using Git instead
```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## Updating content
- **New blog post:** open `data.js`, copy a post object into the top of `posts`, change `id`, `title`, `date`, `tags`, `excerpt`, `body`. Math: `\\( x^2 \\)` inline, `\\[ \\int f \\]` display (double backslashes inside backticks).
- **New PDF:** put it in `pdfs/`, add a line in `pdfs` in `data.js`.
- **New photo:** put it in `assets/`, add a line in `gallery` (or set `photo` for your portrait).
- **Images inside a post:** `<img src="assets/yourfile.jpg" alt="...">` in the post body.
- **GitHub / Instagram links:** fill `github` and `instagram` in `data.js`.
- Delete the three sample posts and sample PDF when you add your own.

## Test locally
```bash
python3 -m http.server 8000
```
Open http://localhost:8000 (opening index.html directly also works).

## Embedded tools
`fourier.html`, `plotline.html` and `plotline3d.html` are standalone pages shown in iframes on the home page. They follow the site's light/dark toggle and also work on their own via the "Open in new tab" links. Keep them in the same folder as `index.html`.

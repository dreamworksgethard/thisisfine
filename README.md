# THIS IS FINE — Static site (GitHub Pages ready)

Static HTML / CSS / JS version of the $FINE website.

## Files

```
deploy/
  index.html
  css/style.css
  js/main.js
  images/
```

## Preview locally

Open `index.html` in a browser, or from this folder:

```bash
cd deploy
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Deploy to GitHub Pages

### Option A — New repo from this folder

1. Create a new GitHub repository (e.g. `fine-website`)
2. Upload everything **inside** the `deploy` folder to the repo root  
   (`index.html` must be at the root of the repo)
3. GitHub → **Settings** → **Pages**
4. Source: **Deploy from a branch**
5. Branch: `main` / folder: `/ (root)`
6. Save — your site will be at `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Option B — Git commands

```bash
cd deploy
git init
git add .
git commit -m "Deploy THIS IS FINE website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then enable GitHub Pages as in Option A.

## Update later

| What | File |
| --- | --- |
| Contract address | `index.html` — search for `TBA` |
| Buy / Flap link | `index.html` — search for `flap.sh` |
| X link | already set to `https://x.com/FineOnBsc` |
| Token info | Tokenomics section in `index.html` |

## Disclaimer

$FINE is a meme coin for entertainment and community culture. Not financial advice. DYOR.

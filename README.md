# seesharp.ch

Personal landing page for Fabio Salvalai, built with Jekyll + GitHub Pages.

## Updating content

- **Bio text** — edit `index.md` (plain markdown, no HTML needed)
- **Projects** — edit `_data/projects.yml` (title, description, url, tags per entry)
- **Site metadata** (name, tagline, links) — edit `_config.yml`

## Local preview (Docker — no Ruby install needed)

```
docker compose up
```

Open `http://localhost:4000`. Changes to markdown and data files reload automatically; `_config.yml` changes require restarting the container.

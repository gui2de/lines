# gui2de lines

Onboarding and research workflow guidelines for gui2de.

📖 **Read the handbook: <https://gui2de.github.io/lines/>**

## Editing

All content lives in [`docs/`](docs/) as plain Markdown. Edit a page directly on
GitHub (or use the ✏️ pencil icon on any page of the site), commit to `master`,
and the site rebuilds automatically.

To add a new page, create the `.md` file under `docs/` and add a line for it to
the `nav:` section of [`mkdocs.yml`](mkdocs.yml) — that's what builds the
left-hand menu.

## Previewing locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open <http://127.0.0.1:8000>. The preview reloads as you save.

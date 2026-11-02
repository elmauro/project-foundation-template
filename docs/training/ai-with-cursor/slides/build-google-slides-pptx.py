"""Build .pptx decks from session-NN.md (split on ---). Import into Google Slides via Upload."""

from __future__ import annotations

import re
import sys
from pathlib import Path

try:
    from pptx import Presentation
    from pptx.util import Pt
except ImportError:
    print("Install: pip install python-pptx", file=sys.stderr)
    sys.exit(1)

SLIDES_DIR = Path(__file__).resolve().parent
LINK_RE = re.compile(r"\[([^\]]+)\]\([^)]+\)")
BOLD_RE = re.compile(r"\*\*([^*]+)\*\*")
CODE_RE = re.compile(r"`([^`]+)`")


def strip_md(line: str) -> str:
    line = LINK_RE.sub(r"\1", line)
    line = BOLD_RE.sub(r"\1", line)
    line = CODE_RE.sub(r"\1", line)
    line = line.replace("*", "")
    return line.strip()


def parse_block(block: str) -> tuple[str, list[str]]:
    lines = [strip_md(ln) for ln in block.strip().splitlines()]
    lines = [ln for ln in lines if ln]
    title = ""
    body: list[str] = []
    for ln in lines:
        if ln.startswith("# "):
            title = ln[2:].strip()
        elif ln.startswith("## "):
            sub = ln[3:].strip()
            if title and title != sub:
                body.append(sub)
            elif not title:
                title = sub
            else:
                body.append(sub)
        else:
            body.append(ln)
    if not title and body:
        title = body.pop(0)
    return title or "Slide", body


def add_slide(prs: Presentation, title: str, body_lines: list[str]) -> None:
    layout = prs.slide_layouts[1]  # Title and Content
    slide = prs.slides.add_slide(layout)
    slide.shapes.title.text = title[:255]
    tf = slide.placeholders[1].text_frame
    tf.clear()
    if not body_lines:
        return
    first = True
    for line in body_lines:
        if first:
            p = tf.paragraphs[0]
            first = False
        else:
            p = tf.add_paragraph()
        p.text = line[:5000]
        p.level = 0
        p.font.size = Pt(18)
    for p in tf.paragraphs:
        p.font.size = Pt(18)


def build_deck(md_path: Path, pptx_path: Path) -> int:
    text = md_path.read_text(encoding="utf-8")
    blocks = [b.strip() for b in text.split("\n---\n") if b.strip()]
    prs = Presentation()
    prs.slide_width = prs.slide_width  # default 16:9
    for block in blocks:
        title, body = parse_block(block)
        add_slide(prs, title, body)
    pptx_path.parent.mkdir(parents=True, exist_ok=True)
    prs.save(str(pptx_path))
    return len(blocks)


def merge_decks(out_path: Path) -> int:
    prs = Presentation()
    total = 0
    for n in range(1, 7):
        md = SLIDES_DIR / f"session-{n:02d}.md"
        if not md.exists():
            continue
        text = md.read_text(encoding="utf-8")
        blocks = [b.strip() for b in text.split("\n---\n") if b.strip()]
        for block in blocks:
            title, body = parse_block(block)
            add_slide(prs, title, body)
            total += 1
    prs.save(str(out_path))
    return total


def main() -> None:
    count = 0
    for n in range(1, 7):
        md = SLIDES_DIR / f"session-{n:02d}.md"
        if not md.exists():
            print(f"Skip missing {md.name}")
            continue
        out = SLIDES_DIR / f"session-{n:02d}.pptx"
        slides = build_deck(md, out)
        print(f"{out.name}: {slides} slides")
        count += slides
    combined = SLIDES_DIR / "curso-completo.pptx"
    merged = merge_decks(combined)
    print(f"{combined.name}: {merged} slides")
    print(f"Total slides (per-session sum): {count}")


if __name__ == "__main__":
    main()

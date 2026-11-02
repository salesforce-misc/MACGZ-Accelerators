/*
 * Copyright (c) 2026, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/Apache-2.0
 */
(function () {
  const list = window.ACCELERATORS || [];
  const root = document.getElementById("app");
  const search = document.getElementById("search");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function icon(name) {
    return window.ICONS[name] || "";
  }

  function sparkles() {
    return `
      <svg class="spark s1" viewBox="0 0 64 64" aria-hidden="true"><path fill="#F5C518" d="M32 4l6 18 18 6-18 6-6 18-6-18-18-6 18-6z"/></svg>
      <svg class="spark s2" viewBox="0 0 48 48" aria-hidden="true"><path fill="#00B3FF" d="M24 2l4 14 14 4-14 4-4 14-4-14-14-4 14-4z"/></svg>
      <svg class="spark s3" viewBox="0 0 40 40" aria-hidden="true"><path fill="#90D0FE" d="M20 2l3 11 11 3-11 3-3 11-3-11L6 16l11-3z"/></svg>
    `;
  }

  function logo() {
    return `
      <div class="logo" aria-label="MACGZ Accelerators">
        <svg viewBox="0 0 36 24" aria-hidden="true"><path fill="currentColor" d="M14.2 18.8c.4 0 .8 0 1.2-.1-1.1-1.1-1.6-2.6-1.3-4.2.3-1.4 1.2-2.6 2.4-3.3C15.6 8.6 13.2 7 10.4 7 6.5 7 3.3 10 3.3 13.8c0 .3 0 .6.1.9C1.4 15.4 0 17.2 0 19.3 0 22 2.2 24.2 4.9 24.2h9.6c-.2-.5-.3-.9-.3-1.4 0-1.5.7-2.9 1.9-3.8-.6-.1-1.2-.2-1.9-.2zM22.6 9.2c.5 0 1 .1 1.5.2.7-2.4 2.9-4.2 5.5-4.2 2.3 0 4.3 1.3 5.3 3.3 1.7-.3 3.4.7 4.1 2.3.8 1.7.4 3.7-.9 4.9.6.6 1 1.5 1 2.4 0 1.9-1.6 3.5-3.5 3.5H18.4c-2.1 0-3.8-1.7-3.8-3.8 0-1.8 1.2-3.3 2.9-3.7-.1-.3-.1-.7-.1-1 0-2.2 1.8-3.9 4-3.9h1.2z"/></svg>
        <span>macgz</span>
      </div>
    `;
  }

  function currentId() {
    const hash = location.hash.replace(/^#\/?/, "");
    return hash;
  }

  function findAccelerator(id) {
    return list.find((item) => item.id === id);
  }

  function filtered() {
    const query = (search.value || "").trim().toLowerCase();
    if (!query) return list;
    return list.filter((item) => {
      const haystack = [item.name, item.eyebrow, item.cardSummary, ...(item.products || [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }

  function catalogCard(item, index) {
    const tags = (item.products || [])
      .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
      .join("");
    return `
      <article class="repo-card reveal d${Math.min(index + 3, 10)}">
        <div class="card-top">
          <span class="repo-mark" aria-hidden="true">${icon("repo")}</span>
          <span class="num">${String(index + 1).padStart(2, "0")}</span>
        </div>
        <p class="repo-kicker">${escapeHtml(item.eyebrow)}</p>
        <h3><a href="#/${escapeHtml(item.id)}">${escapeHtml(item.name)}</a></h3>
        <p>${escapeHtml(item.cardSummary)}</p>
        <div class="tags">${tags}</div>
        <div class="repo-actions">
          <a class="text-link" href="#/${escapeHtml(item.id)}">View one-pager</a>
          <a class="text-link external" href="${escapeHtml(item.repoUrl)}" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </article>
    `;
  }

  function renderCatalog() {
    const items = filtered();
    const cards = items.length
      ? items.map(catalogCard).join("")
      : `<p class="empty">No accelerators match that search.</p>`;
    document.title = "MACGZ Accelerators";
    root.innerHTML = `
      <section class="stage catalog-stage">
        <div class="intro">
          ${sparkles()}
          ${logo()}
          <p class="eyebrow reveal d2">MACGZ · Open accelerators</p>
          <h1 class="reveal d3">Accelerator<br>catalog.</h1>
          <p class="lede reveal d4">A directory of ready-to-deploy repos. Each entry keeps the same one-pager: what it does, how to install it, and where the code lives.</p>
          <div class="howto reveal d5">
            <h2>How to use it</h2>
            <ol>
              <li><b>Pick</b> an accelerator from the catalog.</li>
              <li><b>Read</b> the one-pager for capabilities and install steps.</li>
              <li><b>Clone</b> the GitHub repo and deploy it to your org.</li>
            </ol>
          </div>
        </div>
        <div class="caps">
          <div class="caps-head reveal d2">
            <h2>${items.length} ${items.length === 1 ? "accelerator" : "accelerators"}</h2>
            <p>Same layout for every repo. Open a card for the one-pager, or go straight to GitHub.</p>
          </div>
          <div class="repo-grid">${cards}</div>
        </div>
      </section>
    `;
  }

  function capabilityCard(item, tone, delay) {
    return `
      <article class="card tone-${tone} reveal d${delay}">
        <div class="card-top">
          <span class="glyph">${icon(item.icon)}</span>
          <span class="num">${escapeHtml(item.n)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.body)}</p>
        <div class="try"><span>Try</span>“${escapeHtml(item.try)}”</div>
      </article>
    `;
  }

  function renderDetail(item) {
    document.title = `${item.name} — MACGZ Accelerators`;
    const install = item.install
      .map((step) => {
        const code = step.code ? `<code>${escapeHtml(step.code)}</code>` : "";
        return `<li><b>${escapeHtml(step.label)}</b> ${escapeHtml(step.rest)}${code}</li>`;
      })
      .join("");

    let delay = 3;
    const phases = item.phases
      .map((phase) => {
        const headerDelay = Math.min(delay, 10);
        const cards = phase.items
          .map((cap) => {
            delay = Math.min(delay + 1, 10);
            return capabilityCard(cap, phase.tone, delay);
          })
          .join("");
        delay = Math.min(delay + 1, 10);
        return `
          <section class="phase-block span-${phase.span}">
            <div class="phase tone-${phase.tone} reveal d${headerDelay}">${escapeHtml(phase.label)}</div>
            <div class="phase-cards">${cards}</div>
          </section>
        `;
      })
      .join("");

    const promises = item.promises.map((line) => `<li>${escapeHtml(line)}</li>`).join("");

    root.innerHTML = `
      <section class="stage detail-stage">
        <div class="intro">
          ${sparkles()}
          ${logo()}
          <a class="back reveal d1" href="#/">All accelerators</a>
          <p class="eyebrow reveal d2">${escapeHtml(item.eyebrow)}</p>
          <h1 class="reveal d3">${item.titleHtml}</h1>
          <p class="lede reveal d4">${escapeHtml(item.summary)}</p>
          <div class="cta reveal d5">
            <a class="btn primary" href="${escapeHtml(item.repoUrl)}" target="_blank" rel="noopener noreferrer">Get the repo →</a>
            <a class="btn ghost" href="${escapeHtml(item.setupUrl)}" target="_blank" rel="noopener noreferrer">Setup guide</a>
          </div>
          <div class="howto reveal d6">
            <h2>Install in ${item.install.length} steps</h2>
            <ol>${install}</ol>
            <p class="req">${escapeHtml(item.requires)}</p>
          </div>
        </div>
        <div class="caps">
          <div class="caps-head reveal d2">
            <h2>${escapeHtml(item.capsHeadline)}</h2>
            <p>${escapeHtml(item.capsLede)}</p>
          </div>
          <div class="phases">${phases}</div>
          <div class="promise reveal d10">
            <div class="label">${escapeHtml(item.promiseLabel)}</div>
            <ul>${promises}</ul>
          </div>
        </div>
      </section>
    `;
  }

  function render() {
    const id = currentId();
    const item = id ? findAccelerator(id) : null;
    const onDetail = Boolean(item);
    document.body.dataset.view = onDetail ? "detail" : "catalog";
    search.hidden = onDetail;
    if (onDetail) renderDetail(item);
    else if (id) {
      root.innerHTML = `<section class="stage"><div class="missing"><h1>That accelerator isn’t in the catalog.</h1><a class="btn primary" href="#/">Back to the catalog</a></div></section>`;
    } else renderCatalog();
  }

  search.addEventListener("input", () => {
    if (!currentId()) renderCatalog();
  });
  window.addEventListener("hashchange", render);
  render();
})();

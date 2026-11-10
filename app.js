"use strict";

const products = [
  { id: "babouche", name: "Babouche Fassi", category: "Artisanat marocain", group: "artisanat", price: 299, color: "#bd7440", colorName: "Cuir miel", badge: "FAIT MAIN", model: "babouche", short: "Un savoir-faire de Fès, à porter tous les jours.", detail: "Une babouche inspirée du travail des artisans de Fès, avec une silhouette souple et une couleur chaude facile à porter.", specs: "Cuir souple, semelle légère. Chaque pièce est réalisée artisanalement ; de légères variations de teinte sont possibles." },
  { id: "teapot", name: "Théière Tétouan", category: "Artisanat marocain", group: "artisanat", price: 349, color: "#c5a35b", colorName: "Laiton", badge: "ART DE RECEVOIR", model: "teapot", short: "L’heure du thé prend le temps qu’elle mérite.", detail: "Une théière au charme marocain traditionnel, pensée pour les moments de partage et le rituel du thé à la menthe.", specs: "Métal à finition brillante, poignée isolante. Lavage doux à la main conseillé." },
  { id: "basket", name: "Panier Souk", category: "Artisanat marocain", group: "artisanat", price: 229, color: "#c39762", colorName: "Fibre naturelle", badge: "TRESSÉ MAIN", model: "basket", short: "Un panier tressé pour le marché et la maison.", detail: "Un panier inspiré des marchés marocains, tressé à la main pour accompagner les courses ou ranger les essentiels de la maison.", specs: "Fibre végétale tressée avec anses renforcées. Dimensions et motifs peuvent légèrement varier selon le tressage." },
  { id: "tray", name: "Plateau Zellige", category: "Artisanat marocain", group: "artisanat", price: 279, color: "#285a42", colorName: "Vert profond", badge: "MOTIF TRADITIONNEL", model: "tray", short: "Un motif géométrique marocain pour recevoir avec soin.", detail: "Un plateau décoratif inspiré des motifs zellige, pour servir le thé ou apporter une touche artisanale à la maison.", specs: "Plateau rigide avec décor géométrique. Nettoyage avec un chiffon doux ; ne pas immerger." },
  { id: "serum", name: "Sérum Éclat", category: "Beauté", group: "beaute", price: 189, color: "#c78d65", colorName: "Ambre", badge: "SOIN VISAGE", model: "serum", short: "Un soin léger pour une peau lumineuse, chaque jour.", detail: "Un sérum visage à la texture légère, pensé pour s’intégrer simplement à votre rituel du matin ou du soir.", specs: "Flacon en verre ambré de 30 ml, pipette précise. Formule hydratante, sans parfum ajouté." },
  { id: "argan", name: "Huile d’argan", category: "Beauté beldi", group: "beaute", price: 129, color: "#b67a43", colorName: "Argan", badge: "RITUEL BELDI", model: "oil", short: "Un rituel nourrissant inspiré des traditions marocaines.", detail: "Une huile de beauté inspirée des rituels marocains, à intégrer à votre routine visage, corps ou cheveux.", specs: "Flacon en verre ambré de 50 ml avec pipette. Pour un usage cosmétique externe." },
  { id: "savon-beldi", name: "Savon noir beldi", category: "Beauté beldi", group: "beaute", price: 79, color: "#455442", colorName: "Olive", badge: "RITUEL HAMMAM", model: "soap", short: "Le geste traditionnel du hammam à la maison.", detail: "Un savon noir à la texture généreuse, inspiré du rituel du hammam marocain. À utiliser sur peau humide avant le rinçage.", specs: "Pot de 200 g. Usage externe uniquement. Éviter le contour des yeux." },
  { id: "cream", name: "Crème Douce", category: "Beauté", group: "beaute", price: 159, color: "#e8cdb8", colorName: "Pêche", badge: "SOIN QUOTIDIEN", model: "cream", short: "Une crème confortable, sans sensation de lourdeur.", detail: "Une crème visage douce et facile à appliquer. Sa texture fondante accompagne votre routine et laisse la peau souple.", specs: "Pot de 50 ml avec couvercle à vis. Convient aux peaux normales à sèches. Sans parfum ajouté." },
  { id: "rose-water", name: "Eau de rose", category: "Beauté beldi", group: "beaute", price: 89, color: "#ce8e89", colorName: "Rose", badge: "GESTE FRAÎCHEUR", model: "rose", short: "Une brume florale, fraîche et délicate.", detail: "Une eau florale inspirée des soins marocains, à vaporiser pour un geste frais dans votre routine quotidienne.", specs: "Flacon vaporisateur de 100 ml. Usage cosmétique externe. Éviter le contact avec les yeux." },
  { id: "ghassoul", name: "Ghassoul douceur", category: "Beauté beldi", group: "beaute", price: 99, color: "#a97955", colorName: "Terre", badge: "RITUEL HAMMAM", model: "ghassoul", short: "L’argile marocaine pour un rituel de soin tout simple.", detail: "Une argile de soin inspirée du ghassoul marocain traditionnel. Mélangée à un peu d’eau, elle s’utilise en masque pour le visage ou les cheveux.", specs: "Poudre minérale, pot de 150 g. Préparer juste avant utilisation. Éviter le contour des yeux." },
  { id: "perfume", name: "Eau de parfum Fleur", category: "Beauté", group: "beaute", price: 349, color: "#d8a4a0", colorName: "Rose poudré", badge: "SIGNATURE", model: "perfume", short: "Une note florale discrète qui vous ressemble.", detail: "Une eau de parfum au sillage floral et délicat, imaginée pour les petits plaisirs de tous les jours.", specs: "Flacon de 50 ml en verre, vaporisateur rechargeable. Notes de fleur blanche et de musc doux." },
  { id: "bottle", name: "Gourde Nomade", category: "Maison", group: "maison", price: 229, color: "#7b9b8a", colorName: "Vert sauge", badge: "À EMPORTER", model: "bottle", short: "Votre boisson préférée, toujours à portée de main.", detail: "Une gourde réutilisable en acier inoxydable, assez légère pour vous suivre toute la journée.", specs: "Acier inoxydable à double paroi, 500 ml, bouchon étanche et lavage à la main conseillé." },
  { id: "bag", name: "Sac Week-end", category: "Accessoires", group: "accessoires", price: 499, color: "#455c4a", colorName: "Sauge", badge: "PRÊT À PARTIR", model: "bag", short: "Un sac bien pensé pour les escapades improvisées.", detail: "Un sac souple et spacieux pour partir léger. Une poche intérieure garde les petits essentiels à leur place.", specs: "Toile résistante, anses renforcées, poche intérieure zippée et bandoulière réglable." },
  { id: "lamp", name: "Lampe Nomade", category: "Maison", group: "maison", price: 299, color: "#efc64b", colorName: "Citron", badge: "BELLE LUMIÈRE", model: "lamp", short: "Une lumière douce, où que la soirée vous mène.", detail: "Une lampe compacte sans fil qui crée une lumière chaleureuse sur un bureau, une table ou une terrasse couverte.", specs: "Trois intensités, recharge USB-C, jusqu’à 12 h d’autonomie et abat-jour diffusant." }
];

const formatPrice = (amount) => `${amount.toLocaleString("fr-FR")} MAD`;
const page = document.body.dataset.page;
const getProduct = (id) => products.find((product) => product.id === id) || products[0];
const cartKey = "ecom-zakine-cart";
let toastTimer;
const pendingCardModels = new Set();

function scanVisibleModels() {
  pendingCardModels.forEach((container) => {
    if (!container.isConnected) {
      pendingCardModels.delete(container);
      return;
    }
    const bounds = container.getBoundingClientRect();
    if (bounds.bottom < -80 || bounds.top > window.innerHeight + 80) return;
    pendingCardModels.delete(container);
    buildModel(container);
  });
}

function scheduleModelScan() {
  scanVisibleModels();
}

window.addEventListener("scroll", scheduleModelScan, { passive: true });
window.addEventListener("resize", scheduleModelScan, { passive: true });

function safeCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartKey) || "[]");
    return Array.isArray(saved) ? saved.filter((line) => getProduct(line.id).id === line.id && Number.isInteger(line.quantity) && line.quantity > 0) : [];
  } catch {
    return [];
  }
}

function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function modelMarkup(product, extraClass = "") {
  return `<div class="card-model ${extraClass}" data-model="${product.model}" data-color="${product.color}" aria-hidden="true"></div>`;
}

function productCard(product, index) {
  return `<article class="product-card" data-id="${product.id}" data-category="${product.group}" style="animation-delay:${index * 70}ms"><a class="card-visual" href="produit.html?item=${product.id}" style="--card-bg:${product.color}1e" aria-label="Découvrir ${product.name}"><span class="card-count">${String(index + 1).padStart(2, "0")} — ${String(products.length).padStart(2, "0")}</span><span class="card-badge">${product.badge}</span>${modelMarkup(product)}</a><div class="card-meta"><a class="card-name" href="produit.html?item=${product.id}">${product.name}</a><span class="card-price">${formatPrice(product.price)}</span></div><p class="card-category">${product.category} · ${product.short}</p><div class="card-actions"><button class="card-quick-add" data-add="${product.id}" aria-label="Ajouter ${product.name} au panier"><span>+</span><span>Ajouter</span></button></div></article>`;
}

function renderGrid() {
  document.querySelectorAll("[data-product-grid]").forEach((grid) => {
    const type = grid.dataset.productGrid;
    const currentProduct = new URLSearchParams(location.search).get("item") || "sonora";
    let items = type === "featured" ? [getProduct("argan"), getProduct("babouche"), getProduct("tray")] : type === "related" ? products.filter((item) => item.id !== currentProduct).slice(0, 3) : [...products];
    if (type === "all") {
      const sort = document.querySelector(".sort-control select")?.value;
      if (sort === "price-asc") items.sort((a, b) => a.price - b.price);
      if (sort === "price-desc") items.sort((a, b) => b.price - a.price);
    }
    grid.innerHTML = items.map(productCard).join("");
  });
  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      addToCart(button.dataset.add);
    });
  });
  document.querySelectorAll("[data-model]").forEach(createModel);
}

function loadProductPage() {
  if (page !== "product") return;
  const product = getProduct(new URLSearchParams(location.search).get("item"));
  document.title = `${product.name} — Ecom-Zakine`;
  document.querySelector(".breadcrumb-name").textContent = product.name;
  document.querySelector(".product-category").textContent = `${product.category.toUpperCase()} / E/Z`;
  document.querySelector(".product-title").textContent = product.name;
  document.querySelector(".product-short").textContent = product.short;
  document.querySelector(".product-price").textContent = formatPrice(product.price);
  document.querySelector(".product-copy").textContent = product.detail;
  const spec = document.querySelectorAll(".product-description details p")[1];
  if (spec) spec.textContent = product.specs;
  const model = document.querySelector(".product-model");
  model.parentElement.querySelector(".stage-number").textContent = String(products.indexOf(product) + 1).padStart(2, "0");
  model.dataset.model = product.model;
  model.dataset.color = product.color;
  const selectedColorName = document.querySelector(".selected-color-name");
  selectedColorName.textContent = product.colorName;
  const addButton = document.querySelector(".product-add");
  addButton.dataset.add = product.id;
  addButton.addEventListener("click", () => addToCart(product.id));
  document.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.classList.toggle("selected", swatch.dataset.color.toLowerCase() === product.color.toLowerCase());
    swatch.addEventListener("click", () => {
      document.querySelectorAll(".swatch").forEach((item) => item.classList.remove("selected"));
      swatch.classList.add("selected");
      model.dataset.color = swatch.dataset.color;
      selectedColorName.textContent = swatch.dataset.colorName;
      model.dispatchEvent(new CustomEvent("model-color-change", { detail: swatch.dataset.color }));
    });
  });
  createModel(model);
}

function addToCart(id) {
  const cart = safeCart();
  const line = cart.find((entry) => entry.id === id);
  if (line) line.quantity += 1;
  else cart.push({ id, quantity: 1 });
  saveCart(cart);
  showToast(`${getProduct(id).name} ajouté au panier`);
}

function saveCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cart = safeCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach((node) => { node.textContent = count; });
  const drawer = document.querySelector(".cart-drawer");
  const items = document.querySelector(".cart-items");
  if (!drawer || !items) return;
  drawer.classList.toggle("is-empty", cart.length === 0);
  items.innerHTML = cart.map((line) => {
    const product = getProduct(line.id);
    return `<article class="cart-line"><div class="cart-thumb" style="--card-bg:${product.color}1e">${modelMarkup(product)}</div><div><a class="cart-line-name" href="produit.html?item=${product.id}">${product.name}</a><div class="cart-line-price">${formatPrice(product.price)}</div><div class="quantity-controls"><button data-quantity="minus" data-id="${product.id}" aria-label="Retirer un ${product.name}">−</button><span>${line.quantity}</span><button data-quantity="plus" data-id="${product.id}" aria-label="Ajouter un ${product.name}">+</button></div></div><button class="remove-item" data-quantity="remove" data-id="${product.id}" aria-label="Supprimer ${product.name}">×</button></article>`;
  }).join("");
  const subtotal = cart.reduce((total, line) => total + getProduct(line.id).price * line.quantity, 0);
  const price = document.querySelector(".cart-subtotal");
  if (price) price.textContent = formatPrice(subtotal);
  items.querySelectorAll("[data-quantity]").forEach((button) => button.addEventListener("click", () => updateQuantity(button.dataset.id, button.dataset.quantity)));
  items.querySelectorAll("[data-model]").forEach(createModel);
}

function updateQuantity(id, action) {
  const cart = safeCart();
  const line = cart.find((entry) => entry.id === id);
  if (!line) return;
  if (action === "remove") line.quantity = 0;
  else line.quantity += action === "plus" ? 1 : -1;
  saveCart(cart.filter((entry) => entry.quantity > 0));
}

function setupCart() {
  const overlay = document.querySelector(".cart-overlay");
  if (!overlay) return;
  const drawer = overlay.querySelector(".cart-drawer");
  const open = () => { overlay.classList.add("open"); overlay.setAttribute("aria-hidden", "false"); document.body.classList.add("drawer-open"); drawer.querySelector(".drawer-close").focus(); };
  const close = () => { overlay.classList.remove("open"); overlay.setAttribute("aria-hidden", "true"); document.body.classList.remove("drawer-open"); };
  document.querySelectorAll(".cart-trigger").forEach((button) => button.addEventListener("click", open));
  overlay.querySelector(".drawer-close").addEventListener("click", close);
  overlay.addEventListener("click", (event) => { if (event.target === overlay) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
  overlay.querySelector(".checkout-button").addEventListener("click", () => showToast("Le paiement sera bientôt disponible."));
}

function setupSearch() {
  const trigger = document.querySelector(".search-toggle");
  if (!trigger) return;
  const overlay = document.createElement("div");
  overlay.className = "search-overlay";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `<section class="search-panel" aria-label="Recherche"><div class="search-panel-head"><h2>À la recherche de…</h2><button class="drawer-close" aria-label="Fermer la recherche">×</button></div><input class="search-input" type="search" placeholder="Un son, un objet, une idée…" aria-label="Rechercher un produit"><div class="search-results"></div></section>`;
  document.body.append(overlay);
  const input = overlay.querySelector(".search-input");
  const results = overlay.querySelector(".search-results");
  const close = () => { overlay.classList.remove("open"); overlay.setAttribute("aria-hidden", "true"); };
  const update = () => {
    const term = input.value.trim().toLocaleLowerCase("fr");
    const found = products.filter((product) => `${product.name} ${product.category} ${product.short}`.toLocaleLowerCase("fr").includes(term));
    results.innerHTML = found.map((product) => `<a class="search-result" href="produit.html?item=${product.id}"><span>${product.name}</span><span>${formatPrice(product.price)} ↗</span></a>`).join("") || `<p class="search-no-results">Aucun objet ne correspond à cette recherche.</p>`;
  };
  input.addEventListener("input", update);
  trigger.addEventListener("click", () => { overlay.classList.add("open"); overlay.setAttribute("aria-hidden", "false"); update(); input.focus(); });
  overlay.querySelector(".drawer-close").addEventListener("click", close);
  overlay.addEventListener("click", (event) => { if (event.target === overlay) close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-button");
  if (!buttons.length) return;
  const applyFilter = (category) => {
    let visible = 0;
    document.querySelectorAll(".shop-grid .product-card").forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
      if (!card.hidden) visible += 1;
    });
    const count = document.querySelector(".result-count");
    if (count) count.textContent = `${String(visible).padStart(2, "0")} objet${visible > 1 ? "s" : ""}`;
  };
  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applyFilter(button.dataset.filter);
  }));
  document.querySelector(".sort-control select")?.addEventListener("change", () => {
    const category = document.querySelector(".filter-button.active")?.dataset.filter || "all";
    renderGrid();
    applyFilter(category);
  });
}

function setupForms() {
  document.querySelectorAll(".newsletter-form, .contact-form").forEach((form) => form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast(form.classList.contains("newsletter-form") ? "Merci, vous êtes bien inscrit·e." : "Merci pour votre message. À très vite !");
    form.reset();
  }));
}

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });
  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
}

function makeMaterial(color, roughness = 0.48, metalness = 0.12) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function createModel(container) {
  if (!window.THREE || container.dataset.initialized === "true") return;
  if (container.classList.contains("card-model")) {
    pendingCardModels.add(container);
    scheduleModelScan();
    return;
  }
  buildModel(container);
}

function buildModel(container) {
  if (!window.THREE || container.dataset.initialized === "true") return;
  container.dataset.initialized = "true";
  const kind = container.dataset.model || "headphones";
  const group = new THREE.Group();
  const defaultColor = container.dataset.color || "#df563c";
  const colorMaterial = makeMaterial(defaultColor, 0.34, 0.18);
  const darkMaterial = makeMaterial("#272b27", 0.63, 0.06);
  const softMaterial = makeMaterial("#e9dfca", 0.93, 0);
  const metalMaterial = makeMaterial("#c9b894", 0.24, 0.72);
  const addMesh = (geometry, material, position, parent = group) => {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...position);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };

  if (kind === "headphones") {
    const arc = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.88, -0.02, 0), new THREE.Vector3(-0.85, 0.62, 0),
      new THREE.Vector3(-0.54, 1.21, 0), new THREE.Vector3(0, 1.39, 0),
      new THREE.Vector3(0.54, 1.21, 0), new THREE.Vector3(0.85, 0.62, 0),
      new THREE.Vector3(0.88, -0.02, 0)
    ]);
    addMesh(new THREE.TubeGeometry(arc, 48, 0.105, 12, false), darkMaterial, [0, 0, 0]);
    const innerArc = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.65, 0.18, 0), new THREE.Vector3(-0.6, 0.73, 0),
      new THREE.Vector3(-0.35, 1.04, 0), new THREE.Vector3(0, 1.13, 0),
      new THREE.Vector3(0.35, 1.04, 0), new THREE.Vector3(0.6, 0.73, 0),
      new THREE.Vector3(0.65, 0.18, 0)
    ]);
    addMesh(new THREE.TubeGeometry(innerArc, 38, 0.055, 9, false), softMaterial, [0, 0, 0]);
    [-1, 1].forEach((side) => {
      const cup = new THREE.Group();
      cup.position.set(side * 0.83, -0.14, 0);
      cup.rotation.z = side * -0.055;
      group.add(cup);
      const shell = addMesh(new THREE.CylinderGeometry(0.43, 0.43, 0.32, 48, 1), colorMaterial, [0, 0, 0], cup);
      shell.rotation.z = Math.PI / 2;
      const ring = addMesh(new THREE.TorusGeometry(0.36, 0.036, 12, 48), metalMaterial, [side * 0.18, 0, 0], cup);
      ring.rotation.y = Math.PI / 2;
      const cushion = addMesh(new THREE.TorusGeometry(0.32, 0.095, 16, 48), darkMaterial, [side * 0.22, 0, 0], cup);
      cushion.rotation.y = Math.PI / 2;
      const pad = addMesh(new THREE.CylinderGeometry(0.29, 0.29, 0.09, 40), softMaterial, [side * 0.2, 0, 0], cup);
      pad.rotation.z = Math.PI / 2;
      addMesh(new THREE.BoxGeometry(0.13, 0.37, 0.18), metalMaterial, [side * 0.02, 0.3, 0], cup);
    });
  } else if (kind === "speaker") {
    addMesh(new THREE.CylinderGeometry(0.48, 0.54, 1.32, 64, 1, false), colorMaterial, [0, 0.04, 0]);
    const top = addMesh(new THREE.CylinderGeometry(0.43, 0.43, 0.04, 64), softMaterial, [0, 0.72, 0]);
    top.rotation.x = 0.05;
    addMesh(new THREE.TorusGeometry(0.4, 0.035, 12, 48), metalMaterial, [0, -0.61, 0]);
    const grille = new THREE.Group();
    grille.position.set(0, 0.02, 0.43);
    group.add(grille);
    addMesh(new THREE.CylinderGeometry(0.31, 0.31, 0.035, 48), darkMaterial, [0, 0, 0], grille);
    addMesh(new THREE.CylinderGeometry(0.23, 0.23, 0.04, 48), metalMaterial, [0, 0, 0.025], grille);
    addMesh(new THREE.CylinderGeometry(0.16, 0.16, 0.045, 48), darkMaterial, [0, 0, 0.045], grille);
    const handle = addMesh(new THREE.TorusGeometry(0.59, 0.026, 10, 48, Math.PI), metalMaterial, [0, 0.28, 0.04]);
    handle.rotation.z = Math.PI;
  } else if (kind === "earbuds") {
    const caseBody = addMesh(new THREE.BoxGeometry(1.05, 0.56, 0.72), colorMaterial, [0, -0.29, 0]);
    caseBody.geometry = new THREE.BoxGeometry(1.05, 0.56, 0.72, 4, 3, 3);
    const caseLine = addMesh(new THREE.TorusGeometry(0.42, 0.015, 8, 48), metalMaterial, [0, -0.05, 0]);
    caseLine.scale.set(1.14, 0.32, 0.85);
    [-0.46, 0.46].forEach((x) => {
      const bud = new THREE.Group();
      bud.position.set(x, 0.47, 0.02);
      bud.rotation.z = x < 0 ? -0.18 : 0.18;
      group.add(bud);
      addMesh(new THREE.SphereGeometry(0.2, 28, 20), softMaterial, [0, 0.12, 0], bud).scale.set(1, 1.12, 0.88);
      addMesh(new THREE.CylinderGeometry(0.078, 0.065, 0.42, 24), darkMaterial, [0, -0.15, 0], bud);
      const tip = addMesh(new THREE.SphereGeometry(0.105, 20, 16), darkMaterial, [0, -0.37, 0], bud);
      tip.scale.set(0.8, 1.2, 0.8);
      addMesh(new THREE.SphereGeometry(0.065, 20, 14), metalMaterial, [0.105, 0.13, 0.04], bud);
    });
  } else if (kind === "serum") {
    addMesh(new THREE.CylinderGeometry(0.36, 0.39, 0.88, 48), colorMaterial, [0, -0.02, 0]);
    addMesh(new THREE.CylinderGeometry(0.17, 0.17, 0.22, 36), metalMaterial, [0, 0.53, 0]);
    addMesh(new THREE.CylinderGeometry(0.19, 0.19, 0.45, 36), darkMaterial, [0, 0.86, 0]);
    const dropper = addMesh(new THREE.SphereGeometry(0.2, 24, 18), darkMaterial, [0, 1.09, 0]);
    dropper.scale.set(0.85, 1.15, 0.85);
    addMesh(new THREE.CylinderGeometry(0.3, 0.3, 0.035, 36), metalMaterial, [0, -0.36, 0]);
  } else if (kind === "oil") {
    addMesh(new THREE.CylinderGeometry(0.37, 0.4, 0.96, 48), colorMaterial, [0, -0.04, 0]);
    addMesh(new THREE.CylinderGeometry(0.15, 0.15, 0.2, 32), metalMaterial, [0, 0.55, 0]);
    addMesh(new THREE.CylinderGeometry(0.18, 0.18, 0.46, 32), darkMaterial, [0, 0.86, 0]);
    addMesh(new THREE.SphereGeometry(0.19, 24, 16), darkMaterial, [0, 1.12, 0]).scale.set(0.8, 1.1, 0.8);
    addMesh(new THREE.TorusGeometry(0.3, 0.018, 8, 40), metalMaterial, [0, -0.18, 0.23]);
  } else if (kind === "soap") {
    addMesh(new THREE.CylinderGeometry(0.47, 0.49, 0.58, 48), colorMaterial, [0, -0.1, 0]);
    addMesh(new THREE.CylinderGeometry(0.5, 0.5, 0.17, 48), metalMaterial, [0, 0.28, 0]);
    addMesh(new THREE.CylinderGeometry(0.49, 0.49, 0.15, 48), darkMaterial, [0, 0.43, 0]);
    addMesh(new THREE.TorusGeometry(0.28, 0.018, 8, 40), metalMaterial, [0, -0.1, 0.47]);
  } else if (kind === "rose") {
    addMesh(new THREE.CylinderGeometry(0.33, 0.38, 0.88, 48), colorMaterial, [0, -0.06, 0]);
    addMesh(new THREE.CylinderGeometry(0.15, 0.15, 0.2, 32), metalMaterial, [0, 0.5, 0]);
    addMesh(new THREE.CylinderGeometry(0.18, 0.18, 0.34, 32), softMaterial, [0, 0.77, 0]);
    addMesh(new THREE.CylinderGeometry(0.22, 0.16, 0.2, 32), colorMaterial, [0, 1.03, 0]);
    addMesh(new THREE.TorusGeometry(0.29, 0.016, 8, 40), metalMaterial, [0, -0.1, 0.25]);
  } else if (kind === "ghassoul") {
    addMesh(new THREE.CylinderGeometry(0.48, 0.5, 0.7, 48), colorMaterial, [0, -0.08, 0]);
    addMesh(new THREE.CylinderGeometry(0.52, 0.52, 0.18, 48), darkMaterial, [0, 0.34, 0]);
    addMesh(new THREE.CylinderGeometry(0.5, 0.5, 0.035, 48), metalMaterial, [0, 0.45, 0]);
    addMesh(new THREE.TorusGeometry(0.3, 0.018, 8, 40), metalMaterial, [0, -0.08, 0.43]);
  } else if (kind === "cream") {
    addMesh(new THREE.CylinderGeometry(0.48, 0.5, 0.72, 48), colorMaterial, [0, -0.05, 0]);
    addMesh(new THREE.CylinderGeometry(0.51, 0.51, 0.2, 48), softMaterial, [0, 0.42, 0]);
    addMesh(new THREE.CylinderGeometry(0.49, 0.49, 0.04, 48), metalMaterial, [0, 0.52, 0]);
  } else if (kind === "perfume") {
    addMesh(new THREE.BoxGeometry(0.76, 1.05, 0.42), colorMaterial, [0, -0.08, 0]);
    addMesh(new THREE.CylinderGeometry(0.15, 0.15, 0.26, 32), metalMaterial, [0, 0.58, 0]);
    addMesh(new THREE.BoxGeometry(0.38, 0.22, 0.35), softMaterial, [0, 0.8, 0]);
    addMesh(new THREE.TorusGeometry(0.27, 0.018, 8, 40), metalMaterial, [0, -0.1, 0.22]);
  } else if (kind === "bottle") {
    addMesh(new THREE.CylinderGeometry(0.38, 0.41, 1.45, 48), colorMaterial, [0, -0.04, 0]);
    addMesh(new THREE.CylinderGeometry(0.22, 0.22, 0.22, 36), softMaterial, [0, 0.78, 0]);
    addMesh(new THREE.CylinderGeometry(0.23, 0.23, 0.22, 36), darkMaterial, [0, 1, 0]);
    addMesh(new THREE.TorusGeometry(0.39, 0.025, 10, 48), metalMaterial, [0, -0.17, 0]);
  } else if (kind === "bag") {
    addMesh(new THREE.BoxGeometry(1.35, 0.95, 0.55), colorMaterial, [0, -0.17, 0]);
    [-0.38, 0.38].forEach((x) => {
      const handle = new THREE.CatmullRomCurve3([
        new THREE.Vector3(x - 0.17, 0.26, 0), new THREE.Vector3(x - 0.16, 0.78, 0),
        new THREE.Vector3(x, 0.88, 0), new THREE.Vector3(x + 0.16, 0.78, 0),
        new THREE.Vector3(x + 0.17, 0.26, 0)
      ]);
      addMesh(new THREE.TubeGeometry(handle, 20, 0.045, 10, false), darkMaterial, [0, 0, 0]);
    });
    addMesh(new THREE.BoxGeometry(0.9, 0.025, 0.03), metalMaterial, [0, -0.05, 0.29]);
  } else if (kind === "lamp") {
    addMesh(new THREE.CylinderGeometry(0.48, 0.48, 0.12, 48), darkMaterial, [0, -0.62, 0]);
    addMesh(new THREE.CylinderGeometry(0.07, 0.09, 0.83, 24), metalMaterial, [0, -0.12, 0]);
    addMesh(new THREE.CylinderGeometry(0.18, 0.48, 0.72, 48, 1, true), colorMaterial, [0, 0.53, 0]);
    addMesh(new THREE.SphereGeometry(0.15, 24, 16), softMaterial, [0, 0.16, 0]);
  } else if (kind === "babouche") {
    const sole = addMesh(new THREE.SphereGeometry(0.58, 36, 24), darkMaterial, [0, -0.27, 0]);
    sole.scale.set(0.73, 0.24, 1.28);
    const upper = addMesh(new THREE.SphereGeometry(0.54, 36, 24), colorMaterial, [0, -0.04, -0.06]);
    upper.scale.set(0.69, 0.25, 0.85);
    const vamp = addMesh(new THREE.SphereGeometry(0.48, 36, 24), colorMaterial, [0, 0.13, 0.24]);
    vamp.scale.set(0.68, 0.2, 0.5);
    const trim = addMesh(new THREE.TorusGeometry(0.37, 0.026, 10, 48), metalMaterial, [0, 0.08, -0.06]);
    trim.scale.set(0.95, 0.3, 1.32);
    trim.rotation.x = Math.PI / 2;
  } else if (kind === "teapot") {
    const body = addMesh(new THREE.SphereGeometry(0.62, 40, 28), colorMaterial, [0, -0.08, 0]);
    body.scale.set(1, 0.83, 0.91);
    addMesh(new THREE.CylinderGeometry(0.26, 0.32, 0.2, 36), metalMaterial, [0, 0.46, 0]);
    addMesh(new THREE.CylinderGeometry(0.26, 0.24, 0.035, 36), darkMaterial, [0, 0.58, 0]);
    addMesh(new THREE.SphereGeometry(0.1, 24, 16), metalMaterial, [0, 0.68, 0]);
    const spout = addMesh(new THREE.ConeGeometry(0.16, 0.55, 32), colorMaterial, [0, 0.12, 0.67]);
    spout.rotation.x = Math.PI / 2.4;
    const handle = addMesh(new THREE.TorusGeometry(0.4, 0.065, 12, 40, Math.PI), metalMaterial, [0, 0.02, -0.53]);
    handle.rotation.z = Math.PI;
    addMesh(new THREE.TorusGeometry(0.48, 0.035, 10, 48), metalMaterial, [0, -0.45, 0]);
  } else if (kind === "basket") {
    addMesh(new THREE.CylinderGeometry(0.43, 0.62, 0.8, 48, 1, true), colorMaterial, [0, -0.18, 0]);
    [0.12, 0.3, 0.48].forEach((height) => addMesh(new THREE.TorusGeometry(0.48 + height * 0.12, 0.025, 8, 48), metalMaterial, [0, height - 0.48, 0]));
    const handle = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.4, 0.2, 0), new THREE.Vector3(-0.48, 0.85, 0),
      new THREE.Vector3(0, 1.08, 0), new THREE.Vector3(0.48, 0.85, 0),
      new THREE.Vector3(0.4, 0.2, 0)
    ]);
    addMesh(new THREE.TubeGeometry(handle, 32, 0.055, 10, false), darkMaterial, [0, 0, 0]);
  } else if (kind === "tray") {
    addMesh(new THREE.CylinderGeometry(0.78, 0.73, 0.12, 8), metalMaterial, [0, -0.12, 0]);
    addMesh(new THREE.CylinderGeometry(0.69, 0.69, 0.06, 8), colorMaterial, [0, -0.02, 0]);
    const tileColors = ["#c43d35", "#e2bd65", "#f2e7cb", "#285a42"];
    for (let index = 0; index < 8; index += 1) {
      const angle = (index / 8) * Math.PI * 2;
      const tile = addMesh(new THREE.BoxGeometry(0.2, 0.025, 0.2), makeMaterial(tileColors[index % tileColors.length], 0.36, 0.18), [Math.cos(angle) * 0.38, 0.025, Math.sin(angle) * 0.38]);
      tile.rotation.y = -angle;
      tile.rotation.x = -0.04;
    }
    addMesh(new THREE.CylinderGeometry(0.17, 0.17, 0.035, 32), metalMaterial, [0, 0.03, 0]);
  } else {
    const body = addMesh(new THREE.BoxGeometry(0.9, 1.32, 0.2), colorMaterial, [0, 0, 0]);
    body.rotation.z = -0.16;
    const top = addMesh(new THREE.CylinderGeometry(0.31, 0.31, 0.04, 48), darkMaterial, [0, 0.51, 0.13]);
    top.rotation.x = Math.PI / 2;
    const port = addMesh(new THREE.BoxGeometry(0.24, 0.07, 0.06), metalMaterial, [0, -0.55, 0.13]);
    port.rotation.z = -0.16;
    const indicator = addMesh(new THREE.SphereGeometry(0.04, 16, 12), softMaterial, [0.28, -0.42, 0.14]);
    indicator.material = new THREE.MeshBasicMaterial({ color: "#efc64b" });
  }

  const width = Math.max(container.clientWidth, 120);
  const height = Math.max(container.clientHeight, 120);
  const scene = new THREE.Scene();
  scene.background = null;
  const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
  camera.position.set(3.2, 2.5, 5.2);
  camera.lookAt(0, 0.15, 0);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
  renderer.setSize(width, height);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.append(renderer.domElement);
  scene.add(new THREE.HemisphereLight("#fff9e8", "#52604d", 1.05));
  const keyLight = new THREE.DirectionalLight("#fff4d8", 3.2);
  keyLight.intensity = 1.75;
  keyLight.position.set(3, 5, 4);
  keyLight.castShadow = true;
  scene.add(keyLight);
  const fillLight = new THREE.DirectionalLight("#c7e4da", 0.65);
  fillLight.position.set(-4, 2, -3);
  scene.add(fillLight);
  scene.add(group);
  group.rotation.set(-0.08, -0.2, 0);
  if (kind === "speaker") { group.position.y = -0.08; group.rotation.x = 0.08; }
  if (kind === "earbuds") { group.position.y = -0.02; group.rotation.x = -0.14; }
  if (kind === "charger") { group.position.y = 0.02; group.rotation.x = -0.12; }
  if (kind === "headphones") { group.position.y = -0.43; group.scale.setScalar(1.1); }

  let dragging = false;
  let previousX = 0;
  let targetRotation = -0.2;
  let animationId;
  let disposed = false;
  let startTime = performance.now();
  const isSmallModel = container.classList.contains("card-model") || container.classList.contains("hero-model");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointerDown = (event) => { dragging = true; previousX = event.clientX; container.setPointerCapture?.(event.pointerId); };
  const pointerMove = (event) => {
    if (!dragging) return;
    targetRotation += (event.clientX - previousX) * 0.011;
    previousX = event.clientX;
  };
  const pointerUp = () => { dragging = false; };
  container.addEventListener("pointerdown", pointerDown);
  container.addEventListener("pointermove", pointerMove);
  container.addEventListener("pointerup", pointerUp);
  container.addEventListener("pointercancel", pointerUp);
  const updateModelColor = (event) => colorMaterial.color.set(event.detail);
  container.addEventListener("model-color-change", updateModelColor);

  const resizeObserver = new ResizeObserver(() => {
    if (disposed || !container.clientWidth || !container.clientHeight) return;
    const nextWidth = container.clientWidth;
    const nextHeight = container.clientHeight;
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight);
  });
  resizeObserver.observe(container);
  const animate = (now) => {
    if (disposed || !container.isConnected || !container.dataset.inView) return;
    animationId = requestAnimationFrame(animate);
    if (!dragging) targetRotation += (reducedMotion ? 0 : 0.0025) * (isSmallModel ? 0.8 : 1);
    group.rotation.y += (targetRotation - group.rotation.y) * 0.07;
    if (!isSmallModel && !reducedMotion) group.position.y += Math.sin((now - startTime) * 0.001) * 0.0007;
    renderer.render(scene, camera);
  };
  renderer.render(scene, camera);
  const observer = new IntersectionObserver((entries) => {
    if (!container.isConnected) {
      disposed = true;
      if (animationId) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      renderer.dispose();
      renderer.forceContextLoss();
      observer.disconnect();
      return;
    }
    if (entries[0].isIntersecting) {
      container.dataset.inView = "true";
      if (!animationId) animationId = requestAnimationFrame(animate);
    } else {
      container.dataset.inView = "false";
      if (animationId) cancelAnimationFrame(animationId);
      animationId = null;
    }
  });
  observer.observe(container);
  container.dataset.initialized = "true";
}

function init() {
  setupNavigation();
  renderGrid();
  loadProductPage();
  renderCart();
  setupCart();
  setupSearch();
  setupFilters();
  setupForms();
  if (!window.THREE) {
    const retry = window.setInterval(() => {
      if (!window.THREE) return;
      window.clearInterval(retry);
      document.querySelectorAll("[data-model]").forEach((container) => {
        if (container.dataset.initialized !== "true") createModel(container);
      });
    }, 100);
    window.setTimeout(() => window.clearInterval(retry), 10000);
  }
}

document.addEventListener("DOMContentLoaded", init);
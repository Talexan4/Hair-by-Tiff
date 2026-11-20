(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
        return;
    }

    const overlay = document.createElement("div");
    overlay.id = "autumn-leaves";
    overlay.setAttribute("aria-hidden", "true");

    const leafColors = ["#b83a32", "#e06b2f", "#e6b943", "#89583c"];
    const leafCount = window.matchMedia("(max-width: 600px)").matches ? 10 : 18;
    const svgNamespace = "http://www.w3.org/2000/svg";

    for (let index = 0; index < leafCount; index += 1) {
        const leaf = document.createElement("span");
        leaf.className = "autumn-leaf";

        const size = 18 + Math.random() * 20;
        const duration = 6.2 + Math.random() * 1.4;
        const rotation = () => `${Math.round(Math.random() * 720 - 360)}deg`;
        const drift = () => `${Math.round(Math.random() * 240 - 120)}px`;

        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.top = `${-8 - Math.random() * 18}vh`;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size * 1.2}px`;
        leaf.style.color = leafColors[Math.floor(Math.random() * leafColors.length)];
        leaf.style.setProperty("--fall-duration", `${duration}s`);
        leaf.style.setProperty("--leaf-scale", `${0.75 + Math.random() * 0.6}`);
        leaf.style.setProperty("--drift-one", drift());
        leaf.style.setProperty("--drift-two", drift());
        leaf.style.setProperty("--drift-three", drift());
        leaf.style.setProperty("--drift-end", drift());
        leaf.style.setProperty("--rotation-start", rotation());
        leaf.style.setProperty("--rotation-one", rotation());
        leaf.style.setProperty("--rotation-two", rotation());
        leaf.style.setProperty("--rotation-three", rotation());
        leaf.style.setProperty("--rotation-end", rotation());

        const svg = document.createElementNS(svgNamespace, "svg");
        svg.setAttribute("viewBox", "0 0 40 48");
        svg.setAttribute("focusable", "false");
        svg.setAttribute("aria-hidden", "true");

        const shape = document.createElementNS(svgNamespace, "path");
        shape.setAttribute("d", "M20 2C17 10 5 13 5 25c0 10 8 18 15 21 7-3 15-11 15-21C35 13 23 10 20 2Z");
        shape.setAttribute("fill", "currentColor");
        shape.setAttribute("stroke", "rgba(55, 30, 20, .45)");
        shape.setAttribute("stroke-width", "1.2");

        const vein = document.createElementNS(svgNamespace, "path");
        vein.setAttribute("d", "M20 43V10m0 10-8-7m8 16 8-8m-8 2-7-5m7 16 7-7");
        vein.setAttribute("fill", "none");
        vein.setAttribute("stroke", "rgba(70, 38, 22, .58)");
        vein.setAttribute("stroke-width", "1.2");
        vein.setAttribute("stroke-linecap", "round");

        svg.append(shape, vein);
        leaf.append(svg);
        overlay.append(leaf);
    }

    document.body.append(overlay);
    window.setTimeout(() => overlay.remove(), 8000);
})();

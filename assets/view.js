function updateActiveNav() {
    const path = location.pathname;

    document.querySelectorAll("[data-route]").forEach(link => {
        const route = link.dataset.route;

        const active =
            route === "/"
                ? path === "/"
                : path.startsWith(route);

        link.classList.toggle("is-active", active);
        link.toggleAttribute("aria-current", active);
    });
}

async function navigate(url) {
    const response = await fetch(url);
    const html = await response.text();

    const parser = new DOMParser();
    const newDoc = parser.parseFromString(html, "text/html");

    document.startViewTransition(() => {
        document.title = newDoc.title;

        document.querySelector("main").replaceWith(
            newDoc.querySelector("main")
        );

        history.pushState({}, "", url);
        updateActiveNav();
    });

}

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (!link) return;
    if (link.origin !== location.origin) return;
    if (link.target === "_blank") return;
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    navigate(link.href);
});

window.addEventListener("popstate", () => {
    navigate(location.href);
});

updateActiveNav();
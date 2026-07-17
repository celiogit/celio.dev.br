const UI = {
    labels: {
        system: "Sistema",
        light: "Claro",
        dark: "Escuro",
    },
};

const ThemeToggle = {
    STORAGE_KEY: "lp-theme",
    DEFAULT_THEME: "system",

    THEMES: ["system", "light", "dark"],

    DEBUG: false,

    init({ debug = this.DEBUG } = {}) {
        this.DEBUG = debug;

        this.log("debug", "Initializing theme toggle...");

        this.button = document.querySelector(".theme-toggle");

        if (!this.button) {
            this.log("warn", "Theme toggle button not found.");
            return;
        }

        const theme = this.load();

        this.apply(theme);

        this.button.addEventListener("click", () => {
            const next = this.next();

            this.log("debug", "Theme clicked. Next theme:", next);

            this.apply(next);
        });

        this.log("info", "Theme toggle initialized.");
    },

    apply(theme) {
        this.log("debug", "Applying theme:", theme);

        if (!this.THEMES.includes(theme)) {
            theme = this.DEFAULT_THEME;
        }

        document.documentElement.dataset.theme = theme;

        this.updateButton(theme);
        this.save(theme);

        this.log("info", "Theme applied.");
    },

    next() {
        const current = document.documentElement.dataset.theme ?? this.DEFAULT_THEME;

        const index = this.THEMES.indexOf(current);

        return this.THEMES[
            (index + 1) % this.THEMES.length
        ];
    },

    updateButton(theme) {
        this.button.dataset.theme = theme;

        this.button.setAttribute(
            "aria-label",
            UI.labels[theme]
        );

        this.button.setAttribute(
            "aria-pressed",
            String(theme !== "system")
        );
    },

    load() {
        this.log("debug", "Loading theme...");

        try {
            return localStorage.getItem(this.STORAGE_KEY) ?? this.DEFAULT_THEME;
        } catch (error) {
            this.log(
                "error",
                "Unable to access localStorage.",
                error
            );

            return this.DEFAULT_THEME;
        }
    },

    save(theme) {
        try {
            localStorage.setItem(this.STORAGE_KEY, theme);
        } catch (error) {
            this.log(
                "error",
                "Unable to save theme.",
                error
            );
        }
    },

    log(level, ...args) {
        if (!this.DEBUG) {
            return;
        }

        console[level]("[ThemeToggle]", ...args);
    },
};


document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", () => ThemeToggle.init(), {
          once: true,
      })
    : ThemeToggle.init();
const AccentPicker = {
    STORAGE_KEY: "lp-accent",
    DEFAULT_ACCENT: "#3584e4",

    DEBUG: false,

    init({ debug = this.DEBUG } = {}) {
        this.DEBUG = debug;

        this.log("debug", "Initializing accent picker...");

        this.buttons = document.querySelectorAll(".accent-picker .swatch");

        if (this.buttons.length === 0) {
            this.log("warn", "No accent buttons found.");
            return;
        }

        this.log("info", `Found ${this.buttons.length} accent button(s).`);

        const accent = this.load();
        this.apply(accent);

        for (const button of this.buttons) {
            button.addEventListener("click", () => {
                const accent = button.dataset.accent ?? this.DEFAULT_ACCENT;

                this.log("debug", "Accent button clicked.", accent);

                this.apply(accent);
            });
        }

        this.log("info", "Accent picker initialized.");
    },

    apply(accent) {
        this.log("debug", "Applying accent:", accent);

        document.documentElement.style.setProperty("--accent", accent);

        this.sync(accent);
        this.save(accent);

        this.log("info", "Accent applied.");
    },

    sync(accent) {
        this.log("debug", "Syncing button states...");

        for (const button of this.buttons) {
            button.setAttribute(
                "aria-pressed",
                String(button.dataset.accent === accent)
            );
        }

        this.log("info", "Button states synchronized.");
    },

    load() {
        this.log("debug", "Loading accent from localStorage...");

        try {
            const accent = localStorage.getItem(this.STORAGE_KEY);

            if (accent === null) {
                this.log(
                    "warn",
                    "No saved accent found. Using default:",
                    this.DEFAULT_ACCENT
                );

                return this.DEFAULT_ACCENT;
            }

            this.log("info", "Loaded accent:", accent);

            return accent;
        } catch (error) {
            this.log(
                "error",
                "Unable to access localStorage. Using default accent.",
                error
            );

            return this.DEFAULT_ACCENT;
        }
    },

    save(accent) {
        this.log("debug", "Saving accent:", accent);

        try {
            localStorage.setItem(this.STORAGE_KEY, accent);

            this.log("info", "Accent saved.");
        } catch (error) {
            this.log(
                "error",
                "Unable to save accent to localStorage.",
                error
            );
        }
    },

    log(level, ...args) {
        if (!this.DEBUG) {
            return;
        }

        console[level]("[AccentPicker]", ...args);
    },
};

document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", () => AccentPicker.init(), {
          once: true,
      })
    : AccentPicker.init();
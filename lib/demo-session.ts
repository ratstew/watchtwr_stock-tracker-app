// Demo login only: anyone can set this cookie, so it does not protect anything.
// Replace with real authentication before storing any user data.
export const DEMO_SESSION_COOKIE = "watchtwr-demo-session";

export const startDemoSession = () => {
    document.cookie = `${DEMO_SESSION_COOKIE}=1; path=/; SameSite=Lax`;
};

export const endDemoSession = () => {
    document.cookie = `${DEMO_SESSION_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
};

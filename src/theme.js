export function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
    }
  }
  
  export function initTheme() {
    const savedTheme = localStorage.theme;
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
}
  
// Capture the current theme from local storage and adjust the page to use the current theme.
const htmlEl = document.getElementsByTagName('html')[0];
const defaultTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : 'light';
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : defaultTheme;

if (currentTheme) {
    htmlEl.dataset.theme = currentTheme;
}

//Gets first onload theme and sets sun/moon
if (htmlEl.dataset.theme == 'dark'){
    document.getElementsByClassName("theme_toggle")[0].innerHTML = "sun";    
} 
else {
    document.getElementsByClassName("theme_toggle")[0].innerHTML = "moon";
}

// When the user changes the theme, we need to save the new value on local storage
function toggleTheme(){
    if (htmlEl.dataset.theme == 'dark'){
        htmlEl.dataset.theme = 'light';
        localStorage.setItem('theme', 'light')
        document.getElementsByClassName("theme_toggle")[0].innerHTML = "moon";

    } 
    else {
        htmlEl.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark')
        document.getElementsByClassName("theme_toggle")[0].innerHTML = "sun";

    }
}

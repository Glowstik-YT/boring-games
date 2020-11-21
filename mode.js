
const btn = document.getElementById('dark-btn');
const darkMode = localStorage.getItem('darkMode');




const enableDarkMode = () => {
    document.getElementById('mode').setAttribute('href', 'web-dark.css');
    localStorage.setItem("darkMode", "enabled");
};

const disabledDarkMode = () => {
    document.getElementById('mode').setAttribute('href', 'web-light.css');
    localStorage.setItem("darkMode", null);
};


if (darkMode === "enabled") {
    enableDarkMode();
}


btn.addEventListener("click", () => {
    const darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disabledDarkMode();
        console.log(darkMode);
    }
});

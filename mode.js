
const btn = document.getElementById('dark-btn');
const darkMode = localStorage.getItem('darkMode');




const enableDarkMode = () => {
  try{
    document.getElementById('img1').setAttribute('src', 'https://wallpaperaccess.com/full/772361.jpg');
    document.getElementById('img2').setAttribute('src', 'https://wallpapercave.com/wp/wp6030002.jpg');
    document.getElementById('img3').setAttribute('src', 'https://wallpapercave.com/wp/wp6030002.jpg');
    document.getElementById('img4').setAttribute('src', 'https://wallpapercave.com/wp/wp6030002.jpg');
    document.getElementById('img5').setAttribute('src', 'https://i.pinimg.com/originals/bf/97/f7/bf97f7fb893ea02038a28bf6415fed02.jpg');
    let btnname = document.getElementById('dark-btn');
    btnname.innerHTML = "Switch to Light Mode";
  }

  catch(err){
    console.log(err)
  }

  finally{
    document.getElementById('mode').setAttribute('href', 'web-dark.css');

    localStorage.setItem("darkMode", 'enabled');
  }
};



const disabledDarkMode = () => {
  try{

    document.getElementById('img1').setAttribute('src', 'https://i.pinimg.com/originals/85/6f/31/856f31d9f475501c7552c97dbe727319.jpg');
    document.getElementById('img2').setAttribute('src', 'https://static.vecteezy.com/system/resources/thumbnails/001/072/376/original/network-connections-on-white-background.jpg');
    document.getElementById('img3').setAttribute('src', 'https://i.pinimg.com/originals/46/1d/25/461d254f8563f8945ce3a385f289df17.jpg');
    document.getElementById('img4').setAttribute('src', 'https://www.lefthudson.com/wp-content/uploads/2019/11/white-background-wallpaper-awesome-white-wallpapers-in-hd-barbaras-hd-wallpapers-ideas-of-white-background-wallpaper.jpg');
    document.getElementById('img5').setAttribute('src', 'https://wallpaperaccess.com/full/410244.jpg');
    let btnname = document.getElementById('dark-btn');
    btnname.innerHTML = "Switch to Dark Mode";
  }

  catch(err){
    console.log(err)
  }

  finally{
    document.getElementById('mode').setAttribute('href', 'web-light.css');
    localStorage.setItem("darkMode", null);
  }
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

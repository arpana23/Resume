function showHide() {
    var x = document.getElementById("myLinks");
    if (x.style.right === "-100%") {
        x.style.right = "-0.5%";
    } else {
        x.style.right = "-100%";
    }
}


function myclose() {
document.getElementById("myLinks").style.right = "-100%";
}
// const hamburger = document.getElementById('hamburgerMenu');
//     const menu = document.getElementById('myLinks');

//     hamburger.addEventListener('click', () => {
//       menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
//     });
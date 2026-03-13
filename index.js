function fontSize() {
     document.documentElement.style.fontSize = screen.width / 35 + 'px';
}
fontSize();
window.onresize = fontSize;
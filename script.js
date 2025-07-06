var theme=document.getElementById("theme");
window.onload=function(){
    initTheme();
};
function initTheme()
{
    const theme=localStorage.getItem('theme');
    if (theme=="dark-theme")
    {
        document.body.classList.toggle("dark-theme");
    theme.on
    }
    
}
theme.onclick=function()
{
    localStorage.getItem('theme')==='dark-theme'?localStorage.setItem('theme',''):localStorage.setItem('theme','dark-theme');
    initTheme();

}
var sidebtn=document.getElementById("sidebtn");
sidebtn.onclick=function()
{
    document.body.classList.toggle("sidebtnon");
sidebtn.on
}

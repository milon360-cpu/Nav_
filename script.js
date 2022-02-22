let btn = document.getElementById('toggle');
let ulMenu = document.getElementById('ul-menu');
let toggleOpen = false
btn.addEventListener('click',function(event)
{
    if(toggleOpen==false)
    {
        ulMenu.style.right = '0%';
        toggleOpen = true;
    }
    else if (toggleOpen==true)
    {
        ulMenu.style.right = '-50%';
        toggleOpen = false;
    }
    
})
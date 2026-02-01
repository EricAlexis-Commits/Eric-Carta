const btnAbrir= document.querySelector('#open');
const btnCerrar=document.querySelector('#close');

btnCerrar.disabled=true;

btnAbrir.addEventListener('click',()=>{

})
btnAbrir.addEventListener('click',()=>{
    btnAbrir.disabled=true;
    btnCerrar.disabled=false;
    const coverElement=document.querySelector('.cover');
    coverElement.classList.add('open-cover');
    
    setTimeout(() => {
        coverElement.style.zIndex=-1;

    const openPaperElement=document.querySelector('.paper');
    openPaperElement.classList.remove('close-paper');
    openPaperElement.classList.add('open-paper');

    const heartElement=document.querySelector('.heart');
    heartElement.style.display='block';
    },500);

    


})
btnCerrar.addEventListener('click',()=>{
    btnAbrir.disabled=false;
    btnCerrar.disabled=true;
    const coverElement=document.querySelector('.cover');
    /*coverElement.style.zIndex=0; */
   
    /*coverElement.style.zIndex=0;*/

    const openPaperElement=document.querySelector('.paper');
    openPaperElement.classList.remove('open-paper');
    openPaperElement.classList.add('close-paper');
     setTimeout(() => {
        coverElement.style.zIndex=0;
        coverElement.classList.remove('open-cover');

        const heartElement=document.querySelector('.heart');
        heartElement.style.display='none';
    }, 500);
})
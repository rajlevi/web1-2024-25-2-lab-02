const btngroup = document.querySelector('.container');
const prevBtn = btngroup.querySelector('button.btn:nth-child(1)');
if(prevBtn){
    prevBtn.classList.add('btn-info');
}
const oneBtn = btngroup.querySelector('button.btn:nth-child(2)');
if(prevBtn){
    oneBtn.classList.add('btn-primary');
}
const nextBtn = btngroup.querySelector('button.btn:nth-child(3)');
if(prevBtn){
    nextBtn.classList.add('btn-info');
}

nextBtn.addEventListener('click', (e) => {console.log(e);});
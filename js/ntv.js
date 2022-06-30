let link = document.querySelectorAll(".link")

let imgacc = document.querySelectorAll('.link');
imgacc.forEach(acco => {
    acco.onclick = () =>{
       imgacc.forEach(subAcco => { 
         subAcco.classList.remove('active') 
        });
        acco.classList.add('active');
    } 
   });
  


const MoniTor = document.querySelector('.link1');
const IfRame = document.querySelector('.iframe');

MoniTor.addEventListener('click', () => { 
  IfRame.classList.add('hidden');
})
console.log("hisak")
let body=document.body;
let moon=document.getElementById('moon');
let sun=document.getElementById('sun');
let link=document.getElementsByTagName('a')
link=Array.from(link)
let logo=document.getElementsByTagName('img')[0]
let plus=document.querySelector('.plus')
let prescription1=document.querySelector('.prescription1')
let prescription2=document.querySelector('.prescription2')
let para=document.getElementsByTagName('p')
para=Array.from(para)
box1=document.querySelectorAll('.box_1')
console.log(box1)
box2=Array.from(box1)
console.log(box2)





console.log(link)
let darkmode=()=>{

    moon.style.display='none';
    sun.style.display='block';
    body.classList.add('darkmode')
    link.forEach(element => {
        element.classList.add('color')
        
    });
    sun.style.color='white'
    logo.classList.add('logofilter')
    plus.classList.add('darkmode')
    // prescription.classList.add('psbg')
    prescription1.classList.add('psbg')
    prescription2.classList.add('psbg')
    para.forEach((element)=>{
        element.classList.add('color')
    })
    box2.forEach((element)=>{
        element.classList.add('box1_dark_shadow')
        element.classList.remove('box1_lite_shadow')
    })
   
    
    


}

let litemode=()=>{
    sun.style.display='none'
    moon.style.display='block';
    body.classList.remove('darkmode')
    link.forEach(element => {
        element.classList.remove('color')
        
    });
    logo.classList.remove('logofilter')
    plus.classList.remove('darkmode')
    prescription1.classList.remove('psbg')
    prescription2.classList.remove('psbg')
    para.forEach((element)=>{
        element.classList.remove('color')
    })
    box2.forEach((element)=>{
        element.classList.remove('box1_dark_shadow')
        element.classList.add('box1_lite_shadow')
    })

}
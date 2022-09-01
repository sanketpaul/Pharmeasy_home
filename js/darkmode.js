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
}
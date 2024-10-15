const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        // else{
        //     entry.target.classList.remove('show')
        // }
    })
});


const hidden_ele= document.querySelectorAll(".hidden")
hidden_ele.forEach((ele) => {
    observer.observe(ele)
});

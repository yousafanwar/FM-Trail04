let target = document.querySelector(".index-sec2");
let sec2Slide = document.querySelector(".index-sec2-slideOut");
let sec2Id = document.querySelectorAll(".testId");


function intersectionObserveFunc(entries, options){
    entries.forEach(function(entry){
        if(entry.isIntersecting){

            sec2Id.forEach(function(entry){

                if(entry.classList.contains("index-sec2-slideOut")){
                    entry.classList.remove("index-sec2-slideOut");
                    entry.classList.add("index-sec2-slideIn");
                }
                
                if(entry.classList.contains("index-sec2-text-slideDown")){
                    entry.classList.remove("index-sec2-text-slideDown");
                    entry.classList.add("index-sec2-text-slideUp");
                    
                }

            })
            
        }
    })
}

let options = {
    root: null,
    threshold: 0.5,
}

let observer = new IntersectionObserver(intersectionObserveFunc, options);

if(target){
    observer.observe(target);
}
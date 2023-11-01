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
            })}
    })}
let options = {
    root: null,
    threshold: 0.5,
}

let observer = new IntersectionObserver(intersectionObserveFunc, options);

if(target){
    observer.observe(target);
}

////////////////////////////////////////////////////////////////////////

let sec4Target = document.querySelector(".sec-4-text");
let observer1 = new IntersectionObserver(intersectionObserveFunc2, options);


function intersectionObserveFunc2(entries, options){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            
            sec4Target.classList.remove("sec-4-text");
            sec4Target.classList.add(".sec-4-text-fadeIn");   
        }
    })
}

if(sec4Target){
    observer1.observe(sec4Target);
}


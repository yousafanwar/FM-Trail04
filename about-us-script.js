// alert("JS has been attached")

let slideInEffect = document.querySelectorAll(".blockquote-slide");


function intersectionObsFunc(entries, options){
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            // alert("The intersection has been completed");
 

            slideInEffect.forEach(function(entry){
                if(entry.classList.contains("slide-out")){
                    entry.classList.remove("slide-out");
                    entry.classList.add("slide-in");            
                }                    
            })
                
        }
    })
}

let options = {
    root: null,
    threshold: 0.5,
};

let observer = new IntersectionObserver(intersectionObsFunc, options);

let target = document.querySelector("#target");

if(target){
    observer.observe(target);
}



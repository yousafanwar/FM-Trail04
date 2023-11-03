let target = document.querySelector(".services-sec2");
let element = document.querySelector(".slideOut");
// let item = document.querySelector(".accordion-item");
let items = document.querySelectorAll(".accordion-item");

function intersectionObserveFuncServices(entries, observer){
    entries.forEach(function(entry){
        if(entry.isIntersecting){

            // alert("intersected")
            items.forEach(function(item){

                if(item.classList.contains("slideOut")){
                    item.classList.remove("slideOut");
                    item.classList.add("slideIn");
                }
                else if(item.classList.contains("slideOut-right")){
                    item.classList.remove("slideOut-right");
                    item.classList.add("slideIn-right");
                }



                    
            })
            // item.classList.remove("slideOut");
            // item.classList.add("slideIn");

            // element.classList.remove(".slideOut");
            // element.classList.add(".slideIn");


        }
        // else{
        //     item.classList.remove(".slideToRgt-effect");

        // }
    })
}

let options = {
    root: null,
    treshold: 0.5,
}


let observer = new IntersectionObserver(intersectionObserveFuncServices, options);

if(target){
    observer.observe(target);
}

// accordionItems.forEach((item) => {
//     observer.observe(item);
//   });
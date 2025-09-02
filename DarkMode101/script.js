let modeBtn=document.querySelector("#mode"); // It access the button from HTMl Code;
let crntMode= "light";                      // Stores the current mode of the page;
let body=document.querySelector("body");   // To access body;

modeBtn.addEventListener("click", ()=>{       // EventListner for onclick event the function trigger's
    if(crntMode=="light"){
        crntMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        crntMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    // console.log(crntMode);            // On console window let you know the actual theme of the page like light or dark.
});

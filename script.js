let images = document.getElementById("images");
let resetBtn = document.getElementById("reset");
let verifyBtn = document.getElementById("verify");
let verifyPara = document.getElementById("para");


let randomImg = Math.floor(Math.random() * 5) + 1;

const duplicate = document.querySelector(`.img${randomImg}`).cloneNode(true);
images.appendChild(duplicate)

let imageClicked = [];

const allImages = document.querySelectorAll("#images img");

allImages.forEach((img)=>{
    img.addEventListener("click", () =>{
        if(imageClicked.length >= 2 || img.classList.contains("selected")){
            return;
        }

        img.classList.add("selected");
        imageClicked.push(img);

        resetBtn.style.display = "inline-block";

        if(imageClicked.length === 2){
            verifyBtn.style.display = "inline-block";
        }else{
            verifyBtn.style.display = "none";
        }
    });
});


verifyBtn.addEventListener("click", ()=>{

    verifyPara.style.display = "block";
    
    if(imageClicked[0].classList[0] === imageClicked[1].classList[0]){
        verifyPara.textContent = `You are a human. Congratulations!`;
        verifyPara.style.color = "green";
    }else{
        verifyPara.innerHTML = `We can't verify you as a human. You selected the non-identical tiles.`;
        verifyPara.style.color = "red";
    }

    verifyBtn.style.display = "none";
});



resetBtn.addEventListener("click", () =>{
    imageClicked.forEach((img) => img.classList.remove("selected"));
    imageClicked = [];
    
    resetBtn.style.display = "none";
    verifyBtn.style.display = "none";
    
    verifyPara.textContent = "";
    verifyPara.style.display = "none";
});
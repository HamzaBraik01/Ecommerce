import carts from "./Data.js";
let id = 1;
// prendre un seul produit
const obj = carts.find(obj => obj.id == id);
console.log(obj)
//afficher image
const image = document.getElementById("image");
const img = document.createElement("img");
img.src = obj.image;
img.classList.add("w-full")
image.appendChild(img)
//afficher le titre
const content = document.getElementById("ProductTitle");
content.textContent =  obj.name;
//afficher la description
const description = document.getElementById("ProductDesc");
description.textContent = obj.description
// afficher radio button pour selection du memoire
const memoire = document.getElementById("memoire")
if(obj.memoire != null){
    obj.memoire.forEach(m=>{
        const radio = document.createElement("input")
        radio.setAttribute("type","radio");
        radio.setAttribute("name","memoire")
        radio.setAttribute("value",m)
        radio.style.accentColor="#FC6736"
        const label = document.createElement("label");
        label.innerText = m
        label.style.marginRight="10px"
        label.style.marginLeft="2px"
        memoire.appendChild(radio)
        memoire.appendChild(label)
    })
}
// prendre le value de memoire checked
memoire.addEventListener("change",function(){
        const chosenMemoire = document.querySelector('input[name = "memoire"]:checked').value;
        console.log(chosenMemoire)
})

const graphic = document.getElementById("graphic");
if(obj.graphics != null){
    Object.keys(obj.graphics).forEach(gra=>{
        const radio = document.createElement("input")
        radio.setAttribute("type","radio")
        radio.setAttribute("name","graphic")
        radio.setAttribute("Value", gra)
        const label = document.createElement("label")
        label.innerText = gra
        label.style.marginRight = "10px"
        label.style.marginLeft = "2px"
        radio.style.accentColor = "#FC6736"

        graphic.appendChild(radio)
        graphic.appendChild(label)
    })
}


//get the value 
graphic.addEventListener("change",()=>{
    const radio = document.querySelector("input[name = 'graphic']:checked").value
    let div = document.getElementById("ButtonsContain")
    if(!div){
        div = document.createElement("div")
        div.id = "ButtonsContain"
        graphic.appendChild(div)
    }
    div.innerHTML = ""
    if(radio == "nvidia"){
        obj.graphics.nvidia.forEach(item=>{
            const button = document.createElement("button")
            button.innerText = item
            button.setAttribute("value",item)
            div.appendChild(button)
            div.classList.add("flex-1")
            graphic.appendChild(div)
            button.addEventListener("click",()=>{
                console.log(button.value)
            })
        })
    }
    if(radio == "amd"){
        obj.graphics.amd.forEach(item=>{
            const button = document.createElement("button")
            button.innerText = item
            button.setAttribute("value",item)
            div.appendChild(button)
            div.classList.add("flex-1")
            graphic.appendChild(div)
            button.addEventListener("click",()=>{
                console.log(button.value)
            })
        })
    }
    if(radio == "intel"){
        obj.graphics.intel.forEach(item=>{
            const button = document.createElement("button")
            button.innerText = item
            button.setAttribute("value",item)
            div.appendChild(button)
            div.classList.add("flex-1")
            graphic.appendChild(div)
            button.addEventListener("click",()=>{
                console.log(button.value)
            })
        })
    }
    console.log(radio)
})
//get the processeur 
const proc = document.getElementById("processeur")
Object.keys(obj.processeur).forEach(item=>{
    const radio = document.createElement("input")
    radio.setAttribute("type","radio");
    radio.setAttribute("value",item)
    const label = document.createElement("label")
    label.textContent = item
    label.style.marginRight = '10px'
    label.style.marginLeft = "2px"
    radio.style.accentColor = "#FC6736"
    radio.setAttribute("name","processeur")
    proc.appendChild(radio)
    proc.appendChild(label)
})

proc.addEventListener("change",function(){
    const radio = document.querySelector("input[name = 'processeur']:checked").value;
    let div = document.getElementById("buttonContainer");
    // si div et deja remplir avec les choix de amd et l utilisateur click une autre fois sur amd il ne affiche pas autre fois les amd procs
    if(!div){
        div = document.createElement("div")
        div.id = "buttonContainer"
        proc.appendChild(div)
    }
    // en a vide le div apres l utilisateur choix un processeur et on doit le remplir avec les processeur du mark qui le choix
    div.innerHTML = ""
    if(radio == "amd"){
        obj.processeur.amd.forEach(item=>{
            const button = document.createElement("button");
            button.innerHTML = item
            button.value = item
            div.appendChild(button)
        })
    }
    if(radio == "intel"){
        div.innerHTML = ""
        obj.processeur.intel.forEach(item=>{
            const intelButton = document.createElement("button")
            intelButton.innerHTML = item
            intelButton.value = item
            div.appendChild(intelButton)
        })
    }
})
//get the price
const prix = document.getElementById("price")
prix.innerText = obj.price + "dh"
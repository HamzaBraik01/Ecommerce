import carts from "./Data.js";
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
// prendre un seul produit
const obj = carts.find(obj => obj.id == id);
console.log(obj)
// prendre le prix
let price = obj.price
const pricecontent = document.getElementById("price")
let finalMemoriePrice = 0 , finalCartPrice = 0, finalProcessurePrice = 0 , finalPrice = 0;
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
// pour stocker des donner pour le panier
export const donner = []
// afficher radio button pour selection du memoire
if(obj.categorie == "pc"){
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
    function updatePrice(){
        finalPrice = price +  finalMemoriePrice + finalProcessurePrice + finalCartPrice;
        pricecontent.innerText = finalPrice
        return finalPrice
    }
    // prendre le value de memoire checked
    memoire.addEventListener("change",function(){
            const chosenMemoire = document.querySelector('input[name = "memoire"]:checked').value;
            console.log(chosenMemoire)
            if(chosenMemoire == "250GB" && price == 1200){
                pricecontent.innerText = price 
            }
            switch(chosenMemoire){
                case "250GB":
                finalMemoriePrice = 0;
                break;
                case "500GB":
                finalMemoriePrice = 500;
                break;
                case "1TB":
                finalMemoriePrice = 1000;
                break;
            }
            updatePrice()
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
                button.classList.add("bg-[#FC6736]","text-white","rounded-sm","p-2" , "mr-1" , "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                graphic.appendChild(div)
                button.addEventListener("click",()=>{
                    console.log(button.value)
                    switch(button.value){
                        case "RTX 4090":
                            finalCartPrice = null
                            finalCartPrice = 500
                            break;
                        case "RTX 4070":
                            finalCartPrice = null
                            finalCartPrice = 700
                            break;
                        case "GeForce RTX 4060":
                            finalCartPrice = null
                            finalCartPrice = 900
                            break;
                        case "GeForce RTX 4080":
                            finalCartPrice = null
                            finalCartPrice = 1000
                            break;
                        case "RTX 4060 Ti":
                            finalCartPrice = null
                            finalCartPrice = 1200
                            break;
                        default:
                            finalCartPrice = 0
                    }
                    updatePrice()
                })
            })
        }
        if(radio == "amd"){
            obj.graphics.amd.forEach(item=>{
                const button = document.createElement("button")
                button.innerText = item
                button.setAttribute("value",item)
                button.classList.add("bg-[#FC6736]","text-white","rounded-sm","p-2" , "mr-1" , "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                graphic.appendChild(div)
                button.addEventListener("click",()=>{
                    console.log(button.value)
                    switch(button.value){
                        case "Radeon RX 7900 XTX":
                            finalCartPrice = null
                            finalCartPrice = 800
                            break;
                        case "Radeon RX 7600":
                            finalCartPrice = null
                            finalCartPrice = 900
                            break;
                        case "Radeon RX 7800 XT":
                            finalCartPrice = null
                            finalCartPrice = 750
                            break;
                        case "Radeon RX 7900 XT":
                            finalCartPrice = null
                            finalCartPrice = 900
                            break;
                        case "Radeon RX 6700 XT":
                            finalCartPrice = null
                            finalCartPrice = 450
                            break;
                        default:
                    }
                    updatePrice()
                })
            })
        }
        if(radio == "intel"){
            obj.graphics.intel.forEach(item=>{
                const button = document.createElement("button")
                button.innerText = item
                button.setAttribute("value",item)
                button.classList.add("bg-[#FC6736]","text-white","rounded-sm","p-2" , "mr-1" , "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                graphic.appendChild(div)
                button.addEventListener("click",()=>{
                    console.log(button.value)
                    switch(button.value){
                        case "Arc A750":
                            finalCartPrice = null
                            finalCartPrice = 590
                            break
                        case "Arc A380":
                            finalCartPrice = null
                            finalCartPrice = 700
                            break;
                    }
                    updatePrice()
                })
            })
        }
        console.log(radio)
    })
    //get the processeur 
    const proc = document.getElementById("processeur")
    if(obj.processeur != null){
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
    }
    
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
                button.classList.add("bg-[#FC6736]","text-white","rounded-sm","p-2" , "mr-1" , "mt-1")
                div.appendChild(button)
                div.classList.add("inline-block")
                button.addEventListener("click",()=>{
                    switch(button.value){
                        case "Ryzen 5 7600":
                            finalProcessurePrice = null;
                            finalProcessurePrice = 800;
                            break
                        case "Ryzen 7 7800X3D":
                            finalProcessurePrice = null;
                            finalProcessurePrice = 970
                            break;
                        case "Ryzen 7 5800X3D":
                            finalProcessurePrice = null
                            finalProcessurePrice = 890
                            break;
                        case "Ryzen 9 7950X3D":
                            finalProcessurePrice = null;
                            finalProcessurePrice = 800;
                            break;
                        case "Ryzen 5 7600X":
                            finalProcessurePrice = null
                            finalProcessurePrice = 760
                            break;
                        case "Ryzen 5 5600X":
                            finalProcessurePrice = null
                            finalProcessurePrice = 898
                            break;
                        case "AMD Ryzen 5 5600G":
                            finalProcessurePrice = null
                            finalProcessurePrice = 777
                            break;
                        default:
                            finalCartPrice = 0;
                    }
                    updatePrice()
                })
            })
        }
        if(radio == "intel"){
            div.innerHTML = ""
            obj.processeur.intel.forEach(item=>{
                const intelButton = document.createElement("button")
                intelButton.innerHTML = item
                intelButton.value = item
                intelButton.classList.add("bg-[#FC6736]","text-white","rounded-sm","p-2" , "mr-1" , "mt-1")
                div.appendChild(intelButton)
                div.classList.add("inline-block")
                intelButton.addEventListener("click",function(){
                    switch(intelButton.value){
                        case "Core i3-13100F":
                            finalProcessurePrice = null
                            finalProcessurePrice = 899
                            break;
                        case "Core i5-13600K":
                            finalProcessurePrice = null
                            finalProcessurePrice = 777
                            break;
                        case "Core i9-13900K":
                            finalProcessurePrice = null
                            finalProcessurePrice = 675
                            break
                        case "Core i7-13700K":
                            finalProcessurePrice = null
                            finalProcessurePrice = 1500
                            break
                        case "Intel Core i5-13400":
                            finalProcessurePrice = null
                            finalProcessurePrice = 1000
                    }
                    updatePrice()
                })
            })
        }
    })
    const AddToCart = document.getElementById("AddToCart")
    AddToCart.addEventListener("click",()=>{
        donner.push({titre : obj.name , image : obj.image , price : updatePrice()})
        console.log(donner)
    })
}
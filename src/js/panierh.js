const data = JSON.parse(localStorage.getItem("cardProduct"))
const container = document.getElementById("container")
let counter= [];
let finalTotal = 0;

let valide = []
function add(index){
    const count = document.getElementById(`count-${index}`)
    const price = document.getElementById(`price-${index}`)
    if(counter[index] >= 0 ){
        counter[index]++
        console.log(counter[index]);
        
        finalTotal = data[index].price * counter[index]
        price.innerText = finalTotal
        
        
    }
    count.innerText = counter[index]
}
function moin(index){
    const price = document.getElementById(`price-${index}`)
    const count = document.getElementById(`count-${index}`)
    if(counter[index]>0){
        counter[index]--
        finalTotal = data[index].price * counter[index]
        price.innerText = finalTotal
        if(counter[index] == 1){
            price.innerText = data[index].price
        }
    }
    count.innerText = counter[index]

    }

    function deleteProduct(index){
        const item = data[index]
        data.splice(item,1)
        localStorage.setItem("cardProduct",JSON.stringify(data))
    }
    function validation(){
        const updateData = data.map((item,index)=>({
            ...item,
            quantity : counter[index],
            totalPrice : item.price * counter[index]

        }))
        valide.push(updateData)
        localStorage.setItem("valide",JSON.stringify(valide))
        console.log(valide)
    }


data.forEach((element,index) => {
    
    
    counter[index] = 1
    finalTotal = data[index].price
    container.innerHTML += ` 
    <div class="item flex gap-1 my-2 bg-white rounded-3 py-2 justify-between px-2 mx-6 mt-40">
            <div class="w-25 px-2 rounded-3 bg-transparent">
                <img src="${element.image}" alt="S24Ultra" class="w-100 h-100 rounded-1">
            </div>
            <div class="w-3/4 ml-3">
                <h1 class="text-lg m-0  text-black font-bold ml-28 mt-5">${element.titre}</h1>
                <div class="flex justify-between ">
                    <div id="qunatity" class="flex gap-2 items-center mt-10">
                        <button id="moin" class="moin text-black bg-orange-600 border rounded px-2">-</button>
                        <p id=count-${index} class="text-black font-bold">${counter[index]}</p>
                        <button id="" class="plus text-black bg-orange-600 border rounded px-2">+</button>
                    </div>
                    <div class="flex  text-lg mt-10 gap-2">
                        <p id=price-${index} class="text-black mr-1 font-bold">${finalTotal}</p>
                        <button class="text-danger bg-transparent border-0 text-lg">
                           <img class="trash" src="image/Trash.png" alt="Trash">
                        </button>
                </div>
                <div>
                    <button class="validation">devis</button>
                    <buton class="validation">valider</button>
                </div>
             </div>
    </div>  
`
});
document.querySelectorAll(".plus").forEach((item,index)=>{
    item.addEventListener("click",()=>{
        add(index)
    })})

document.querySelectorAll(".moin").forEach((item,index)=>{
    item.addEventListener("click",()=>{
        moin(index)
    })
})
document.querySelectorAll(".trash").forEach((item,index)=>{
    item.addEventListener("click",(event)=>{
        event.preventDefault()
        deleteProduct(index)
    })
})

document.querySelectorAll(".validation").forEach((item)=>{
item.addEventListener("click",function(event){
    event.preventDefault()
    validation()
})
})
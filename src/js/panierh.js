

const container = document.getElementById("container")
let counter= 0;
function add(){
    if(counter == 0 ){
        counter++
    }
    return counter
}
function moin(){
    if(counter > 0 ){
        counter--
    }
    return counter
}
const data = JSON.parse(localStorage.getItem("cardProduct"))
data.forEach(element => {
    container.innerHTML = ` 
    <div class="item flex gap-1 my-2 bg-white rounded-3 py-2 justify-between px-2 mx-6 mt-40">
            <div class="w-25 px-2 rounded-3 bg-transparent">
                <img src="${element.image}" alt="S24Ultra" class="w-100 h-100 rounded-1">
            </div>
            <div class="w-3/4 ml-3">
                <h1 class="text-lg m-0  text-black font-bold ml-28 mt-5">${element.titre}</h1>
                <div class="flex justify-between ">
                    <div id="qunatity" class="flex gap-2 items-center mt-10">
                        <button class="text-black bg-orange-600 border rounded px-2">-</button>
                        <p class="text-black font-bold">0</p>
                        <button class="text-black bg-orange-600 border rounded px-2">+</button>
                    </div>
                    <div class="flex  text-lg mt-10 gap-2">
                        <p class="text-black mr-1 font-bold">${element.price}</p>
                        <button class="text-danger bg-transparent border-0 text-lg">
                           <img src="image/Trash.png" alt="Trash">
                        </button>
                </div>
             </div>
    </div>  
`
});
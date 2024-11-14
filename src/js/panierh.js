const container = document.getElementById("container");
let counter = 0;
let finalTotal = 0;

// Fonction pour ajouter un produit (incrémenter la quantité)
function add(price, index) {
    const count = document.getElementById(`count-${index}`);
    const totalPrice = document.getElementById(`price-${index}`);
    
    counter++;
    count.innerText = counter;
    
    // Calcule le prix total en fonction de la quantité
    const updatedPrice = price * counter;
    totalPrice.innerText = `$${updatedPrice.toFixed(2)}`;
}

// Fonction pour retirer un produit (décrémenter la quantité)
function moin(price, index) {
    const count = document.getElementById(`count-${index}`);
    const totalPrice = document.getElementById(`price-${index}`);
    
    if (counter > 0) {
        counter--;
        count.innerText = counter;
        
        // Calcule le prix total en fonction de la quantité
        const updatedPrice = price * counter;
        totalPrice.innerText = `$${updatedPrice.toFixed(2)}`;
    }
}

// Récupération des données depuis le localStorage
const data = JSON.parse(localStorage.getItem("cardProduct"));

// Génération des éléments du panier dynamiquement
data.forEach((element, index) => {
    container.innerHTML += ` 
    <div class="item flex gap-1 my-2 bg-white rounded-3 py-2 justify-between px-2 mx-6 mt-40">
            <div class="w-25 px-2 rounded-3 bg-transparent">
                <img src="${element.image}" alt="${element.titre}" class="w-100 h-100 rounded-1">
            </div>
            <div class="w-3/4 ml-3">
                <h1 class="text-lg m-0 text-black font-bold ml-28 mt-5">${element.titre}</h1>
                <div class="flex justify-between">
                    <div id="qunatity" class="flex gap-2 items-center mt-10">
                        <button id="moin-${index}" class="text-black bg-orange-600 border rounded px-2">-</button>
                        <p id="count-${index}" class="text-black font-bold">0</p>
                        <button id="plus-${index}" class="text-black bg-orange-600 border rounded px-2">+</button>
                    </div>
                    <div class="flex text-lg mt-10 gap-2">
                        <p id="price-${index}" class="text-black mr-1 font-bold">$${element.price.toFixed(2)}</p>
                        <button class="text-danger bg-transparent border-0 text-lg">
                           <img src="image/Trash.png" alt="Trash">
                        </button>
                    </div>
                </div>
            </div>
    </div>`;
    
    // Ajout des événements pour chaque bouton plus et moins
    document.getElementById(`plus-${index}`).addEventListener("click", () => {
        add(element.price, index);
    });
    document.getElementById(`moin-${index}`).addEventListener("click", () => {
        moin(element.price, index);
    });
});

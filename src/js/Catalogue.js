import carts from "./Data.js"
displayData(carts)

function displayData(data) {
    let card = document.getElementById('card')

    if (data.length > 0) {

        data.forEach((product, index) => {

            console.log(product);

            card.innerHTML += `   <div class="bg-white p-4" style="border-radius: 15px; box-shadow: 8px 8px 8px rgba(252, 103, 54, 0.5);">
                        <div class="flex flex-col items-center mb-2">
                            <img src="${product.image}" alt="Product Image" class="w-full h-40 object-cover rounded mb-4">
                            <a href='/src/Detail.html?id=${product.id}'><h3 class="font-bold text-md mb-2" style='height: 50px; display: flex; align-items: center;'>${product.name}</h3></a>
                            <p class="text-gray-600 mb-4 text-center text-sm" style='height: 80px;'>${product.description.substring(0, 90)}... </p>
                            <p class="font-bold text-xl mb-4 mt-6" style="color: #FC6736;">$${product.price}</p>
                            <div class="flex justify-center space-x-4">
                                <button style="background-color: #FC6736;" class="text-white lg:text-lg px-1 text-xs rounded-full"><pre>Add to cart</pre></button>
                                 <a href='/src/Detail.html?id=${product.id}'><button style="background-color: #FC6736;" class="text-white px-1 lg:text-lg py-1 text-xs rounded-full">Customize</button></a>
                            </div>
                        </div>
                    </div>`;
        })
    } else {

        card.innerHTML = 'no data '
    }
}
document.querySelectorAll('.filter-btn').forEach
    (button => {
        button.addEventListener('click', () => {
            let card = document.getElementById('card').innerHTML = ''
            const category = button.getAttribute('data-category');
            filterCategorie(category); // Call filter function
        });
    });

function filterCategorie(categorie) {
    let filteredCat = carts.filter(element => element.categorie === categorie);
    displayData(filteredCat);
}

function showPage(pageNumber) {
    // On récupère les deux pages
    const page1 = document.getElementById('1');
    const page2 = document.getElementById('2');

    // On montre ou cache chaque page selon le numéro choisi
    if (pageNumber === 1) {
        page1.classList.remove('hidden');
        page2.classList.add('hidden');
    } else {
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    }
}
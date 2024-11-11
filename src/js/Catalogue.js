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
                            <h3 class="font-bold text-md mb-2" style='height: 50px; display: flex; align-items: center;'>${product.name}</h3>
                            <p class="text-gray-600 mb-4 text-center text-sm" style='height: 80px;'>${product.description.substring(0, 90)}... </p>
                            <p class="font-bold text-xl mb-4" style="color: #FC6736;">$${product.price}</p>
                            <div class="flex justify-center space-x-4">
                                <button style="background-color: #FC6736;" class="text-white px-2 py rounded-full">Add to Cart</button>
                                <button style="background-color: #FC6736;" class="text-white px-2 py rounded-full">Customize</button>
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
let currentPage = 1;
const itemsPerPage = 6; // Nombre de produits par page (par exemple, 6 produits par page)

// Pagination buttons
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const page1Button = document.getElementById('page-1');
const page2Button = document.getElementById('page-2');

// Fonction pour afficher les produits de la page actuelle
function displayPageData(page) {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    displayData(carts.slice(start, end));
}

// Initialiser l'affichage de la première page
displayPageData(currentPage);

// Écouter les clics sur les boutons de pagination
page1Button.addEventListener('click', () => {
    currentPage = 1;
    displayPageData(currentPage);
    updatePaginationButtons();
});

page2Button.addEventListener('click', () => {
    currentPage = 2;
    displayPageData(currentPage);
    updatePaginationButtons();
});

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPageData(currentPage);
        updatePaginationButtons();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < 2) {
        currentPage++;
        displayPageData(currentPage);
        updatePaginationButtons();
    }
});

// Fonction pour mettre à jour les boutons de pagination
function updatePaginationButtons() {
    page1Button.classList.toggle('bg-orange-500', currentPage === 1);
    page1Button.classList.toggle('bg-gray-300', currentPage !== 1);

    page2Button.classList.toggle('bg-orange-500', currentPage === 2);
    page2Button.classList.toggle('bg-gray-300', currentPage !== 2);

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === 2;
}


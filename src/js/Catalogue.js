import carts from "./Data.js"
displayData(carts, 1)

function displayData(data, paginate) {
    let card = document.getElementById('card')

    if (data.length > 0) {
        let from, to;
        if (paginate == 1) {
            from = 1;
            to = 13;
            document.getElementById("page1").style = "color: #FC6736"
            document.getElementById("page2").style = "color: black"
        } else if (paginate == 2) {
            from = 13;
            to = 18;
            document.getElementById("page2").style = "color: #FC6736"
            document.getElementById("page1").style = "color: black"
        }


        data.slice(from, to).forEach((product, index) => {
            card.innerHTML += `   <div class="bg-white p-4" style="border-radius: 15px; box-shadow: 8px 8px 8px rgba(252, 103, 54, 0.5);">
                        <div class="flex flex-col items-center mb-2">
                            <img src="${product.image}" alt="Product Image" class="w-full h-40 object-cover rounded mb-4">
                            <a href='/src/Detail.html?id=${product.id}'><h3 class="font-bold text-md mb-2" style='height: 50px; display: flex; align-items: center;'>${product.name}</h3></a>
                            <!--<p class="text-gray-600 mb-4 text-center text-sm" style='height: 80px;'>${product.description.substring(0, 90)}.0.. </p>-->
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
            filterCategorie(category);
        });
    });

function filterCategorie(categorie) {
    let filteredCat = carts.filter(element => element.categorie == categorie);
    displayData(filteredCat);
}

document.querySelectorAll('.btn-paginate').forEach
    (button => {
        button.addEventListener('click', () => {
            let card = document.getElementById('card').innerHTML = ''

            button.classList.add("is-paginate");

            const pageNumber = button.getAttribute('data-page');

            displayData(carts, pageNumber)
        });
    });

const titleElement = document.getElementById("catalogue-title");

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        titleElement.textContent = category;
    });
});
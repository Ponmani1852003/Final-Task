
// Task 1
// Fetch all products from API and display:
// Product Image
// Title
// Price


let alphaApi =
    "https://fakestoreapi.com/products";

fetch(alphaApi)

    .then(function (response) {

        return response.json();

    })

    .then(function (data) {

        let alphaBox =
            document.getElementById("alphaResult");

        data.forEach(function (item) {

            alphaBox.innerHTML += `

            <div class="alphaCard">

                <img
                    src="${item.image}"
                    class="alphaImage"
                >

                <h3>
                    ${item.title.slice(0, 20)}...
                </h3>

                <p>
                    $${item.price}
                </p>

            </div>

        `;

        });

    })

    .catch(function (error) {

        console.log(error);

    });


// let taskOneApi =
//     "https://api.escuelajs.co/api/v1/products";

// fetch(taskOneApi)

//     .then(function (response) {

//         return response.json();

//     })

//     .then(function (data) {

//         let taskOneBox =
//             document.getElementById("taskOneResult");

//         data.forEach(function (item) {

//             taskOneBox.innerHTML += `

//             <div class="taskOneCard">

//                 <img
//                     src="${item.images[0]}"
//                     class="taskOneImage"
//                 >

//                 <h3>
//                     ${item.title.slice(0, 20)}...
//                 </h3>

//                 <p>
//                     $${item.price}
//                 </p>

//             </div>

//         `;

//         });

//     })

//     .catch(function (error) {

//         console.log(error);

//     });



// Task 2
// Add a loading message:
// Loading...
// before API data comes.




let apiTwoLink =
    "https://fakestoreapi.com/products";

fetch(apiTwoLink)

    .then(function (response) {

        return response.json();

    })

    .then(function (data) {

        let apiTwoBox =
            document.getElementById("apiTwoResult");

        apiTwoBox.innerHTML = "";

        apiTwoBox.classList.add("apiTwoWrap");

        data.forEach(function (item) {

            apiTwoBox.innerHTML += `

            <div class="apiTwoCard">

                <img 
                    src="${item.image}"
                    class="apiTwoImage"
                >

                <h3>
                    ${item.title.slice(0, 20)}...
                </h3>

                <p>
                    $${item.price}
                </p>

            </div>

        `;

        });

    })

    .catch(function (error) {

        document.getElementById(
            "apiTwoResult"
        ).innerHTML = `

        <h1>
            Error Fetching Data
        </h1>

    `;

        console.log(error);

    });




//     Task 3
// If API fails:
// Error Fetching Data
// show inside UI.




let taskThreeApi =
    "https://dummyjson.com/products";

fetch(taskThreeApi)

    .then(function (response) {

        return response.json();

    })

    .then(function (data) {

        let taskThreeBox =
            document.getElementById("taskThreeOutput");

        data.products.forEach(function (item) {

            taskThreeBox.innerHTML += `

            <div class="taskThreeCard">

                <img 
                    src="${item.thumbnail}"
                    class="taskThreeImage"
                >

                <h3>${item.title}</h3>

                <p>$${item.price}</p>

            </div>

        `;

        });

    })

    .catch(function (error) {

        document.getElementById(
            "taskThreeOutput"
        ).innerHTML = `

        <h1 class="taskThreeError">
            Error Fetching Data
        </h1>

    `;

        console.log(error);

    });








//     Task 4
// Use:
// slice()
// to limit:
// title → 20 letters
// description → 50 letters
// Task 5
// Add hover effect to product cards using CSS.


let itemList = [

    {
        title: "Apple iPhone 15 Pro Max Mobile",
        description: "Very powerful mobile with excellent camera and battery performance for daily use.",
        image: "https://picsum.photos/300/200"
    },

    {
        title: "Gaming Laptop RGB Edition",
        description: "Best laptop for gaming, coding, editing and high performance tasks.",
        image: "https://picsum.photos/300/201"
    }

];

let output = document.getElementById("showData");

itemList.forEach(function (item) {

    output.innerHTML += `

        <div class="cardItem">

            <img src="${item.image}">

            <h3>
                ${item.title.slice(0, 20)}...
            </h3>

            <p>
                ${item.description.slice(0, 50)}...
            </p>

        </div>

    `;

});



//     Intermediate Tasks
// Task 6 — Search Feature
// Create a search bar.
// User types:
// shirt
// Only shirt products should appear.




let product = [

    "Shirt",
    "Shoes",
    "Watch",
    "T-Shirt",
    "Bag"

];

function displayProduct(items) {

    let box = document.getElementById("product");

    box.innerHTML = " ";

    items.forEach(function (products) {

        box.innerHTML += `
            <h3>${products}</h3>
        `;
    });
}

displayProduct(product);

function searchProducts() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();

    let filteredProduct = product.filter(function (products) {

        return products.toLowerCase().includes(searchValue);

    });

    displayProduct(filteredProduct);
}






//     Task 7 — Category Filter
// Create category buttons:
// electronics
// jewelery
// men's clothing
// women's clothing
// When clicked → show only that category.





let products = [

    {
        title: "Laptop",
        category: "electronics"
    },

    {
        title: "Gold Ring",
        category: "jewelery"
    },

    {
        title: "Men T-Shirt",
        category: "men's clothing"
    },

    {
        title: "Women Saree",
        category: "women's clothing"
    }

];

function filterProducts(categoryName) {

    let result = products.filter(function (product) {

        return product.category === categoryName;

    });

    displayProducts(result);
}

function displayProducts(items) {

    let box = document.getElementById("products");

    box.innerHTML = "";

    items.forEach(function (product) {

        box.innerHTML += `
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <hr>
        `;
    });
}





//     Task 8 — Add To Cart
// Add button:
// Add To Cart
// When clicked:
// increase cart count
// store product inside array




let carts = [];

function addToCarts() {

    // Store product inside array
    carts.push("Shoes");

    // Update cart count
    document.getElementById("count").innerText =
        "Carts Count: " + carts.length;

    console.log(carts);
}





// Task 9 — Remove From Cart
// Add remove button.
// When clicked:
// remove item from array
// update cart count





let cart = ["Shoes", "Bag", "Watch"];

function displayCart() {

    let list = document.getElementById("cartList");
    list.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        list.innerHTML += `
            <li>
                ${cart[i]}
                <button onclick="removeItem(${i})">
                    Remove
                </button>
            </li>
        `;
    }

    document.getElementById("count").innerText =
        "Cart Count: " + cart.length;
}

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}

displayCart();





// Task 10 — Total Price
// Calculate total cart amount.
//     Example:
// Total = $450


let cartt = [200, 250, 300];

let total = 0;

for (let i = 0; i < cartt.length; i++) {
    total = total + cartt[i];
}

console.log("Total = $" + total);

import { addToCart } from "./addToCart";
import { productQuantity } from "./productQuantityToggle";
import {  wishListItem } from "./wishListItems";


const laptopTemplate = document.querySelector("#product-2--template");
const fullDetailProduct = document.querySelector("#fullDetailProduct");
const fullDetailProductTemp = document.querySelector("#fullDetailProductTemp");
const addLaptop = document.querySelector("#add-laptop");



// This is for get AllProducts data 
const getLaptopData = async () => {
    try {
        const res = await fetch("http://localhost:3000/AllProducts");
        // console.log(res);

        if (!(res.ok)) {
            throw new Error(`Response status: ${res.status}`);
        }
        let data = await res.json();


        RenderProduct(data);
        ShowProductDetail(data)

    } catch (error) {
        console.error(error.message)
        // console.log("error");
    }

}


// This is for add card data in template 
const RenderProduct = (product) => {
    if (!product) {
        return false;
    }
    // console.log(product);

    for (let i = 0; i < 8; i++) {
        const LaptopClone = laptopTemplate.content.cloneNode(true);
        //    console.log(laptopTemplate);

        // console.log(LaptopClone);
        LaptopClone.querySelector("#card").setAttribute("id", `card${product[i].id}`)
        LaptopClone.querySelector("#laptop-img").src = product[i].mainImage;
        LaptopClone.querySelector("#laptop-title").innerText = product[i].title;
        LaptopClone.querySelector("#laptop-original--price").innerText = `₹${product[i].originalPrice}`;
        LaptopClone.querySelector("#laptop-current--price").innerText = `₹${(Math.floor(product[i].originalPrice - (product[i].originalPrice * product[i].discount) / 100))}`;
        LaptopClone.querySelector("#laptop-discount").innerText = `${product[i].discount} %`;
        addLaptop.append(LaptopClone)

    }
};




// This is for show all card details 
const ShowProductDetail = (data) => {
    const laptopItems = document.querySelector("#laptop-items");


    laptopItems.addEventListener("click", (e) => {

        let card = e.target.closest(".product-card");

        const cardId = card.getAttribute("id");

        console.log(data);

        // console.log("This is cardId : " +cardId);
        // console.log(data.id);

        const cardDetails = data.find(data => `card${data.id}` == cardId);



        const displayNone = document.querySelectorAll(".displayNone");
        displayNone.forEach((element) => {
            element.style.display = "none";
        })
        document.querySelector(".full-detail-product").style.display = "block"

        // This is for backButton



        const fullDetailProductClone = fullDetailProductTemp.content.cloneNode(true);
        // console.log(fullDetailProductClone);
        fullDetailProductClone.querySelector("#wishList").setAttribute("id", `${cardDetails.id}`)
        fullDetailProductClone.querySelector("#mainDetailImage").src = cardDetails.mainImage;
        fullDetailProductClone.querySelector("#detailThumbnail1").src = cardDetails.allImages[0];
        fullDetailProductClone.querySelector("#detailThumbnail2").src = cardDetails.allImages[1];
        fullDetailProductClone.querySelector("#detailThumbnail3").src = cardDetails.allImages[2];
        fullDetailProductClone.querySelector("#detailTitle").innerHTML = cardDetails.title;
        fullDetailProductClone.querySelector(".single-original--price").innerHTML = `₹${cardDetails.originalPrice}`;
        fullDetailProductClone.querySelector(".single-current--price").innerHTML = `₹${(Math.floor(cardDetails.originalPrice - (cardDetails.originalPrice * cardDetails.discount) / 100))}`;
        fullDetailProductClone.querySelector(".single-discount").innerHTML = `${cardDetails.discount} %`;
        fullDetailProductClone.querySelector(".single-detail--discription").innerHTML = cardDetails.description;
        fullDetailProductClone.querySelector("#productQuantity").innerHTML = cardDetails.productQuantity;





        //This is for add features data 
        cardDetails.features.forEach(element => {
            console.log(element);

            fullDetailProductClone.querySelector("#detailFeatures").innerHTML += `<li>${element}</li>`;
        });



        fullDetailProductClone.querySelector("#detailThumbnail1").addEventListener("mouseenter", () => {
            document.querySelector("#mainDetailImage").src = cardDetails.allImages[0];

        })
        fullDetailProductClone.querySelector("#detailThumbnail1").addEventListener("mouseleave", () => {
            document.querySelector("#mainDetailImage").src = cardDetails.mainImage;
        })

        fullDetailProductClone.querySelector("#detailThumbnail2").addEventListener("mouseenter", () => {
            document.querySelector("#mainDetailImage").src = cardDetails.allImages[1];

        })
        fullDetailProductClone.querySelector("#detailThumbnail2").addEventListener("mouseleave", () => {
            document.querySelector("#mainDetailImage").src = cardDetails.mainImage;
        })

        fullDetailProductClone.querySelector("#detailThumbnail3").addEventListener("mouseenter", () => {
            document.querySelector("#mainDetailImage").src = cardDetails.allImages[2];

        })
        fullDetailProductClone.querySelector("#detailThumbnail3").addEventListener("mouseleave", () => {
            document.querySelector("#mainDetailImage").src = cardDetails.mainImage;
        })


        // This is for Toggle for product quantitys

        fullDetailProductClone.querySelector(".quantity-selector").addEventListener("click", (e) => {
            console.log(e.target.id);

            productQuantity(e, cardDetails.productQuantity);
        });

        fullDetailProductClone.querySelector("#backButton").addEventListener("click", (e) => {
            location.href = "/";
        });


        fullDetailProductClone.querySelector("#addToCart").addEventListener("click", (e) => {
            addToCart( cardDetails.id)
        })

        fullDetailProduct.append(fullDetailProductClone);


        wishListItem()
        // isWishlist()


    });
}



export default getLaptopData;
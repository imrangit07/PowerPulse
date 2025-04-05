const laptopTemplate = document.querySelector("#product-2--template");
const addLaptop = document.querySelector("#add-laptop");


const getLaptopData = async () => {
    try {
        const res = await fetch("http://localhost:3000/AllProducts");
        // console.log(res);

        if (!(res.ok)) {
            throw new Error(`Response status: ${res.status}`);
        }
        let data = await res.json();

        RenderProduct(data);
        // ShowProduct()

    } catch (error) {
        console.error(error.message)
        // console.log("error");
    }

}

const RenderProduct = (product) => {
    if (!product) {
        return false;
    }
    console.log(product);

    for (let i = 0; i < 8; i++) {
        const LaptopClone = laptopTemplate.content.cloneNode(true);

        // console.log(LaptopClone);

        LaptopClone.querySelector("#laptop-img").src = product[i].mainImage;
        LaptopClone.querySelector("#laptop-title").innerText = product[i].title;
        LaptopClone.querySelector("#laptop-original--price").innerText = `₹${product[i].originalPrice}`;
        LaptopClone.querySelector("#laptop-current--price").innerText = `₹${(Math.floor(product[i].originalPrice - (product[i].originalPrice * product[i].discount) / 100))}`;
        LaptopClone.querySelector("#laptop-discount").innerText = `${product[i].discount} %`;
        addLaptop.append(LaptopClone)

    }
};

// const ShowProduct = ()=>{
// const laptopItems = document.querySelector("#laptop-items");

    
// laptopItems.addEventListener("click", (e)=>{
//     console.log(e.target.id);
    
// });
// }




export default getLaptopData;
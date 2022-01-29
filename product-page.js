const itemImage=document.querySelector(".product-img");
const itemName=document.querySelector(".product-title");
const itemPrice=document.querySelector(".price");
const itemDescription=document.querySelector(".description");
const productContainer=document.querySelector(".products-container");
const productList=Array.from(document.querySelectorAll(".product-list li a"));
const products= [{
    image:"images/saree.jfif",
    productName:"punjabi suit",
    category:"suit",
    productPrice:100,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"HOT tops",
    category:"tops",
    productPrice:90,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"butterfly lehenga",
    category:"lehenga",
    productPrice:80,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"MAGIC SAREE",
    category:"saree",
    productPrice:60,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"punjabi suit",
    category:"suit",
    productPrice:100,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"HOT tops",
    category:"tops",
    productPrice:90,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"butterfly lehenga",
    category:"lehenga",
    productPrice:80,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"MAGIC SAREE",
    category:"saree",
    productPrice:60,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"punjabi suit",
    category:"suit",
    productPrice:100,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"HOT tops",
    category:"tops",
    productPrice:90,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"butterfly lehenga",
    category:"lehenga",
    productPrice:80,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"MAGIC SAREE",
    category:"saree",
    productPrice:60,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"punjabi suit",
    category:"suit",
    productPrice:100,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"HOT tops",
    category:"tops",
    productPrice:90,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"butterfly lehenga",
    category:"lehenga",
    productPrice:80,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
},{
    image:"images/saree.jfif",
    productName:"MAGIC SAREE",
    category:"saree",
    productPrice:60,
    productDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nobis est eum quis qui, laborum tempore nulla soluta deleniti culpa."
}]

// const showProduct=()=>{
//     itemImage.src=products[0].image;
//     itemName.textContent=products[0].productName;
//     itemPrice.textContent="RM "+products[0].productPrice;
//     itemDescription.textContent=products[0].productDescription;

// }
const showContent=()=>{
    let newArray=products.map(item=>{
        return`<div class="products">
        <div class="product-img-container">
            <img class="product-img" src=${item.image}>
        </div>
        <div class="product-info">
            <div class="name-price-container">
                <span class="product-title">${item.productName}</span>
                <span class="price">RM ${item.productPrice}</span>
            </div>
            <span class="description">${item.productDescription}</span>
        </div>
    </div>`
    })
    newArray=newArray.join("");
    productContainer.innerHTML=newArray;
}
const newArray=(item)=>{
    let newArr= products.filter(product=>{
        return product.category===item;
    })
    newArr=newArr.map(item=>{
        return`<div class="products">
        <div class="product-img-container">
            <img class="product-img" src=${item.image}>
        </div>
        <div class="product-info">
            <div class="name-price-container">
                <span class="product-title">${item.productName}</span>
                <span class="price">RM ${item.productPrice}</span>
            </div>
            <span class="description">${item.productDescription}</span>
        </div>
    </div>`
    })
    return newArr.join("")
    
}

window.addEventListener("load",showContent)

productList.map(list=>{
    list.addEventListener("click",(e)=>{
        let categoryButton =e.currentTarget.textContent;
        console.log(categoryButton)
        switch(categoryButton){
            case "All":
                showContent();
                break;
            case "punjabi suits":
                productContainer.innerHTML=newArray("suit");
                break;
            default:
                productContainer.innerHTML=newArray(categoryButton);
        }
    })
})

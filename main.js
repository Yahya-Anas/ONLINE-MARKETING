const modal = document.getElementById("myModal");
const messeageModal = document.getElementById("message-modal");
const creatCard = document.getElementById("creat-card");
const shoppingBasket = document.getElementById("shopping-basket-count");
const showOrder = document.getElementById("show-order");
const messeageOrder = document.getElementById("message-order");
const totalPrice = document.getElementById("total-price");
const totalPriceContainer = document.getElementById("total-price-container");




let cartArray = [
    {
        id: '10',
        image: './online-marketing-images/photo-1621951753015-740c699ab970.avif',
        alt: "",
        barnd: 'Pavillon',
        model: 'T-shirt',
        price: '23.99',
        items: '10',
        key: '1',
        select: 0
   },
  
    {
        id: '12',
        image: './online-marketing-images/photo-1581791538302-03537b9c97bf.avif',
        alt: "",
        barnd: 'US-Polo',
        model: 'Polo',
        price: '30.99',
        items: '10',
        key: '2',
        select: 0
   },
    {
        id: '13',
        image: './online-marketing-images/photo-1521572163474-6864f9cf17ab.avif',
        alt: "",
        barnd: 'Puma',
        model: 'T-shirt',
        price: '19.99',
        items: '10',
        key: '3',
        select: 0
    },
  
    {
        id: '14',
        image: './online-marketing-images/photo-1592878904946-b3cd8ae243d0.avif',
        alt: "",
        barnd: 'Suitsupply',
        model: 'Suit Jacket',
        price: '50.99',
        items: '10',
        select: 0
    },
    {
        id: '15',
        image: './online-marketing-images/photo-1592878940526-0214b0f374f6.avif',
        alt: "",
        barnd: 'Valentino',
        model: 'Suit Jacket',
        price: '50.99',
        items: '8',
        select: 0
    },
    {
        id: '16',
        image: './online-marketing-images/photo-1598033032288-bff28b437218.avif',
        alt: "",
        barnd: 'Prada',
        model: 'Suit Jacket',
        price: '50.99',
        items: '7',
        select: 0
    },
    {
        id: '17',
        image: './online-marketing-images/photo-1491553895911-0055eca6402d.avif',
        alt: "",
        barnd: 'Nike',
        model: 'Sport',
        price: '45.99',
        items: '3',
        select: 0
   },
    {
        id: '18',
        image: './online-marketing-images/photo-1600185652960-c9d8869d015c.avif',
        alt: "",
        barnd: 'Nike',
        model: 'Sport',
        price: '55.99',
        items: '7',
        select: 0
    },
    {
        id: '19',
        image: './online-marketing-images/photo-1605034313761-73ea4a0cfbf3.avif',
        alt: "",
        barnd: 'Puma',
        model: 'Casual',
        price: '25.99',
        items: '6',
        select: 0
    },
    {
        id: '20',
        image: './online-marketing-images/photo-1630167146816-e1f4ff99c00c.avif',
        alt: "",
        barnd: 'Lacost',
        model: 'Check-Shirt',
        price: '15.99',
        items: '10',
        select: 0
    },
  
]


let basketArray = [];
let uniq = [];

let creatCards = () =>{
    let cardInformation = ""
    for(let i = 0; i < cartArray.length; i++){
        if(`${cartArray[i].items}` > 0){
            cardInformation +=`<div class="packet-information">
            <img src="${cartArray[i].image}" alt="${cartArray[i].alt}">
            <div class="clothes-information">
                <h3>${cartArray[i].barnd}</h3>
                <h2>${cartArray[i].model}</h2>
                <h3>${cartArray[i].price}</h3>
                <button id="${cartArray[i].id}" onclick="createBasket(event)">+ Add to card</button>
            </div>
        </div>`; 
    }
        }
      
    creatCard.innerHTML = cardInformation;
   
}


//console.log(event.srcElement.id);
let count = 0;
let putItemsInBasket;
let selectCount = 0;


const createBasket = (event) => {

    const index = cartArray.findIndex(el => el.id === event.target.id);
    if(index === -1) return;
    if(cartArray[index].items === cartArray[index].select) return;
    putItemsInBasket = cartArray[index].items;
    cartArray[index].select += 1;
    selectCount = cartArray[index].select;
        if ( selectCount === 1){
            basketArray.push(cartArray[index]) 
            // basketArray[event.target.id-1].items = exam1;
        }
        count =count + 1;
        shoppingBasket.innerText = count;   
        totalPriceContainer.style.display = "block"    
}


let createOrder = ()=>{
    modal.style.display = "block";
    let orderInformation = "";
    let sumPrice = 0;
    if(basketArray.length === 0){
        sumPrice = 0;
        showOrder.innerHTML =
        `<div>
            <h3>Your Cart is empty</h3>
        </div>`; 
        // totalPrice.innerText = sumPrice;
        totalPriceContainer.style.display = "none";
        return;
    }

        // let uniq = basketArray.filter((e, index) => {
        //     return basketArray.indexOf(e) === index;
        // });

    for(let i = 0; i < basketArray.length; i++){
       
        let productPrice = Number(basketArray[i].price) * basketArray[i].select;
        orderInformation +=
                `<div id="basket-cart" class="basket-cart-image">
                    <div>
                        <img src="${basketArray[i].image}" alt="${basketArray[i].alt}">
                    </div>
                    <div class="basket-cart-information">
                        <h3>${basketArray[i].barnd}</h3>
                        <h4>${basketArray[i].model}</h4>
                        <h5>${productPrice.toFixed(2)} $</h5>
                        <p>Available - with you in 3-4 working days</p>
                        <div class="select-count-product">
                            <button id=${basketArray[i].id} onclick="decrement(this.id)">-</button>
                            <p id="items-count" my-data=${basketArray[i].select}>${basketArray[i].select}</p>
                            <button id=${basketArray[i].id} onclick="increment(this.id)">+</button>
                            <button id=${basketArray[i].id} onclick="deleteOrder(this.id)">Delete</button>
                        </div>
                    </div>
                </div>`;   
        showOrder.innerHTML = orderInformation;
        sumPrice = productPrice + sumPrice;
    }
    
    console.log(sumPrice)
    totalPrice.innerText = sumPrice.toFixed(2)+'$';


}
 let deleteOrder = (clicked_id) =>{
    
    let deletedIndex = basketArray.findIndex((e, index) => {
        return e.id === clicked_id;
    });
    count -= basketArray[deletedIndex].select
    basketArray[deletedIndex].select = 0;
    basketArray.splice(deletedIndex ,1);
    createOrder();
    shoppingBasket.innerText = count;
    if(clicked_id){
        messeageModal.style.display = "none";
       
    }
    if(count === 0){
        shoppingBasket.innerText = "";
    }
    
   
}



let increment = (clicked_id) =>{
    
    let incrementIndex = basketArray.findIndex((e, index) => {
        return e.id === clicked_id;
    });

    count += 1;
    basketArray[incrementIndex].select +=1;
    createOrder();
    shoppingBasket.innerText = count;
} 

let decrement = (clicked_id) =>{
    let decrementIndex = basketArray.findIndex((e, index) => {
        return e.id === clicked_id;
       
    });
   
    if(basketArray[decrementIndex].select === 1){
        messeageModal.style.display = "block";
        messeageOrder.innerHTML = `<p>Would you like to remove this item from your shopping cart?</p>
                                    <button  onclick="closeMessageModal()">No</button>
                                    <button id=${clicked_id}  onclick="deleteOrder(this.id)">Yes</button>`;                        
    }else{
        count -= 1;
        basketArray[decrementIndex].select -=1;
        createOrder();
        shoppingBasket.innerText = count;
    }   
}


let closeModal = () =>{
    modal.style.display="none";
}

let closeMessageModal = () =>{
    messeageModal.style.display="none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


creatCards();



               

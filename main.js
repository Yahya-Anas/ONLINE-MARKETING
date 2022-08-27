const creatCard = document.getElementById("creat-card");

let cardArray = [
    {image: 'src="./online-marketing-images/photo-1621951753015-740c699ab970.avif" alt=""',
    barnd: 'Pavillon',
    model: 'T-shirt',
    price: '23.99 $'
   },
  
    {image: 'src="./online-marketing-images/photo-1581791538302-03537b9c97bf.avif" alt=""',
    barnd: 'US-Polo',
    model: 'Polo',
    price: '30.99 $'
   },
    {image: 'src="./online-marketing-images/photo-1521572163474-6864f9cf17ab.avif" alt=""',
    barnd: 'Puma',
    model: 'T-shirt',
     price: '19.99 $'
    },
  
    {image: 'src="./online-marketing-images/photo-1592878904946-b3cd8ae243d0.avif" alt=""',
    barnd: 'Suitsupply',
    model: 'Suit Jacket',
     price: '50.99 $'
    },
    {image: 'src="./online-marketing-images/photo-1592878940526-0214b0f374f6.avif" alt=""',
    barnd: 'Valentino',
    model: 'Suit Jacket',
     price: '50.99 $'
    },
    {image: 'src="./online-marketing-images/photo-1598033032288-bff28b437218.avif" alt=""',
    barnd: 'Prada',
    model: 'Suit Jacket',
     price: '50.99 $'
    },
    {image: 'src="./online-marketing-images/photo-1491553895911-0055eca6402d.avif" alt=""',
    barnd: 'Nike',
    model: 'Sport',
    price: '45.99 $'
   },
    {image: 'src="./online-marketing-images/photo-1600185652960-c9d8869d015c.avif" alt=""',
    barnd: 'Nike',
    model: 'Sport',
     price: '55.99 $'
    },
    {image: 'src="./online-marketing-images/photo-1605034313761-73ea4a0cfbf3.avif" alt=""',
    barnd: 'Puma',
    model: 'Casual',
     price: '25.99 $'
    },
    {image: 'src="./online-marketing-images/photo-1630167146816-e1f4ff99c00c.avif" alt=""',
    barnd: 'Lacost',
    model: 'Check-Shirt',
     price: '15.99 $'
    },
  
]

let creatCards = () =>{
    let cardInformation = ""
    for(let i = 0; i < cardArray.length; i++){
        cardInformation +='<div class="packet-information">' +
        '<img '+ cardArray[i].image +'>'+
        '<div class="clothes-information">' +
        '<h3>'+cardArray[i].barnd+'</h3>' +
        '<h2>'+cardArray[i].model+'</h2>' +
        '<h3>'+cardArray[i].price+'</h3>' +
        '<button>+ Add to card</button>'+
        '</div>'+
        '</div>'; 
    }
    creatCard.innerHTML = cardInformation;
   
}

creatCards();

    
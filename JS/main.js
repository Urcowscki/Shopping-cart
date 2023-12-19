let shop = document.getElementById('shop');

let shopItemsData = [
  {
    id: 'ashuashu',
    name: 'Casual Shirt',
    value: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing',
    img: 'imgs/img-1.jpg',
  },
  {
    id: 'jhsajhsajhsa',
    name: 'Office Shirt',
    value: 70,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing',
    img: 'imgs/img-2.jpg',
  },
  {
    id: 'vcmnvcnmvcmnc',
    name: 'Street Shirt',
    value: 80,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing',
    img: 'imgs/img-3.jpg',
  },
  {
    id: 'oitriortoirt',
    name: 'Mens Suit',
    value: 250,
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing',
    img: 'imgs/img-4.jpg',
  },
];

let basket = [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, value, desc, img } = x;
      return `
    <div id=product-id-${id} class="item">
    <img width="220" height="200" src=${img} alt="" />
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price-quantity">
        <h2>${value}</h2>
        <div class="bttns">
          <i onclick="decrement(${id})" class="bi bi-dash"></i>
          <div id=${id} class="quantity">0</div>
          <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
        </div>
      </div>
    </div>
  </div>`;
    })
    .join(''));
};

generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item++;
  }
  console.log(basket);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search.item === 0) return;
  else {
    search.item--;
  }
  console.log(basket);
};

let update = () => {};

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartCount } from './CartSlice';
import CartItem from './CartItem';
import PlantImage from './PlantImage';
export const plantsArray = [
  {
    "category": "Leafy Houseplants",
    "plants": [
      {
        "name": "Snake Plant",
        "image": "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
        "description": "A snake plant for your growing collection. Nursery sample pricing.",
        "cost": "$15",
        "id": "snake-plant",
        "price": 15
      },
      {
        "name": "Spider Plant",
        "image": "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
        "description": "A spider plant for your growing collection. Nursery sample pricing.",
        "cost": "$12",
        "id": "spider-plant",
        "price": 12
      },
      {
        "name": "Peace Lily",
        "image": "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
        "description": "A peace lily for your growing collection. Nursery sample pricing.",
        "cost": "$18",
        "id": "peace-lily",
        "price": 18
      },
      {
        "name": "Boston Fern",
        "image": "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
        "description": "A boston fern for your growing collection. Nursery sample pricing.",
        "cost": "$20",
        "id": "boston-fern",
        "price": 20
      },
      {
        "name": "Rubber Plant",
        "image": "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
        "description": "A rubber plant for your growing collection. Nursery sample pricing.",
        "cost": "$17",
        "id": "rubber-plant",
        "price": 17
      },
      {
        "name": "Aloe Vera",
        "image": "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
        "description": "A aloe vera for your growing collection. Nursery sample pricing.",
        "cost": "$14",
        "id": "aloe-vera",
        "price": 14
      }
    ]
  },
  {
    "category": "Fragrant Favorites",
    "plants": [
      {
        "name": "Lavender",
        "image": "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A lavender for your growing collection. Nursery sample pricing.",
        "cost": "$20",
        "id": "lavender",
        "price": 20
      },
      {
        "name": "Jasmine",
        "image": "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A jasmine for your growing collection. Nursery sample pricing.",
        "cost": "$18",
        "id": "jasmine",
        "price": 18
      },
      {
        "name": "Rosemary",
        "image": "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
        "description": "A rosemary for your growing collection. Nursery sample pricing.",
        "cost": "$15",
        "id": "rosemary",
        "price": 15
      },
      {
        "name": "Mint",
        "image": "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
        "description": "A mint for your growing collection. Nursery sample pricing.",
        "cost": "$12",
        "id": "mint",
        "price": 12
      },
      {
        "name": "Lemon Balm",
        "image": "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
        "description": "A lemon balm for your growing collection. Nursery sample pricing.",
        "cost": "$14",
        "id": "lemon-balm",
        "price": 14
      },
      {
        "name": "Hyacinth",
        "image": "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
        "description": "A hyacinth for your growing collection. Nursery sample pricing.",
        "cost": "$22",
        "id": "hyacinth",
        "price": 22
      }
    ]
  },
  {
    "category": "Everyday Greens",
    "plants": [
      {
        "name": "ZZ Plant",
        "image": "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A zz plant for your growing collection. Nursery sample pricing.",
        "cost": "$25",
        "id": "zz-plant",
        "price": 25
      },
      {
        "name": "Pothos",
        "image": "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
        "description": "A pothos for your growing collection. Nursery sample pricing.",
        "cost": "$10",
        "id": "pothos",
        "price": 10
      },
      {
        "name": "Basil",
        "image": "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
        "description": "A basil for your growing collection. Nursery sample pricing.",
        "cost": "$9",
        "id": "basil",
        "price": 9
      },
      {
        "name": "Cast Iron Plant",
        "image": "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
        "description": "A cast iron plant for your growing collection. Nursery sample pricing.",
        "cost": "$20",
        "id": "cast-iron-plant",
        "price": 20
      },
      {
        "name": "Succulents",
        "image": "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
        "description": "A succulents for your growing collection. Nursery sample pricing.",
        "cost": "$18",
        "id": "succulents",
        "price": 18
      },
      {
        "name": "Aglaonema",
        "image": "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
        "description": "A aglaonema for your growing collection. Nursery sample pricing.",
        "cost": "$22",
        "id": "aglaonema",
        "price": 22
      }
    ]
  }
];
export default function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector(state => state.cart.items);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const handleAddToCart = plant => dispatch(addItem(plant));
  const navigate = (event, destination) => {
    event.preventDefault();
    if (destination === 'home') onHomeClick(); else setShowCart(destination === 'cart');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return <>
    <header className="navbar"><a className="brand" href="#home" onClick={event => navigate(event, 'home')}>PN <span>Paradise Nursery<small>Where green meets serenity</small></span></a>
      <nav aria-label="Main navigation"><a href="#home" onClick={event => navigate(event, 'home')}>Home</a><a href="#plants" aria-current={!showCart ? 'page' : undefined} onClick={event => navigate(event, 'plants')}>Plants</a><a href="#cart" className="cart-link" aria-label={'Cart, ' + cartCount + ' items'} aria-current={showCart ? 'page' : undefined} onClick={event => navigate(event, 'cart')}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 3h2l3 12h10l3-9H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg><span>Cart</span><span className="cart-count" aria-live="polite">{cartCount}</span></a></nav>
    </header>
    {showCart ? <CartItem onContinueShopping={() => setShowCart(false)}/> : <main className="page-shell catalog"><section className="catalog-heading"><div><p className="eyebrow">Good things grow here</p><h1>Find your next<br/><em>little green thing.</em></h1></div><p>Eighteen plants. Three ways to bring a little nature home. Pick a favorite, then make room for it.</p></section>
      <nav className="category-nav" aria-label="Plant categories">{plantsArray.map(group => <a key={group.category} href={'#' + group.category.replaceAll(' ', '-').toLowerCase()}>{group.category}</a>)}</nav>
      {plantsArray.map(group => <section className="plant-category" key={group.category} id={group.category.replaceAll(' ', '-').toLowerCase()}><div className="category-heading"><h2>{group.category}</h2><span>6 plants to get to know</span></div><div className="product-grid">{group.plants.map(plant => {
        const added = cart.some(item => item.id === plant.id);
        return <article className="product-card" key={plant.id}><div className="product-photo"><PlantImage plant={plant}/></div><div className="product-body"><div className="product-title"><h3>{plant.name}</h3><span>${plant.price.toFixed(2)}</span></div><p>{plant.description}</p><button className="add-button" disabled={added} onClick={() => handleAddToCart(plant)} aria-label={(added ? 'Added ' : 'Add to Cart ') + plant.name}>{added ? 'Added to Cart ✓' : 'Add to Cart'}</button></div></article>;
      })}</div></section>)}
    </main>}
    <footer className="site-footer"><span>Paradise Nursery</span><p>A student storefront. Illustrations appear when a starter photo is unavailable. Checkout is a demonstration.</p></footer>
  </>;
}

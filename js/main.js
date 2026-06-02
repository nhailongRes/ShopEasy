// ================================
// YOUR JS PRACTICE STARTS HERE!
// ================================

// TODO 1 — Cart open/close
// clicking cart button → open sidebar
const cartToggleBtn = document.getElementById('cart-toggle-btn')
const cartSidebar = document.getElementById('cart-sidebar')
const cartOverlay = document.getElementById('cart-overlay')
const cartCloseBtn = document.getElementById('cart-close-btn')

cartToggleBtn.addEventListener('click', () =>{
  cartSidebar.classList.toggle('open')
})

cartOverlay.addEventListener('click', () =>{
  cartOverlay.style.display = 'none'
})
cartCloseBtn.addEventListener('click', ()=>{
  cartSidebar.classList.toggle('open')
  cartOverlay.style.display = 'none'
})

// clicking overlay or close btn → close sidebar

// TODO 2 — Add to cart
let count = 0;
// clicking "Add" button on product card
const addToCartBtns = document.querySelectorAll('.add-to-cart')
const cartCount = document.getElementById('cart-count')
const cartItems = document.getElementById('cart-items')
const cartEmpty = document.getElementById('cart-empty')
const cartTotal = document.getElementById('cart-total')
const toast = document.getElementById('toast')
const toastMsg = document.getElementById('toast-msg')
// → add item to cart sidebar


addToCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    // STEP 1 — lấy data
    const name = btn.dataset.name
    const price = btn.dataset.price
    const emoji = btn.dataset.emoji

    // STEP 2 — tạo cart item
    const item = document.createElement('div')
    item.className = 'cart-item'
    item.innerHTML = `
      <div class="cart-item-img">${emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${name}</div>
        <div class="cart-item-price">$${price}</div>
      </div>
    `
    // STEP 3 — thêm vào cart
    cartItems.appendChild(item)

    // STEP 4 — update count
    // your code here
    
    count++;
    cartCount.textContent = count
    
    // STEP 5 — ẩn empty message
    // your code here
    cartEmpty.style.display = 'none'

    // STEP 6 — show toast
    // your code here
    toast.classList.add('show')
    setTimeout(() => {
      toast.classList.remove('show')
    }, 2000)
    
  })
})
// → update cart count in navbar
// → show toast notification

// TODO 3 — Category filter
// clicking a category card
// → set it as active
// → remove active from others
const catergoriesBtn = document.querySelectorAll('.category-card');
catergoriesBtn.forEach(btn=>{
  btn.addEventListener('click', () =>{
    catergoriesBtn.forEach(b =>{
      b.classList.remove('active')
    })

    btn.classList.add('active')
  })

})

// TODO 4 — Filter buttons
// clicking filter buttons (All, New, Sale, Popular)
// → set clicked as active
// → remove active from others

const filterBtn = document.querySelectorAll('.filter-btn')
filterBtn.forEach(btn =>{
  btn.addEventListener('click', () =>{
    filterBtn.forEach(b =>{
      b.classList.remove('active')
    })

    btn.classList.add('active')
  })
})

// TODO 5 — Wishlist toggle
// clicking wishlist button (🤍)
// → toggle between 🤍 and ❤️
const wishlistBtns = document.querySelectorAll('.wishlist-btn')

wishlistBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    if (btn.textContent === '🤍') {
      btn.textContent = '❤️'   // thêm vào wishlist
    } else {
      btn.textContent = '🤍'   // bỏ khỏi wishlist
    }

  })
})

// TODO 6 — Search
// typing in search input
// → filter products by name (hide/show product cards)

// TODO 7 — Countdown timer
// make the timer in the banner count down every second

// TODO 8 — Newsletter
// clicking subscribe button
// → validate email input
// → show success message if valid
// → show error if empty or invalid

// TODO 9 — Sort products
// changing sort select
// → reorder product cards by price or rating

// TODO 10 — Remove from cart
// clicking remove button in cart
// → remove item from cart
// → update total price
// → update cart count

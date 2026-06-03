// ================================
// YOUR JS PRACTICE STARTS HERE!
// ================================

//helper function 
let count = 0
const cartCount = document.getElementById('cart-count')
const cartTotal = document.getElementById('cart-total')
// ...

// ================================
// HELPER FUNCTIONS  ← đặt ở đây
// ================================
function updateTotal() {
  const prices = document.querySelectorAll('.cart-item-price')
  let total = 0

  prices.forEach(price => {
    total += parseInt(
      price.textContent.replace('$', '').replace(',', '')
    )
  })

  cartTotal.textContent = '$' + total
}

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
        <div class="cart-item-qty">
            <button class="qty-btn minus-btn">-</button>
            <span class="qty-value">1</span>
            <button class="qty-btn plus-btn">+</button>
        </div>
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
const searchInput = document.getElementById('search-input')

searchInput.addEventListener('keyup', () => {
  const searchValue = searchInput.value.toLowerCase()
  //                                    👆
  //                                    lowercase để dễ so sánh
  const productCards = document.querySelectorAll('.product-card-wrapper')

  productCards.forEach(card => {
    const productName = card.querySelector('.product-name').textContent.toLowerCase()
    
    if (productName.includes(searchValue)) {
      card.style.display = 'block'
    }
    else{
        card.style.display = 'none'
    }
  })
})

// TODO 7 — Countdown timer
// make the timer in the banner count down every second
let hours = 8
let mins = 45
let secs = 0

const timerHours = document.getElementById('timer-hours')
const timerMins = document.getElementById('timer-mins')
const timerSecs = document.getElementById('timer-secs')

setInterval(() => {
  secs--

  // reset secs
  if (secs < 0) {
    secs = 59
    mins--
  }

  // reset mins
  if (mins < 0) {
    mins = 59
    hours--
  }

  // time out
  if (hours <= 0 && mins <= 0 && secs <= 0) {
    hours = 0
    mins = 0
    secs = 0
    console.log('Time out!')
  }

  // update DOM với padding
  timerHours.textContent = String(hours).padStart(2, '0')
  timerMins.textContent = String(mins).padStart(2, '0')
  timerSecs.textContent = String(secs).padStart(2, '0')

}, 1000)

// TODO 8 — Newsletter
// clicking subscribe button
// → validate email input
// → show success message if valid
// → show error if empty or invalid
const newsletterEmail = document.getElementById('newsletter-email')
const newsletterBtn = document.getElementById('newsletter-btn')

newsletterBtn.addEventListener('click', () => {
  const email = newsletterEmail.value.trim()
  //                                  👆
  //                                  xóa khoảng trắng

  // STEP 1 — kiểm tra trống
  if (email === '') {
    // your code here
    newsletterEmail.style.border = '2px solid red'
    newsletterEmail.placeholder = 'Please enter email'
  }

  // STEP 2 — kiểm tra có @ không
  else if (!email.includes('@')) {
    // your code here
    newsletterEmail.style.border = '2px solid red'
    newsletterEmail.placeholder = 'Please enter email with right format'
  }

  // STEP 3 — valid
  else {
    newsletterEmail.style.border = 'none'
    const originalText = newsletterBtn.textContent;
    const originalColor = newsletterBtn.style.backgroundColor;

    // your code
    //  newsletterBtn.textContent = '✅ Subscribed!'
    //  newsletterBtn.style.backgroundColor = 'green'
    newsletterBtn.textContent = '✅ Subscribed!';
    newsletterBtn.style.backgroundColor = 'green';
    newsletterEmail.value = ''
    setTimeout(() => {
        newsletterBtn.textContent = originalText;
        newsletterBtn.style.backgroundColor = originalColor;
    }, 5000);
  }
})

// TODO 9 — Sort products
// changing sort select
// → reorder product cards by price or rating
const sortSelect = document.getElementById('sort-select')
const productsGrid = document.getElementById('products-grid')

sortSelect.addEventListener('change', () => {
  const sortValue = sortSelect.value

  // lấy tất cả cards
  const cards = Array.from(
    document.querySelectorAll('.product-card-wrapper')
  )

  cards.sort((a, b) => {
    // lấy price
    const priceA = parseInt(
      a.querySelector('.product-price')
       .textContent.replace('$', '').replace(',', '')
    )
    const priceB = parseInt(
      b.querySelector('.product-price')
       .textContent.replace('$', '').replace(',', '')
    )

    // lấy rating
    const ratingA = parseInt(
      a.querySelector('.rating-count')
       .textContent.replace('(', '').replace(')', '')
    )
    const ratingB = parseInt(
      b.querySelector('.rating-count')
       .textContent.replace('(', '').replace(')', '')
    )

    if (sortValue === 'price-low')  return priceA - priceB
    if (sortValue === 'price-high') return priceB - priceA
    if (sortValue === 'rating')     return ratingB - ratingA
    return 0  // default — không sort
  })

  // append lại theo thứ tự mới
  cards.forEach(card => productsGrid.appendChild(card))
})

// TODO 10 — Remove from cart
// clicking remove button in cart
const cartItems = document.getElementById('cart-items')

cartItems.addEventListener('click', (event) => {

  // guard clause
  const item = event.target.closest('.cart-item')
  if (!item) return

  // lấy data
  const qtyDisplay = item.querySelector('.qty-value')
  const priceDisplay = item.querySelector('.cart-item-price')
  const basePrice = parseInt(priceDisplay.dataset.price)
  let qty = parseInt(qtyDisplay.textContent)

  // plus button
  if (event.target.classList.contains('plus-btn')) {
    qty++
    qtyDisplay.textContent = qty
    priceDisplay.textContent = '$' + (basePrice * qty)
  }

  // minus button
  if (event.target.classList.contains('minus-btn')) {
    qty--
    if (qty <= 0) {
      item.remove()
      count--
      cartCount.textContent = count
    } else {
      qtyDisplay.textContent = qty
      priceDisplay.textContent = '$' + (basePrice * qty)
    }
  }

  // remove button
  if (event.target.classList.contains('remove-btn')) {
    item.remove()
    count--
    cartCount.textContent = count
  }

  // check cart trống
  if (cartItems.children.length === 0) {
    cartEmpty.style.display = 'block'
  }

  // update total
  updateTotal()
})

// → remove item from cart
// → update total price
// → update cart count

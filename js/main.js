// ================================
// YOUR JS PRACTICE STARTS HERE!
// ================================

// === VARIABLES ===
// cart elements
let count = 0
const cartCount = document.getElementById('cart-count')
const cartTotal = document.getElementById('cart-total')
const cartToggleBtn = document.getElementById('cart-toggle-btn')
const cartSidebar = document.getElementById('cart-sidebar')
const cartOverlay = document.getElementById('cart-overlay')
const cartCloseBtn = document.getElementById('cart-close-btn')
const addToCartBtns = document.querySelectorAll('.add-to-cart')
const cartItems = document.getElementById('cart-items')
const cartEmpty = document.getElementById('cart-empty')

// toast elements
const toast = document.getElementById('toast')
const toastMsg = document.getElementById('toast-msg')

// timer elements
let hours = 8
let mins = 45
let secs = 0
const timerHours = document.getElementById('timer-hours')
const timerMins = document.getElementById('timer-mins')
const timerSecs = document.getElementById('timer-secs')

// newsletter elements
const newsletterEmail = document.getElementById('newsletter-email')
const newsletterBtn = document.getElementById('newsletter-btn')

// sort elements
const sortSelect = document.getElementById('sort-select')
const productsGrid = document.getElementById('products-grid')

// search elements
const searchInput = document.getElementById('search-input')

// category/filter/wishlist elements
const catergoriesBtn = document.querySelectorAll('.category-card')
const filterBtn = document.querySelectorAll('.filter-btn')
const wishlistBtns = document.querySelectorAll('.wishlist-btn')

// === HELPER FUNCTIONS ===
function updateTotal() {
  const items = document.querySelectorAll('.cart-item')
  let total = 0

  items.forEach(item => {
    const basePrice = parseInt(
      item.querySelector('.cart-item-price').dataset.price
    )
    const qty = parseInt(
      item.querySelector('.qty-value').textContent
    )
    total += basePrice * qty
  })

  cartTotal.textContent = '$' + total
}

// TODO 1 — Cart open/close
// clicking cart button → open sidebar
cartToggleBtn.addEventListener('click', () => {
  cartSidebar.classList.add('open')
  cartOverlay.style.display = 'block'
})

cartOverlay.addEventListener('click', () =>{
  cartOverlay.style.display = 'none'
})
cartCloseBtn.addEventListener('click', () => {
  cartSidebar.classList.remove('open')  // ← đúng!
  cartOverlay.style.display = 'none'
})

// clicking overlay or close btn → close sidebar

// TODO 2 — Add to cart
// clicking "Add" button on product card
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
    <div class="cart-item-price" data-price="${price}">$${price}</div>
    <div class="cart-item-qty">
      <button class="qty-btn minus-btn">-</button>
      <span class="qty-value">1</span>
      <button class="qty-btn plus-btn">+</button>
    </div>
  </div>
  <button class="remove-btn">✕</button>
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
    toastMsg.textContent = `${name} added to cart!`
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

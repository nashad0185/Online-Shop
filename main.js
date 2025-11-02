// Navbar, Cart, Login toggles
let cart = document.querySelector('.shopping-cart');
let login = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#cart-btn').onclick = () => {
  cart.classList.toggle('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () => {
  login.classList.toggle('active');
  cart.classList.remove('active');
  navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
}

window.onscroll = () => {
  login.classList.remove('active');
  navbar.classList.remove('active');
  cart.classList.remove('active');
}

// Swiper slider for reviews
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
  },
});

// --------- PRODUCTS DYNAMIC ---------
const products = [
  {
    name: "BRIDE DRESS",
    price: 10.99,
    image: "images/product-1.jpg"
  },
  {
    name: "SHOES",
    price: 5.99,
    image: "images/product-2.jpg"
  },
  {
    name: "FASHION SHOES",
    price: 2.99,
    image: "images/product-3.jpg"
  },
  {
    name: "Accessories",
    price: 5.99,
    image: "images/product-4.jpg"
  },
  {
    name: "FASHION CLOCK",
    price: 3.99,
    image: "images/product-5.jpg"
  },
  {
    name: "Jewelry",
    price: 5.99,
    image: "images/product-6.jpg"
  }
];

// Render products dynamically
function renderProducts() {
  const container = document.querySelector('.product .box-container');
  if (!container) return;
  container.innerHTML = '';
  products.forEach((product, idx) => {
    container.innerHTML += `
      <div class="box">
        <div class="image">
          <img src="${product.image}" alt="">
        </div>
        <div class="content">
          <h3>${product.name}</h3>
          <div class="price">$${product.price}</div>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <button class="btn add-to-cart" data-idx="${idx}">Add to Cart</button>
        </div>
      </div>
    `;
  });
}
renderProducts();

// --------- CART FUNCTIONALITY ---------
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

function renderCart() {
  const cartBox = document.querySelector('.shopping-cart');
  if (!cartBox) return;
  let html = '';
  cartItems.forEach((item, i) => {
    html += `
      <div class="box">
        <i class="fas fa-times remove-from-cart" data-idx="${i}"></i>
        <img src="${item.image}" alt="">
        <div class="content">
          <h3>${item.name}</h3>
          <span class="price">$${item.price}</span>
        </div>
      </div>
    `;
  });
  html += `<h3 class="total"> total: <span> $${cartItems.reduce((a, b) => a + b.price, 0).toFixed(2)}</span></h3>
  <a href="#" class="btn">checkout</a>`;
  cartBox.innerHTML = html;
}
renderCart();

// Add to cart & Remove from cart
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('add-to-cart')) {
    const idx = e.target.dataset.idx;
    cartItems.push(products[idx]);
    saveCart();
    renderCart();
  }
  if (e.target.classList.contains('remove-from-cart')) {
    const idx = e.target.dataset.idx;
    cartItems.splice(idx, 1);
    saveCart();
    renderCart();
  }
});

// --------- REGISTRATION FUNCTIONALITY ---------
document.getElementById('register-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.email.value;
  const password = this.password.value;
  localStorage.setItem('user', JSON.stringify({ email, password }));
  alert('Registration successful!');
  this.reset();
});

// --------- Q&A DYNAMIC FUNCTIONALITY ---------
const questions = [
  {
    question: "What are your delivery hours?",
    answer: "We deliver from 8:00 AM to 8:00 PM every day."
  },
  {
    question: "How can I pay for my order?",
    answer: "You can pay by cash on delivery or by mobile money."
  },
  {
    question: "Do you offer same-day delivery?",
    answer: "Yes, we offer same-day delivery for orders placed before 5:00 PM."
  }
];

function renderQA() {
  const qaContainer = document.querySelector('.qa-container');
  if (!qaContainer) return;
  qaContainer.innerHTML = '';
  questions.forEach((item, idx) => {
    qaContainer.innerHTML += `
      <div class="qa-item">
        <button class="qa-question" data-idx="${idx}">${item.question}</button>
        <div class="qa-answer" style="display:none;">${item.answer}</div>
      </div>
    `;
  });
}
renderQA();

// Toggle answer on question click, close others
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('qa-question')) {
    // Remove active from all
    document.querySelectorAll('.qa-question').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.qa-answer').forEach(ans => ans.style.display = "none");
    // Toggle current
    const answerDiv = e.target.nextElementSibling;
    if (answerDiv.style.display === "none") {
      answerDiv.style.display = "block";
      e.target.classList.add('active');
    } else {
      answerDiv.style.display = "none";
      e.target.classList.remove('active');
    }
  }
});

// --------- BLOG DYNAMIC FUNCTIONALITY ---------
const blogs = [
  {
    title: "Beauty & Confidence in Every Outfit",
    image: "images/blog1.png",
    author: "admin",
    desc: "Fashion isn’t just about clothing — it’s about feeling confident...",
    fullDesc: "Fashion isn’t just about clothing — it’s about feeling confident, elegant, and unique every day. At AuraBoutique, we bring you stylish women’s wear designed to highlight your natural beauty and empower your confidence.."
  },
  {
    title: "Beauty & Confidence in Every Outfit",
    image: "images/blog2.png",
    author: "admin",
    desc: "Fashion isn’t just about clothing — it’s about feeling confident...",
    fullDesc: "Fashion isn’t just about clothing — it’s about feeling confident.."
  },
  
];

function renderBlogs() {
  const blogContainer = document.querySelector('.blog .box-container');
  if (!blogContainer) return;
  blogContainer.innerHTML = '';
  blogs.forEach((blog, idx) => {
    blogContainer.innerHTML += `
      <div class="box">
        <div class="image">
          <img src="${blog.image}" alt="">
        </div>
        <div class="content">
          <div class="icons">
            <a href="#"> <i class="fas fa-user"></i> by ${blog.author} </a>
          </div>
          <h3>${blog.title}</h3>
          <p>${blog.desc}</p>
          <button class="btn blog-read-more" data-idx="${idx}">Read more</button>
        </div>
      </div>
    `;
  });
}
renderBlogs();

// Blog Read More & Back functionality
document.addEventListener('click', function(e) {
  // Read more
  if (e.target.classList.contains('blog-read-more')) {
    const idx = e.target.dataset.idx;
    showFullBlog(idx);
  }
  // Back button
  if (e.target.classList.contains('blog-back')) {
    renderBlogs();
  }
});

function showFullBlog(idx) {
  const blog = blogs[idx];
  const blogContainer = document.querySelector('.blog .box-container');
  if (!blogContainer) return;
  blogContainer.innerHTML = `
    <div class="box">
      <div class="image">
        <img src="${blog.image}" alt="">
      </div>
      <div class="content">
        <div class="icons">
          <a href="#"> <i class="fas fa-user"></i> by ${blog.author} </a>
        </div>
        <h3>${blog.title}</h3>
        <p>${blog.fullDesc}</p>
        <button class="btn blog-back">Back</button>
      </div>
    </div>
  `;
}

// --------- REGISTRATION MODAL LOGIC ---------
const modal = document.getElementById('register-modal');
const modalContent = document.getElementById('register-modal-content');

// Show modal on "get yours now" click
document.querySelector('.home .btn')?.addEventListener('click', function(e) {
  e.preventDefault();
  showRegisterStep('register');
});

// Modal step rendering
function showRegisterStep(step) {
  if (!modalContent) return;
  modal.style.display = 'flex';
  if (step === 'register') {
    modalContent.innerHTML = `
      <button class="close-modal" title="Close">&times;</button>
      <h3>Welcome!</h3>
      <p style="text-align:center;">Are you a new customer or do you already have an account?</p>
      <button class="btn" id="go-signup">I'm New (Sign Up)</button>
      <button class="btn" id="go-signin" style="background:#ffba43;color:#fff;">I Have Account (Sign In)</button>
    `;
  }
  if (step === 'signup') {
    modalContent.innerHTML = `
      <button class="close-modal" title="Close">&times;</button>
      <h3>Sign Up</h3>
      <form id="signup-form">
        <input type="text" class="box" name="name" placeholder="Full Name" required>
        <input type="email" class="box" name="email" placeholder="Email" required>
        <input type="password" class="box" name="password" placeholder="Password" required>
        <button type="submit" class="btn">Register</button>
      </form>
      <span class="switch-link" id="switch-signin">Already have an account? Sign In</span>
    `;
  }
  if (step === 'signin') {
    modalContent.innerHTML = `
      <button class="close-modal" title="Close">&times;</button>
      <h3>Sign In</h3>
      <form id="signin-form">
        <input type="email" class="box" name="email" placeholder="Email" required>
        <input type="password" class="box" name="password" placeholder="Password" required>
        <button type="submit" class="btn">Sign In</button>
      </form>
      <span class="switch-link" id="switch-signup">New customer? Sign Up</span>
    `;
  }
}

// Modal events
document.addEventListener('click', function(e) {
  // Close modal
  if (e.target.classList.contains('close-modal') || e.target === modal) {
    modal.style.display = 'none';
  }
  // Go to Sign Up
  if (e.target.id === 'go-signup' || e.target.id === 'switch-signup') {
    showRegisterStep('signup');
  }
  // Go to Sign In
  if (e.target.id === 'go-signin' || e.target.id === 'switch-signin') {
    showRegisterStep('signin');
  }
});

// Handle Sign Up
document.addEventListener('submit', function(e) {
  if (e.target.id === 'signup-form') {
    e.preventDefault();
    // Save user to localStorage (demo)
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Registration successful!');
    modal.style.display = 'none';
  }
  // Handle Sign In
  if (e.target.id === 'signin-form') {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      alert('Sign in successful!');
      modal.style.display = 'none';
    } else {
      alert('Incorrect email or password!');
    }
  }
});



document.querySelector('.contact form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = this.querySelector('input[placeholder="first name"]').value.trim();
  const lastName = this.querySelector('input[placeholder="last name"]').value.trim();
  const email = this.querySelector('input[placeholder="email address"]').value.trim();
  const phone = this.querySelector('input[placeholder="phone"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  // Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9+ ]{7,}$/; // 
  let valid = true;

  if (!firstName || !lastName || !email || !phone || !message) valid = false;
  if (!emailPattern.test(email)) valid = false;
  if (!phonePattern.test(phone)) valid = false;

  // Show modal
  if (valid) {
    // contact form localStorage
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push({ firstName, lastName, email, phone, message, date: new Date().toISOString() });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    showContactSuccess(`${firstName}, Soo dhawoow macmiil waa laguu diyaarinayaa adeegaagii goor dhowna wuu kusoo gaarayaa`);
    this.reset();
  } else {
    showContactSuccess("Macmiil si aan kuugu adeegno si sax ah u buuxi dalabkaaga. Mahadsanid");
  }
});

function showContactSuccess(msg) {
  if (document.getElementById('contact-success-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'contact-success-modal';
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.5)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = 99999;

  modal.innerHTML = `
    <div style="
      background: #fff;
      padding: 3rem 2rem;
      border-radius: 1rem;
      max-width: 90vw;
      min-width: 320px;
      box-shadow: 0 2px 24px rgba(0,0,0,0.15);
      text-align: center;
      font-family: 'Roboto', Arial, sans-serif;
    ">
      <h2 style="color:#3bb77e; font-size:2.2rem; margin-bottom:1.5rem;">${msg}</h2>
      <button id="contact-success-ok" style="
        background: #cf3645;
        color: #fff;
        border: none;
        border-radius: .5rem;
        padding: 1rem 3rem;
        font-size: 1.5rem;
        cursor: pointer;
        transition: background 0.2s;
        margin-top:2rem;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('contact-success-ok').onclick = function() {
    document.body.removeChild(modal);
    //  (scroll to contact)
    document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" });
  };
}

// Number input: 
document.querySelector('.contact form input[placeholder="phone"]')?.setAttribute('type', 'text');
document.querySelector('.contact form input[placeholder="phone"]')?.setAttribute('inputmode', 'numeric');
document.querySelector('.contact form input[placeholder="phone"]')?.setAttribute('pattern', '[0-9+ ]*');



// --------- LOGIN ICON MODAL LOGIC ---------
document.getElementById('login-btn')?.addEventListener('click', function(e) {
  e.preventDefault();
  showRegisterStep('signin');
});

// --------- REGISTRATION MODAL LOGIC ---------
function showRegisterStep(step) {
  if (!modalContent) return;
  modal.style.display = 'flex';
  if (step === 'register') {
    modalContent.innerHTML = `
      <button class="close-modal" title="Close">&times;</button>
      <h3>Welcome!</h3>
      <p style="text-align:center;">Are you a new customer or do you already have an account?</p>
      <button class="btn" id="go-signup">I'm New (Sign Up)</button>
      <button class="btn" id="go-signin" style="background:#ffba43;color:#fff;">I Have Account (Sign In)</button>
    `;
  }
  if (step === 'signup') {
    modalContent.innerHTML = `
      <button class="close-modal" title="Close">&times;</button>
      <h3>Sign Up</h3>
      <form id="signup-form">
        <input type="text" class="box" name="name" placeholder="Full Name" required>
        <input type="email" class="box" name="email" placeholder="Email" required>
        <input type="password" class="box" name="password" placeholder="Password" required>
        <button type="submit" class="btn">Register</button>
      </form>
      <span class="switch-link" id="switch-signin">Already have an account? Sign In</span>
    `;
  }
  if (step === 'signin') {
    modalContent.innerHTML = `
      <button class="close-modal" title="Close">&times;</button>
      <h3>si fudud halkaan waad ka gali kartaa</h3>
      <form id="signin-form">
        <input type="email" class="box" name="email" placeholder="Email" required>
        <input type="password" class="box" name="password" placeholder="Password" required>
        <button type="submit" class="btn">Sign In</button>
      </form>
      <span class="switch-link" id="switch-signup">New customer? Sign Up</span>
    `;
  }
}

// Modal events
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('close-modal') || e.target === modal) {
    modal.style.display = 'none';
  }
  if (e.target.id === 'go-signup' || e.target.id === 'switch-signup') {
    showRegisterStep('signup');
  }
  if (e.target.id === 'go-signin' || e.target.id === 'switch-signin') {
    showRegisterStep('signin');
  }
});

// Handle Sign Up & Sign In
document.addEventListener('submit', function(e) {
  if (e.target.id === 'signup-form') {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Registration successful!');
    modal.style.display = 'none';
  }
  if (e.target.id === 'signin-form') {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      alert('Sign in successful!');
      modal.style.display = 'none';
    } else {
      showRegisterStep('signin');
      setTimeout(() => {
        const form = document.getElementById('signin-form');
        if (form && !form.querySelector('.login-error')) {
          let msg = document.createElement('div');
          msg.textContent = "fadlan xogtaada oo saxan gali";
          msg.className = "login-error";
          msg.style.color = "#e74c3c";
          msg.style.marginBottom = "1rem";
          msg.style.fontWeight = "bold";
          form.prepend(msg);
        }
      }, 50);
    }
  }
});


// --------- DYNAMIC CHECKOUT MODAL ---------
document.addEventListener('click', function(e) {
  
  if (e.target.matches('.shopping-cart .btn')) {
    e.preventDefault();

    // Isku darka xisaabta dhammaan products-ka ku jira shopping cart-ka
    let total = 0;
    document.querySelectorAll('.shopping-cart .box .price').forEach(function(span) {
      const price = parseFloat(span.textContent.replace(/[^0-9.]/g, ''));
      if (!isNaN(price)) total += price;
    });

    // Modal custom ah
    showCheckoutModal(total);
  }
});

function showCheckoutModal(total) {
  
  if (document.getElementById('checkout-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'checkout-modal';
  modal.style.position = 'fixed';
  modal.style.top = 0;
  modal.style.left = 0;
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.5)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = 99999;

  modal.innerHTML = `
    <div style="
      background: #fff;
      padding: 2.5rem 2rem;
      border-radius: 1rem;
      max-width: 90vw;
      min-width: 320px;
      box-shadow: 0 2px 24px rgba(0,0,0,0.15);
      text-align: center;
      font-family: 'Roboto', Arial, sans-serif;
    ">
      <h2 style="color:#3bb77e; font-size:2rem; margin-bottom:1.5rem;">
        Macmiil xisaabta adeegaagu waa $${total.toFixed(2)}
      </h2>
      <button id="checkout-ok" style="
        background: #cf3645;;
        color: #fff;
        border: none;
        border-radius: .5rem;
        padding: 1rem 3rem;
        font-size: 1.3rem;
        cursor: pointer;
        transition: background 0.2s;
        margin-top:2rem;
      ">OK</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('checkout-ok').onclick = function() {
    document.body.removeChild(modal);
  };
}


// Function to show dynamic success messages without any existing HTML
function showMessage(type) {
 
  let messageBox = document.getElementById("dynamic-message");

  if (!messageBox) {
    messageBox = document.createElement("div");
    messageBox.id = "dynamic-message";
    messageBox.style.position = "fixed";
    messageBox.style.top = "20px";
    messageBox.style.left = "50%";
    messageBox.style.transform = "translateX(-50%)";
    messageBox.style.padding = "15px 25px";
    messageBox.style.backgroundColor = "#d4edda";
    messageBox.style.color = "#155724";
    messageBox.style.border = "1px solid #c3e6cb";
    messageBox.style.borderRadius = "5px";
    messageBox.style.fontSize = "16px";
    messageBox.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    messageBox.style.zIndex = "9999";
    document.body.appendChild(messageBox);
  }

  // Set the message based on the action
  let message = "";
  switch (type) {
    case "signup":
      message = "Si sax ah ayaad isku diwaan galisay macmiil!";
      break;
    case "signin":
      message = "Soo dhawoow macmiil!";
      break;
    case "registration":
      message = "Is diiwaan gelintaada waa la xaqiijiyay!";
      break;
    default:
      message = "Fariin aan la aqoon.";
  }

  messageBox.textContent = message;
  messageBox.style.display = "block";

  // Auto-hide after 4 seconds
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 4000);
}

// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
  // ...existing code...

  // Parallax background for .home (mouse / touch)
  (function initHomeParallax(){
    const home = document.querySelector('.home');
    if (!home) return;

    // disable on small/touch devices
    if (window.matchMedia('(hover: none), (max-width: 768px)').matches) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    const strength = 10; // percentage move range X
    const strengthY = 6; // percentage move range Y
    let rafId = null;

    function onMove(clientX, clientY) {
      const rect = home.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (clientX - cx) / rect.width;  // -0.5 .. 0.5 (approx)
      const dy = (clientY - cy) / rect.height;
      targetX = dx * strength;   // translate to percent offset
      targetY = dy * strengthY;
      startRaf();
    }

    function onMouseMove(e) { onMove(e.clientX, e.clientY); }
    function onTouchMove(e) {
      if (!e.touches || !e.touches[0]) return;
      onMove(e.touches[0].clientX, e.touches[0].clientY);
    }

    function onLeave() {
      targetX = 0; targetY = 0;
      startRaf();
    }

    function lerp(a, b, t){ return a + (b - a) * t; }

    function animate() {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);
      // set background position (center + offsets)
      home.style.backgroundPosition = `${50 + currentX}% ${50 + currentY}%`;
      // subtle scale (optional) - comment out if not wanted
      home.style.transform = `scale(${1 + Math.abs(currentX + currentY) * 0.002})`;
      rafId = requestAnimationFrame(animate);
      // stop when nearly equal to target
      if (Math.abs(currentX - targetX) < 0.01 && Math.abs(currentY - targetY) < 0.01) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function startRaf(){
      if (!rafId) rafId = requestAnimationFrame(animate);
    }

    home.addEventListener('mousemove', onMouseMove);
    home.addEventListener('touchmove', onTouchMove, { passive: true });
    home.addEventListener('mouseleave', onLeave);
    home.addEventListener('touchend', onLeave);

    // ensure initial styles
    home.style.backgroundPosition = '50% 50%';
    home.style.transition = 'transform 0.2s linear';
    home.style.willChange = 'background-position, transform';
  })();

  // ...existing code...
});

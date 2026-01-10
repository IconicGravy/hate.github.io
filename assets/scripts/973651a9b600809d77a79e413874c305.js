/**
  _________  ___  ___  _______            _____    _____          ___      ___ ___  _______   ___       __      
|\___   ___\\  \|\  \|\  ___ \          / __  \  / __  \        |\  \    /  /|\  \|\  ___ \ |\  \     |\  \    
\|___ \  \_\ \  \\\  \ \   __/|        |\/_|\  \|\/_|\  \       \ \  \  /  / | \  \ \   __/|\ \  \    \ \  \   
     \ \  \ \ \   __  \ \  \_|/__      \|/ \ \  \|/ \ \  \       \ \  \/  / / \ \  \ \  \_|/_\ \  \  __\ \  \  
      \ \  \ \ \  \ \  \ \  \_|\ \          \ \  \   \ \  \       \ \    / /   \ \  \ \  \_|\ \ \  \|\__\_\  \ 
       \ \__\ \ \__\ \__\ \_______\          \ \__\   \ \__\       \ \__/ /     \ \__\ \_______\ \____________\
        \|__|  \|__|\|__|\|_______|           \|__|    \|__|        \|__|/       \|__|\|_______|\|____________|
                                                                                                               
      This utility was made @ The 11 View by Gravy (p2w8) for the project hate.ink (hash: 973651a9b600809d77a79e413874c305)
   Name: 973651a9b600809d77a79e413874c305.js
   Description: Made for the products and checkout gateways
   License: undefined
   Notes: Please do not edit anything unless you know exactly what you are editing and what you are replacing it with.
         This project is open source, so feel free to use, modify, or build upon it (Skid it).
 */
const PRODUCTS = [{
      id: 'actinium',
      name: 'Actinium.hvh',
      price: 8,
      desc: 'High-performance script designed for competitive play with advanced anti-detection features and aim correction.',
      bannerUrl: '/assets/imgs/shop/id-actinium.jpg',
      payments: [{
            type: 'PayPal',
            price: 10,
            active: true,
            link: 'https://paypal.me/gradooo'
         },
         {
            type: 'Robux',
            price: 1300,
            active: true,
            link: 'https://www.roblox.com/catalog/124369863251174/xx'
         },
         {
            type: 'Crypto',
            price: 8,
            active: true,
            link: 'https://discord.gg/DtB2HkHE98'
         }
      ],
      games: [{
            name: 'Hood Customs',
            status: 'Active'
         },
         {
            name: 'DaHood',
            status: 'Coming Soon'
         },
         {
            name: 'ZeeHood',
            status: 'Coming Soon'
         }
      ],
      executors: {
         paid: ['Potassium', 'Seliware', 'Volcano', 'Wave', 'Volt'],
         free: ['Swift', 'Velocity']
      }
   },
   {
      id: 'serenium',
      name: 'Serenium.hvh',
      price: 7.50,
      desc: 'Advanced hvh utility tailored specifically for Combat Warriors dominance.',
      bannerUrl: '/assets/imgs/shop/id-serenium.jpg',
      payments: [{
            type: 'PayPal',
            price: 7.50,
            active: true,
            link: 'https://paypal.me/ipuw'
         },
         {
            type: 'Robux',
            price: 2736,
            active: true,
            link: 'https://www.roblox.com/game-pass/1664165638/serenium-hvh'
         },
         {
            type: 'Crypto',
            price: 7.50,
            active: true,
            link: 'https://discord.gg/serenium'
         }
      ],
      games: [{
         name: 'Combat Warriors',
         status: 'Active'
      }],
      executors: {
         paid: ['Potassium', 'Wave', 'Volcano', 'Seliware', 'Volt'],
         free: ['None']
      }
   }
];

const LANYARD_ID = "1091592149105135686"; // mine dont mind that
let selectedPayment = null;
let currentProduct = null;
const shopGrid = document.getElementById('shop-grid');
const productSection = document.getElementById('product-section');
const checkoutModal = document.getElementById('checkout-modal');
const dBanner = document.getElementById('d-banner');
const dTitle = document.getElementById('d-title');
const dDesc = document.getElementById('d-desc');
const gamesList = document.getElementById('games-list');
const execsPaid = document.getElementById('execs-paid');
const execsFree = document.getElementById('execs-free');
const paymentGrid = document.getElementById('payment-grid');
const dynamicField = document.getElementById('dynamic-form-field');
const footerDot = document.getElementById('footer-dot');

document.addEventListener('DOMContentLoaded', () => {
   renderShop(PRODUCTS);
   initLanyard();
});

function renderShop(items) {
   shopGrid.innerHTML = '';
   items.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
                    <img src="${prod.bannerUrl}" class="card-image" alt="${prod.name}">
                    <div class="card-overlay"></div>
                    <div class="card-details">
                        <div>
                            <div class="product-title">${prod.name}</div>
                            <div class="product-price">$${prod.price.toFixed(2)}</div>
                        </div>
                        <button class="card-btn">View Details</button>
                    </div>
                `;
      card.onclick = () => openProduct(prod.id);
      shopGrid.appendChild(card);
   });
}

function openProduct(id) {
   currentProduct = PRODUCTS.find(p => p.id === id);
   if (!currentProduct) return;

   shopGrid.classList.add('hidden');
   productSection.style.display = 'block';
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });

   dBanner.src = currentProduct.bannerUrl;
   dTitle.textContent = currentProduct.name;
   dDesc.textContent = currentProduct.desc;

   gamesList.innerHTML = currentProduct.games.map(g => `
                <div class="list-item">
                    <span class="list-name">${g.name}</span>
                    <span class="list-status ${g.status === 'Coming Soon' ? 'soon' : ''}">${g.status.toUpperCase()}</span>
                </div>
            `).join('');

   execsPaid.innerHTML = currentProduct.executors.paid.map(e => `
                <div class="exec-card">
                    <i class="fas fa-syringe exec-icon"></i>
                    <span class="exec-name">${e}</span>
                </div>
            `).join('');

   execsFree.innerHTML = currentProduct.executors.free.map(e => `
                <div class="exec-card">
                    <i class="fas fa-code-branch exec-icon" style="opacity:0.6;"></i>
                    <span class="exec-name">${e}</span>
                </div>
            `).join('');

   paymentGrid.innerHTML = currentProduct.payments.map((p, index) => `
                <div class="pay-card ${!p.active ? 'disabled' : ''}" onclick="selectPayment('${index}')">
                    <div class="pay-type">${p.type}</div>
                    <div class="pay-price">${p.price ? '$'+p.price : 'N/A'}</div>
                </div>
            `).join('');
   selectedPayment = null;

   switchTab('games');
}

function goBackToShop() {
   productSection.style.display = 'none';
   shopGrid.classList.remove('hidden');
}

function selectPayment(index) {
   document.querySelectorAll('.pay-card').forEach(c => c.classList.remove('selected'));
   const cards = paymentGrid.children;
   if (cards[index] && !cards[index].classList.contains('disabled')) {
      cards[index].classList.add('selected');
      selectedPayment = currentProduct.payments[index];
   }
}

function switchTab(tab) {
   document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
   document.querySelectorAll('.detail-tab-body').forEach(b => b.classList.remove('active'));

   const index = tab === 'games' ? 0 : 1;
   document.querySelectorAll('.detail-tab')[index].classList.add('active');
   document.querySelectorAll('.detail-tab-body')[index].classList.add('active');
}

function processCheckout() {
   if (!selectedPayment) {
      showToast('Error', 'Please select a payment method first.');
      return;
   }
   // much easier to do and why not :P
   let details = "";
   if (selectedPayment.type === 'Robux') details = "Roblox Username: [Your Username]";
   if (selectedPayment.type === 'PayPal') details = "PayPal @Name: [Your Email]";
   if (selectedPayment.type === 'Crypto') details = "Address & Currency: [Your Wallet]";

   dynamicField.innerHTML = details;
   checkoutModal.classList.add('active');
}

function closeCheckout() {
   checkoutModal.classList.remove('active');
   window.open(selectedPayment.link, '_blank');
}

function toggleFaq(el) {
   const answer = el.nextElementSibling;
   if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      el.querySelector('.list-status').textContent = '-';
   } else {
      answer.style.display = 'none';
      el.querySelector('.list-status').textContent = '?';
   }
}

function showToast(title, msg) {
   const t = document.createElement('div');
   t.className = 'toast';
   t.style.cssText = "position:fixed; top:20px; right:20px; background:#0c0c0c; border:1px solid #1ed760; color:#fff; padding:15px 25px; border-radius:12px; box-shadow:0 10px 40px rgba(0,0,0,0.5); z-index:10001; font-family:'Space Grotesk'; animation:fadeIn 0.3s;";
   t.innerHTML = `<i class="fas fa-info-circle" style="color:#1ed760; margin-right:10px;"></i> <b>${title}</b><br><span style="font-size:0.9rem; color:#aaa;">${msg}</span>`;
   document.body.appendChild(t);
   setTimeout(() => t.remove(), 4000);
}

function openDiscordModal() {
   showToast('p2w8:', 'Hire me :P');
}

function initLanyard() {
   const socket = new WebSocket("wss://api.lanyard.rest/socket");

   socket.onopen = () => {
      socket.send(JSON.stringify({
         op: 2,
         d: {
            subscribe_to_id: LANYARD_ID
         }
      }));
   };

   socket.onmessage = (e) => {
      const data = JSON.parse(e.data);

      if (data.op === 1) {
         setInterval(() => {
            socket.send(JSON.stringify({
               op: 3
            }));
         }, data.d.heartbeat_interval);
      }

      if (data.op === 0 && data.d) {
         const status = data.d.discord_status;

         footerDot.className = `status-dot ${status}`;
      }
   };
}

initLanyard();

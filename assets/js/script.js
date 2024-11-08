(function(d, t) {
    var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
    v.onload = function() {
        window.voiceflow.chat.load({
            verify: {
            projectID: '66830678ac70dd42bf0d143d'
        },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        render: {
            mode: 'embedded',
            target: document.getElementById('flat-chat')
        },
        autostart: true,
        assistant: {
            stylesheet: 'assets/css/style.css'
        }
        });
    }
    v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
})(document, 'script');

//start-btn
let mainBlock = document.querySelector('.main');
let mainChatBlock = document.querySelector('.main-chat');
document.querySelector('.start-btn').addEventListener('click', function() {
    if (mainBlock && mainChatBlock) {
        mainBlock.classList.add('hide');
        mainChatBlock.classList.add('active');
    }
});

// back-btn
document.querySelector('.back-btn').addEventListener('click', function() {
    if (mainChatBlock.classList.contains('active')) {
        mainBlock.classList.remove('hide');
        mainChatBlock.classList.remove('active');
    } else {
        window.history.back();
    }
});

//cart
document.querySelector('.chat-cart-icon').addEventListener('click', function() {
    document.querySelector('.cart-wrap').classList.add('show');
});
document.querySelector('.cart-wrap .close-btn').addEventListener('click', function() {
    document.querySelector('.cart-wrap').classList.remove('show');
});
document.querySelector('.cart-overlay').addEventListener('click', function() {
    document.querySelector('.cart-wrap').classList.remove('show');
});

//
// fetch('https://clinicalroots.azurewebsites.net/wp-json/custom/v1/cart', {
//     headers: {
//         'Authorization': 'Basic ' + btoa('ck_33cb63a110351082ba0ee871261b056685357d78:cs_8bc9263b74f0875c3ca631b9fd0371c7b80f92f4')
//     }
// })
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     // Відображення товарів у кошику на вашому лендінгу
//     displayCartItems(data);
// })
// .catch(error => console.error('Error:', error));

// function displayCartItems(items) {
//     const cartContainer = document.getElementById("cart");
//     items.forEach(item => {
//         cartContainer.innerHTML += `
//             <div class="product">
//                 <img src="${item.image}" alt="${item.name}">
//                 <h3>${item.name}</h3>
//                 <p>Ціна: ${item.price}</p>
//                 <p>Кількість: ${item.quantity}</p>
//             </div>
//         `;
//     });
// }


// 2
// async function fetchCartData() {
//     try {
//         const response = await fetch('https://clinicalroots.azurewebsites.net/wp-json/custom/v1/cart');
//         const cartData = await response.json();
//         console.log(cartData); // Вивести дані кошика в консоль
//         // Додайте логіку для відображення даних кошика на сторінці
//     } catch (error) {
//         console.error('Error fetching cart data:', error);
//     }
// }

// fetchCartData();

// 3
async function fetchCartData() {
    try {
        const response = await fetch('https://clinicalroots.azurewebsites.net/wp-json/custom/v1/cart', {
            headers: {
                'Authorization': 'Basic ' + btoa('ck_33cb63a110351082ba0ee871261b056685357d78:cs_8bc9263b74f0875c3ca631b9fd0371c7b80f92f4')
            }
        });
        const cartData = await response.json();
        console.log(cartData);
    } catch (error) {
        console.error('Error fetching cart data:', error);
    }
}

fetchCartData();
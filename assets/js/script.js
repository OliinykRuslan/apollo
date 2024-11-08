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
document.querySelector('.start-btn').addEventListener('click', function() {
    const mainBlock = document.querySelector('.main');
    const mainChatBlock = document.querySelector('.main-chat');

    if (mainBlock && mainChatBlock) {
        mainBlock.classList.add('hide');
        mainChatBlock.classList.add('active');
    }
});

// back btn
document.querySelector('.back-btn').addEventListener('click', function() {
    const mainBlock = document.querySelector('.main');
    const mainChatBlock = document.querySelector('.main-chat');
    
    if (mainBlock && mainChatBlock) {
        mainBlock.classList.remove('hide');
        mainChatBlock.classList.remove('active');
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
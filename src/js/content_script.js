(function() {
    console.log('Chap on!')

    const IMAGE_NUM = 18;
    
    let $menu = $('#home-message-emoticon-tab-stamp');
    let imageURL = chrome.extension.getURL(`icons/icon.png`);
    let menuIcon = `<a href="#" class="neo-custon-menu" data-for="home-message-entry-stamp-category-menu"><span class="neo-select-menu-text"><img src="${imageURL}" alt="LINE" title="LINE"></span></a>`;
    $menu.find('.app-page-buttonpane').append(menuIcon);

    $('.neo-custon-menu').on('click', (e) => {
        e.preventDefault();

        let $stamp = $('#home-message-emoticon-tab-stamp');
        $stamp.find('ul').html('');
        for (let i = 1; i < IMAGE_NUM; i++) {
            let imageURL = `https://dl.stickershop.line.naver.jp/products/0/0/100/1/android/stickers/${i}.png`;
    
            let stampIcon = `<li data-category="0" data-id="1" data-url="${imageURL}" title="LINE${i}"><a href="#"><img src="${imageURL}" alt="LINE${i}"></a></li>`;
            $stamp.find('ul').append(stampIcon);
        }
    });
    $('.neo-custon-menu').find('img').width(24);
    $('.neo-custon-menu').find('img').height(24);
}).call(this);  
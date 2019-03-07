import Unzip from 'unzip';

(function() {
    fetch('http://dl.stickershop.line.naver.jp/products/0/0/100/1/android/stickers.zip')
    .then(
        response => {
            var unzip= new Unzip(new Buffer(response));
            var filenames= unzip.getFilenames();
            
            for (let i = 0; i < filenames.length; i++) {
                console.log(filenames);
            }
        }
    ).catch(
        error => console.log(error)
    ); 

    var menu = document.getElementById('home-message-entry-stamp-category-menu');
    menu.appendChild('<li><a href="#" data-value="0"><img src="http://osouji-midoriarimatsu.com/wp-content/uploads/sites/145/LINE_icon_Green.png" alt="LINE1" title="LINE1"></a></li>');

    
}).call(this);  
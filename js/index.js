/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loadApps() {
    //APIからローディング

    fetch('https://immense-ravine-15653.herokuapp.com/myapps')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
            // var collectionView = document.getElementById("app_collection_view");
            // collectionView.innerHTML = createCells(myJson)
            createCells(myJson)
        }).catch(error => {
            console.error(
                error
            )
        })
}

/**
 * 
 * @param {array} MyApp array 
 */
function createCells(myapps) {
    var
        // template要素からコンテンツを取得、インスタンスの生成
        content = document.querySelector('template').content,

        // テンプレート内のimg要素
        title = content.querySelector('#title'),
        img = content.querySelector('img'),
        // フラグメント
        fragment = document.createDocumentFragment()

    myapps.forEach(myapp => {
        var clone;

        // テンプレートの要素に適用する
        title.textContent = myapp.title;
        switch (myapp.kind) {
            case 0:
                img.src = "./google-play-badge.png"
                break;

            case 1:
                img.src = "./Download-on-the-App-Store/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                break;

            case 2:
                img.src = "./Download-on-Apple-TV/US/Download_on_Apple_TV/Black_lockup/SVG/Download_on_Apple_TV_Badge_US-UK_RGB_blk_092917.svg"
                break;
        }

        // テンプレートのノードを複製
        clone = document.importNode(content, true);
        clone.querySelector('button').addEventListener('click', () => {
            onClickAppLink(myapp.link)
        });

        // 複製したノードをフラグメントに挿入
        fragment.appendChild(clone);
    });
    document.querySelector('#app_collection_view').appendChild(fragment);

}

/**
 * 
 * @param {string} url 
 */
function onClickAppLink(url) {
    console.log(url)
    window.open(url, "_blank")
}
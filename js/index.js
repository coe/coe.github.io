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

        // フラグメント
        fragment = document.createDocumentFragment()

    myapps.forEach(myapp => {
        console.log(myapp)
        var clone;

        // テンプレートの要素に適用する
        title.textContent = myapp.title;

        // テンプレートのノードを複製
        clone = document.importNode(content, true);

        // 複製したノードをフラグメントに挿入
        fragment.appendChild(clone);

        return content
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
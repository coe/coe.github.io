/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function loadInnerPage() {
    // document.getElementById("app_collection_view").setAttribute('src', page);
    // document.getElementById("fillerTitle").setAttribute('style', 'display: none;');


    // // Refresh data to force the page to load
    // var objects = document.getElementsByTagName("object");
    const apps = getApps();
    apps.forEach(element => {
        console.log(
            element
        );
    });
}

function loadApps() {
    console.log("loadApps:" + name);
    //mdc-layout-grid__cellを作る
    const myapps = getApps();
    var collectionView = document.getElementById("app_collection_view");
    collectionView.innerHTML = createCells(myapps);

}

function createCells(myapps) {
    var text = "";
    myapps.forEach(myapp => {
        const HERE = `
        <div class="mdc-layout-grid__cell">
        <div class="mdc-card">
            <div class="mdc-card__primary-action" tabindex="0" >
                <div class="mdc-card__media mdc-card__media--square">
                    <div class="mdc-card__media-content">${myapp.title}</div>
                </div>
            </div>
            <div class="mdc-card__actions">
                <div class="mdc-card__action-buttons">
                    <button class="mdc-button mdc-card__action mdc-card__action--button">
                        <span class="mdc-button__label">Action 1</span>
                    </button>
                    <button class="mdc-button mdc-card__action mdc-card__action--button">
                        <span class="mdc-button__label">Action 2</span>
                    </button>
                </div>
                <div class="mdc-card__action-icons">
                    <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                        title="Share">share</button>
                    <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                        title="More options">more_vert</button>
                </div>
            </div>
        </div>
    </div> 
`;
        text += HERE;

    });
    return text;
}

function getApps() {
    return [
        { title: "dndkodon mastodon client", icon: "https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android" },
        { title: "dndkodon mastodon client", icon: "https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android" },
        { title: "dndkodon mastodon client", icon: "https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android" },
        { title: "dndkodon mastodon client", icon: "https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android" },
        { title: "dndkodon mastodon client", icon: "https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android" }
    ];
}
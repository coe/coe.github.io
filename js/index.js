function loadInnerPage() {
    // document.getElementById("app_collection_view").setAttribute('src', page);
    // document.getElementById("fillerTitle").setAttribute('style', 'display: none;');


    // // Refresh data to force the page to load
    // var objects = document.getElementsByTagName("object");
    const apps = getApps()
    apps.forEach(element => {
        console.log(
            element
        )
    });
}

function getApps() {
    return [
        {title: "dndkodon mastodon client", icon:"https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android"},
        {title: "dndkodon mastodon client", icon:"https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android"},
        {title: "dndkodon mastodon client", icon:"https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android"},
        {title: "dndkodon mastodon client", icon:"https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android"},
        {title: "dndkodon mastodon client", icon:"https://lh3.googleusercontent.com/oofONQ1aCdpfEEZWfFazKrHX2TuQe5BvwUHZEcSXrjTA7cnBz6ErRxJOD_QetIW46Vo", link: "https://play.google.com/store/apps/details?id=jp.coe.dndkodon", kind: "android"}
    ]
}
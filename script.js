function getMarketData(){
    fetch("https://api.nomics.com/v1/currencies/ticker?key=?&ids=BTC,ETH,XRP&interval=1d,30d&platform-currency=ETH&per-page=100&page=1")
        .then(response => response.json())
        .then(data => console.log(data))
}

getMarketData()

let icon = document.getElementById('icon')
let mobileNav = document.querySelector('.mobile-nav');

function toggleNav(){
    const style = mobileNav.style.display === "flex" ? "none" : "flex";
    mobileNav.style.display = style;
    
    icon.classList.toggle('bi-list');
    icon.classList.toggle('bi-x');
};
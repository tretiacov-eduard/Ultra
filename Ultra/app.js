const button = document.getElementById("button")
const menu = document.getElementById("menu")
const catalog = document.getElementById("catalog")
menu.style.display = 'none'

button.addEventListener("click", () => {
    if(menu.style.display == 'none'){
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
})

catalog.addEventListener("click", () => {
    if(menu.style.display == 'none'){
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
})

const shoppingIcon = document.getElementById("shopping-cart")
const cartMenu = document.getElementById("cart")

cartMenu.style.display = 'none'

shoppingIcon.addEventListener('click', () => {
    if(cartMenu.style.display == 'none'){
        cartMenu.style.display = 'flex'
    } else {
        cartMenu.style.display = 'none'
    }
})

const images = document.getElementsByClassName("image")
const previous = document.getElementById("previous")
const next = document.getElementById("next")
const pagination = document.getElementById("pagination")

function hideImages() {
    Array.from(images).forEach(image => {
        image.style.opacity = '0'
    })
}
hideImages()

images[0].style.opacity = '1'

Array.from(images).forEach(image => {
    pagination.innerHTML += "<div class='page'></div>"
})

let imgCount = 0

const pages = document.getElementsByClassName('page')

function deactivate() {
    Array.from(pages).forEach(page => page.classList.remove('active'))
}


Array.from(pages).forEach((page, idx) => {
    page.addEventListener('click', () => {
        deactivate()
        hideImages()
        imgCount = idx
        images[imgCount].style.opacity = '1'
        page.classList.add('active')
    })
})

previous.addEventListener('click', () => {
    deactivate()
    hideImages()
    if (imgCount <= 0) imgCount = images.length - 1
    else imgCount -= 1

    images[imgCount].style.opacity = '1'
    pages[imgCount].classList.add('active')
})

next.addEventListener('click', () => {
    deactivate()
    hideImages()
    if(imgCount >= images.length - 1) imgCount = 0
    else imgCount += 1

    images[imgCount].style.opacity = '1'
    pages[imgCount].classList.add('active')
})

setInterval(() => {
    deactivate()
    hideImages()
    if(imgCount >= images.length - 1) imgCount = 0
    else imgCount += 1

    images[imgCount].style.opacity = '1'
    pages[imgCount].classList.add('active')
},10000)

pages[0].classList.add('active')


const teknik = [
    {
        name: "Mașină de spălat vase Hotpoint-Ariston HSFO...",
        price: 7999,
        image: "https://cdn-ultra.esempla.com/storage/webp/ede6578b-70a1-4c4d-86a8-000e005fce5c.webp",
        credit: 1334
    },
    {
        name: "Plită pe gaz Whirlpool GOFL 629/S, Argintiu",
        price: 6499,
        image: "https://cdn-ultra.esempla.com/storage/webp/ce84bf40-1a68-435d-8273-64d1e58be81e.webp",
        credit: 1084
    },
    {
        name: "65 OLED SMART TV LG OLED65A26LA, 3840 x...",
        price: 30999,
        image: "https://cdn-ultra.esempla.com/storage/webp/9de6d31e-968f-4b0c-b13b-d725145fc658.webp",
        credit: 5167
    },
    {
        name: "75 Nanocell SMART TV LG 75NANO826QB, 3840 x...",
        price: 28499,
        image: "https://cdn-ultra.esempla.com/storage/webp/12f48cfa-eb9e-4c38-8945-1d52047a9fa1.webp",
        credit: 4750
    },
    {
        name: "48 OLED SMART TV LG OLED48C24LA, 3840 x 2160...",
        price: 24999,
        image: "https://cdn-ultra.esempla.com/storage/webp/f781cc21-63a4-479e-adfe-0bf273acc096.webp",
        credit: 4167
    },
    {
        name: "Smartphone Samsung Galaxy S23 Ultra...",
        price: 27299,
        image: "https://cdn-ultra.esempla.com/storage/webp/30bfbce2-7d7b-4a2b-a725-30a26cc115b7.webp",
        credit: 4550
    },
    {
        name: "Proiector universal Samsung The Freestyle LSP3B, 550...",
        price: 14999,
        image: "https://cdn-ultra.esempla.com/storage/webp/2455ba82-adc8-4c0a-b95a-8a5ac0ad0c0d.webp",
        credit: 2500
    },
    {
        name: "55 OLED SMART TV LG OLED55A26LA, 3840 x...",
        price: 21999,
        image: "https://cdn-ultra.esempla.com/storage/webp/bb2ceb04-ca67-4798-aab3-4603842ceb35.webp",
        credit: 3667
    },
    {
        name: "75 LED SMART TV Samsung UE75AU7100UXUA, 3840 x...",
        price: 22999,
        image: "https://cdn-ultra.esempla.com/storage/webp/60679ecd-44bc-4081-b32f-d6640238aa7e.webp",
        credit: 3834
    },
    {
        name: "Laptop 14 ASUS Vivobook Pro 14 OLED M3401QA...",
        price: 13990,
        image: "https://cdn-ultra.esempla.com/storage/webp/40a3b52a-861c-4711-9c2f-d4b564307cba.webp",
        credit: 2332
    }
]

const products = document.getElementById("products")

teknik.forEach(obj => {
    products.innerHTML += `
    <div class='product'>
    <div class='image-1'>
    <img src=${obj.image}>
    </div>
    <div class='image-2'>
    <img src='https://ultra.md/images/icons/credit0_6_ro_new.svg'>
    </div>
    <h4>${obj.name}</h4>
    <div class='prices'>
    <h3>${obj.price} <span>lei</span></h3>
    <p>${obj.credit} <span>lei/luni</span></p>
    </div>
    <div class='btns'>
    <button class='price-btn'>Cunosti un pret mai bun</button>
    <button class='cart-btn'><img src='images/shopping-cart.png'></button>
    </div>
    </div>
    `
})

const cartBtns = document.getElementsByClassName('cart-btn')
let cart = []

const cartList = document.getElementById("cart-list")
const cartTotal = document.getElementById("cart-total")

Array.from(cartBtns).forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        if(!cart.includes(teknik[idx])) cart.push(teknik[idx])
        showCart()
    })
})
function showCart() {
    cartList.innerHTML = ''
    cart.forEach(item => {
        cartList.innerHTML += `
            <div class='list-item'>
                <img src=${item.image}>
                <h6>${item.name}</h6>
                <p>${item.price}lei</p>
                <button class='delete-btn'>x</button>
            </div>
        `
    })
    const jsonCart = JSON.stringify(cart)
    localStorage.setItem('myObj', jsonCart)
    const deleteBtns = document.getElementsByClassName('delete-btn')
    Array.from(deleteBtns).forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            cart = cart.filter((item, i) => i !== idx)
            showCart()
        })
    })
    getSum()
}
function getSum() {
    let sum = cart.reduce((s, item) => s + item.price, 0)
    cartTotal.innerHTML = `
    <div class='total'>
    <h3>Total:</h3>
    <span>${sum}lei</span>
    </div>
    `
}

const slickSlider = [
    {
        image: "https://ultra.md/images/topbrands/xiaomi.png",
        background: "#FF6900"
    },
    {
        image: "https://ultra.md/images/topbrands/lenovo.png",
        background: "#E1251B"
    },
    {
        image: "https://ultra.md/images/topbrands/apple.png",
        background: "black"
    },
    {
        image: "https://ultra.md/images/topbrands/lg.png",
        background: "#C40452"
    },
    {
        image: "https://ultra.md/images/topbrands/samsung.png",
        background: "black"
    },
    {
        image: "https://ultra.md/images/topbrands/hisense.png",
        background: "#00B3AC"
    },
    {
        image: "https://ultra.md/images/topbrands/aquapick.png",
        background: "#33348D"
    },
    {
        image: "https://ultra.md/images/topbrands/whirlpool.png",
        background: "#EDAC09"
    }
]

const slick = document.getElementById("slick")

slickSlider.forEach(obj => {
    slick.innerHTML += `
   <div class='container-slider'>
   <div class='slider-image' style='background-color:${obj.background}'>
   <img src=${obj.image}>
   </div>
   <div class='brand'>
   <span>BrandShop</span>
   </div>
   </div>
    `
})

const avantajList = [
    {
        icon: "images/delivery.svg",
        text: "Livrare și achitare"
    },
    {
        icon: "images/medal.svg",
        text: "Sortiment bogat de calitate înaltă"
    },
    {
        icon: "images/start.svg",
        text: "Începe acum"
    },
    {
        icon: "images/display.svg",
        text: "Shopping avantajos"
    },
    {
        icon: "images/certificat.svg",
        text: "Garanția celui mai bun preț"
    }
]

const avantaje = document.getElementById("avantaje")

avantajList.forEach(obj => {
    avantaje.innerHTML += `
    <div class='list'>
        <div class='left'>
        <img src=${obj.icon}>
        <h3>${obj.text}</h3>
        </div>
        <div class='right'>
        <img src='images/arrow-down.svg'>
        </div>
    </div>
    `
})
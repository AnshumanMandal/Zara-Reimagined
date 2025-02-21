if (window.matchMedia("(max-width: 600px)").matches) {
    // sections
const sections = document.querySelector(".sections").querySelectorAll("button")


sections.forEach(option =>{
    option.addEventListener('click',function() {
        sections.forEach(nav=>nav.classList.remove("active"))
        this.classList.add("active");
    })
})

// object of an array

const products = [
    {
        image: './woman/images/Blazers & Waistcoats/1v.png',
        title: 'ZW COLLECTION FADED WAISTCOAT WITH TIES',
        price: '₹ 5,990.00',
        discount: '₹ 3,950.00',
        discountPercentage: '-34%'
    },
    {
        image: './woman/images/Blazers & Waistcoats/2v.png',
        title: 'OVERSIZE BLAZER WITH TOPSTITCHING',
        price: '₹ 7,590.00',
        discount: '₹ 4,550.00',
        discountPercentage: '-40%'
    },

    {
        image: './woman/images/Blazers & Waistcoats/3v.png',
        title: 'ZW COLLECTION MINIMALIST FITTED BLAZER',
        price: '₹ 7,590.00',
        discount: '₹ 4,550.00',
        discountPercentage: '-37%'
    },
    {
        image: './woman/images/Blazers & Waistcoats/4v.png',
        title: 'ZW COLLECTION 100% WOOL BLAZER',
        price: '₹ 11,990.00',
        discount: '₹ 5,995.00',
        discountPercentage: '-50%'
    },
    {
        image: '/woman/images/Blazers & Waistcoats/5v.png',
        title: 'METALLIC CHECK BLAZER',
        price: '₹ 7,590.00',
        discount: '₹ 4,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Blazers & Waistcoats/6v.png',
        title: 'CROPPED BLAZER WITH TIE',
        price: '₹ 3,590.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-28%'
    },
    {
        image: '/woman/images/Blazers & Waistcoats/7v.png',
        title: 'DOUBLE-BREASTED CROPPED BLAZER',
        price: '₹ 4,990.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-48%'
    },
    {
        image: '/woman/images/Blazers & Waistcoats/8v.png',
        title: 'ZW COLLECTION PINSTRIPE WOOL BLEND BLAZER',
        price: '₹ 10,990.00',
        discount: '₹ 5,950.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Blazers & Waistcoats/9v.png',
        title: 'ROUND NECK TEXTURED BLAZER',
        price: '₹ 5,990.00',
        discount: '₹ 3,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Blazers & Waistcoats/10v.png',
        title: 'ZW COLLECTION TAILORED BLAZER',
        price: '₹ 8,590.00',
        discount: '₹ 4,550.00',
        discountPercentage: '-47%'
    }
];

const container = document.querySelector('.content #section1 .cards');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[50vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full object-fill object-bottom';
    img.src = product.image;
    img.alt = product.title;

    imgDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

    const title = document.createElement('a');
    title.href = '#';
    title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
    title.innerText = product.title;

    const price = document.createElement('h4');
    price.className = 'text-white text-sm mt-4';
    price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container.appendChild(card);
});


// section 2

const products2 = [
    {
        image: '/woman/images/Tops & Bodysuits/1v.png',
        title: 'ASYMMETRIC KNIT TOP',
        price: '₹ 2,290.00',
        discount: '₹ 1,750.00',
        discountPercentage: '-23%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/2.jpg',
        title: 'DRAPED TOP WITH KNOT',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-32%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/3v.png',
        title: 'LACE TOP WITH RHINESTONES',
        price: '₹ 2,590.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/4v.png',
        title: 'SOFT KNIT VEST',
        price: '₹ 1,990.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/5v.png',
        title: 'SOFT TURTLENECK TOP',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/6v.png',
        title: 'CHENILLE SWEATER',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-48%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/7v.png',
        title: 'ZW COLLECTION 100% LINEN ASYMMETRIC TOP',
        price: '₹ 3,590.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/8v.png',
        title: 'RIBBED CHENILLE CROP TOP',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/9v.png',
        title: 'ZW COLLECTION ASYMMETRIC TOP',
        price: '₹ 3,590.00',
        discount: '₹ 2,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Tops & Bodysuits/10v.png',
        title: 'RIGID CREASED KIMONO',
        price: '₹ 4,990.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-48%'
    }
];

const container2 = document.querySelector('.content #section2 .cards');

products2.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[50vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full object-fill ';
    img.src = product.image;
    img.alt = product.title;

    imgDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

    const title = document.createElement('a');
    title.href = '#';
    title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
    title.innerText = product.title;

    const price = document.createElement('h4');
    price.className = 'text-white text-sm mt-4';
    price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container2.appendChild(card);
});


// section 3 

const products3 = [
    {
        image: '/woman/images/Dresses/1v.png',
        title: 'SHORT PRINTED DRESS',
        price: '₹ 2,290.00',
        discount: '₹ 1,750.00',
        discountPercentage: '-23%'
    },
    {
        image: '/woman/images/Dresses/2v.png',
        title: 'ZW COLLECTION PRINT DRESS',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-32%'
    },
    {
        image: '/woman/images/Dresses/3v.png',
        title: 'GEOMETRIC PRINT DRESS',
        price: '₹ 2,590.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Dresses/4v.png',
        title: 'ZW COLLECTION PRINTED SKATER DRESS',
        price: '₹ 1,990.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Dresses/5v.png',
        title: 'ZW COLLECTION ANIMAL PRINT SHORT DRESS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Dresses/6v.png',
        title: 'ZW COLLECTION HALTER-NECK BALLOON DRESS',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-48%'
    },
    {
        image: '/woman/images/Dresses/7v.png',
        title: 'CONTRAST DRESS - ZW COLLECTION',
        price: '₹ 3,590.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Dresses/8v.png',
        title: 'ZW COLLECTION CREASED-EFFECT DRESS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Dresses/9v.png',
        title: 'LACE DENIM DRESS',
        price: '₹ 3,590.00',
        discount: '₹ 2,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Dresses/10v.png',
        title: 'ZW COLLECTION WOOL DRESS',
        price: '₹ 4,990.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-48%'
    }
];

const container3 = document.querySelector('.content #section3 .cards');

products3.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[50vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full object-fill ';
    img.src = product.image;
    img.alt = product.title;

    imgDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

    const title = document.createElement('a');
    title.href = '#';
    title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
    title.innerText = product.title;

    const price = document.createElement('h4');
    price.className = 'text-white text-sm mt-4';
    price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container3.appendChild(card);
});


// section 4

const products4 = [
    {
        image: '/woman/images/Jeans/1v.png',
        title: 'TRF CREASED-EFFECT COATED MID-RISE JEANS',
        price: '₹ 2,290.00',
        discount: '₹ 1,750.00',
        discountPercentage: '-23%'
    },
    {
        image: '/woman/images/Jeans/2v.png',
        title: 'ZW COLLECTION CROPPED MID-RISE BARREL JEANS',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-32%'
    },
    {
        image: '/woman/images/Jeans/3v.png',
        title: 'Z1975 WIDE-LEG CROPPED HIGH-WAIST BELTED JEANS',
        price: '₹ 2,590.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Jeans/4v.png',
        title: 'TRF STRAIGHT-LEG MID-RISE JEANS',
        price: '₹ 1,990.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Jeans/5v.png',
        title: 'MID-RISE FLARED CROPPED TRF JEANS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Jeans/6v.png',
        title: 'ZW COLLECTION STRAIGHT-LEG MID-RISE CROPPED JEANS',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-48%'
    },
    {
        image: '/woman/images/Jeans/7v.png',
        title: 'TRF BALLOON MID-RISE JEANS',
        price: '₹ 3,590.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Jeans/8v.png',
        title: 'Z1975 WIDE-LEG MID-RISE JEANS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Jeans/9v.png',
        title: 'Z1975 HIGH-WAIST MINI FLARE JEANS',
        price: '₹ 3,590.00',
        discount: '₹ 2,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Jeans/10v.png',
        title: 'Z1975 STRAIGHT-LEG CROPPED HIGH-WAIST BELTED JEANS',
        price: '₹ 4,990.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-48%'
    }
];

const container4 = document.querySelector('.content #section4 .cards');

products4.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[50vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full  object-bottom';
    img.src = product.image;
    img.alt = product.title;

    imgDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

    const title = document.createElement('a');
    title.href = '#';
    title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
    title.innerText = product.title;

    const price = document.createElement('h4');
    price.className = 'text-white text-sm mt-4';
    price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container4.appendChild(card);
});


// section 5

const products5 = [
    {
        image: '/woman/images/Shorts & Skorts/1v.png',
        title: 'ZW COLLECTION HIGH-WAIST SHORTS',
        price: '₹ 2,290.00',
        discount: '₹ 1,750.00',
        discountPercentage: '-23%'
    },
    {
        image: '/woman/images/Shorts & Skorts/2v.png',
        title: 'BOX PLEAT SKORT',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-32%'
    },
    {
        image: '/woman/images/Shorts & Skorts/3v.png',
        title: 'SKORT WITH CONTRASTING WAISTBAND',
        price: '₹ 2,590.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Shorts & Skorts/4v.png',
        title: 'DARTED BERMUDA SHORTS WITH BELT',
        price: '₹ 1,990.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Shorts & Skorts/5v.png',
        title: 'ZW COLLECTION LOOSE HIGH-WAIST CAPRI DENIM BERMUDA SHORTS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Shorts & Skorts/6v.png',
        title: 'BOX PLEAT SKORT WITH BELT',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-48%'
    },
    {
        image: '/woman/images/Shorts & Skorts/7v.png',
        title: 'MASCULINE BERMUDA SHORTS',
        price: '₹ 3,590.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Shorts & Skorts/8v.png',
        title: 'PLUSH SHORTS WITH SLOGAN',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Shorts & Skorts/9v.png',
        title: 'Z1975 SKORT',
        price: '₹ 3,590.00',
        discount: '₹ 2,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Shorts & Skorts/10v.png',
        title: 'GLITTER PLUSH SHORTS',
        price: '₹ 4,990.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-48%'
    }
];

const container5 = document.querySelector('.content #section5 .cards');

products5.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[50vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full  object-bottom';
    img.src = product.image;
    img.alt = product.title;

    imgDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

    const title = document.createElement('a');
    title.href = '#';
    title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
    title.innerText = product.title;

    const price = document.createElement('h4');
    price.className = 'text-white text-sm mt-4';
    price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container5.appendChild(card);
});

// section 6

const products6 = [
    {
        image: '/woman/images/Swimwear/1v.png',
        title: 'BIKINI BOTTOMS',
        price: '₹ 2,290.00',
        discount: '₹ 1,750.00',
        discountPercentage: '-23%'
    },
    {
        image: '/woman/images/Swimwear/2v.png',
        title: 'CURTAIN STRING BIKINI BOTTOMS',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-32%'
    },
    {
        image: '/woman/images/Swimwear/3v.png',
        title: 'STRAPLESS SWIMSUIT',
        price: '₹ 2,590.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Swimwear/4v.png',
        title: 'CONTRAST BIKINI BOTTOMS',
        price: '₹ 1,990.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Swimwear/5v.png',
        title: 'BIKINI TOP WITH DOUBLE STRAPS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Swimwear/6v.png',
        title: 'STRIPED HALTERNECK SWIMSUIT',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-48%'
    },
    {
        image: '/woman/images/Swimwear/7v.png',
        title: 'BIKINI BOTTOMS',
        price: '₹ 3,590.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Swimwear/8v.png',
        title: 'CONTRAST BIKINI BOTTOMS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Swimwear/9v.png',
        title: 'RIBBED BIKINI BOTTOMS',
        price: '₹ 3,590.00',
        discount: '₹ 2,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Swimwear/10v.png',
        title: 'TIE-DYE BIKINI BOTTOMS',
        price: '₹ 4,990.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-48%'
    }
];

const container6 = document.querySelector('.content #section6 .cards');

products6.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[50vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full  object-bottom';
    img.src = product.image;
    img.alt = product.title;

    imgDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

    const title = document.createElement('a');
    title.href = '#';
    title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
    title.innerText = product.title;

    const price = document.createElement('h4');
    price.className = 'text-white text-sm mt-4';
    price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container6.appendChild(card);
});


// section 7

const products7 = [
    {
        image: '/woman/images/Jackets/1v.png',
        title: 'ZW COLLECTION MASCULINE WOOL COAT',
        price: '₹ 2,290.00',
        discount: '₹ 1,750.00',
        discountPercentage: '-23%'
    },
    {
        image: '/woman/images/Jackets/2v.png',
        title: 'SOFT BOMBER JACKET WITH POCKETS',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-32%'
    },
    {
        image: '/woman/images/Jackets/3v.png',
        title: 'SHORT LEATHER EFFECT QUILTED JACKET',
        price: '₹ 2,590.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Jackets/4v.png',
        title: 'ZW COLLECTION OVERSIZE FADED TRENCH COAT',
        price: '₹ 1,990.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Jackets/5v.png',
        title: 'WATER-REPELLENT PADDED OVERSHIRT',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Jackets/6v.png',
        title: 'SOFT BOMBER JACKET WITH POCKETS',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-48%'
    },
    {
        image: '/woman/images/Jackets/7v.png',
        title: 'OVERSIZE DOUBLE-BREASTED TRENCH COAT',
        price: '₹ 3,590.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Jackets/8v.png',
        title: 'ZW COLLECTION MINIMALIST WOOL BLEND COAT',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Jackets/9v.png',
        title: 'TRF DENIM JACKET WITH HEART',
        price: '₹ 3,590.00',
        discount: '₹ 2,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Jackets/10v.png',
        title: 'SHORT LINEN BLEND BOMBER JACKET',
        price: '₹ 4,990.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-48%'
    }
];

const container7 = document.querySelector('.content #section7 .cards');

products7.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[50vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full  object-bottom';
    img.src = product.image;
    img.alt = product.title;

    imgDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

    const title = document.createElement('a');
    title.href = '#';
    title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
    title.innerText = product.title;

    const price = document.createElement('h4');
    price.className = 'text-white text-sm mt-4';
    price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container7.appendChild(card);
});


// section 8

const products8 = [
    {
        image: '/woman/images/Accessories/1v.png',
        title: 'CORD NECKLACE WITH METAL PIECES',
        price: '₹ 2,290.00',
        discount: '₹ 1,750.00',
        discountPercentage: '-23%'
    },
    {
        image: '/woman/images/Accessories/2v.png',
        title: 'PRINTED CREASED BANDANA',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-32%'
    },
    {
        image: '/woman/images/Accessories/3v.png',
        title: 'BASIC TWILL CAP',
        price: '₹ 2,590.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-40%'
    },
    {
        image: '/woman/images/Accessories/4v.png',
        title: 'WOVEN HAT',
        price: '₹ 1,990.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Accessories/5v.png',
        title: 'CLASSIC WOOL HAT',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Accessories/6v.png',
        title: 'SQUARE ACETATE SUNGLASSES',
        price: '₹ 2,990.00',
        discount: '₹ 1,550.00',
        discountPercentage: '-48%'
    },
    {
        image: '/woman/images/Accessories/7v.png',
        title: 'WOVEN JUTE BAG',
        price: '₹ 3,590.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Accessories/8v.png',
        title: 'LEATHER ANIMAL PRINT BELT',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: '/woman/images/Accessories/9v.png',
        title: 'BELT WITH ENGRAVED CHAIN LINKS',
        price: '₹ 3,590.00',
        discount: '₹ 2,250.00',
        discountPercentage: '-37%'
    },
    {
        image: '/woman/images/Accessories/10v.png',
        title: 'FINE ANKLE SOCKS',
        price: '₹ 4,990.00',
        discount: '₹ 2,550.00',
        discountPercentage: '-48%'
    }
];

const container8 = document.querySelector('.content #section8 .cards');

products8.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[50vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full  object-bottom';
    img.src = product.image;
    img.alt = product.title;

    imgDiv.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

    const title = document.createElement('a');
    title.href = '#';
    title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
    title.innerText = product.title;

    const price = document.createElement('h4');
    price.className = 'text-white text-sm mt-4';
    price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container8.appendChild(card);
});

}

else{
    // sections
    const sections = document.querySelector(".sections").querySelectorAll("button")


    sections.forEach(option =>{
        option.addEventListener('click',function() {
            sections.forEach(nav=>nav.classList.remove("active"))
            this.classList.add("active");
        })
    })

    // object of an array

    const products = [
        {
            image: '/woman/images/Blazers & Waistcoats/1v.png',
            title: 'ZW COLLECTION FADED WAISTCOAT WITH TIES',
            price: '₹ 5,990.00',
            discount: '₹ 3,950.00',
            discountPercentage: '-34%'
        },
        {
            image: '/woman/images/Blazers & Waistcoats/2v.png',
            title: 'OVERSIZE BLAZER WITH TOPSTITCHING',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-40%'
        },

        {
            image: '/woman/images/Blazers & Waistcoats/3v.png',
            title: 'ZW COLLECTION MINIMALIST FITTED BLAZER',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Blazers & Waistcoats/4v.png',
            title: 'ZW COLLECTION 100% WOOL BLAZER',
            price: '₹ 11,990.00',
            discount: '₹ 5,995.00',
            discountPercentage: '-50%'
        },
        {
            image: '/woman/images/Blazers & Waistcoats/5v.png',
            title: 'METALLIC CHECK BLAZER',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Blazers & Waistcoats/6v.png',
            title: 'CROPPED BLAZER WITH TIE',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-28%'
        },
        {
            image: '/woman/images/Blazers & Waistcoats/7v.png',
            title: 'DOUBLE-BREASTED CROPPED BLAZER',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        },
        {
            image: '/woman/images/Blazers & Waistcoats/8v.png',
            title: 'ZW COLLECTION PINSTRIPE WOOL BLEND BLAZER',
            price: '₹ 10,990.00',
            discount: '₹ 5,950.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Blazers & Waistcoats/9v.png',
            title: 'ROUND NECK TEXTURED BLAZER',
            price: '₹ 5,990.00',
            discount: '₹ 3,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Blazers & Waistcoats/10v.png',
            title: 'ZW COLLECTION TAILORED BLAZER',
            price: '₹ 8,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-47%'
        }
    ];

    const container = document.querySelector('.content #section1 .cards');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[24vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full object-fill object-bottom';
        img.src = product.image;
        img.alt = product.title;

        imgDiv.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

        const title = document.createElement('a');
        title.href = '#';
        title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
        title.innerText = product.title;

        const price = document.createElement('h4');
        price.className = 'text-white text-sm mt-4';
        price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container.appendChild(card);
    });


    // section 2

    const products2 = [
        {
            image: '/woman/images/Tops & Bodysuits/1v.png',
            title: 'ASYMMETRIC KNIT TOP',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/2.jpg',
            title: 'DRAPED TOP WITH KNOT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/3v.png',
            title: 'LACE TOP WITH RHINESTONES',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/4v.png',
            title: 'SOFT KNIT VEST',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/5v.png',
            title: 'SOFT TURTLENECK TOP',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/6v.png',
            title: 'CHENILLE SWEATER',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/7v.png',
            title: 'ZW COLLECTION 100% LINEN ASYMMETRIC TOP',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/8v.png',
            title: 'RIBBED CHENILLE CROP TOP',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/9v.png',
            title: 'ZW COLLECTION ASYMMETRIC TOP',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Tops & Bodysuits/10v.png',
            title: 'RIGID CREASED KIMONO',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container2 = document.querySelector('.content #section2 .cards');

    products2.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[24vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full object-fill ';
        img.src = product.image;
        img.alt = product.title;

        imgDiv.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

        const title = document.createElement('a');
        title.href = '#';
        title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
        title.innerText = product.title;

        const price = document.createElement('h4');
        price.className = 'text-white text-sm mt-4';
        price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container2.appendChild(card);
    });


    // section 3 

    const products3 = [
        {
            image: '/woman/images/Dresses/1v.png',
            title: 'SHORT PRINTED DRESS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: '/woman/images/Dresses/2v.png',
            title: 'ZW COLLECTION PRINT DRESS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: '/woman/images/Dresses/3v.png',
            title: 'GEOMETRIC PRINT DRESS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Dresses/4v.png',
            title: 'ZW COLLECTION PRINTED SKATER DRESS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Dresses/5v.png',
            title: 'ZW COLLECTION ANIMAL PRINT SHORT DRESS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Dresses/6v.png',
            title: 'ZW COLLECTION HALTER-NECK BALLOON DRESS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: '/woman/images/Dresses/7v.png',
            title: 'CONTRAST DRESS - ZW COLLECTION',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Dresses/8v.png',
            title: 'ZW COLLECTION CREASED-EFFECT DRESS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Dresses/9v.png',
            title: 'LACE DENIM DRESS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Dresses/10v.png',
            title: 'ZW COLLECTION WOOL DRESS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container3 = document.querySelector('.content #section3 .cards');

    products3.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[24vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full object-fill ';
        img.src = product.image;
        img.alt = product.title;

        imgDiv.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

        const title = document.createElement('a');
        title.href = '#';
        title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
        title.innerText = product.title;

        const price = document.createElement('h4');
        price.className = 'text-white text-sm mt-4';
        price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container3.appendChild(card);
    });


    // section 4

    const products4 = [
        {
            image: '/woman/images/Jeans/1v.png',
            title: 'TRF CREASED-EFFECT COATED MID-RISE JEANS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: '/woman/images/Jeans/2v.png',
            title: 'ZW COLLECTION CROPPED MID-RISE BARREL JEANS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: '/woman/images/Jeans/3v.png',
            title: 'Z1975 WIDE-LEG CROPPED HIGH-WAIST BELTED JEANS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Jeans/4v.png',
            title: 'TRF STRAIGHT-LEG MID-RISE JEANS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Jeans/5v.png',
            title: 'MID-RISE FLARED CROPPED TRF JEANS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Jeans/6v.png',
            title: 'ZW COLLECTION STRAIGHT-LEG MID-RISE CROPPED JEANS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: '/woman/images/Jeans/7v.png',
            title: 'TRF BALLOON MID-RISE JEANS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Jeans/8v.png',
            title: 'Z1975 WIDE-LEG MID-RISE JEANS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Jeans/9v.png',
            title: 'Z1975 HIGH-WAIST MINI FLARE JEANS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Jeans/10v.png',
            title: 'Z1975 STRAIGHT-LEG CROPPED HIGH-WAIST BELTED JEANS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container4 = document.querySelector('.content #section4 .cards');

    products4.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[24vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full  object-bottom';
        img.src = product.image;
        img.alt = product.title;

        imgDiv.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

        const title = document.createElement('a');
        title.href = '#';
        title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
        title.innerText = product.title;

        const price = document.createElement('h4');
        price.className = 'text-white text-sm mt-4';
        price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container4.appendChild(card);
    });


    // section 5

    const products5 = [
        {
            image: '/woman/images/Shorts & Skorts/1v.png',
            title: 'ZW COLLECTION HIGH-WAIST SHORTS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: '/woman/images/Shorts & Skorts/2v.png',
            title: 'BOX PLEAT SKORT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: '/woman/images/Shorts & Skorts/3v.png',
            title: 'SKORT WITH CONTRASTING WAISTBAND',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Shorts & Skorts/4v.png',
            title: 'DARTED BERMUDA SHORTS WITH BELT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Shorts & Skorts/5v.png',
            title: 'ZW COLLECTION LOOSE HIGH-WAIST CAPRI DENIM BERMUDA SHORTS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Shorts & Skorts/6v.png',
            title: 'BOX PLEAT SKORT WITH BELT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: '/woman/images/Shorts & Skorts/7v.png',
            title: 'MASCULINE BERMUDA SHORTS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Shorts & Skorts/8v.png',
            title: 'PLUSH SHORTS WITH SLOGAN',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Shorts & Skorts/9v.png',
            title: 'Z1975 SKORT',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Shorts & Skorts/10v.png',
            title: 'GLITTER PLUSH SHORTS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container5 = document.querySelector('.content #section5 .cards');

    products5.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[24vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full  object-bottom';
        img.src = product.image;
        img.alt = product.title;

        imgDiv.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

        const title = document.createElement('a');
        title.href = '#';
        title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
        title.innerText = product.title;

        const price = document.createElement('h4');
        price.className = 'text-white text-sm mt-4';
        price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container5.appendChild(card);
    });

    // section 6

    const products6 = [
        {
            image: '/woman/images/Swimwear/1v.png',
            title: 'BIKINI BOTTOMS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: '/woman/images/Swimwear/2v.png',
            title: 'CURTAIN STRING BIKINI BOTTOMS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: '/woman/images/Swimwear/3v.png',
            title: 'STRAPLESS SWIMSUIT',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Swimwear/4v.png',
            title: 'CONTRAST BIKINI BOTTOMS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Swimwear/5v.png',
            title: 'BIKINI TOP WITH DOUBLE STRAPS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Swimwear/6v.png',
            title: 'STRIPED HALTERNECK SWIMSUIT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: '/woman/images/Swimwear/7v.png',
            title: 'BIKINI BOTTOMS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Swimwear/8v.png',
            title: 'CONTRAST BIKINI BOTTOMS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Swimwear/9v.png',
            title: 'RIBBED BIKINI BOTTOMS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Swimwear/10v.png',
            title: 'TIE-DYE BIKINI BOTTOMS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container6 = document.querySelector('.content #section6 .cards');

    products6.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[24vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full  object-bottom';
        img.src = product.image;
        img.alt = product.title;

        imgDiv.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

        const title = document.createElement('a');
        title.href = '#';
        title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
        title.innerText = product.title;

        const price = document.createElement('h4');
        price.className = 'text-white text-sm mt-4';
        price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container6.appendChild(card);
    });


    // section 7

    const products7 = [
        {
            image: '/woman/images/Jackets/1v.png',
            title: 'ZW COLLECTION MASCULINE WOOL COAT',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: '/woman/images/Jackets/2v.png',
            title: 'SOFT BOMBER JACKET WITH POCKETS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: '/woman/images/Jackets/3v.png',
            title: 'SHORT LEATHER EFFECT QUILTED JACKET',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Jackets/4v.png',
            title: 'ZW COLLECTION OVERSIZE FADED TRENCH COAT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Jackets/5v.png',
            title: 'WATER-REPELLENT PADDED OVERSHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Jackets/6v.png',
            title: 'SOFT BOMBER JACKET WITH POCKETS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: '/woman/images/Jackets/7v.png',
            title: 'OVERSIZE DOUBLE-BREASTED TRENCH COAT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Jackets/8v.png',
            title: 'ZW COLLECTION MINIMALIST WOOL BLEND COAT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Jackets/9v.png',
            title: 'TRF DENIM JACKET WITH HEART',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Jackets/10v.png',
            title: 'SHORT LINEN BLEND BOMBER JACKET',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container7 = document.querySelector('.content #section7 .cards');

    products7.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[24vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full  object-bottom';
        img.src = product.image;
        img.alt = product.title;

        imgDiv.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

        const title = document.createElement('a');
        title.href = '#';
        title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
        title.innerText = product.title;

        const price = document.createElement('h4');
        price.className = 'text-white text-sm mt-4';
        price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container7.appendChild(card);
    });


    // section 8

    const products8 = [
        {
            image: '/woman/images/Accessories/1v.png',
            title: 'CORD NECKLACE WITH METAL PIECES',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: '/woman/images/Accessories/2v.png',
            title: 'PRINTED CREASED BANDANA',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: '/woman/images/Accessories/3v.png',
            title: 'BASIC TWILL CAP',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: '/woman/images/Accessories/4v.png',
            title: 'WOVEN HAT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Accessories/5v.png',
            title: 'CLASSIC WOOL HAT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Accessories/6v.png',
            title: 'SQUARE ACETATE SUNGLASSES',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: '/woman/images/Accessories/7v.png',
            title: 'WOVEN JUTE BAG',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Accessories/8v.png',
            title: 'LEATHER ANIMAL PRINT BELT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: '/woman/images/Accessories/9v.png',
            title: 'BELT WITH ENGRAVED CHAIN LINKS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: '/woman/images/Accessories/10v.png',
            title: 'FINE ANKLE SOCKS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container8 = document.querySelector('.content #section8 .cards');

    products8.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[24vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full  object-bottom';
        img.src = product.image;
        img.alt = product.title;

        imgDiv.appendChild(img);

        const cardContent = document.createElement('div');
        cardContent.className = 'bottom rounded-lg absolute  w-full bg-gradient-to-b from-transparent to-black px-10 py-12';

        const title = document.createElement('a');
        title.href = '#';
        title.className = 'text-white text-2xl font-bold capitalize hover:underline hover:text-zinc-300';
        title.innerText = product.title;

        const price = document.createElement('h4');
        price.className = 'text-white text-sm mt-4';
        price.innerHTML = `<strike>${product.price}</strike> <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container8.appendChild(card);
    });
}
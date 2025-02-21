if (window.matchMedia("(max-width: 600px)").matches) {
    // sections 
const sections = document.querySelector(".sections").querySelectorAll("button")


sections.forEach(option =>{
    option.addEventListener('click',function() {
        sections.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active")
    })
})

//Heading height change
const heading = document.querySelector('body .Heading');



// object of an array 

const products = [
    {
        image: 'https://static.zara.net/assets/public/62c7/625a/338843acb28e/7d4b6f8cbab1/20110410999-ult/20110410999-ult.jpg?ts=1709288721919&w=832',
        title: 'VIOLET BLOSSOM 90 ML / 3.04 OZ',
        price: '₹ 990.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/897e/e678/f6ae49b1a1d1/636941b576d3/4000.jpg?ts=1692891220086&w=563',
        title: 'SUBLIME EPOQUE EDP 80 ML / 2.71 OZ',
        price: '₹ 2,290.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/83ca/e72f/b8f64acfa7d9/63411bb1073d/4000.jpg?ts=1692891232700&w=563',
        title: 'GOLDEN DECADE EDP 80 ML / 2.71 OZ',
        price: '₹ 2,590.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/122f/321c/07b648f59f5a/1b873a6e047f/20120804999-ult5/20120804999-ult5.jpg?ts=1715874513080&w=554',
        title: 'APPLEJUICE 90 ML / 3.04 OZ',
        price: '₹ 1,290.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/bd30/7782/e26a498b8cef/fd7401b13305/20110242999-ult2/20110242999-ult2.jpg?ts=1706099265687&w=1663',
        title: 'RED TEMPTATION 80 ML / 2.71 OZ',
        price: '₹ 1,890.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/c460/2b21/b0e343d296ee/31483c0fafd0/20110553999-ult/20110553999-ult.jpg?ts=1706875906377&w=1663',
        title: 'HYPNOTIC VANILLA 80 ML / 2.71 OZ',
        price: '₹ 2,290.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/4429/0344/c1aa42b69b5c/8ba5d58600fa/20110593999-ult8/20110593999-ult8.jpg?ts=1705658276642&w=1663',
        title: 'PARFAIT D´ORCHIDÉE 100 ML / 3.38 OZ',
        price: '₹ 3,590.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/bf0a/1951/9f034c63bdfa/fbc062beca56/4000.jpg?ts=1691662876308&w=832',
        title: 'SPLENDID BRONZE 100 ML / 3.38 OZ',
        price: '₹ 2,290.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/4e12/568e/dccd47fc9d24/2d6983811b9e/4000.jpg?ts=1692199525367&w=1663',
        title: 'BLANC À PORTER 100 ML / 3.38 OZ',
        price: '₹ 3,590.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/781d/e24a/31824dc5874e/8f91498ce76f/20110466999-ult5/20110466999-ult5.jpg?ts=1710859216993&w=832',
        title: 'CHERRY SMOOTHIE 30 ML / 1.01 OZ',
        price: '₹ 1,190.00',
        discount: '',
        discountPercentage: ''
    }
];

const container = document.querySelector('.content #section1 .cards');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[55vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full object-cover';
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
    price.innerHTML = `${product.price} <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container.appendChild(card);
});


// section 2 

const products2 = [
    {
        image: 'https://static.zara.net/assets/public/8ad0/0b2e/a8cd4cb8939a/41dacb2e6fbc/24140517999-e1/24140517999-e1.jpg?ts=1716544114408&w=960',
        title: 'DUAL-ENDED EYE BRUSH',
        price: '₹ 990.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/028e/70a4/10bb457d8b77/9359ca4c38cd/24140519999-e1/24140519999-e1.jpg?ts=1715158318088&w=607',
        title: 'BODY BRUSH',
        price: '₹ 890.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/b8c1/7fee/3dc940c9b1bc/95a36830f346/24130342647-ult17/24130342647-ult17.jpg?ts=1710345845818&w=960',
        title: 'LIPSTICK CULT DRAMA',
        price: '₹ 1,090.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/4402/899b/3ca94e0782fe/1e38b44bbc61/24130220970-ult17/24130220970-ult17.jpg?ts=1704814013221&w=607',
        title: 'EYEBROW GEL',
        price: '₹ 890.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/f44a/64b8/5eab4cf89e3d/bead316c4549/24400440980-ult17/24400440980-ult17.jpg?ts=1704730185522&w=960',
        title: 'TOP COAT NAIL VARNISH',
        price: '₹ 590.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/8dcd/48d1/7f2b429bb3eb/e311bd0eee19/24130142962-ult17/24130142962-ult17.jpg?ts=1704817662169&w=297',
        title: 'CONCEALER',
        price: '₹ 890.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/8971/6e46/73134db0b585/ba494ccc2f99/1661418121770/1661418121770.jpg?ts=1701281298985&w=297',
        title: 'FACE BRUSH #1',
        price: '₹ 1,290.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/2136/0c49/74b24cfd868e/a58148704b83/24130317642-ult17/24130317642-ult17.jpg?ts=1704730183828&w=297',
        title: 'LIP OIL',
        price: '₹ 790.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/694e/9e55/a2724c4a81ab/b749b0ff80df/1637258340298/1637258340298.jpg?ts=1701201182871&w=832',
        title: 'MANIFESTO 3-IN-1 STICK',
        price: '₹ 1,290.00',
        discount: '',
        discountPercentage: ''
    },
    {
        image: 'https://static.zara.net/assets/public/1564/772c/276848f881c6/dd143541fc94/4000.jpg?ts=1692281812552&w=832',
        title: 'MAKEUP SPONGE',
        price: '₹ 490.00',
        discount: '',
        discountPercentage: ''
    }
];

const container2 = document.querySelector('.content #section2 .cards');

products2.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[100vw] h-[55vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'image';

    const img = document.createElement('img');
    img.className = 'h-full w-full object-cover';
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
    price.innerHTML = `${product.price} <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(imgDiv);
    card.appendChild(cardContent);

    container2.appendChild(card);
});
}

else{
    // sections 
    const sections = document.querySelector(".sections").querySelectorAll("button")


    sections.forEach(option =>{
        option.addEventListener('click',function() {
            sections.forEach(nav=>nav.classList.remove("active"))

            this.classList.add("active")
        })
    })


    // prevent default 

    // let link=document.getElementById("anchor");

    // link.addEventListener("click",function(event){
    //     console.log("link clicked.....");
    //     event.preventDefault();
    // })

    // object of an array 

    const products = [
        {
            image: 'https://static.zara.net/assets/public/62c7/625a/338843acb28e/7d4b6f8cbab1/20110410999-ult/20110410999-ult.jpg?ts=1709288721919&w=832',
            title: 'VIOLET BLOSSOM 90 ML / 3.04 OZ',
            price: '₹ 990.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/897e/e678/f6ae49b1a1d1/636941b576d3/4000.jpg?ts=1692891220086&w=563',
            title: 'SUBLIME EPOQUE EDP 80 ML / 2.71 OZ',
            price: '₹ 2,290.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/83ca/e72f/b8f64acfa7d9/63411bb1073d/4000.jpg?ts=1692891232700&w=563',
            title: 'GOLDEN DECADE EDP 80 ML / 2.71 OZ',
            price: '₹ 2,590.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/122f/321c/07b648f59f5a/1b873a6e047f/20120804999-ult5/20120804999-ult5.jpg?ts=1715874513080&w=554',
            title: 'APPLEJUICE 90 ML / 3.04 OZ',
            price: '₹ 1,290.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/bd30/7782/e26a498b8cef/fd7401b13305/20110242999-ult2/20110242999-ult2.jpg?ts=1706099265687&w=1663',
            title: 'RED TEMPTATION 80 ML / 2.71 OZ',
            price: '₹ 1,890.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/c460/2b21/b0e343d296ee/31483c0fafd0/20110553999-ult/20110553999-ult.jpg?ts=1706875906377&w=1663',
            title: 'HYPNOTIC VANILLA 80 ML / 2.71 OZ',
            price: '₹ 2,290.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/4429/0344/c1aa42b69b5c/8ba5d58600fa/20110593999-ult8/20110593999-ult8.jpg?ts=1705658276642&w=1663',
            title: 'PARFAIT D´ORCHIDÉE 100 ML / 3.38 OZ',
            price: '₹ 3,590.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/bf0a/1951/9f034c63bdfa/fbc062beca56/4000.jpg?ts=1691662876308&w=832',
            title: 'SPLENDID BRONZE 100 ML / 3.38 OZ',
            price: '₹ 2,290.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/4e12/568e/dccd47fc9d24/2d6983811b9e/4000.jpg?ts=1692199525367&w=1663',
            title: 'BLANC À PORTER 100 ML / 3.38 OZ',
            price: '₹ 3,590.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/781d/e24a/31824dc5874e/8f91498ce76f/20110466999-ult5/20110466999-ult5.jpg?ts=1710859216993&w=832',
            title: 'CHERRY SMOOTHIE 30 ML / 1.01 OZ',
            price: '₹ 1,190.00',
            discount: '',
            discountPercentage: ''
        }
    ];

    const container = document.querySelector('.content #section1 .cards');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[75vw] h-[75vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full object-cover';
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
        price.innerHTML = `${product.price} <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container.appendChild(card);
    });


    // section 2 

    const products2 = [
        {
            image: 'https://static.zara.net/assets/public/8ad0/0b2e/a8cd4cb8939a/41dacb2e6fbc/24140517999-e1/24140517999-e1.jpg?ts=1716544114408&w=960',
            title: 'DUAL-ENDED EYE BRUSH',
            price: '₹ 990.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/028e/70a4/10bb457d8b77/9359ca4c38cd/24140519999-e1/24140519999-e1.jpg?ts=1715158318088&w=607',
            title: 'BODY BRUSH',
            price: '₹ 890.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/b8c1/7fee/3dc940c9b1bc/95a36830f346/24130342647-ult17/24130342647-ult17.jpg?ts=1710345845818&w=960',
            title: 'LIPSTICK CULT DRAMA',
            price: '₹ 1,090.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/4402/899b/3ca94e0782fe/1e38b44bbc61/24130220970-ult17/24130220970-ult17.jpg?ts=1704814013221&w=607',
            title: 'EYEBROW GEL',
            price: '₹ 890.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/f44a/64b8/5eab4cf89e3d/bead316c4549/24400440980-ult17/24400440980-ult17.jpg?ts=1704730185522&w=960',
            title: 'TOP COAT NAIL VARNISH',
            price: '₹ 590.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/8dcd/48d1/7f2b429bb3eb/e311bd0eee19/24130142962-ult17/24130142962-ult17.jpg?ts=1704817662169&w=297',
            title: 'CONCEALER',
            price: '₹ 890.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/8971/6e46/73134db0b585/ba494ccc2f99/1661418121770/1661418121770.jpg?ts=1701281298985&w=297',
            title: 'FACE BRUSH #1',
            price: '₹ 1,290.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/2136/0c49/74b24cfd868e/a58148704b83/24130317642-ult17/24130317642-ult17.jpg?ts=1704730183828&w=297',
            title: 'LIP OIL',
            price: '₹ 790.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/694e/9e55/a2724c4a81ab/b749b0ff80df/1637258340298/1637258340298.jpg?ts=1701201182871&w=832',
            title: 'MANIFESTO 3-IN-1 STICK',
            price: '₹ 1,290.00',
            discount: '',
            discountPercentage: ''
        },
        {
            image: 'https://static.zara.net/assets/public/1564/772c/276848f881c6/dd143541fc94/4000.jpg?ts=1692281812552&w=832',
            title: 'MAKEUP SPONGE',
            price: '₹ 490.00',
            discount: '',
            discountPercentage: ''
        }
    ];

    const container2 = document.querySelector('.content #section2 .cards');

    products2.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[75vw] h-[75vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'image';

        const img = document.createElement('img');
        img.className = 'h-full w-full object-cover';
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
        price.innerHTML = `${product.price} <span class="bg-green-600">${product.discountPercentage} ${product.discount}</span>`;

        cardContent.appendChild(title);
        cardContent.appendChild(price);

        card.appendChild(imgDiv);
        card.appendChild(cardContent);

        container2.appendChild(card);
    });
}
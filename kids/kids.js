if (window.matchMedia("(max-width: 600px)").matches) {
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

    //section 1
    const products = [
        {
            image: 'https://static.zara.net/assets/public/e432/51ed/1ab941459c88/07fdd425d6f8/04152533400-e1/04152533400-e1.jpg?ts=1706702190615&w=383',
            title: 'DENIM PINAFORE DRESS WITH HEARTS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/df2b/f871/6eb54f26960c/8fefb3954917/01080318802-e1/01080318802-e1.jpg?ts=1703073461728&w=383',
            title: 'TEXTURED FLORAL KIMONO',
            price: '₹ 1,590.00',
            discount: '₹ 1,050.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/c6a0/dd60/c43c4693a30f/722b1a6b2400/01041253401-e1/01041253401-e1.jpg?ts=1700735616346&w=383',
            title: 'FLORAL DRESS',
            price: '₹ 2,190.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-42%'
        },
        {
            image: 'https://static.zara.net/assets/public/1f8e/e319/29f743ac89df/752920d83811/05643560819-e1/05643560819-e1.jpg?ts=1710243075713&w=383',
            title: 'BIRD SWEATSHIRT',
            price: '₹ 1,590.00',
            discount: '₹ 1,050.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/2400/55b4/26024fa7ace4/a193950792c1/04493555712-e1/04493555712-e1.jpg?ts=1711355460926&w=383',
            title: 'DRESS WITH EMBROIDERED MOTIFS',
            price: '₹ 2,790.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/cc5f/8da9/33464d8dae9f/fdae949033ab/05644411712-e1/05644411712-e1.jpg?ts=1706539614792&w=383',
            title: 'PUFFER JACKET',
            price: '₹ 2,190.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-42%'
        },
        {
            image: 'https://static.zara.net/assets/public/30b3/c545/68254ec2bf19/0c869c5db3a8/01212402620-e1/01212402620-e1.jpg?ts=1706180565046&w=449',
            title: 'PATCHWORK DRESS WITH ELASTICATED TRIMS',
            price: '₹ 2,190.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-42%'
        },
        {
            image: 'https://static.zara.net/assets/public/4e91/4144/8adc4045b0d4/29ec6c61b5c2/04441520400-e1/04441520400-e1.jpg?ts=1704451052880&w=449',
            title: 'FLORAL EMBROIDERY DENIM SHIRT',
            price: '₹ 1,690.00',
            discount: '₹ 1,050.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/025d/03ea/35634440a1af/3447c6250f3f/04441597251-e1/04441597251-e1.jpg?ts=1711359889602&w=449',
            title: 'TWILL DRESS WITH PANELS',
            price: '₹ 1,090.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/844c/f3db/991f45ca9dbc/93d553df4cc2/01468539712-e1/01468539712-e1.jpg?ts=1715004581696&w=383',
            title: '1-6 YEARS/ BIRD SWIMSUIT',
            price: '₹ 890.00',
            discount: '₹ 550.00',
            discountPercentage: '-38%'
        },
        
        {
            image: 'https://static.zara.net/assets/public/500c/34f8/5a0744daa1f4/6af28745aa91/01511165609-e1/01511165609-e1.jpg?ts=1710506476613&w=383',
            title: 'TEXTURED BERMUDA SHORTS WITH TAB',
            price: '₹ 1,690.00',
            discount: '₹ 1,050',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/photos///2024/V/0/3/p/8614/539/620/2/w/383/8614539620_6_1_1.jpg?ts=1708076031492',
            title: 'SHORT WATER-REPELLENT TRENCH COAT WITH TRIM',
            price: '₹ 2,590.00',
            discount: '₹ 1,450.00',
            discountPercentage: '-44%'
        },
        {
            image: 'https://static.zara.net/assets/public/4cb9/3e8a/872b42c0ae66/d78d9ba11225/06917010676-e1/06917010676-e1.jpg?ts=1705320732259&w=383',
            title: 'PAPERBAG TROUSERS',
            price: '₹ 1,690.00',
            discount: '₹ 1,050.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/03ac/d36a/dc014c74b1ed/84343ea5e25c/01822502052-e1/01822502052-e1.jpg?ts=1711452388293&w=383',
            title: 'LINEN BLEND KNIT TOP',
            price: '₹ 1,590.00',
            discount: '₹ 850.00',
            discountPercentage: '-46%'
        },
        {
            image: 'https://static.zara.net/assets/public/1893/f163/579c4cdebd8c/64bfa602b99c/01381557712-e1/01381557712-e1.jpg?ts=1712582616116&w=449',
            title: 'CONTRAST CROCHET TOP',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/472e/a777/4bfa4eb1ac6d/6768b6de58eb/02402005612-e1/02402005612-e1.jpg?ts=1710325022159&w=383',
            title: 'POPLIN TOP WITH BOWS',
            price: '₹ 1,590.00',
            discount: '₹ 1,050.00',
            discountPercentage: '-33%'
        }

    ];

    const container = document.querySelector('.content #section1 .cards');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
            image: 'https://static.zara.net/assets/public/9dba/f7db/a9ba43328860/e466a3121f94/03182681802-e1/03182681802-e1.jpg?ts=1713791903194&w=383',
            title: 'FLORAL PRINT SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/4ff0/0366/c4b94ad0bf4b/85bb73515557/07878682807-e1/07878682807-e1.jpg?ts=1709193362316&w=383',
            title: 'SMILEYWORLD ® PRINTED T-SHIRT',
            price: '₹ 1,190.00',
            discount: '₹ 750.00',
            discountPercentage: '-36%'
        },
        {
            image: 'https://static.zara.net/assets/public/3e95/5e2e/a06749a5b6ff/d840686fdda4/04676660819-e1/04676660819-e1.jpg?ts=1713167816840&w=383',
            title: 'BAGGY-FIT TROUSERS',
            price: '₹ 2,190.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-42%'
        },
        {
            image: 'https://static.zara.net/assets/public/d6a0/0421/097446efb5f0/7fddd8c71bca/01608665710-e1/01608665710-e1.jpg?ts=1706194652185&w=383',
            title: 'COMFORT SUIT BLAZER',
            price: '₹ 4,590.00',
            discount: '₹ 2,950.00',
            discountPercentage: '-35%'
        },
        {
            image: 'https://static.zara.net/assets/public/e393/e246/316f42ccb9ff/371789a2f318/06887670711-e1/06887670711-e1.jpg?ts=1710839567953&w=383',
            title: 'CANVAS WORKER OVERSHIRT',
            price: '₹ 2,790.00',
            discount: '₹ 1,450.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/4845/8558/5c584281a0d4/1f1be67d8874/06855501400-e1/06855501400-e1.jpg?ts=1712591181841&w=383',
            title: 'ORIGINAL-FIT DENIM BERMUDA SHORTS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/b269/9d4a/9c6b4dff8b4c/4cdbe13e17b1/06887687982-e1/06887687982-e1.jpg?ts=1711037398720&w=383',
            title: 'PRINTED SHIRT',
            price: '₹ 1,690.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-26%'
        },
        {
            image: 'https://static.zara.net/assets/public/317b/3a97/6f8a4232b8c0/8051baf3f721/05644664800-e1/05644664800-e1.jpg?ts=1704364971539&w=383',
            title: 'SPORTY GILET',
            price: '₹ 2,790.00',
            discount: '₹ 1,450.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/1227/56ec/eafe4b048bef/87b48329682e/06224726800-e1/06224726800-e1.jpg?ts=1710173442012&w=383',
            title: 'TOM AND JERRY ™ PATCH T-SHIRT',
            price: '₹ 1,390.00',
            discount: '₹ 950.00',
            discountPercentage: '-31%'
        },
        {
            image: 'https://static.zara.net/assets/public/c9fe/6dbb/e96e4e039803/9e9b2e15bc78/06917779250-e1/06917779250-e1.jpg?ts=1700672147577&w=383',
            title: 'RIBBED WAIST BERMUDAS',
            price: '₹ 2,190.00',
            discount: '₹ 1,450.00',
            discountPercentage: '-33%'
        }
    ];

    const container2 = document.querySelector('.content #section2 .cards');

    products2.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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



    // section 3 

    const products3 = [
        {
            image: 'https://static.zara.net/assets/public/59ba/955c/f59e46f6afc8/6ea2155dae78/04805522982-e1/04805522982-e1.jpg?ts=1712822379115&w=383',
            title: 'FLORAL EMBROIDERY ROMPER WITH BOW',
            price: '₹ 2,590.00',
            discount: '₹ 1,450.00',
            discountPercentage: '-44%'
        },
        {
            image: 'https://static.zara.net/assets/public/c0d6/300e/ef4b453e9d0c/ee18393ed32b/02582450712-e1/02582450712-e1.jpg?ts=1706617066708&w=383',
            title: 'KNIT BERMUDA SHORTS',
            price: '₹ 1,690.00',
            discount: '₹ 1,050.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/57c6/ee4d/25d34d39a7bb/bff93ed72b74/01414240676-e1/01414240676-e1.jpg?ts=1710756442640&w=383',
            title: 'CREPE JUMPSUIT',
            price: '₹ 2,190.00',
            discount: '₹ 1,450.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/d9f8/097d/cbd34cc0a6f4/37aee10d366c/05767560052-e1/05767560052-e1.jpg?ts=1703850856829&w=383',
            title: 'FLECKED BODYSUIT WITH POCKET',
            price: '₹ 1,390.00',
            discount: '₹ 850.00',
            discountPercentage: '-38%'
        },
        {
            image: 'https://static.zara.net/assets/public/ab4c/b9f1/956e4be7af4f/d4127ee3ffb7/04805625052-e1/04805625052-e1.jpg?ts=1713275435270&w=449',
            title: 'TEXTURED T-SHIRT WITH CONTRAST PRINT',
            price: '₹ 1,190.00',
            discount: '₹ 850.00',
            discountPercentage: '-28%'
        },
        {
            image: 'https://static.zara.net/assets/public/0d14/2fed/72ef40db88e7/f0a9207d5fa3/04805621643-e1/04805621643-e1.jpg?ts=1717402956725&w=449',
            title: 'PALM TREE TERRY JUMPSUIT',
            price: '₹ 1,690.00',
            discount: '₹ 1,050.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/6c6a/a6e2/5fc84274af70/a9f759661c9e/06061632696-e1/06061632696-e1.jpg?ts=1712823654446&w=449',
            title: 'PLAIN SWEATSHIRT WITH SEAM',
            price: '₹ 1,190.00',
            discount: '₹ 850.00',
            discountPercentage: '-28%'
        },
        {
            image: 'https://static.zara.net/assets/public/af5e/1499/a02c4d018696/0554db5856ce/02582441644-e1/02582441644-e1.jpg?ts=1711439551932&w=383',
            title: 'KNIT BRIEFS',
            price: '₹ 1,390.00',
            discount: '₹ 850.00',
            discountPercentage: '-38%'
        },
        {
            image: 'https://static.zara.net/assets/public/e3f8/307c/bacb4df78af0/e71a11b5b289/02582593427-e1/02582593427-e1.jpg?ts=1700135068967&w=383',
            title: 'KNIT JOGGING TROUSERS',
            price: '₹ 1,390.00',
            discount: '₹ 750.00',
            discountPercentage: '-46%'
        },
        {
            image: 'https://static.zara.net/assets/public/f147/fe5d/557a4383baed/0c58ea96ed37/01381519611-e1/01381519611-e1.jpg?ts=1712318988185&w=383',
            title: 'CHECK TEXTURED HAT',
            price: '₹ 1,390.00',
            discount: '₹ 750.00',
            discountPercentage: '-46%'
        }
    ];

    const container3 = document.querySelector('.content #section3 .cards');

    products3.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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

        container3.appendChild(card);
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
        image: 'https://static.zara.net/assets/public/e432/51ed/1ab941459c88/07fdd425d6f8/04152533400-e1/04152533400-e1.jpg?ts=1706702190615&w=383',
        title: 'DENIM PINAFORE DRESS WITH HEARTS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: 'https://static.zara.net/assets/public/df2b/f871/6eb54f26960c/8fefb3954917/01080318802-e1/01080318802-e1.jpg?ts=1703073461728&w=383',
        title: 'TEXTURED FLORAL KIMONO',
        price: '₹ 1,590.00',
        discount: '₹ 1,050.00',
        discountPercentage: '-33%'
    },
    {
        image: 'https://static.zara.net/assets/public/c6a0/dd60/c43c4693a30f/722b1a6b2400/01041253401-e1/01041253401-e1.jpg?ts=1700735616346&w=383',
        title: 'FLORAL DRESS',
        price: '₹ 2,190.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-42%'
    },
    {
        image: 'https://static.zara.net/assets/public/1f8e/e319/29f743ac89df/752920d83811/05643560819-e1/05643560819-e1.jpg?ts=1710243075713&w=383',
        title: 'BIRD SWEATSHIRT',
        price: '₹ 1,590.00',
        discount: '₹ 1,050.00',
        discountPercentage: '-33%'
    },
    {
        image: 'https://static.zara.net/assets/public/2400/55b4/26024fa7ace4/a193950792c1/04493555712-e1/04493555712-e1.jpg?ts=1711355460926&w=383',
        title: 'DRESS WITH EMBROIDERED MOTIFS',
        price: '₹ 2,790.00',
        discount: '₹ 1,750.00',
        discountPercentage: '-37%'
    },
    {
        image: 'https://static.zara.net/assets/public/cc5f/8da9/33464d8dae9f/fdae949033ab/05644411712-e1/05644411712-e1.jpg?ts=1706539614792&w=383',
        title: 'PUFFER JACKET',
        price: '₹ 2,190.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-42%'
    },
    {
        image: 'https://static.zara.net/assets/public/30b3/c545/68254ec2bf19/0c869c5db3a8/01212402620-e1/01212402620-e1.jpg?ts=1706180565046&w=449',
        title: 'PATCHWORK DRESS WITH ELASTICATED TRIMS',
        price: '₹ 2,190.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-42%'
    },
    {
        image: 'https://static.zara.net/assets/public/4e91/4144/8adc4045b0d4/29ec6c61b5c2/04441520400-e1/04441520400-e1.jpg?ts=1704451052880&w=449',
        title: 'FLORAL EMBROIDERY DENIM SHIRT',
        price: '₹ 1,690.00',
        discount: '₹ 1,050.00',
        discountPercentage: '-37%'
    },
    {
        image: 'https://static.zara.net/assets/public/025d/03ea/35634440a1af/3447c6250f3f/04441597251-e1/04441597251-e1.jpg?ts=1711359889602&w=449',
        title: 'TWILL DRESS WITH PANELS',
        price: '₹ 1,090.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: 'https://static.zara.net/assets/public/844c/f3db/991f45ca9dbc/93d553df4cc2/01468539712-e1/01468539712-e1.jpg?ts=1715004581696&w=383',
        title: '1-6 YEARS/ BIRD SWIMSUIT',
        price: '₹ 890.00',
        discount: '₹ 550.00',
        discountPercentage: '-38%'
    },
    
    {
        image: 'https://static.zara.net/assets/public/500c/34f8/5a0744daa1f4/6af28745aa91/01511165609-e1/01511165609-e1.jpg?ts=1710506476613&w=383',
        title: 'TEXTURED BERMUDA SHORTS WITH TAB',
        price: '₹ 1,690.00',
        discount: '₹ 1,050',
        discountPercentage: '-37%'
    },
    {
        image: 'https://static.zara.net/photos///2024/V/0/3/p/8614/539/620/2/w/383/8614539620_6_1_1.jpg?ts=1708076031492',
        title: 'SHORT WATER-REPELLENT TRENCH COAT WITH TRIM',
        price: '₹ 2,590.00',
        discount: '₹ 1,450.00',
        discountPercentage: '-44%'
    },
    {
        image: 'https://static.zara.net/assets/public/4cb9/3e8a/872b42c0ae66/d78d9ba11225/06917010676-e1/06917010676-e1.jpg?ts=1705320732259&w=383',
        title: 'PAPERBAG TROUSERS',
        price: '₹ 1,690.00',
        discount: '₹ 1,050.00',
        discountPercentage: '-37%'
    },
    {
        image: 'https://static.zara.net/assets/public/03ac/d36a/dc014c74b1ed/84343ea5e25c/01822502052-e1/01822502052-e1.jpg?ts=1711452388293&w=383',
        title: 'LINEN BLEND KNIT TOP',
        price: '₹ 1,590.00',
        discount: '₹ 850.00',
        discountPercentage: '-46%'
    },
    {
        image: 'https://static.zara.net/assets/public/1893/f163/579c4cdebd8c/64bfa602b99c/01381557712-e1/01381557712-e1.jpg?ts=1712582616116&w=449',
        title: 'CONTRAST CROCHET TOP',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: 'https://static.zara.net/assets/public/472e/a777/4bfa4eb1ac6d/6768b6de58eb/02402005612-e1/02402005612-e1.jpg?ts=1710325022159&w=383',
        title: 'POPLIN TOP WITH BOWS',
        price: '₹ 1,590.00',
        discount: '₹ 1,050.00',
        discountPercentage: '-33%'
    }

];

const container = document.querySelector('.content #section1 .cards');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[23vw] h-[66vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
        image: 'https://static.zara.net/assets/public/9dba/f7db/a9ba43328860/e466a3121f94/03182681802-e1/03182681802-e1.jpg?ts=1713791903194&w=383',
        title: 'FLORAL PRINT SHIRT',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: 'https://static.zara.net/assets/public/4ff0/0366/c4b94ad0bf4b/85bb73515557/07878682807-e1/07878682807-e1.jpg?ts=1709193362316&w=383',
        title: 'SMILEYWORLD ® PRINTED T-SHIRT',
        price: '₹ 1,190.00',
        discount: '₹ 750.00',
        discountPercentage: '-36%'
    },
    {
        image: 'https://static.zara.net/assets/public/3e95/5e2e/a06749a5b6ff/d840686fdda4/04676660819-e1/04676660819-e1.jpg?ts=1713167816840&w=383',
        title: 'BAGGY-FIT TROUSERS',
        price: '₹ 2,190.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-42%'
    },
    {
        image: 'https://static.zara.net/assets/public/d6a0/0421/097446efb5f0/7fddd8c71bca/01608665710-e1/01608665710-e1.jpg?ts=1706194652185&w=383',
        title: 'COMFORT SUIT BLAZER',
        price: '₹ 4,590.00',
        discount: '₹ 2,950.00',
        discountPercentage: '-35%'
    },
    {
        image: 'https://static.zara.net/assets/public/e393/e246/316f42ccb9ff/371789a2f318/06887670711-e1/06887670711-e1.jpg?ts=1710839567953&w=383',
        title: 'CANVAS WORKER OVERSHIRT',
        price: '₹ 2,790.00',
        discount: '₹ 1,450.00',
        discountPercentage: '-48%'
    },
    {
        image: 'https://static.zara.net/assets/public/4845/8558/5c584281a0d4/1f1be67d8874/06855501400-e1/06855501400-e1.jpg?ts=1712591181841&w=383',
        title: 'ORIGINAL-FIT DENIM BERMUDA SHORTS',
        price: '₹ 1,890.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-33%'
    },
    {
        image: 'https://static.zara.net/assets/public/b269/9d4a/9c6b4dff8b4c/4cdbe13e17b1/06887687982-e1/06887687982-e1.jpg?ts=1711037398720&w=383',
        title: 'PRINTED SHIRT',
        price: '₹ 1,690.00',
        discount: '₹ 1,250.00',
        discountPercentage: '-26%'
    },
    {
        image: 'https://static.zara.net/assets/public/317b/3a97/6f8a4232b8c0/8051baf3f721/05644664800-e1/05644664800-e1.jpg?ts=1704364971539&w=383',
        title: 'SPORTY GILET',
        price: '₹ 2,790.00',
        discount: '₹ 1,450.00',
        discountPercentage: '-48%'
    },
    {
        image: 'https://static.zara.net/assets/public/1227/56ec/eafe4b048bef/87b48329682e/06224726800-e1/06224726800-e1.jpg?ts=1710173442012&w=383',
        title: 'TOM AND JERRY ™ PATCH T-SHIRT',
        price: '₹ 1,390.00',
        discount: '₹ 950.00',
        discountPercentage: '-31%'
    },
    {
        image: 'https://static.zara.net/assets/public/c9fe/6dbb/e96e4e039803/9e9b2e15bc78/06917779250-e1/06917779250-e1.jpg?ts=1700672147577&w=383',
        title: 'RIBBED WAIST BERMUDAS',
        price: '₹ 2,190.00',
        discount: '₹ 1,450.00',
        discountPercentage: '-33%'
    }
];

const container2 = document.querySelector('.content #section2 .cards');

products2.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[23vw] h-[66vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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



// section 3 

const products3 = [
    {
        image: 'https://static.zara.net/assets/public/59ba/955c/f59e46f6afc8/6ea2155dae78/04805522982-e1/04805522982-e1.jpg?ts=1712822379115&w=383',
        title: 'FLORAL EMBROIDERY ROMPER WITH BOW',
        price: '₹ 2,590.00',
        discount: '₹ 1,450.00',
        discountPercentage: '-44%'
    },
    {
        image: 'https://static.zara.net/assets/public/c0d6/300e/ef4b453e9d0c/ee18393ed32b/02582450712-e1/02582450712-e1.jpg?ts=1706617066708&w=383',
        title: 'KNIT BERMUDA SHORTS',
        price: '₹ 1,690.00',
        discount: '₹ 1,050.00',
        discountPercentage: '-37%'
    },
    {
        image: 'https://static.zara.net/assets/public/57c6/ee4d/25d34d39a7bb/bff93ed72b74/01414240676-e1/01414240676-e1.jpg?ts=1710756442640&w=383',
        title: 'CREPE JUMPSUIT',
        price: '₹ 2,190.00',
        discount: '₹ 1,450.00',
        discountPercentage: '-33%'
    },
    {
        image: 'https://static.zara.net/assets/public/d9f8/097d/cbd34cc0a6f4/37aee10d366c/05767560052-e1/05767560052-e1.jpg?ts=1703850856829&w=383',
        title: 'FLECKED BODYSUIT WITH POCKET',
        price: '₹ 1,390.00',
        discount: '₹ 850.00',
        discountPercentage: '-38%'
    },
    {
        image: 'https://static.zara.net/assets/public/ab4c/b9f1/956e4be7af4f/d4127ee3ffb7/04805625052-e1/04805625052-e1.jpg?ts=1713275435270&w=449',
        title: 'TEXTURED T-SHIRT WITH CONTRAST PRINT',
        price: '₹ 1,190.00',
        discount: '₹ 850.00',
        discountPercentage: '-28%'
    },
    {
        image: 'https://static.zara.net/assets/public/0d14/2fed/72ef40db88e7/f0a9207d5fa3/04805621643-e1/04805621643-e1.jpg?ts=1717402956725&w=449',
        title: 'PALM TREE TERRY JUMPSUIT',
        price: '₹ 1,690.00',
        discount: '₹ 1,050.00',
        discountPercentage: '-37%'
    },
    {
        image: 'https://static.zara.net/assets/public/6c6a/a6e2/5fc84274af70/a9f759661c9e/06061632696-e1/06061632696-e1.jpg?ts=1712823654446&w=449',
        title: 'PLAIN SWEATSHIRT WITH SEAM',
        price: '₹ 1,190.00',
        discount: '₹ 850.00',
        discountPercentage: '-28%'
    },
    {
        image: 'https://static.zara.net/assets/public/af5e/1499/a02c4d018696/0554db5856ce/02582441644-e1/02582441644-e1.jpg?ts=1711439551932&w=383',
        title: 'KNIT BRIEFS',
        price: '₹ 1,390.00',
        discount: '₹ 850.00',
        discountPercentage: '-38%'
    },
    {
        image: 'https://static.zara.net/assets/public/e3f8/307c/bacb4df78af0/e71a11b5b289/02582593427-e1/02582593427-e1.jpg?ts=1700135068967&w=383',
        title: 'KNIT JOGGING TROUSERS',
        price: '₹ 1,390.00',
        discount: '₹ 750.00',
        discountPercentage: '-46%'
    },
    {
        image: 'https://static.zara.net/assets/public/f147/fe5d/557a4383baed/0c58ea96ed37/01381519611-e1/01381519611-e1.jpg?ts=1712318988185&w=383',
        title: 'CHECK TEXTURED HAT',
        price: '₹ 1,390.00',
        discount: '₹ 750.00',
        discountPercentage: '-46%'
    }
];

const container3 = document.querySelector('.content #section3 .cards');

products3.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card relative overflow-hidden w-[23vw] h-[66vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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

    container3.appendChild(card);
});
}
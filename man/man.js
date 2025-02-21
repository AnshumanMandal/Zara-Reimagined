if (window.matchMedia("(max-width: 600px)").matches) {
    // sections
    const sections = document.querySelector(".sections").querySelectorAll("button")


    sections.forEach(option =>{
        option.addEventListener('click',function() {
            sections.forEach(nav=>nav.classList.remove("active"))

            this.classList.add("active")
        })
    })



    // object of an array 

    const products = [
        {
            image: 'https://static.zara.net/assets/public/79b8/9641/2e5f4641aa59/be9356fd983f/01063404096-a1/01063404096-a1.jpg?ts=1710779549108&w=607',
            title: '100% LINEN SHIRT',
            price: '₹ 5,990.00',
            discount: '₹ 3,950.00',
            discountPercentage: '-34%'
        },
        {
            image: 'https://static.zara.net/assets/public/be96/6f0c/1f65478bb228/8ca3ac8e7845/07446405707-a1/07446405707-a1.jpg?ts=1705596522651&w=449',
            title: 'CHECK FLANNEL SHIRT',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/7058/de9a/f3e3413d9161/a7047e1e5492/01063370500-a1/01063370500-a1.jpg?ts=1705594141544&w=449',
            title: 'TEXTURED SHIRT',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/47f3/8a07/72fb4c819cae/9f4ecf456f75/05070314802-a1/05070314802-a1.jpg?ts=1706093129058&w=449',
            title: 'OVERSHIRT WITH POCKETS',
            price: '₹ 11,990.00',
            discount: '₹ 5,995.00',
            discountPercentage: '-50%'
        },
        {
            image: 'https://static.zara.net/assets/public/8b17/722f/fe35471f8f2a/bd6c94372e54/02092500250-a1/02092500250-a1.jpg?ts=1710497071971&w=449',
            title: 'TEXTURED TWILL SHIRT',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/316f/c2d1/d7aa4374a655/479eabdd621c/06085412707-a1/06085412707-a1.jpg?ts=1711452820934&w=449',
            title: 'STRIPED VISCOSE BLEND SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-28%'
        },
        {
            image: 'https://static.zara.net/assets/public/9fff/4d10/15b143dcbef6/eb25a89d0fe5/05588466250-a1/05588466250-a1.jpg?ts=1712831963889&w=449',
            title: 'TEXTURED TWILL SHIRT',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/71a0/f359/2a5e4481ae62/da4e2adb91d7/01063470711-a1/01063470711-a1.jpg?ts=1710490546023&w=449',
            title: 'STAND-UP COLLAR SHIRT',
            price: '₹ 10,990.00',
            discount: '₹ 5,950.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/8f91/1b01/bf9649e6b4c9/7fbcb9ba7eaa/04119396088-a1/04119396088-a1.jpg?ts=1710418566185&w=449',
            title: 'GEOMETRIC PRINT SHIRT',
            price: '₹ 5,990.00',
            discount: '₹ 3,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/ee62/5c00/36da4f9087c1/d2363a68bb9d/00399204064-a1/00399204064-a1.jpg?ts=1712046888026&w=449',
            title: 'GEOMETRIC PRINT SHIRT',
            price: '₹ 8,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-47%'
        }
    ];

    const container = document.querySelector('.content #section1 .cards');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
            image: 'https://static.zara.net/assets/public/eecc/f7bf/1399459cb906/b517a5049c53/00693401800-a1/00693401800-a1.jpg?ts=1704813099206&w=449',
            title: 'VISCOSE BLEND KNIT T-SHIRT',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/2ffa/048c/1fca4f32b413/4c8b9336d6ba/05643401623-a1/05643401623-a1.jpg?ts=1712748464326&w=449',
            title: 'PRINTED T-SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/4819/ffbd/fdec4357832a/e01ccfcad0c3/06224888021-a1/06224888021-a1.jpg?ts=1710419181587&w=449',
            title: 'TIE-DYE PRINTED T-SHIRT',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/fa9e/b202/8c534747b805/bc7ba520aaee/01023404409-a1/01023404409-a1.jpg?ts=1708686238071&w=449',
            title: 'BOXY-FIT KNIT T-SHIRT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/65dc/0edf/74d9473abf48/76b660ce89b3/00526406250-a1/00526406250-a1.jpg?ts=1708333498258&w=449',
            title: 'RELAXED FIT T-SHIRT WITH RIPS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/37f9/c9bb/3c8f420fa3c4/36ae3f8463f1/01023410737-a1/01023410737-a1.jpg?ts=1709222070390&w=449',
            title: 'OPEN-KNIT T-SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/1c85/66ee/f0bf4de781c4/13fc0e3fe8e2/04092414251-a1/04092414251-a1.jpg?ts=1714643819019&w=449',
            title: 'EXTRA HEAVY WEIGHT T-SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/baf0/1415/bb114d6c9db4/632a08853db1/02893441104-a1/02893441104-a1.jpg?ts=1713425381217&w=449',
            title: 'TEXTURED KNIT T-SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/697d/24d6/027b4c44b0f3/5562f7a30b4b/02142305330-a1/02142305330-a1.jpg?ts=1717139978110&w=449',
            title: 'TIE-DYE PRINTED KNIT T-SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/1d4a/a667/13be44fc8a3f/ab8f17bec19c/00722421251-a1/00722421251-a1.jpg?ts=1709048241069&w=449',
            title: 'TANK TOP X CASA JOSEPHINE',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container2 = document.querySelector('.content #section2 .cards');

    products2.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
            image: 'https://static.zara.net/assets/public/c9d2/186c/162349d99cba/6819b0db86d4/04302304802-a1/04302304802-a1.jpg?ts=1708510252069&w=449',
            title: 'FADED-EFFECT CARGO TROUSERS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/c128/f5f7/0bf34905bbd7/1c9279a73f86/06861412251-a1/06861412251-a1.jpg?ts=1714046478736&w=449',
            title: 'CARGO TROUSERS WITH REMOVABLE LEGS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/afae/73f3/3c324c2095a4/57ae026cb538/05862404802-a1/05862404802-a1.jpg?ts=1707929738577&w=449',
            title: 'FADED CARPENTER TROUSERS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/a11c/9458/82f9410d998b/9e0f76d10ea9/06861401442-a1/06861401442-a1.jpg?ts=1707904546093&w=449',
            title: 'STRAIGHT FIT CHINO TROUSERS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/a02b/73c7/25094f528a50/fc5b2a1593a7/05862413730-a1/05862413730-a1.jpg?ts=1705660582324&w=449',
            title: 'CARPENTER TROUSERS WITH POCKET',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/8a52/e777/aa66418d972b/93a67c3e884f/05862430505-a1/05862430505-a1.jpg?ts=1706273502761&w=449',
            title: 'SOFT CARGO TROUSERS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/3fd5/0349/10794cba99df/5aefd9975a28/04505489401-a1/04505489401-a1.jpg?ts=1709226075412&w=449',
            title: 'FADED CARGO TROUSERS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/3a37/ffc5/c8904b2cbb77/1a2dcd6277a9/05520481710-a1/05520481710-a1.jpg?ts=1704878250955&w=449',
            title: 'CORDUROY CARGO TROUSERS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/4760/71cf/dabe47faa5a1/56d9c5144f1d/04575413507-a1/04575413507-a1.jpg?ts=1709737101298&w=449',
            title: 'ABSTRACT PRINT TROUSERS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/107e/bdad/73b64f4bbc7b/191c0e6f460b/04467468401-p/04467468401-p.jpg?ts=1706881831342&w=563',
            title: 'PLEATED TROUSERS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container3 = document.querySelector('.content #section3 .cards');

    products3.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
            image: 'https://static.zara.net/assets/public/ee5c/5c87/74f449c8b630/f45aa394d30b/05575471800-a1/05575471800-a1.jpg?ts=1712158050767&w=449',
            title: 'UTILITY JEANS WITH POCKETS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/50e2/3f33/39b045308e90/fa3f52fba60d/01472402406-a1/01472402406-a1.jpg?ts=1706720804377&w=449',
            title: 'RELAXED FIT JEANS WITH POCKETS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/33fb/32dd/3cfb40e0abe1/d646d4fec4e6/01538490800-a1/01538490800-a1.jpg?ts=1710508944405&w=449',
            title: 'CARGO JEANS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/79e8/1351/8e244aaaad4c/206a7316a4b7/05585401427-a1/05585401427-a1.jpg?ts=1708510225846&w=449',
            title: 'FADED BAGGY-FIT JEANS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/e8c1/b03d/cbc740438eee/68a1d2f2db81/01538460802-a1/01538460802-a1.jpg?ts=1707468689010&w=449',
            title: 'BAGGY FIT JEANS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/eb70/8c51/e2674a5997d3/18740db15a92/06688415400-a1/06688415400-a1.jpg?ts=1708510264540&w=449',
            title: 'WIDE-LEG JEANS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/db32/8aff/1bd74d3e8180/85da8d7cbf15/08062303436-a1/08062303436-a1.jpg?ts=1717149052076&w=449',
            title: 'BAGGY FIT JEANS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/beff/ce42/681f42cca03f/92f0d58992a0/00840424406-a1/00840424406-a1.jpg?ts=1716982631049&w=449',
            title: 'PRINTED BAGGY FIT JEANS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/ecd0/e50d/141f45978490/7cd944248ddf/09123401500-a1/09123401500-a1.jpg?ts=1707305344919&w=449',
            title: 'ABSTRACT PRINT JEANS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/fcf4/7eda/0b38472991c0/29601a9d0de3/05575400436-a1/05575400436-a1.jpg?ts=1710506824923&w=449',
            title: 'BASIC SLIM FIT JEANS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container4 = document.querySelector('.content #section4 .cards');

    products4.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
            image: 'https://static.zara.net/assets/public/8f0a/db9a/bcb84450b463/f466323b62ac/00761439251-p/00761439251-p.jpg?ts=1715077001887&w=449',
            title: 'COMPACT JOGGER BERMUDA SHORTS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/dfdb/6f8d/927b4a2da8e3/b4c8376497fb/04410003406-a1/04410003406-a1.jpg?ts=1709894344315&w=449',
            title: '100% LINEN BERMUDA SHORTS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/279b/5f98/21444a7c8719/22d8e507547b/01063418104-a1/01063418104-a1.jpg?ts=1713343677330&w=563',
            title: 'STRIPED LINEN - COTTON BLEND BERMUDA SHORTS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/dbfa/8520/08ba45aab8fb/49a5e404e144/02599101922-a1/02599101922-a1.jpg?ts=1705667451988&w=449',
            title: 'ABSTRACT PRINT BERMUDA SHORTS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/4203/aab0/59094da79b73/7b0a42506eb3/00761450701-a1/00761450701-a1.jpg?ts=1710778030146&w=449',
            title: 'FADED JOGGING BERMUDA SHORTS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/003d/1cfe/ddb446618577/29cac0ac3678/04877304806-a1/04877304806-a1.jpg?ts=1710949764135&w=449',
            title: 'CARGO BERMUDA SHORTS WITH STRAPS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/099a/1f90/78aa49688697/36608b3613ca/04877310802-a1/04877310802-a1.jpg?ts=1710925493892&w=449',
            title: 'CARGO BERMUDA SHORTS WITH STRAPS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/099a/1f90/78aa49688697/36608b3613ca/04877310802-a1/04877310802-a1.jpg?ts=1710925493892&w=449',
            title: 'EMBROIDERED FADED BERMUDA SHORTS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/339f/36ff/728e48c3977b/fb4c5600300a/02553405802-a1/02553405802-a1.jpg?ts=1706701280522&w=449',
            title: 'TEXTURED BERMUDA SHORTS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/fceb/9815/010040599940/4dc8cea14ce7/04527007800-a1/04527007800-a1.jpg?ts=1707903456198&w=449',
            title: 'BERMUDA SHORTS WITH CONTRAST DOUBLE WAIST',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container5 = document.querySelector('.content #section5 .cards');

    products5.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
            image: 'https://static.zara.net/assets/public/177d/8f55/f2fb43a1b5f1/e41596225859/03284413800-a1/03284413800-a1.jpg?ts=1707316121541&w=449',
            title: 'MERINO WOOL BLEND KNIT POLO SHIRT',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/f10f/b3d8/236e45f2b532/459ae284088f/02795405100-a1/02795405100-a1.jpg?ts=1706025514706&w=449',
            title: 'POLO SWEATSHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/57d2/d938/cc4146d5b3db/dc56c68f958f/06085411506-a1/06085411506-a1.jpg?ts=1706005711040&w=449',
            title: 'ZIPPED POLO SHIRT',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/211f/918e/950d4c71a7da/e0bf43a7bdc1/04331407074-a1/04331407074-a1.jpg?ts=1714473255339&w=449',
            title: 'TEXTURED CROCHET POLO SHIRT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/2e54/bb56/b4d049ae8771/f658725337da/09240406251-a1/09240406251-a1.jpg?ts=1705660581149&w=449',
            title: 'TEXTURED POLO SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/5442/9463/da3c480887ac/c63ee80560b1/05755429104-a1/05755429104-a1.jpg?ts=1710340884016&w=449',
            title: 'COTTON - LINEN KNIT POLO SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/790a/76ac/c4b448939ae9/e62cd99a75e7/02142408712-a1/02142408712-a1.jpg?ts=1714484729322&w=449',
            title: 'JACQUARD KNIT POLO SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/e76f/67db/71594a6e97b5/3ce567426f05/03992370506-a1/03992370506-a1.jpg?ts=1713348240057&w=449',
            title: 'ACID WASH POLO SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/8488/5e3c/e5b44978bacb/7ae27c544488/03284414982-a1/03284414982-a1.jpg?ts=1706087386460&w=449',
            title: 'RIBBED KNIT POLO SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/de4f/7c40/eb3144829191/f5d590c3bcf5/03166301802-a1/03166301802-a1.jpg?ts=1717588534451&w=449',
            title: 'TEXTURED KNIT POLO SHIRT',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container6 = document.querySelector('.content #section6 .cards');

    products6.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
            image: 'https://static.zara.net/assets/public/9058/e9a2/47804249b652/da86d956e224/04307408700-e1/04307408700-e1.jpg?ts=1709831440642&w=449',
            title: '100% LINEN SUIT BLAZER',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/29bf/87bc/7e454fd7b943/1fbed47ec93e/01063404096-e1/01063404096-e1.jpg?ts=1707404700021&w=449',
            title: '100% LINEN SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/68ab/e89f/df3a4d9fad9f/9424d98f2d32/05070033505-e1/05070033505-e1.jpg?ts=1708952221447&w=449',
            title: '100% LINEN OVERSHIRT',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/aab8/24ba/d10b4ec8b6d3/90b8d4263ec4/06085405401-e1/06085405401-e1.jpg?ts=1712912155130&w=449',
            title: 'CHECK PRINT SHIRT - LIMITED EDITION',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/8d67/34dd/82e34eb48f7a/8a11529d5a83/02599100922-e1/02599100922-e1.jpg?ts=1705588300137&w=449',
            title: 'ABSTRACT PRINT SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/c2c1/c07f/5ded4a96b2b3/701471da7cf1/06416400725-e1/06416400725-e1.jpg?ts=1711010665316&w=449',
            title: 'COTTON - LINEN SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/55dc/e734/7e1b41b6a2d5/6fa33332ce71/05070033401-e1/05070033401-e1.jpg?ts=1708952211847&w=449',
            title: '100% LINEN OVERSHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/5cb8/8d3e/bf6645718e1a/c5b523c7ae6e/06861914707-e1/06861914707-e1.jpg?ts=1710327060921&w=449',
            title: 'PLEATED COTTON - LINEN TROUSERS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/31ec/4f2d/f51b4b0daa4a/7f0e18b08222/00722437507-e1/00722437507-e1.jpg?ts=1717076619062&w=449',
            title: 'VISCOSE - LINEN T-SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/ca56/2051/b2064a4a8e89/ef89b215b598/06318421071-e1/06318421071-e1.jpg?ts=1709207901520&w=449',
            title: '100% LINEN T-SHIRT',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container7 = document.querySelector('.content #section7 .cards');

    products7.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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
            image: 'https://static.zara.net/assets/public/c079/4347/e2224ba18243/87d02f5b7891/04158675707-a1/04158675707-a1.jpg?ts=1704882229834&w=449',
            title: 'FELT TEXTURE DOUBLE-BREASTED BLAZER',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/d739/031d/c82d4d6d8a0d/ce2e01ff738f/04143291707-a1/04143291707-a1.jpg?ts=1712301287148&w=449',
            title: 'STRAIGHT-FIT SUIT BLAZER',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/c0dd/3b72/ddb84ab78505/2a12205dc5e9/05070435400-a1/05070435400-a1.jpg?ts=1704205372948&w=449',
            title: 'COMFORT BLAZER',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/photos///2024/V/0/1/p/4303/266/251/2/w/449/4303266251_2_1_1.jpg?ts=1707230496410',
            title: 'SUIT BLAZER',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/91b0/fab5/19c346208f85/3c0574e0eef3/07380310800-a1/07380310800-a1.jpg?ts=1706806899113&w=449',
            title: 'OVERSIZE LEATHER EFFECT BLAZER - LIMITED EDITION',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/4b49/8221/5c80473c8753/76ca36da48f6/04548684714-a1/04548684714-a1.jpg?ts=1712319210746&w=449',
            title: '',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/cf84/38e2/ba4846e59d58/1f4ca12b6d7b/05070435800-a1/05070435800-a1.jpg?ts=1704205369787&w=449',
            title: 'COMFORT BLAZER',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/0d07/dfff/04f14ed68ec0/9b6ffcc81a54/05070435802-a1/05070435802-a1.jpg?ts=1704205372351&w=449',
            title: 'COMFORT BLAZER',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/6f04/a9bb/f18247f3bd42/d6181ca5803c/04143291800-a1/04143291800-a1.jpg?ts=1712301845489&w=449',
            title: 'STRAIGHT-FIT SUIT BLAZER',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/4baf/1ac7/b2584ce09f2d/b203d96d3b04/04321741708-a1/04321741708-a1.jpg?ts=1708683557881&w=449',
            title: 'CHECK WOOL BLEND BLAZER',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container8 = document.querySelector('.content #section8 .cards');

    products8.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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


    // section 9

    const products9 = [
        {
            image: 'https://static.zara.net/assets/public/a757/324c/80114a449bad/b0222dcf9469/03918500800-p/03918500800-p.jpg?ts=1705480922968&w=563',
            title: 'TEXTURED JACKET WITH POCKETS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/a60c/662c/22824e5aa976/fb9af149ca4f/00706130710-p/00706130710-p.jpg?ts=1707215736311&w=563',
            title: 'SHORT COTTON TRENCH COAT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/2696/7647/d7804f0b84da/5c25c4ebbd96/03833401800-p/03833401800-p.jpg?ts=1704358346284&w=563',
            title: 'BOMBER JACKET WITH CONTRAST PATCHES',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/de1d/2de8/641544aa8b2c/4d67f82fff00/05070665500-p/05070665500-p.jpg?ts=1708679693114&w=563',
            title: 'FAUX LEATHER OVERSHIRT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/a511/ee94/c4d8480bae37/c3c84f0f1e51/02675403064-p/02675403064-p.jpg?ts=1708679684527&w=563',
            title: 'TEXTURED CROPPED JACKET',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/7d4d/a3bc/774a4352a851/dc6af094281e/09794410400-p/09794410400-p.jpg?ts=1706880046552&w=563',
            title: 'RELAXED FIT DENIM JACKET',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/photos///2024/V/0/2/p/3046/501/526/2/w/563/3046501526_1_1_1.jpg?ts=1704212117418',
            title: 'MATCHING COLLAR PUFFER JACKET',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/29a9/7ac0/7173476185a3/fff724a35b8e/02634602052-p/02634602052-p.jpg?ts=1708940631741&w=563',
            title: '100% LINEN JACKET',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/ac8c/955c/d87d45fd824f/31e29a601c57/07563505510-p/07563505510-p.jpg?ts=1709296633351&w=563',
            title: 'WAXED-EFFECT JACKET',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/5908/50e3/2c5f4766b468/fd0a682baaac/04302535500-p/04302535500-p.jpg?ts=1704358340703&w=563',
            title: 'LIGHTWEIGHT QUILTED GILET',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container9 = document.querySelector('.content #section9 .cards');

    products9.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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

        container9.appendChild(card);
    });



    // section 10

    const products10 = [
        {
            image: 'https://static.zara.net/assets/public/9147/0ee8/ac834c388e26/723edda74d88/12030320800-e2/12030320800-e2.jpg?ts=1701174790622&w=563',
            title: 'SQUARE TOE LEATHER BOOTS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/4564/0d95/85bd4722aaee/aec4714a2bd8/12180220500-e2/12180220500-e2.jpg?ts=1701341998939&w=563',
            title: 'RETRO HIGH-TOP SNEAKERS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/7bc6/5102/39ac4d03b95b/8db8179e5238/12301320515-e2/12301320515-e2.jpg?ts=1711377394598&w=563',
            title: 'CHUNKY MULTI-PIECE SNEAKERS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/fc7a/c3ea/b2ef437db76d/2ea000a07fd5/12604320800-e2/12604320800-e2.jpg?ts=1705418648698&w=563',
            title: 'LEATHER PENNY LOAFERS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/5b92/e56a/29304be5ad59/ce7539e75592/12215320203-e2/12215320203-e2.jpg?ts=1701946828787&w=563',
            title: 'MULTI-PIECE SNEAKERS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/155b/c21e/7c2340c1aa5f/3dbeaa583049/12251320500-e2/12251320500-e2.jpg?ts=1708012051197&w=563',
            title: 'MULTI-PIECE SNEAKERS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/f12e/d8e8/195949c98c0b/75a8fbd24223/4000.jpg?ts=1693476989089&w=563',
            title: 'MULTIPIECE RUNNING SNEAKERS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/photos///2024/V/1/2/p/2611/320/700/2/w/563/2611320700_6_2_1.jpg?ts=1708352653503',
            title: 'LEATHER LOAFERS WITH APPLIQUÉ',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/b1f3/d860/63234f1e8a85/68bfd0d27ebe/1689762775184/1689762775184.jpg?ts=1701387253686&w=563',
            title: 'CONTRAST RUNNING SNEAKERS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/b768/0ffa/e921443b970b/bd39d8397019/12005320800-e2/12005320800-e2.jpg?ts=1704369204855&w=563',
            title: 'LACE-UP FABRIC BOOTS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container10 = document.querySelector('.content #section10 .cards');

    products10.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card relative overflow-hidden w-[100vw] h-[60vh] max-w-sm rounded-lg shadow-lg shadow-zinc-400 bg-white';

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

        container10.appendChild(card);
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
            image: 'https://static.zara.net/assets/public/79b8/9641/2e5f4641aa59/be9356fd983f/01063404096-a1/01063404096-a1.jpg?ts=1710779549108&w=607',
            title: '100% LINEN SHIRT',
            price: '₹ 5,990.00',
            discount: '₹ 3,950.00',
            discountPercentage: '-34%'
        },
        {
            image: 'https://static.zara.net/assets/public/be96/6f0c/1f65478bb228/8ca3ac8e7845/07446405707-a1/07446405707-a1.jpg?ts=1705596522651&w=449',
            title: 'CHECK FLANNEL SHIRT',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/7058/de9a/f3e3413d9161/a7047e1e5492/01063370500-a1/01063370500-a1.jpg?ts=1705594141544&w=449',
            title: 'TEXTURED SHIRT',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/47f3/8a07/72fb4c819cae/9f4ecf456f75/05070314802-a1/05070314802-a1.jpg?ts=1706093129058&w=449',
            title: 'OVERSHIRT WITH POCKETS',
            price: '₹ 11,990.00',
            discount: '₹ 5,995.00',
            discountPercentage: '-50%'
        },
        {
            image: 'https://static.zara.net/assets/public/8b17/722f/fe35471f8f2a/bd6c94372e54/02092500250-a1/02092500250-a1.jpg?ts=1710497071971&w=449',
            title: 'TEXTURED TWILL SHIRT',
            price: '₹ 7,590.00',
            discount: '₹ 4,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/316f/c2d1/d7aa4374a655/479eabdd621c/06085412707-a1/06085412707-a1.jpg?ts=1711452820934&w=449',
            title: 'STRIPED VISCOSE BLEND SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-28%'
        },
        {
            image: 'https://static.zara.net/assets/public/9fff/4d10/15b143dcbef6/eb25a89d0fe5/05588466250-a1/05588466250-a1.jpg?ts=1712831963889&w=449',
            title: 'TEXTURED TWILL SHIRT',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/71a0/f359/2a5e4481ae62/da4e2adb91d7/01063470711-a1/01063470711-a1.jpg?ts=1710490546023&w=449',
            title: 'STAND-UP COLLAR SHIRT',
            price: '₹ 10,990.00',
            discount: '₹ 5,950.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/8f91/1b01/bf9649e6b4c9/7fbcb9ba7eaa/04119396088-a1/04119396088-a1.jpg?ts=1710418566185&w=449',
            title: 'GEOMETRIC PRINT SHIRT',
            price: '₹ 5,990.00',
            discount: '₹ 3,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/ee62/5c00/36da4f9087c1/d2363a68bb9d/00399204064-a1/00399204064-a1.jpg?ts=1712046888026&w=449',
            title: 'GEOMETRIC PRINT SHIRT',
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
            image: 'https://static.zara.net/assets/public/eecc/f7bf/1399459cb906/b517a5049c53/00693401800-a1/00693401800-a1.jpg?ts=1704813099206&w=449',
            title: 'VISCOSE BLEND KNIT T-SHIRT',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/2ffa/048c/1fca4f32b413/4c8b9336d6ba/05643401623-a1/05643401623-a1.jpg?ts=1712748464326&w=449',
            title: 'PRINTED T-SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/4819/ffbd/fdec4357832a/e01ccfcad0c3/06224888021-a1/06224888021-a1.jpg?ts=1710419181587&w=449',
            title: 'TIE-DYE PRINTED T-SHIRT',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/fa9e/b202/8c534747b805/bc7ba520aaee/01023404409-a1/01023404409-a1.jpg?ts=1708686238071&w=449',
            title: 'BOXY-FIT KNIT T-SHIRT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/65dc/0edf/74d9473abf48/76b660ce89b3/00526406250-a1/00526406250-a1.jpg?ts=1708333498258&w=449',
            title: 'RELAXED FIT T-SHIRT WITH RIPS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/37f9/c9bb/3c8f420fa3c4/36ae3f8463f1/01023410737-a1/01023410737-a1.jpg?ts=1709222070390&w=449',
            title: 'OPEN-KNIT T-SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/1c85/66ee/f0bf4de781c4/13fc0e3fe8e2/04092414251-a1/04092414251-a1.jpg?ts=1714643819019&w=449',
            title: 'EXTRA HEAVY WEIGHT T-SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/baf0/1415/bb114d6c9db4/632a08853db1/02893441104-a1/02893441104-a1.jpg?ts=1713425381217&w=449',
            title: 'TEXTURED KNIT T-SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/697d/24d6/027b4c44b0f3/5562f7a30b4b/02142305330-a1/02142305330-a1.jpg?ts=1717139978110&w=449',
            title: 'TIE-DYE PRINTED KNIT T-SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/1d4a/a667/13be44fc8a3f/ab8f17bec19c/00722421251-a1/00722421251-a1.jpg?ts=1709048241069&w=449',
            title: 'TANK TOP X CASA JOSEPHINE',
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
            image: 'https://static.zara.net/assets/public/c9d2/186c/162349d99cba/6819b0db86d4/04302304802-a1/04302304802-a1.jpg?ts=1708510252069&w=449',
            title: 'FADED-EFFECT CARGO TROUSERS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/c128/f5f7/0bf34905bbd7/1c9279a73f86/06861412251-a1/06861412251-a1.jpg?ts=1714046478736&w=449',
            title: 'CARGO TROUSERS WITH REMOVABLE LEGS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/afae/73f3/3c324c2095a4/57ae026cb538/05862404802-a1/05862404802-a1.jpg?ts=1707929738577&w=449',
            title: 'FADED CARPENTER TROUSERS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/a11c/9458/82f9410d998b/9e0f76d10ea9/06861401442-a1/06861401442-a1.jpg?ts=1707904546093&w=449',
            title: 'STRAIGHT FIT CHINO TROUSERS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/a02b/73c7/25094f528a50/fc5b2a1593a7/05862413730-a1/05862413730-a1.jpg?ts=1705660582324&w=449',
            title: 'CARPENTER TROUSERS WITH POCKET',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/8a52/e777/aa66418d972b/93a67c3e884f/05862430505-a1/05862430505-a1.jpg?ts=1706273502761&w=449',
            title: 'SOFT CARGO TROUSERS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/3fd5/0349/10794cba99df/5aefd9975a28/04505489401-a1/04505489401-a1.jpg?ts=1709226075412&w=449',
            title: 'FADED CARGO TROUSERS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/3a37/ffc5/c8904b2cbb77/1a2dcd6277a9/05520481710-a1/05520481710-a1.jpg?ts=1704878250955&w=449',
            title: 'CORDUROY CARGO TROUSERS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/4760/71cf/dabe47faa5a1/56d9c5144f1d/04575413507-a1/04575413507-a1.jpg?ts=1709737101298&w=449',
            title: 'ABSTRACT PRINT TROUSERS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/107e/bdad/73b64f4bbc7b/191c0e6f460b/04467468401-p/04467468401-p.jpg?ts=1706881831342&w=563',
            title: 'PLEATED TROUSERS',
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
            image: 'https://static.zara.net/assets/public/ee5c/5c87/74f449c8b630/f45aa394d30b/05575471800-a1/05575471800-a1.jpg?ts=1712158050767&w=449',
            title: 'UTILITY JEANS WITH POCKETS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/50e2/3f33/39b045308e90/fa3f52fba60d/01472402406-a1/01472402406-a1.jpg?ts=1706720804377&w=449',
            title: 'RELAXED FIT JEANS WITH POCKETS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/33fb/32dd/3cfb40e0abe1/d646d4fec4e6/01538490800-a1/01538490800-a1.jpg?ts=1710508944405&w=449',
            title: 'CARGO JEANS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/79e8/1351/8e244aaaad4c/206a7316a4b7/05585401427-a1/05585401427-a1.jpg?ts=1708510225846&w=449',
            title: 'FADED BAGGY-FIT JEANS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/e8c1/b03d/cbc740438eee/68a1d2f2db81/01538460802-a1/01538460802-a1.jpg?ts=1707468689010&w=449',
            title: 'BAGGY FIT JEANS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/eb70/8c51/e2674a5997d3/18740db15a92/06688415400-a1/06688415400-a1.jpg?ts=1708510264540&w=449',
            title: 'WIDE-LEG JEANS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/db32/8aff/1bd74d3e8180/85da8d7cbf15/08062303436-a1/08062303436-a1.jpg?ts=1717149052076&w=449',
            title: 'BAGGY FIT JEANS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/beff/ce42/681f42cca03f/92f0d58992a0/00840424406-a1/00840424406-a1.jpg?ts=1716982631049&w=449',
            title: 'PRINTED BAGGY FIT JEANS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/ecd0/e50d/141f45978490/7cd944248ddf/09123401500-a1/09123401500-a1.jpg?ts=1707305344919&w=449',
            title: 'ABSTRACT PRINT JEANS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/fcf4/7eda/0b38472991c0/29601a9d0de3/05575400436-a1/05575400436-a1.jpg?ts=1710506824923&w=449',
            title: 'BASIC SLIM FIT JEANS',
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
            image: 'https://static.zara.net/assets/public/8f0a/db9a/bcb84450b463/f466323b62ac/00761439251-p/00761439251-p.jpg?ts=1715077001887&w=449',
            title: 'COMPACT JOGGER BERMUDA SHORTS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/dfdb/6f8d/927b4a2da8e3/b4c8376497fb/04410003406-a1/04410003406-a1.jpg?ts=1709894344315&w=449',
            title: '100% LINEN BERMUDA SHORTS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/279b/5f98/21444a7c8719/22d8e507547b/01063418104-a1/01063418104-a1.jpg?ts=1713343677330&w=563',
            title: 'STRIPED LINEN - COTTON BLEND BERMUDA SHORTS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/dbfa/8520/08ba45aab8fb/49a5e404e144/02599101922-a1/02599101922-a1.jpg?ts=1705667451988&w=449',
            title: 'ABSTRACT PRINT BERMUDA SHORTS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/4203/aab0/59094da79b73/7b0a42506eb3/00761450701-a1/00761450701-a1.jpg?ts=1710778030146&w=449',
            title: 'FADED JOGGING BERMUDA SHORTS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/003d/1cfe/ddb446618577/29cac0ac3678/04877304806-a1/04877304806-a1.jpg?ts=1710949764135&w=449',
            title: 'CARGO BERMUDA SHORTS WITH STRAPS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/099a/1f90/78aa49688697/36608b3613ca/04877310802-a1/04877310802-a1.jpg?ts=1710925493892&w=449',
            title: 'CARGO BERMUDA SHORTS WITH STRAPS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/099a/1f90/78aa49688697/36608b3613ca/04877310802-a1/04877310802-a1.jpg?ts=1710925493892&w=449',
            title: 'EMBROIDERED FADED BERMUDA SHORTS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/339f/36ff/728e48c3977b/fb4c5600300a/02553405802-a1/02553405802-a1.jpg?ts=1706701280522&w=449',
            title: 'TEXTURED BERMUDA SHORTS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/fceb/9815/010040599940/4dc8cea14ce7/04527007800-a1/04527007800-a1.jpg?ts=1707903456198&w=449',
            title: 'BERMUDA SHORTS WITH CONTRAST DOUBLE WAIST',
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
            image: 'https://static.zara.net/assets/public/177d/8f55/f2fb43a1b5f1/e41596225859/03284413800-a1/03284413800-a1.jpg?ts=1707316121541&w=449',
            title: 'MERINO WOOL BLEND KNIT POLO SHIRT',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/f10f/b3d8/236e45f2b532/459ae284088f/02795405100-a1/02795405100-a1.jpg?ts=1706025514706&w=449',
            title: 'POLO SWEATSHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/57d2/d938/cc4146d5b3db/dc56c68f958f/06085411506-a1/06085411506-a1.jpg?ts=1706005711040&w=449',
            title: 'ZIPPED POLO SHIRT',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/211f/918e/950d4c71a7da/e0bf43a7bdc1/04331407074-a1/04331407074-a1.jpg?ts=1714473255339&w=449',
            title: 'TEXTURED CROCHET POLO SHIRT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/2e54/bb56/b4d049ae8771/f658725337da/09240406251-a1/09240406251-a1.jpg?ts=1705660581149&w=449',
            title: 'TEXTURED POLO SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/5442/9463/da3c480887ac/c63ee80560b1/05755429104-a1/05755429104-a1.jpg?ts=1710340884016&w=449',
            title: 'COTTON - LINEN KNIT POLO SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/790a/76ac/c4b448939ae9/e62cd99a75e7/02142408712-a1/02142408712-a1.jpg?ts=1714484729322&w=449',
            title: 'JACQUARD KNIT POLO SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/e76f/67db/71594a6e97b5/3ce567426f05/03992370506-a1/03992370506-a1.jpg?ts=1713348240057&w=449',
            title: 'ACID WASH POLO SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/8488/5e3c/e5b44978bacb/7ae27c544488/03284414982-a1/03284414982-a1.jpg?ts=1706087386460&w=449',
            title: 'RIBBED KNIT POLO SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/de4f/7c40/eb3144829191/f5d590c3bcf5/03166301802-a1/03166301802-a1.jpg?ts=1717588534451&w=449',
            title: 'TEXTURED KNIT POLO SHIRT',
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
            image: 'https://static.zara.net/assets/public/9058/e9a2/47804249b652/da86d956e224/04307408700-e1/04307408700-e1.jpg?ts=1709831440642&w=449',
            title: '100% LINEN SUIT BLAZER',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/29bf/87bc/7e454fd7b943/1fbed47ec93e/01063404096-e1/01063404096-e1.jpg?ts=1707404700021&w=449',
            title: '100% LINEN SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/68ab/e89f/df3a4d9fad9f/9424d98f2d32/05070033505-e1/05070033505-e1.jpg?ts=1708952221447&w=449',
            title: '100% LINEN OVERSHIRT',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/aab8/24ba/d10b4ec8b6d3/90b8d4263ec4/06085405401-e1/06085405401-e1.jpg?ts=1712912155130&w=449',
            title: 'CHECK PRINT SHIRT - LIMITED EDITION',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/8d67/34dd/82e34eb48f7a/8a11529d5a83/02599100922-e1/02599100922-e1.jpg?ts=1705588300137&w=449',
            title: 'ABSTRACT PRINT SHIRT',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/c2c1/c07f/5ded4a96b2b3/701471da7cf1/06416400725-e1/06416400725-e1.jpg?ts=1711010665316&w=449',
            title: 'COTTON - LINEN SHIRT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/55dc/e734/7e1b41b6a2d5/6fa33332ce71/05070033401-e1/05070033401-e1.jpg?ts=1708952211847&w=449',
            title: '100% LINEN OVERSHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/5cb8/8d3e/bf6645718e1a/c5b523c7ae6e/06861914707-e1/06861914707-e1.jpg?ts=1710327060921&w=449',
            title: 'PLEATED COTTON - LINEN TROUSERS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/31ec/4f2d/f51b4b0daa4a/7f0e18b08222/00722437507-e1/00722437507-e1.jpg?ts=1717076619062&w=449',
            title: 'VISCOSE - LINEN T-SHIRT',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/ca56/2051/b2064a4a8e89/ef89b215b598/06318421071-e1/06318421071-e1.jpg?ts=1709207901520&w=449',
            title: '100% LINEN T-SHIRT',
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
            image: 'https://static.zara.net/assets/public/c079/4347/e2224ba18243/87d02f5b7891/04158675707-a1/04158675707-a1.jpg?ts=1704882229834&w=449',
            title: 'FELT TEXTURE DOUBLE-BREASTED BLAZER',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/d739/031d/c82d4d6d8a0d/ce2e01ff738f/04143291707-a1/04143291707-a1.jpg?ts=1712301287148&w=449',
            title: 'STRAIGHT-FIT SUIT BLAZER',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/c0dd/3b72/ddb84ab78505/2a12205dc5e9/05070435400-a1/05070435400-a1.jpg?ts=1704205372948&w=449',
            title: 'COMFORT BLAZER',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/photos///2024/V/0/1/p/4303/266/251/2/w/449/4303266251_2_1_1.jpg?ts=1707230496410',
            title: 'SUIT BLAZER',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/91b0/fab5/19c346208f85/3c0574e0eef3/07380310800-a1/07380310800-a1.jpg?ts=1706806899113&w=449',
            title: 'OVERSIZE LEATHER EFFECT BLAZER - LIMITED EDITION',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/4b49/8221/5c80473c8753/76ca36da48f6/04548684714-a1/04548684714-a1.jpg?ts=1712319210746&w=449',
            title: '',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/cf84/38e2/ba4846e59d58/1f4ca12b6d7b/05070435800-a1/05070435800-a1.jpg?ts=1704205369787&w=449',
            title: 'COMFORT BLAZER',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/0d07/dfff/04f14ed68ec0/9b6ffcc81a54/05070435802-a1/05070435802-a1.jpg?ts=1704205372351&w=449',
            title: 'COMFORT BLAZER',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/6f04/a9bb/f18247f3bd42/d6181ca5803c/04143291800-a1/04143291800-a1.jpg?ts=1712301845489&w=449',
            title: 'STRAIGHT-FIT SUIT BLAZER',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/4baf/1ac7/b2584ce09f2d/b203d96d3b04/04321741708-a1/04321741708-a1.jpg?ts=1708683557881&w=449',
            title: 'CHECK WOOL BLEND BLAZER',
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


    // section 9

    const products9 = [
        {
            image: 'https://static.zara.net/assets/public/a757/324c/80114a449bad/b0222dcf9469/03918500800-p/03918500800-p.jpg?ts=1705480922968&w=563',
            title: 'TEXTURED JACKET WITH POCKETS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/a60c/662c/22824e5aa976/fb9af149ca4f/00706130710-p/00706130710-p.jpg?ts=1707215736311&w=563',
            title: 'SHORT COTTON TRENCH COAT',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/2696/7647/d7804f0b84da/5c25c4ebbd96/03833401800-p/03833401800-p.jpg?ts=1704358346284&w=563',
            title: 'BOMBER JACKET WITH CONTRAST PATCHES',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/de1d/2de8/641544aa8b2c/4d67f82fff00/05070665500-p/05070665500-p.jpg?ts=1708679693114&w=563',
            title: 'FAUX LEATHER OVERSHIRT',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/a511/ee94/c4d8480bae37/c3c84f0f1e51/02675403064-p/02675403064-p.jpg?ts=1708679684527&w=563',
            title: 'TEXTURED CROPPED JACKET',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/7d4d/a3bc/774a4352a851/dc6af094281e/09794410400-p/09794410400-p.jpg?ts=1706880046552&w=563',
            title: 'RELAXED FIT DENIM JACKET',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/photos///2024/V/0/2/p/3046/501/526/2/w/563/3046501526_1_1_1.jpg?ts=1704212117418',
            title: 'MATCHING COLLAR PUFFER JACKET',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/29a9/7ac0/7173476185a3/fff724a35b8e/02634602052-p/02634602052-p.jpg?ts=1708940631741&w=563',
            title: '100% LINEN JACKET',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/ac8c/955c/d87d45fd824f/31e29a601c57/07563505510-p/07563505510-p.jpg?ts=1709296633351&w=563',
            title: 'WAXED-EFFECT JACKET',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/5908/50e3/2c5f4766b468/fd0a682baaac/04302535500-p/04302535500-p.jpg?ts=1704358340703&w=563',
            title: 'LIGHTWEIGHT QUILTED GILET',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container9 = document.querySelector('.content #section9 .cards');

    products9.forEach(product => {
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

        container9.appendChild(card);
    });



    // section 10

    const products10 = [
        {
            image: 'https://static.zara.net/assets/public/9147/0ee8/ac834c388e26/723edda74d88/12030320800-e2/12030320800-e2.jpg?ts=1701174790622&w=563',
            title: 'SQUARE TOE LEATHER BOOTS',
            price: '₹ 2,290.00',
            discount: '₹ 1,750.00',
            discountPercentage: '-23%'
        },
        {
            image: 'https://static.zara.net/assets/public/4564/0d95/85bd4722aaee/aec4714a2bd8/12180220500-e2/12180220500-e2.jpg?ts=1701341998939&w=563',
            title: 'RETRO HIGH-TOP SNEAKERS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-32%'
        },
        {
            image: 'https://static.zara.net/assets/public/7bc6/5102/39ac4d03b95b/8db8179e5238/12301320515-e2/12301320515-e2.jpg?ts=1711377394598&w=563',
            title: 'CHUNKY MULTI-PIECE SNEAKERS',
            price: '₹ 2,590.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-40%'
        },
        {
            image: 'https://static.zara.net/assets/public/fc7a/c3ea/b2ef437db76d/2ea000a07fd5/12604320800-e2/12604320800-e2.jpg?ts=1705418648698&w=563',
            title: 'LEATHER PENNY LOAFERS',
            price: '₹ 1,990.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/5b92/e56a/29304be5ad59/ce7539e75592/12215320203-e2/12215320203-e2.jpg?ts=1701946828787&w=563',
            title: 'MULTI-PIECE SNEAKERS',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/155b/c21e/7c2340c1aa5f/3dbeaa583049/12251320500-e2/12251320500-e2.jpg?ts=1708012051197&w=563',
            title: 'MULTI-PIECE SNEAKERS',
            price: '₹ 2,990.00',
            discount: '₹ 1,550.00',
            discountPercentage: '-48%'
        },
        {
            image: 'https://static.zara.net/assets/public/f12e/d8e8/195949c98c0b/75a8fbd24223/4000.jpg?ts=1693476989089&w=563',
            title: 'MULTIPIECE RUNNING SNEAKERS',
            price: '₹ 3,590.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/photos///2024/V/1/2/p/2611/320/700/2/w/563/2611320700_6_2_1.jpg?ts=1708352653503',
            title: 'LEATHER LOAFERS WITH APPLIQUÉ',
            price: '₹ 1,890.00',
            discount: '₹ 1,250.00',
            discountPercentage: '-33%'
        },
        {
            image: 'https://static.zara.net/assets/public/b1f3/d860/63234f1e8a85/68bfd0d27ebe/1689762775184/1689762775184.jpg?ts=1701387253686&w=563',
            title: 'CONTRAST RUNNING SNEAKERS',
            price: '₹ 3,590.00',
            discount: '₹ 2,250.00',
            discountPercentage: '-37%'
        },
        {
            image: 'https://static.zara.net/assets/public/b768/0ffa/e921443b970b/bd39d8397019/12005320800-e2/12005320800-e2.jpg?ts=1704369204855&w=563',
            title: 'LACE-UP FABRIC BOOTS',
            price: '₹ 4,990.00',
            discount: '₹ 2,550.00',
            discountPercentage: '-48%'
        }
    ];

    const container10 = document.querySelector('.content #section10 .cards');

    products10.forEach(product => {
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

        container10.appendChild(card);
    });
}





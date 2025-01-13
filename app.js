// export const getStaticProps = async () => {
//     const res = await fetch('https://zenquotes.io/api/random');
//     const response = await fetch(url);
//     const quote = await response.text();
//     console.log(quote);

//     return {
//         props: {
//             quote: quote
//         }
//     }

// }
const quoteContainer = document.querySelector('.quoteContainer');
const quoteText = document.getElementById('quotes');
const authorText = document.querySelector('#author');
const quoteBtn = document.querySelector('#newQuote');
const submitBtn = document.querySelector('#submit');
const quoteBox = document.querySelector('.quoteBox');
const author = document.querySelector('.author');
const emoji = document.querySelector('.emoji');
const userQuote = document.querySelector('.userQuote');
const url = 'https://zenquotes.io/api/random';
const pic = 'https://picsum.photos/2560/1440?random=1'
// const url = 'https://jsonplaceholder.typicode.com/posts';
// app.use(cors({origin: true, credentials: true}));
// const cors = require('cors');

// app.use(cors());





// console.log(quote)

async function getPic() {
    // let bgpic = await fetch(pic);
    document.body.style.backgroundImage = `url(${pic})`;
    // console.log(quote);
}

async function getQuote() {
    try {
        const response = await fetch(url);
        // mode: 'no-cors'
        const quote = await response.json();
        quoteText.textContent = quote[0].q;
        // authorText.textContent = quote[0].a;
        console.log(quote);
        getPic();
        return quote
        
    } catch (error) {
        console.log(error);
    }
    
}
getQuote();

submitBtn.addEventListener('click', );{
    async function submit() {
        
    }
}
quoteBtn.addEventListener('click', getQuote, getPic);{}
    

// getQuote= () => fetch(url)
// .then(item => {
//     quoteText.textContent = item[0];
//     // authorText.textContent = item[0].a;
//     // emoji.textContent = '💭';
// })


// async function testing() {
//     const randomValue = Date.now(); 
//     // Generate a unique timestamp
//     document.body.style.backgroundImage = ''; 
//     // Clear current background
//     document.body.style.backgroundImage = url(`https://picsum.photos/2560/1440?random=${randomValue}`);
// }


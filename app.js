const quoteContainer = document.querySelector('.quoteContainer');
const quoteText = document.querySelector('#quote');
const authorText = document.querySelector('#author');
const quoteBtn = document.querySelector('#newQuote');
const quoteBox = document.querySelector('.quoteBox');
const author = document.querySelector('.author');
const emoji = document.querySelector('.emoji');
const userQuote = document.querySelector('.userQuote');
const url = 'https://zenquotes.io/api/random';
// app.use(cors({origin: true, credentials: true}));
quoteBtn.addEventListener('click', getQuote);
async function getQuote() {
    try {
        const response = await fetch(url);
        const quote = await response.json();
        quoteText.textContent = quote[0].q;
        authorText.textContent = quote[0].a;
        console.log(quote);
    } catch (error) {
        console.log(error);
    }
}

getQuote();
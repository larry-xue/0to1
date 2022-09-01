const nextQuoteButton = document.querySelector('#new-quote')
const quoteAuthor = document.querySelector('#author')
const quoteText = document.querySelector('#quote')
const twitterButton = document.querySelector('#twitter')
const loader = document.querySelector('#loader')
const quoteContainer = document.querySelector('#quote-container')
let quote = {};

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteContainer.hidden = false;
  }
}

// fetch quotes
async function getApiQuote() {
  const apiURL = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiURL)
    const quotes = await response.json()
    const nextQuoteIndex = Math.floor(quotes.length * Math.random());
    quote = quotes[nextQuoteIndex]
    console.log(quote);
  } catch (err) {
    throw err;
  }
}

// next quote function
async function getNextQuote() {
  showLoadingSpinner();
  await getApiQuote()
  if (!quote.author) quote.author = 'Unknown'
  quoteAuthor.textContent = quote.author;
  if (quote.text.length > 120) quoteText.classList.add('long-quote')
  else quoteText.classList.remove('long-quote')
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
}

// init function
const initialization = () => {
  // register events
  // trigger next quote event
  getNextQuote()
  nextQuoteButton.addEventListener('click', getNextQuote)

  twitterButton.addEventListener('click', () => {
    const twitterURL = 'https://twitter.com/intent/tweet';
    const shareText = `${quoteText.textContent} --${quoteAuthor.textContent}`
    window.open(`${twitterURL}?text=${shareText}`, '_blank')
  })
}

// run scripts
initialization();
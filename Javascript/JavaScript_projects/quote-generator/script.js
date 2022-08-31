const apiQuotes = []
const nextQuoteButton = document.querySelector('#new-quote')
const quoteAuthor = document.querySelector('#author')
const quoteText = document.querySelector('#quote')

// fetch quotes
async function getQuotes() {
  const apiURL = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiURL)
    apiQuotes.push(...await response.json())
  } catch (err) {
    throw err;
  }
}

// init function
const initialization = () => {
  getQuotes();
  // register events
  // trigger next quote event
  nextQuoteButton.addEventListener('click', () => {
    const nextQuoteIndex = Math.floor(apiQuotes.length * Math.random());
    const nextQuote = apiQuotes[nextQuoteIndex]
    if (!nextQuote.author) nextQuote.author = 'Unknown'
    quoteAuthor.textContent = nextQuote.author;
    if (nextQuote.text.length > 120) quoteText.classList.add('long-quote')
    else quoteText.classList.remove('long-quote')
    quoteText.textContent = nextQuote.text;
  })
}

// run scripts
initialization();
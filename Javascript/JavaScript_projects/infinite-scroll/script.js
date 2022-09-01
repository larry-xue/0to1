// Unsplash API
let count = 5;
const apiKey = 'G_nh2IibFKjGYorelHGIDj7kbHyQga2H_K_c2AqMNqU'

let loadedImages = 0;
let allPhotosCount = 0;
// for good performance, SEO
let ready = false;
const imageContainer = document.querySelector('.image-container')
const loader = document.querySelector('#loader')

async function getPhotos() {
  // displayPhotos()
  try {
    ready = false;
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
    const responce = await fetch(apiUrl);
    photoArray = await responce.json()
    allPhotosCount += count;
    displayPhotos()
  } catch (err) {
    throw err;
  }
}

// check if the image has been loaded
function imageLoaded() {
  loadedImages += 1;
  console.log(loadedImages)
  console.log(allPhotosCount)
  if (loadedImages === allPhotosCount) {
    loader.hidden = true;
    ready = true;
    imageContainer.hidden = false;
    initailLoade = false;
    count = 10;
  }
}

function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key])
  }
}

function displayPhotos() {
  photoArray.map(photo => {
    const a = document.createElement('a')
    const img = document.createElement('img')

    setAttributes(a, {
      href: photo.links.html,
      target: '_blank'
    })
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    })

    a.appendChild(img)
    img.addEventListener('load', imageLoaded)
    imageContainer.append(a);
  })
}

// scroll event
window.addEventListener('scroll', () => {
  // console.log(`window.scrollY = ${window.scrollY}`);
  // console.log(`window.innerHeight = ${window.innerHeight}`)
  // console.log(`document.body.offsetHeight = ${document.body.offsetHeight}`)
  // console.log(document.body.offsetHeight - 1000 <= window.screenY + window.innerHeight);
  // console.log(ready);
  if (document.body.offsetHeight - 1000 <= window.scrollY + window.innerHeight && ready) {
    console.log('load more')
    getPhotos();
  }
})

// displayPhotos();
getPhotos();
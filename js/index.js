const maintitles = ["डोको", "Doko"];
const smalltitles = ["पढाइको डोको, जीवनको मुखिया।", "Education Sculpts Leaders Of Life"];
const maintitleElement = document.getElementById("main-title");
const smalltitleElement = document.getElementById("small-title");
let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % maintitles.length;
    maintitleElement.textContent = maintitles[currentIndex];
    smalltitleElement.textContent = smalltitles[currentIndex];
}, 5000);
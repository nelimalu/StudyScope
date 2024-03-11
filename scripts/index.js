var flipword_interval = 10;
var flip_words = [
    "STUDENTS",
    "LEADERS",
    "THINKERS",
    "INNOVATORS",
    "OUR FUTURE",
    "ANYBODY",
    "YOU"
];
var counter = 1;



window.addEventListener('DOMContentLoaded', (event) => {
    
    let flipword = document.getElementById("flip-word");
    flipword.style.animation = `skew ${flipword_interval}s ease infinite`;

    function change_word() {
        flipword.innerHTML = flip_words[counter];
        counter++;
        counter %= flip_words.length;
    }

    setTimeout(() => {
        change_word();
        setInterval(() => { 
            change_word();
        }, flipword_interval * 1000);
    }, flipword_interval * 500)

   

});
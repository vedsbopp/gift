// Get references to the HTML elements we need to interact with
const revealButton = document.getElementById('reveal-button');
const card = document.getElementById('card');
const prankText1 = document.getElementById('prank-text-1');
const animationContainer = document.getElementById('animation-container');
const prankText2 = document.getElementById('prank-text-2');

// This function runs when the 'reveal-button' is clicked
revealButton.addEventListener('click', () => {
    
    // 1. Add the 'is-flipped' class to the card. This triggers the flip
    //    animation defined in the CSS.
    card.classList.add('is-flipped');

    // 2. Set the text and emoji content for the prank elements.
    //    We do this now so they are ready to be animated.
    prankText1.textContent = "TUM PAGAL HO!";
    animationContainer.innerHTML = '🧠<br>👇<br>🦵';
    prankText2.textContent = "Tumara Dimag Ghutno Mein Hai! Kusum 🤣";

    // 3. Add the 'visible' class to each prank element. The CSS handles
    //    the staggered animation delay, so we can add the class to all
    //    of them at once after the flip starts.
    prankText1.classList.add('visible');
    animationContainer.classList.add('visible');
    prankText2.classList.add('visible');
    
    // 4. To prevent re-clicking, we can disable the card's hover effect
    //    and pointer after it's flipped.
    card.style.cursor = 'default';
});
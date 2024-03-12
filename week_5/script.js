"use strict";

myHeight.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--height', `${myHeight.value}%`);
});



/* used in html for the background and foreground (Colours)
the scripts which was caled from css has an event listner which is then called back*/

myBG.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--bg-colour', myBG.value);
});
myFG.addEventListener('input', ev => {
  document.documentElement.style.setProperty('--fg-colour', myFG.value);
});


// this is what we used in the previous lab for the button that exapnds (moves)
// the buttons from out if view to in view
menuToggler.addEventListener('click', ev => {
    menu.classList.toggle('open');
  });
  

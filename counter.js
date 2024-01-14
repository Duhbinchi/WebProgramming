if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    let counter = localStorage.getItem('counter');

    counter++;
    document.querySelector('h1').innerHTML = counter;

    localStorage.setItem('counter', counter);
}   

// Wait until all content is loaded then RUN the function
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('h1').innerHTML = localStorage.getItem('counter');

// Without count() it means that <count> will ONLY run WHEN clicked
    document.querySelector('button').onclick = count;

    // Adds for every one second
    setInterval(count, 1000);
});

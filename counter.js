let counter = 0;

function count() {
    counter++;
    // alert(counter);
    document.querySelector('h1').innerHTML = counter;
    
    if (counter % 2 != 0) {
        alert(`${counter} is an Odd Number.`)
    }
}   

// Wait until all content is loaded then RUN the function
document.addEventListener('DOMContentLoaded', function() {
// Without count() it means that <count> will ONLY run WHEN clicked
    document.querySelector('button').onclick = count;
});

let peeps = [
    'cheyne',
    'court',
    'cory',
    'edwin',
    'hamilton',
    'jarrett',
    'jeff',
    'mario',
    'nick',
    'yasir',
    'yohans'
];

function choose() {
    document.getElementById('winner').innerHTML = peeps[Math.floor(Math.random() * peeps.length)];    
}



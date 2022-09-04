let peeps = [
    'Damian', 
    'Daniel', 
    'Derrick', 
    'Diana', 
    'Dominic', 
    'Dorsa', 
    'Emre', 
    'Frederick', 
    'Greg', 
    'Gregory', 
    'Haylee', 
    'Heather', 
    'Horacio', 
    'Jacob', 
    'Jacob', 
    'Jake'
];

function choose() {
    document.getElementById('winner').innerHTML = peeps[Math.floor(Math.random() * peeps.length)];    
}


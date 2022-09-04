let clicks = 0;
let sum = 0;

let xArray =[];
let yArray = [];


let peeps = [
    ['Damian', 0],
    ['Daniel', 0],
    ['Derrick', 0],
    ['Diana', 0],
    ['Dominic', 0],
    ['Dorsa', 0],
    ['Emre', 0],
    ['Frederick', 0],
    ['Greg', 0],
    ['Gregory', 0],
    ['Haylee', 0],
    ['Heather', 0],
    ['Horacio', 0],
    ['Jacob G', 0],
    ['Jacob W', 0],
    ['Jake', 0]
];

for (let i=0; i<peeps.length; i++) {
    xArray.push(peeps[i][0]); 
}

for (let i=0; i<peeps.length; i++) {
    yArray.push(peeps[i][1]); 
}

let data = [
    {
        x: xArray,
        y: yArray,
        type: 'bar'
    }
];

// initial plot rendering
Plotly.newPlot('chart', data);


function choose() {
    let randomNumber = Math.floor(Math.random() * peeps.length);
    // console.log(`peeps length is ${peeps.length}`);
    console.log(`random number is ${randomNumber}`);
    // display just the name of the selection
    document.getElementById('winner').innerHTML = peeps[randomNumber][0];
    yArray[randomNumber] = peeps[randomNumber][1]+1;
    peeps[randomNumber][1] = peeps[randomNumber][1]+1;
}

function plot() {
    choose();

    data = [
        {
            x: xArray,
            y: yArray,
            type: 'bar'
        }
    ];

    Plotly.newPlot('chart', data);
}

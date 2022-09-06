let clicks = 0;
let sum = 0;

let xArray =[];
let yArray = [];

let config = {responsive: true}
let layout = { 
    title: 'VolunTOLD Results'
  };

let peeps = [
    ['Dorsa', 0],
    ['Edwin', 0],
    ['Emre', 0],
    ['Frederick', 0],
    ['Greg H.', 0],
    ['Gregory W.', 0],
    ['Haylee', 0],
    ['Heather', 0],
    ['Horacio', 0],
    ['Jacob G.', 0],
    ['Jacob W.', 0],
    ['Jake L.', 0],
    ['Jake S.', 0],
    ['James C.', 0],
    ['James K.', 0],
    ['Janvier', 0],
    ['Jared', 0],
    ['Jennifer', 0],
    ['Jeremy', 0],
    ['John J.', 0],
    ['John Weaver', 0],
    ['John Wilkins', 0]
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
Plotly.newPlot('chart', data, layout, config);


function choose() {
    let randomNumber = Math.floor(Math.random() * peeps.length);
    // console.log(`peeps length is ${peeps.length}`);
    console.log(`random number is ${randomNumber}`);
    // display just the name of the selection
    document.getElementById('winner').innerHTML = peeps[randomNumber][0];
    yArray[randomNumber] = peeps[randomNumber][1]+1;
    peeps[randomNumber][1] = peeps[randomNumber][1]+1;
}



Plotly.newPlot('myDiv', data, layout, config );

function plot() {
    choose();

    data = [
        {
            x: xArray,
            y: yArray,
            type: 'bar'
        }
    ];

    Plotly.newPlot('chart', data, layout, config);
}

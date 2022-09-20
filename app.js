let clicks = 0;
let sum = 0;

let xArray =[];
let yArray = [];

let config = {responsive: true}
let layout = { 
    title: 'VolunTOLD Results'
  };

let peeps = [
    ['Candice Radam', 0],
    ['Daniel Miller', 0],
    ['Diana Macias castillo', 0],
    ['Frederick Hubbard', 0],
    ['Jake Liefschultz', 0],
    ['James Carter', 0],
    ['Jared Kim', 0],
    ['John Weaver', 0],
    ['Joseph Sandoval', 0],
    ['Merrin Abraham', 0],
    ['Sammy Davis', 0],
    ['Seth Daulton', 0],
    ['Sid Gray', 0],
    ['Sonia Marcinek', 0],
    ['Cheryl Perry', 0]
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

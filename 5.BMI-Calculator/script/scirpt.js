// getting the weight
let weight = document.getElementById('weight');

// getting the height in fit unit
let heightFeet = document.getElementById('heightFeet');

// getting the height in inch unit
let heightInch = document.getElementById('heightInch');

// getting the bmi calculated result
let bmiCalculatedValue = document.getElementById('calculated-result');


// converting each inputs to integer type
weight.addEventListener('change', function(){
    weight = parseInt(this.value) / 2.205;
    console.log(weight);
});

heightFeet.addEventListener('change', function(){
    heightFeet = parseInt(this.value) * 12; // converting to inches
    console.log(heightFeet);
});

heightInch.addEventListener('change', function(){
    heightInch = parseInt(this.value); 
    heightInch = (heightFeet + heightInch) * 0.0254; // converting to inches to meters
    // console.log(heightInch);

    // calculating the BMI
    bmiCalculatedValue = weight / (heightInch * heightInch)
    console.log(bmiCalculatedValue);

    document.getElementById('calculated-result').innerText = bmiCalculatedValue.toFixed(2);
});


// calculation 
// bmiCalculatedValue.addEventListener('click', function(){
//     bmiCalculatedValue = weight / ((heightFeet + heightInch) * 0.0254)**2;
//     console.log(bmiCalculatedValue);
// });



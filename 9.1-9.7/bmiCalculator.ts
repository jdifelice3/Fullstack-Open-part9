const calculateBmi = (height:number, weight: number) : String => {
    //height is in cm, weight is in kg
    let bmi:number = 0;
    let result:String = '';
    console.log('height & weight', height, weight);
    bmi = weight/((height/100)^2);
    console.log('bmi', bmi);
    switch (true) {
        case (bmi < 16.0):
            result = 'Underweight (Severe thinness)';
            break;
        case (bmi >= 16.0 && bmi < 17.0):
            result = 'Underweight (Moderate thinness)';
            break;
        case (bmi >= 17.0 && bmi < 18.5):
            result = 'Underweight (Mild thinness)';
            break;
        case (bmi >= 18.5 && bmi < 25.0):
            result = 'Normal range';
            break;
        case (bmi >= 25.0 && bmi < 30.0):
            result = 'Overweight (Pre-obese)';
            break;
        case (bmi >= 30.0 && bmi < 35.0):
            result = 'Obese (Class I)';
            break;        
        case (bmi >= 35.0 && bmi < 40.0):
            result = 'Obese (Class II)';
            break;       
        case (bmi >= 40.0):
            result = 'Obese (Class III)';
            break;
        default:
            result = 'something went wrong'
            break;
        }
    return result;
}
  
export default calculateBmi;
//console.log(calculateBmi(178, 71.2))
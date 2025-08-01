interface IResults {
    periodLength:number, 
    trainingDays: number, 
    success:boolean,
    rating:number, 
    ratingDescription:String, 
    target:number,
    average:number
}

const calculateExercises = (exerciseHours: number[], targetAmount:number):IResults => {
    
    let results:IResults = <IResults>{};
    results.periodLength = exerciseHours.length;
    results.trainingDays = exerciseHours.filter(r => r > 0).length;
    results.target = targetAmount;
    results.average = exerciseHours.reduce((a, b) => a + b, 0) / exerciseHours.length;

    if(results.average > 2){
        results.rating = 3;
        results.ratingDescription = "Great!";
    } else if (results.average <=2 || results.average > 1){
        results.rating = 2;
        results.ratingDescription = "Acceptable";
    } else {
        results.rating = 1;
        results.ratingDescription = "Needs work";
    }

    return results;
}

console.log(calculateExercises(process.argv.slice(3).map(Number), Number(process.argv[2])));

//[3, 0, 2, 4.5, 0, 3, 1]
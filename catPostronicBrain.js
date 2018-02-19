// const historiMatch = {
//   'input': [43.2, 54.2],
//   'output': [1, 0, 0]
// }
//
// const matchInTheFuture = {
//   'input': [32.42, 634.4]
// }
//
// const trainingSet = [historicalMatch];
// const network = new Architect.Perceptron(historicMatch.input.length, 6,6,3);
// const trainer = new Trainer(network)
//
// trainer.train(trainingSet, {
//   rate:.0003,
//   iterations:10000
// })
//
// var toBePredicted - [matchInTheFuture];
// toBePredicted.forEach((match)=>{
//   const activations = match.input
//   console.log(activations, network.activate(activations));
// })
// //synaptic data error
// trainer.train(trainingSet, {,
// rate: .0003,
// iterations: 100000,
// schedule: {
//   every: 10000,
//   do: (data){
//     console.log(data.error);
//     }
//   }
// })
// //classification error
//
// do: function (data){
//   const errors = 0
//   trainingSet.forEach((dataPoint) => {
//     const expected = predictFromProbability(dataPoint.output);
//     const prediction = network.activate(dataPoint.input);
//     const predicted = predictFromProbability(prediction);
//     if (expected != predicted) {
//       errors++;
//     }
//   })
//   console.log(errors / trainingSet.length);
// }
// //cross validation errors
//
// const dataSet = [historicMatch]
// const trianingSet = dataSet.splice(0, threshold);
// const crossValidationSet = dataSet;

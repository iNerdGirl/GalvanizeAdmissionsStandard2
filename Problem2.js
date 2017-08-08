var limit = 4000000;
var sum = 0;
var evenSum = 0;
var fibEven = [];
var fibSequence = [1,2];

for (var i = 0; i < limit; i++) {
	if(fibSequence[i] < limit){
		sum = fibSequence[i+i] + fibSequence[i];
		fibSequence.push(sum);
		console.log(fibSequence);
	}
	
	if (fibSequence[i] % 2 === 0) {
		evenSum = evenSum + fibSequence[i];
	} else {
	console.log('The sum of even numbers up to 4 million is '+ evenSum);
	}
} 
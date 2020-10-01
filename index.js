// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
Array.isArray(a);
Array.isArray(b);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let x = 0; x < a.length; x++) {
	a[x] = a[x] * 2;
}


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

//case 1
colors.join(' ');
//case 2
colors.join('+');
//case 3
colors.join();


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(cmp1, cmp2) {return cmp2 - cmp1});

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

function getMostFrequentElement(targetList) {
  if (Array.isArray(targetList) === false) {
  	console.log('not an array');
  	return;
  }

  let tempList = targetList;
  let highestCount = 0;
  let targetElem;
  tempList.sort();

  for(let x = 0; x < tempList.length; x++) {
  	if (highestCount < tempList.lastIndexOf(tempList[x]) - x + 1) {
  		highestCount = tempList.lastIndexOf(tempList[x]) - x + 1;
  		targetElem = tempList[x];
  	}
  	x = tempList.lastIndexOf(tempList[x]);
  }

  //console.log('highestCount: ' + highestCount);
  //console.log('targetElem: ' + targetElem);
  console.log(targetElem);
}

getMostFrequentElement(a);
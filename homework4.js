// #1

const space = function (n) {
	if (n===0) {
		return "";
	}

	return " " + space(n-1);
};

const star = function (n) {
	if (n===0) {
		return "";
	}

	return "*" + star(n-1);
};

const stars1 = function(numSpaces,numStars, n){
	if (n===0 )	{
		return;
	}
	
	console.log(space(numSpaces)+star(numStars));
	stars1(numSpaces+1, numStars-2, n-1);
	
	}

const triangleStars = function(n) {
	stars1 (0, (2*n)-1, n);
}

console.log(triangleStars(3));

// #2

const power = function (base, n) {
  if (n === 0)
	return 1;
  else
	return base * power(base, n - 1);
}

console.log(power(2,3));

// #3

const reverser = function (str) {
  const f = function (string, index) {
	if  (index === 0) {
	  return "";
	}
	return string[index-1] + f(string, index-1);
  }
  return f(str, str.length);
};

reverser("abc");

// #4

const firstLine = function (n, symbol1, symbol2) {
	if (n===0) {
		return "";
	}
	else {
	return symbol1 + symbol2 + firstLine(n-1, symbol1, symbol2);
}
};
	
const depth = function (n, length) {
	if (n <= 0) {
		return "";
	}
	else if(n === 1){
	    	console.log(firstLine(length, "*", " "));
        return "";
	  }
	  
	console.log(firstLine(length, "*", " "));
  	console.log(firstLine(length, " ", "*"));
	return depth(n-2, length);
};

const checkerboard = function (n) {
	depth(n,n);
};


checkerboard(5);

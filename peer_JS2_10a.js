var value = 42;

if(value >= 53) {
	value += 42;
} else {
	value -= 13;
};

var stringOne = "11";
value += stringOne;

var arrayOne = [];

for(var i = 0; i < value.length; i++) {
	arrayOne.push(value.charAt(i));
};

arrayOne.shift();
arrayOne.pop();

var backwardsArray = "";

for(i = arrayOne.length - 1; i >= 0; i--) {
	backwardsArray += arrayOne[i];
};

value = parseInt(value);
backwardsArray = parseInt(backwardsArray);

value = value + backwardsArray;

if (value < 60) {
	value = 14;
} else if (value == 2930) {
	value = 27;
} else {
	value = 2;
};

var count = 10;
while (count > 0) {
	value += 1;
	count--;
};

function string(val) {
	val = val.toString();
	if (val.length > 1) {
		val = val.slice(1,2);
		value = val;
	};
};

string(value);
console.log(value);
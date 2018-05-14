var repeatString = function() {
let phrase = "hey";
let y = '';
let x = -1;

if (x < 0){
  return "ERROR";
}
else{
let i = 0;

while(i < x){
  y += phrase;
  i++;
};
return y;
};
}
module.exports = repeatString;

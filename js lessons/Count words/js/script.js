var str = prompt('Enter any text!')
function getVowelCount(s) {
  var lut = {
      a: "0",
      e: "0",
      i: "0",
      o: "0",
      u: "0"
    },
    a = s.split("").map(c => c.toLowerCase());
  return a.reduce((p, c) => (p[c] && 1 * p[c]++, p), lut);
}
getWord=()=>{
    var message = document.getElementById('output');
    message.innerHTML = str.value
    var outcome = document.getElementById('output2')
    outcome.innerHTML = getVowelCount(str)
}
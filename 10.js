function licenseFormatter (s,k) {
  let res = '';
  let count=0;
  s = s.toUpperCase()
  for(let i = s.length - 1;  i >= 0;) {
    if(s[i]=='-'){
      i--;
    } else if(count != 0 && count % k == 0){
      res = '-' + res; 
      count = 0;
    } else {
      res = s[i] + res; 
      count++;
      i--;
    }
 }
 return res;
}

// Main Hint  : We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character.
// Main 3 points we have to consider :
// 1. if '-' comes in the string we just gotta skip it.
// 2. if a alphabet or numeric comes in the string we would raise the count and add that char into the result string in the begining of the string until we hit k length
// 3. after keep on adding the char's into the result string and hitting the k length we would add '-' at the begining of the string and reset the counter.

const s = "2-5g-3-J"
console.log(licenseFormatter(s,2))
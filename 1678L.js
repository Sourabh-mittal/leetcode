const interpret = function (command) {
  let i = 0;
  let res = "";
  while (i < command.length) {
    if (command[i] === "G") {
      res += "G";
      i++;
    } else if (command[i] === "(") {
      if (command[i + 1] === ")") {
        res += "o";
        i += 2;
      } else if (command[i + 1] === "a") {
        res += "al";
        i += 4;
      }
    }
  }
  return res;
};

console.log(interpret1("(al)G(al)()()G"));
// 3 conditions we need to solve this problem :->
// 1. if we encounter "G" let it be don't change anything increase counter by 1
// 2. if we encounter "()" we need to replace it with "o"  but we need to two things in mind
//      if we encounter "(" and it's adjancent is ")" than we will replace it with "o" but it's diff to change the size of string so we will have a new string and push it into it
//    and we will increase the counter by 2
// 3. if we encounter "(" and it's adjancent is "a" then we will replace it with "al" but we will push "al" into the string we have then we will increase the counter by 4

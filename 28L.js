var strStr = function(haystack, needle) {
    if(haystack == needle) {
      return 0;
    }
    if(needle.length > haystack.length || (needle.length == haystack.length && needle != haystack)) {
      return -1;
    }
    for(let i = 0; i < haystack.length; i++) {
      if(haystack.slice(i, needle.length+i) == needle) {
        return i;
      }
    }
    return -1;
};

const haystack = "", needle = ""

console.log(strStr(haystack, needle));

// very easy question
//  
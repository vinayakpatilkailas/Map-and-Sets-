let set = new Set()

set.add("a")
set.add("b")
set.add("c")
set.add("a")
set.add("d")
set.add("e")
set.add("e")
set.add("c")
set.add("f")
set.add("b")

console.log(set);

// 
var s="abcadeecfb";
function prCharWithFreq(s)
{
// Store all characters and
// their frequencies in dictionary
var d = new Map();

s.split('').forEach(element => {
 
    if(d.has(element))
    {
        d.set(element, d.get(element)+1);
    }
    else
        d.set(element, 1);
});

// Print characters and their
// frequencies in same order
// of their appearance

s.split('').forEach(element => {
// Print only if this
// character is not printed
// before
if(d.has(element) && d.get(element)!=0)
{
  document.write( element + d.get(element) + " ");
  d.set(element, 0);
}
});
}
prCharWithFreq(s);
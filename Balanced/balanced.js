/*

Given a string of opening and closing parentheses, check whether it’s balanced.
We have 3 types of parentheses:
 round brackets: (), square brackets: [], and curly brackets: {}.
 Assume that the string doesn’t contain any other character than these,
 no spaces words or numbers. Just to remind, balanced parentheses
 require every opening parenthesis to be closed in the reverse order opened.
 For example ‘([])’ is balanced but ‘([)]’ is not.

*/

// Can use Map or Set or Stacks
// Conceptually set is a collection of things vs Map which is a key value store

const MAP = {
  '(': {
    closed: ')',
  },
  '[': {
    closed: ']',
  },
  '{': {
    closed: '}',
  },
};

//Crude working version

function isBalanced(s) {
  const closedTagsStack = [];
  for (let i = 0; i < s.length; i++ ) {
    const char = s.charAt(i);
    const openTag = MAP[char];
    if (openTag) {
      closedTagsStack.push(openTag.closed);
    } else {
      const nextTagToCheck = closedTagsStack.pop();
      if (char !== nextTagToCheck) {
        return false;
      }
    }
  }
  return true;
}

class Balanced {
  constructor() {}
  solve(str){
    const results = [];
    const testString = str || '';
    return isBalanced(str);
  }

}

module.exports = Balanced;
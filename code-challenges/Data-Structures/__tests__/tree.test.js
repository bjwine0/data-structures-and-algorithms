'use strict';

// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully add a left child and right child to a single root node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal

'use strict';

const multiBracket = require('../../multiBracketValidation/multi-bracket-validation.js');

//Test should include;
// “Happy Path” - Expected outcome
// Expected failure
// Edge Case (if applicable/obvious)

describe('Queue with stacks tests', () => {
  it('can enqueue things', () => {
    let qs = new AnimalQ;
    qs.enqueue(5);
    qs.enqueue(10);
    qs.enqueue(15);
    qs.enqueue(20);
    expect(qs.stack1.top.value).toBe(20)
  });

  it('can dequeue things', () => {
    let qs = new AnimalQ;
    qs.enqueue(5);
    qs.enqueue(10);
    qs.enqueue(15);
    qs.enqueue(20);
    expect(qs.dequeue()).toBe(5)
  });

})
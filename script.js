// script
// order 1, get attributes
const order1Element = document.querySelector('[data-key = order1');
const order1Biscuits = order1Element.getAttribute('data-biscuits');
const order1Donuts = order1Element.getAttribute('data-donuts');
const order1Pancakes = order1Element.getAttribute('data-pancakes');
const order1Status = order1Element.getAttribute('data-delivered') 

// order 2, get attributes
const order2DlElement = document.querySelector('[data-key = order2]');
const order2Biscuits =  order2DlElement.getAttribute('data-biscuits')
const order2Donuts = order2DlElement.getAttribute('data-donuts');
const order2Pancakes = order2DlElement.getAttribute('data-pancakes');
const order2Status = order2DlElement.getAttribute('data-delivered');

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

//===========

//Order 1 replace Loading with values from data attributes
order1Element.querySelector('.biscuits .count').textContent = order1Biscuits;
order1Element.querySelector('.donuts .count').textContent = order1Donuts;
order1Element.querySelector('.pancakes .count').textContent = order1Pancakes;
order1Element.querySelector('.status > dd').textContent = order1Status ? 'Delivered' : 'Pending';

//order 2 replace loading..... with values
order2DlElement.querySelector('.biscuits .count').textContent = order2Biscuits;
order2DlElement.querySelector('.donuts .count').textContent = order2Donuts;
order2DlElement.querySelector('.pancakes .count').textContent = order2Pancakes;
order2DlElement.querySelector('.status > dd').textContent = order2Status ? 'Delivered' : 'Pending';

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending
//=======

/* const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status) */


/* 2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending */


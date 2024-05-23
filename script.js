// script.js

// const 1-root = document(order1),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

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
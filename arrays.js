var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array,element){[element, ...array]}
function addElementToEndOfArray(array,element){[...array, element]}
function destructivelyAddElementToBeginningOfArray(array, element){array.unshift(element)}
function destructivelyAddElementToEndOfArray(array, element){array.push(element)}

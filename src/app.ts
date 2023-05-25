import {createCounter} from "./leet-code/30_days_js-ts/day_3";

let returnObj = createCounter(5);

console.log(returnObj.increment());
console.log(returnObj.reset());
console.log(returnObj.decrement());
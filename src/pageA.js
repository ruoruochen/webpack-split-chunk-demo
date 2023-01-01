// import lodash from 'lodash'
// import util1 from '../utils/util1'
// import util2 from '../utils/util2'

// console.log('this is pageA',util1(),util2(),lodash.pick({a:1,b:2},['a']))

import vendor1 from "vendor1";
import utility1 from "./utility1";
import utility2 from "./utility2";

export default () => {
  import('./async1.js')
  import('./async2.js')
  console.log("pageA");
};
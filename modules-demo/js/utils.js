
// named export
export const doIt = () => {
  console.log('did it!');
};

export const doSomethingElse = () => {
  console.log('did something else!');
};

export { succ } from './lib';


// default export
// export default {
//   doIt,
//   doSomethingElse
// };
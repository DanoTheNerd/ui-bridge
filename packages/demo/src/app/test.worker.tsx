import '@ui-bridge/core';
import { FooComponent } from './foo';

export const test = () => {

  return (
    <>
      <FooComponent test={true}></FooComponent>
    </>
  );
}

console.log(test())

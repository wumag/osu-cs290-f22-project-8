import React, { useState } from 'react';
import { MdAdd, MdRemove, MdDeleteOutline } from 'react-icons/md';

	
function SelectQuantity() {
    const [count, setCount] = useState(0);
    const increment = () => (count + 1) > 10 ? 10 : setCount(count + 1);
    const decrement = () => (count - 1) < 0 ? 0 : setCount(count - 1);
    const remove = () => setCount(0);
    return (
      <div>
      <MdRemove onClick={decrement} />
      <span>{count}</span>
	  <MdAdd onClick={increment} />
      <MdDeleteOutline onClick={remove} />
      </div>
     );
}
	
export default SelectQuantity;
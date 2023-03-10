import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserItem } from './actions';
import { UserTable } from './components/UserTable';
export const ManageUser = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }
  const handleSubmit = () => {
    if (inputValue.length > 0) {
      dispatch(addUserItem(inputValue));
      setInputValue('')
    }
  }
  return (
    <div style={{
      padding: 20
    }}>
      <div
        style={{
          padding: 20
        }}
      >
        <input placeholder="Add new student" onChange={handleChangeInput} value={inputValue} />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div>
        <UserTable />
      </div>
    </div>
  )
}


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticleItem, } from "../actions";
export const AddNewArticleForm = ({
  userId
}) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleAddArticleItem = (article) => {
    if (article.length > 0) {
      dispatch(addArticleItem({
        id: userId,
        article,
      }))
      setInputValue('')
    }
  }
  const handleChangeInput = (e) => {
    const { value } = e.target
    setInputValue(value)
  }
  return (
    <div>
      <br />
      <input placeholder="Add new course" value={inputValue} onChange={handleChangeInput} />
      <button 
        onClick={() => { handleAddArticleItem(inputValue) }}
      >Add</button>
    </div>
  )
}
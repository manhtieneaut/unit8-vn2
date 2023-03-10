
import React from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeArticleItem, removeUserItem } from '../actions';
import { AddNewArticleForm } from './AddNewArticleForm';

export const UserTable = () => {

    const userList = useSelector((state) => state.manageUser.users)
    const dispatch = useDispatch();

    const handleRemoveArticleItem = (userId, article) => {
        dispatch(removeArticleItem({
            articleId: article,
            id: userId
        }))
    }

    const handleRemoveUser = (userId) => {
        dispatch(removeUserItem(userId))
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList && userList.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.info}</td>
                                <td>
                                    <div>
                                        <AddNewArticleForm
                                            userId={user.id}
                                        />
                                        <ul>
                                            {
                                                user.articles && user.articles.map((article, index) => {
                                                    return (
                                                        <li key={`${article}-${index}`} style={{marginTop:'10px'}}>
                                                                <button
                                                                style={{border: '1px solid',borderRadius:'5px'}}
                                                                 onClick={() => { handleRemoveArticleItem(user.id, article.id) }}
                                                                 >Del</button>---Course: {article.name}  
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <button onClick={() => { handleRemoveUser(user.id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}
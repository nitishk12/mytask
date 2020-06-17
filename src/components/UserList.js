import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser, markSelected } from '../actions/user';
import Checkbox from './Checkbox';

const UserList = (props) => {
    // console.log(props.users)
    const handleRemove = (selected) => {
        const remove = window.confirm('Are you sure to delete ?')
        if (remove) {
            props.dispatch(removeUser(selected))
        }
    }
    const handleClick = (id) => {
        props.dispatch(markSelected(id))
    }
    return (
        <div>
            <h2>Listing Users - {props.users.length}</h2>
            <ul>
                {props.users.map(user => {
                    return <li key={user.id}>&nbsp;&nbsp;
                        <Checkbox name={user.name} checked={user.selected} onChange={() => {
                            handleClick(user.id)
                        }} />
                        {user.name}&nbsp;&nbsp;
                        <Link to={`/users/${user.id}`}><button>View</button></Link>&nbsp;&nbsp;
                        <button onClick={() => handleRemove(user.selected)}>remove</button>
                    </li>
                })}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserList);
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from '../actions/user';
import UserForm from './UserForm';

const UserList = (props) => {
    const handleRemove = (id) => {
        const remove = window.confirm('Are you sure to delete ?')
        if (remove) {
            props.dispatch(removeUser(id))
        }
    }
    return (
        <div>
            <h2>Listing Users - {props.users.length}</h2>
            <ul>
                {props.users.map(user => {
                    return <li key={user.id}>&nbsp;&nbsp;
                    {user.name}&nbsp;&nbsp;
                <Link to={`/users/${user.id}`}><button>View</button></Link>&nbsp;&nbsp;
                    <button onClick={() => handleRemove(user.id)}>remove</button>
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
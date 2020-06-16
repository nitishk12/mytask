import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UserShow(props) {

    return (
        <div>
            <h2>NAME : {props.user.name}</h2>
            <h2>EMAIL : {props.user.email}</h2>
            <h2>DATE OF BIRTH : {props.user.dob}</h2>
            <h2>PORTFOLIO : {props.user.portfolio}</h2>
            <h2>GENDER : {props.user.gender}</h2>
            <h2>HOBBIES : &nbsp;&nbsp;</h2>
            <ul>
                {(Object.keys(props.user.hobbieslist)).map((hobby, i) => {
                    return <li key={i}>{hobby}</li>
                })}
            </ul>
            <h2>SKILLS : &nbsp;&nbsp;</h2>
            <ul>
                {(Object.keys(props.user.skillslist)).map((skill, i) => {
                    return <li key={i}>{skill}</li>
                })}
            </ul>

            <Link to="/users"><button>Back</button></Link>

        </div>
    )
}
const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => user.id == props.match.params.id),
    }
}
export default connect(mapStateToProps)(UserShow)
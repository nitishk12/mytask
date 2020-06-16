import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/user';
import Checkbox from './Checkbox';

const UserForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [portfolio, setPortfollio] = useState('');
    const [hobbieslist, setHobbiesList] = useState({});
    const [skillslist, setSkillsList] = useState({});
    const [gender, setGender] = useState('');
    const [errors, setErrors] = useState({});

    const hobbies = [
        { name: 'coding', key: '1', label: 'coding' },
        { name: 'reading', key: '2', label: 'reading' },
        { name: 'cooking', key: '3', label: 'cooking' }
    ]

    const skills = [
        { name: 'javascript', key: '1', label: 'javascript' },
        { name: 'react', key: '2', label: 'react' },
        { name: 'node', key: '3', label: 'node' }
    ]

    const handlehobby = (e) => {
        setHobbiesList({ ...hobbieslist, [e.target.name]: e.target.checked });
    }

    const handleSkills = (e) => {
        setSkillsList({ ...skillslist, [e.target.name]: e.target.checked });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (handleFormValidations()) {
            const formData = {
                id: Number(new Date()),
                name: name,
                email: email,
                dob: dob,
                portfolio: portfolio,
                gender: gender,
                hobbieslist: hobbieslist,
                skillslist: skillslist
            }
            console.log(formData)
            props.dispatch(addUser(formData))
            props.history.push('/users')
        }
    }

    const handleFormValidations = () => {
        let errors = {}
        let formIsValid = true

        if (!name) {
            formIsValid = false;
            errors["nameErr"] = "Name is required"
        }
        if (!email) {
            formIsValid = false;
            errors["emailErr"] = "Email is required"
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            formIsValid = false;
            errors["emailErr"] = "Invalid email id"
        }
        if (!dob) {
            formIsValid = false;
            errors["dobErr"] = "Date of birth is required"
        }
        else if (!(/^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/.test(dob))) {
            formIsValid = false;
            errors["dobErr"] = "Invalid date of birth"
        }
        if (!portfolio) {
            formIsValid = false;
            errors["portfolioErr"] = "Portfolio is required"
        }
        if (gender === '' || gender === "radio") {
            formIsValid = false;
            errors["genderErr"] = "select a gender.";
        }
        setErrors(errors);
        return formIsValid;
    }

    const { nameErr, emailErr, dobErr, genderErr, portfolioErr } = errors;

    return (
        <div>
            <h2>Add a new user</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name</label>&nbsp;&nbsp;
                    <input
                        id="name"
                        type="text"
                        placeholder="enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={nameErr ? ' showError' : ''}
                    />&nbsp;&nbsp;
                    {nameErr && <span style={{ color: "red", paddingBottom: 10 }}>{nameErr}</span>}
                    <br />
                    <label htmlFor='email'>Email</label>&nbsp;&nbsp;
                    <input
                        id="email"
                        type="text"
                        placeholder="enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={emailErr ? ' showError' : ''}
                    />&nbsp;&nbsp;
                    {emailErr && <span style={{ color: "red", paddingBottom: 10 }}>{emailErr}</span>}
                    <br />
                    <label htmlFor='dob'>Date of birth</label>&nbsp;&nbsp;
                    <input
                        id="dob"
                        type="text"
                        placeholder="DD/MM/YYYY"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className={dobErr ? ' showError' : ''}
                    />&nbsp;&nbsp;
                    {dobErr && <span style={{ color: "red", paddingBottom: 10 }}>{dobErr}</span>}
                    <br />
                    <label htmlFor='portfolio'>Portfolio</label>&nbsp;&nbsp;
                    <input
                        id="portfolio"
                        type="text"
                        placeholder="enter portfolio link"
                        value={portfolio}
                        onChange={(e) => setPortfollio(e.target.value)}
                        className={portfolioErr ? ' showError' : ''}
                    />&nbsp;&nbsp;
                    {portfolioErr && <span style={{ color: "red", paddingBottom: 10 }}>{portfolioErr}</span>}
                    <br />
                    <label>Gender</label>&nbsp;&nbsp;
                    <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    male
                    <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value)}
                        className={genderErr ? ' showError' : ''}
                    />
                    female
                    &nbsp;&nbsp;
                    {genderErr && <span style={{ color: "red", paddingBottom: 10 }}>{genderErr}</span>}
                    <br />
                    <label>Hobbies</label>&nbsp;&nbsp;
                    {
                        hobbies.map(item => (
                            <label key={item.key}>
                                <Checkbox name={item.name} checked={hobbieslist[item.name]} onChange={handlehobby} />
                                {item.name}
                            </label>
                        ))
                    }
                    <br />
                    <label>Skills</label>&nbsp;&nbsp;
                    {
                        skills.map(item => (
                            <label key={item.key}>
                                <Checkbox name={item.name} checked={skillslist[item.name]} onChange={handleSkills} />
                                {item.name}
                            </label>
                        ))
                    }
                    <br /><br />
                    <input type="submit" />
                    <br />
                </form>
            </div>
        </div>
    )
}

export default connect()(UserForm);
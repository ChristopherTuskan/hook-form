import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    const [confirmPWError, setConfirmPWError] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, confirmPW};
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPW("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters");
        }else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 5 characters")
        }else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters")
        }else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        }else {
            setPasswordError("");
        }
        
    }

    const handleConfirmPW = (e) => {
        setConfirmPW(e.target.value);
        if(e.target.value === password){
            setConfirmPWError("");
        }else {
            setConfirmPWError("Passwords must match")
        }
    }

    return(
        <div className='col-3 mx-auto'>
            <form onSubmit={createUser}>
                <InputGroup className="m-3">
                    <InputGroup.Text>First Name:</InputGroup.Text>
                    <Form.Control
                        value={firstName}
                        onChange={handleFirstName}
                    />
                </InputGroup>
                {
                    firstNameError ?
                    <p>{firstNameError}</p>:
                    ''
                }
                <InputGroup className="m-3">
                    <InputGroup.Text>Last Name:</InputGroup.Text>
                    <Form.Control
                        value={lastName}
                        onChange={handleLastName}
                    />
                </InputGroup>
                {
                    lastNameError ?
                    <p>{lastNameError}</p>:
                    ''
                }
                <InputGroup className="m-3">
                    <InputGroup.Text>Email:</InputGroup.Text>
                    <Form.Control
                        value={email}
                        onChange={handleEmail}
                    />
                </InputGroup>
                {
                    emailError ?
                    <p>{emailError}</p>:
                    ''
                }
                <InputGroup className="m-3">
                    <InputGroup.Text>Password:</InputGroup.Text>
                    <Form.Control
                        value={password}
                        onChange={handlePassword}
                    />
                </InputGroup>
                {
                    passwordError ?
                    <p>{passwordError}</p>:
                    ''
                }
                {
                    confirmPWError ?
                    <p>{confirmPWError}</p>:
                    ''
                }
                <InputGroup className="m-3">
                    <InputGroup.Text>Confirm Password:</InputGroup.Text>
                    <Form.Control
                        value={confirmPW}
                        onChange={handleConfirmPW}
                    />
                </InputGroup>
            </form>
            <div>
            </div>
        </div>
    );
};

export default HookForm;
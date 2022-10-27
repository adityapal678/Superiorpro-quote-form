import React, { useEffect, useState } from 'react';
import { Box, TextField } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
import './Form.css';

const PeronalInfoSubmission = (props) => {
    const [personalData, setPersonalData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [addressError, setAddressError] = useState(false);

    useEffect(() => {
        props.onPersonalData(personalData);
        disableBtn();
    }, [personalData]);
    
    const disableBtn = () => {
        const personalInfoNextBtnId = document.getElementById('personalInfoNextBtnId');
        const showTableTab = document.getElementById('showTableTab');
        showTableTab.classList.remove('Mui-disabled');
        if( personalData.name ==='' || personalData.email ==='' || personalData.phone ==='' || personalData.address ==='' ){
            personalInfoNextBtnId.classList.add('Mui-disabled');
            showTableTab.classList.add('Mui-disabled');
        }else if(nameError === true || emailError === true || phoneError === true || addressError===true){
            personalInfoNextBtnId.classList.add('Mui-disabled');
            showTableTab.classList.add('Mui-disabled');
        }else{
            personalInfoNextBtnId.classList.remove('Mui-disabled');
            showTableTab.classList.remove('Mui-disabled');
        }
    }

    const handleInput = e => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'name') {
            value.length < 3 ? setNameError(true) : setNameError(false);
        } else if (name === 'email') {
            const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            value.match(mailformat) ? setEmailError(false) : setEmailError(true);
        } else if (name === 'phone') {
            value.length >= 10 && !isNaN(value) ? setPhoneError(false) : setPhoneError(true);
        } else if (name === 'address') {
            value.length < 3 ? setAddressError(true) : setAddressError(false);
        }

        setPersonalData({
            ...personalData,
            [name]: value,
        })
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="emailForm">
                <br />
                <div style={{ position: 'relative' }}>
                    <TextField className="mt-2 fw" id="email" name="email" onChange={handleInput} value={personalData.email}
                        label="Where do we email quote?  Email Address: " variant="standard" />
                    {
                        personalData.email !== '' ? (
                            <div style={{ position: 'absolute', top: '0', right: '0' }}>
                                {emailError ? <IconButton color="primary" >
                                    <CancelIcon style={{ fontSize: '35px', color: 'red' }} />
                                </IconButton> : <IconButton color="primary">
                                    <CheckCircleIcon style={{ fontSize: '35px', color: 'green' }} />
                                </IconButton>}
                            </div>
                        ) : ''
                    }
                </div>
                <br />

                <div style={{ position: 'relative' }}>
                    <TextField id="name" name="name" className="mt-2 fw" onChange={handleInput} value={personalData.name}
                        label="Full Name" variant="standard" />
                    {
                        personalData.name !== '' ? (
                            <div style={{ position: 'absolute', top: '0', right: '0' }}>
                                {nameError ? <IconButton color="primary" >
                                    <CancelIcon style={{ fontSize: '35px', color: 'red' }} />
                                </IconButton> : <IconButton color="primary">
                                    <CheckCircleIcon style={{ fontSize: '35px', color: 'green' }} />
                                </IconButton>}
                            </div>
                        ) : ''
                    }
                </div>
                <br />

                <div style={{ position: 'relative' }}>
                    <TextField id="phone" type="number" name="phone" className="mt-2 fw" onChange={handleInput} value={personalData.phone}
                        label="Phone" variant="standard" />
                    {
                        personalData.phone !== '' ? (
                            <div style={{ position: 'absolute', top: '0', right: '0' }}>
                                {phoneError ? <IconButton color="primary" >
                                    <CancelIcon style={{ fontSize: '35px', color: 'red' }} />
                                </IconButton> : <IconButton color="primary">
                                    <CheckCircleIcon style={{ fontSize: '35px', color: 'green' }} />
                                </IconButton>}
                            </div>
                        ) : ''
                    }
                </div>
                <br />

                <div style={{ position: 'relative' }}>
                    <TextField id="address" name="address" className="mt-2 fw" onChange={handleInput} value={personalData.address}
                        label="Address" variant="standard" />
                    {
                        personalData.address !== '' ? (
                            <div style={{ position: 'absolute', top: '0', right: '0' }}>
                                {addressError ? <IconButton color="primary" >
                                    <CancelIcon style={{ fontSize: '35px', color: 'red' }} />
                                </IconButton> : <IconButton color="primary">
                                    <CheckCircleIcon style={{ fontSize: '35px', color: 'green' }} />
                                </IconButton>}
                            </div>
                        ) : ''
                    }
                </div>
            </div>

        </Box >
    )
}

export default PeronalInfoSubmission;
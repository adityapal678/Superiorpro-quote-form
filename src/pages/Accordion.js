import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Form from './Form';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import './Accordion.css';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({ onDataUpdated }) {
    const [expanded, setExpanded] = useState('panel1');

    var defaultValue = {
        foyer: { location: '', numWindow: '', width: '', height: '', images: [], gridGroup: "No", temperGroup: "No", obscureGroup: "No" },
        livingRoom: { location: '', numWindow: '', width: '', height: '', images: [], gridGroup: "No", temperGroup: "No", obscureGroup: "No" },
        dining: { location: '', numWindow: '', width: '', height: '', images: [], gridGroup: "No", temperGroup: "No", obscureGroup: "No" },
        kitchen: { location: '', numWindow: '', width: '', height: '', images: [], gridGroup: "No", temperGroup: "No", obscureGroup: "No" },
        bathRoom: { location: '', numWindow: '', width: '', height: '', images: [], gridGroup: "No", temperGroup: "No", obscureGroup: "No" },
        bedRoom: { location: '', numWindow: '', width: '', height: '', images: [], gridGroup: "No", temperGroup: "No", obscureGroup: "No" },
    }
    const [formData, setFormData] = useState(defaultValue);

    const [locationInputFields, setLocationInputFields] = useState([])
    const [handleInputValue, setHandleInputValue]=useState('');

    useEffect(() => {
        onDataUpdated(formData);
    }, [formData])

    const handleLocationInput = (event) => {
        setHandleInputValue(event.target.value);
    }
    const onLocationSubmit = () => {
        const currentLocationNumber = 7+locationInputFields.length;
        setLocationInputFields(
            [...locationInputFields, {newLocationName: handleInputValue, locationNumber:currentLocationNumber}],
        )
        setHandleInputValue('');
    }

    const onFormDataChange = (key, data) => {
        const updatedFormData = { ...formData };
        updatedFormData[key] = data;
        setFormData(updatedFormData);
    }

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div style={{ marginBottom: '50px' }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Foyer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Form onAccordion="foyer" onChange={(data) => onFormDataChange('foyer', data)} />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Living Room</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Form onAccordion="Living Room" onChange={(data) => onFormDataChange('livingRoom', data)} />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Dining</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Form onAccordion="Dining" onChange={(data) => onFormDataChange('dining', data)} />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Kitchen</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Form onAccordion="Kitchen" onChange={(data) => onFormDataChange('kitchen', data)} />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>Bathroom</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Form onAccordion="Bathroom" onChange={(data) => onFormDataChange('bathRoom', data)} />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>Bedroom</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Form onAccordion="Bedroom" onChange={(data) => onFormDataChange('bedRoom', data)} />
                    </Typography>
                </AccordionDetails>
            </Accordion>


            {
                locationInputFields.map((locationInput, index) => (
                    <>
                        <div key={index}>
                            <Accordion expanded={expanded === `panel${locationInput['locationNumber']}`} onChange={handleChange(`panel${locationInput['locationNumber']}`)}>
                                <AccordionSummary aria-controls={`panel${locationInput['locationNumber']}d-content`} id={`panel${locationInput['locationNumber']}d-header`}>
                                    <Typography>{locationInput['newLocationName']}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <Form onAccordion={locationInput['newLocationName']} onChange={(data) => 
                                            onFormDataChange(`${locationInput['newLocationName'].replace(/ /g,"_")}`, data)} />
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </>
                ))
            }
            <div className="mt-1" style={{position: 'relative'}}>
                <TextField id="locationName" style={{ 'width': '91.4%' }} name="locationName" value={handleInputValue}
                    onChange={handleLocationInput} className='locationName' label="Location Name" variant="filled"  />
                <Button
                    style={{ display: 'inline',height: '60px', borderRadius: '0', position: 'absolute' }}
                    type="button"
                    className='add-new-btn'
                    onClick={onLocationSubmit}
                    variant="contained"
                >
                    Add New
                </Button>
            </div>

            

        </div>
    );
}

import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './Tab.css';

const Tab = (props) => {

    const [showAccordion, setShowAccordion] = useState(true);
    const [showPersonal, setShowPersonal] = useState(false);
    const [showTable, setShowTable] = useState(false);


    useEffect(() => {
        props.onClickedTab({ showAccordion, showPersonal, showTable });
    }, [showAccordion, showPersonal, showTable]);

    const handleBtn1 = () => {
        setShowAccordion(true);
        setShowPersonal(false);
        setShowTable(false);
    }
    const handleBtn2 = () => {
        setShowAccordion(false);
        setShowPersonal(true);
        setShowTable(false);
    }
    const handleBtn3 = () => {
        setShowAccordion(false);
        setShowPersonal(false);
        setShowTable(true);
    }

    return (
        <ButtonGroup style={{ marginTop: '2em', width: '100%' }} variant="contained" aria-label="outlined primary button group">

            <Button disableElevation="true" disabled={showAccordion} id="showAccordionTab" onClick={handleBtn1} style={{ width: '33.4%' }}>
                Window Statement Quote Form</Button>
            
            <Button disabled={showPersonal} onClick={handleBtn2} id="showPersonalTab" style={{ width: '33.3%' }}>Personal Information</Button>
            
            <Button disabled={showTable} onClick={handleBtn3} id="showTableTab" style={{ width: '33.3%' }}>Data Preview</Button>

        </ButtonGroup>
    )
}

export default Tab;
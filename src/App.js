import React, { useState, useEffect } from 'react';

import Accordion from './pages/Accordion';
import Container from '@mui/material/Container';
import PersonalInfoSubmission from './pages/PersonalInfoSubmission';
import BasicTable from './pages/BasicTable';
import Tab from './pages/Tab';
import Button from '@mui/material/Button';
import WestSharpIcon from '@mui/icons-material/WestSharp';
import EastSharpIcon from '@mui/icons-material/EastSharp';

import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [personalData, setPersonalData] = useState(null);
  const [tabValue, setTabValue] = useState({
    showAccordion: true,
    showPersonal: false,
    showTable: false
  });

  useEffect(() => {
    hideSection();
  }, [tabValue]);


  const hideSection = () => {
    const accordionSection = document.getElementById('accordion-container');
    const personalSection = document.getElementById('personalData-container');
    const tableSection = document.getElementById('basicTable-container');
    // console.log(tabValue);
    if (tabValue.showAccordion === true) {
      accordionSection.style.display = 'block';
      personalSection.style.display = 'none';
      tableSection.style.display = 'none';
    }
    if (tabValue.showPersonal === true) {
      accordionSection.style.display = 'none';
      personalSection.style.display = 'block';
      tableSection.style.display = 'none';
    }
    if (tabValue.showTable === true) {
      accordionSection.style.display = 'none';
      personalSection.style.display = 'none';
      tableSection.style.display = 'block';
    }
  }

  const showAccordionTab = document.getElementById('showAccordionTab');
  const showPersonalTab = document.getElementById('showPersonalTab');
  const showTableTab = document.getElementById('showTableTab');
  const accordionNextBtn = () => {
    showAccordionTab.classList.remove("Mui-disabled");
    showPersonalTab.classList.add("Mui-disabled");
    showTableTab.classList.remove("Mui-disabled");
    setTabValue({ showAccordion: false, showPersonal: true, showTable: false })
  }
  const PersonalInfoBackBtn = () => {
    showAccordionTab.classList.add("Mui-disabled");
    showPersonalTab.classList.remove("Mui-disabled");
    showTableTab.classList.remove("Mui-disabled");
    setTabValue({ showAccordion: true, showPersonal: false, showTable: false })
  }
  const PersonalInfoNextBtn = () => {
    showAccordionTab.classList.remove("Mui-disabled");
    showPersonalTab.classList.remove("Mui-disabled");
    showTableTab.classList.add("Mui-disabled");
    setTabValue({ showAccordion: false, showPersonal: false, showTable: true })
  }
  const basicTableBackBtn = () => {
    showAccordionTab.classList.remove("Mui-disabled");
    showPersonalTab.classList.add("Mui-disabled");
    showTableTab.classList.remove("Mui-disabled");
    setTabValue({ showAccordion: false, showPersonal: true, showTable: false })
  }

  const handleUpdatedData = (collectionData) => setData(collectionData); // getting all data from according and form data
  const handlePersonalData = (personalData) => setPersonalData(personalData); // getting all personal data
  const handleTabValue = (value) => setTabValue(value); // getting tab value when changing the tab

  return (
    <React.Fragment>
      <Container maxWidth="lg">

        <Tab onClickedTab={handleTabValue} />

        <div><h2>Replacement Windows Quote Form</h2></div>
        <div id="accordion-container" >
          {/* Accordion Section */}
          <Accordion onDataUpdated={handleUpdatedData} />
          <div className="mt-1" style={{ position: 'relative', marginBottom: '200px' }}>
            <Button
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap', right: '0', position: 'absolute'
              }}
              type="button"
              onClick={accordionNextBtn}
              variant="contained"
            >
              Next<EastSharpIcon style={{ marginLeft: '10px' }} />
            </Button>
          </div>
        </div>

        {/* Personal Info section*/}
        <div id="personalData-container">
          <div className='personal-section'>Personal Information</div>
          <PersonalInfoSubmission onPersonalData={handlePersonalData} />
          <div className="mt-1" style={{ position: 'relative' }}>
            <Button
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap', right: '0', position: 'absolute'
              }}
              onClick={PersonalInfoNextBtn}
              id="personalInfoNextBtnId"
              type="button"
              variant="contained"
            >
              Next<EastSharpIcon style={{ marginLeft: '10px' }} />
            </Button>
          </div>

          <div className="mt-1" style={{ position: 'relative', marginBottom: '100px' }}>
            <Button
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap', left: '0', position: 'absolute'
              }}
              type="button"
              onClick={PersonalInfoBackBtn}
              variant="contained"
            >
              <WestSharpIcon style={{ marginRight: '10px' }} />Back
            </Button>
          </div>
        </div>

        {/* Basic Table section */}
        <div id="basicTable-container">
          <BasicTable collection={data} personal={personalData} />
          <div className="mt-1" style={{ position: 'relative', marginBottom: '100px' }}>
            <Button
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap', left: '0', position: 'absolute'
              }}
              onClick={basicTableBackBtn}
              type="button"
              variant="contained"
            >
              <WestSharpIcon style={{ marginRight: '10px' }} />Back
            </Button>
          </div>
        </div>


      </Container>
    </React.Fragment >
  );
}

export default App;

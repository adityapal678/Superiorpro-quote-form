import React, { useEffect, useRef, useState } from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const BasicTable = ({ collection, personal }) => {

  useEffect(() => {
    console.log(collection);
  }, [collection, personal])
  const tableRef = useRef(null);

  const createData = (location, windowStyle, numWindow, width, height, quantity, interior, exterior, images, grid, gridGroup, temperGroup, obscureGroup) => {
    return { location, windowStyle, numWindow, width, height, quantity, interior, exterior, images, grid, gridGroup, temperGroup, obscureGroup };
  }
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(false);

  const config = {
    onUploadProgress: progressEvent => console.log(progressEvent.loaded)
  }

  let collectionKeyArr = [];
  if (collection) {
    collectionKeyArr = Object.keys(collection);
  } else {
    console.log('Object is not defined');
  }

  var rows = [];
  for (let i = 0; i < collectionKeyArr.length; i++) {
    // console.log(collection[collectionKeyArr[i]].location);
    // if (collection[collectionKeyArr[i]]) {
    if (collection[collectionKeyArr[i]] && collection[collectionKeyArr[i]].windowStyle) {
      var createdData = createData(
        collectionKeyArr[i],
        collection[collectionKeyArr[i]].windowStyle,
        collection[collectionKeyArr[i]].numWindow,
        collection[collectionKeyArr[i]].width,
        collection[collectionKeyArr[i]].height,
        collection[collectionKeyArr[i]].quantity,
        collection[collectionKeyArr[i]].interior,
        collection[collectionKeyArr[i]].exterior,
        collection[collectionKeyArr[i]].images,
        collection[collectionKeyArr[i]].grid,
        collection[collectionKeyArr[i]].gridGroup,
        collection[collectionKeyArr[i]].temperGroup,
        collection[collectionKeyArr[i]].obscureGroup
      )
      rows.push(createdData);
    }
  }


  // Create xls file and download
  const handleDownloadXls = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const d = new Date();
    const tbData = document.getElementById('tableData'); // table id
    var workbook = XLSX.utils.table_to_book(tbData);
    var wbout = XLSX.write(workbook, { type: "array", bookType: 'xlsx' });
    const myFile = new File([wbout], "configurator_" + d.getTime() + '.xlsx', {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      lastModified: new Date(),
    });
    console.log(myFile);
    uploadNdSaveData(myFile);
  } // end handleDownloadXls

  // Upload and Save data in backend.
  const uploadNdSaveData = (passedFile) => {
    const baseUrl = "https://www.superiorpro.com/"
    // const baseUrl = "https://www.superiorpronew.itliquid.com"
    // Server file which will execute when post request will send
    const pdEndpoint = `${baseUrl}/wp-json/configurator/v1/quote`;
    const fsEndpoint = `${baseUrl}/wp-content/themes/astra/upload.php`;
    const formData = new FormData();
    formData.append('inpFile', passedFile)
    axios({
      method: "post",
      url: fsEndpoint,
      data: formData,
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    axios.post(pdEndpoint, {
      email: personal && personal.email,
      name: personal && personal.name,
      phone: personal && personal.phone,
      address: personal && personal.address,
      fileUrl: `${baseUrl}/wp-content/themes/astra/configurator_files/${passedFile.name}`
    }, config)
      .then(function (response) {
        console.log(response);
        setTimeout(() => {
          setIsLoading(false)
          setSubmitMessage(true);
        }, 1000);

        setTimeout(() => {
          setSubmitMessage(false);
        }, 10000)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <>
      <TableContainer component={Paper} id="tableContainer" style={{ marginBottom: '30px' }}>
        <Table aria-label="simple table" ref={tableRef} id="tableData">
          <TableHead style={{ background: '#1565C0' }}>
          </TableHead>
          <TableBody>
            <TableRow style={{ background: '#1565C0' }}>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="left">Location</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Window Style</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">No. of Windows</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Width</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Height</TableCell>
              {/* <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Qty.</TableCell> */}
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Interior</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Exterior</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Images</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Grid</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Temper</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="right">Obscure</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ display: 'none' }} colSpan={11} >&nbsp;</TableCell>
            </TableRow>
            {rows.map((row, i) => (
              <TableRow
                key={row.location}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
                  {
                    (row.location !== 'foyer' && row.location !== 'livingRoom' && row.location !== 'dining' &&
                      row.location !== 'kitchen' && row.location !== 'bathRoom' && row.location !== 'bedRoom') ? row.location :
                      row.location === 'foyer' ? 'Foyer' : '' ||
                        row.location === 'livingRoom' ? 'Living Room' : '' ||
                          row.location === 'dining' ? 'Dining' : '' ||
                            row.location === 'kitchen' ? 'Kitchen' : '' ||
                              row.location === 'bathRoom' ? 'Bath Room' : '' ||
                                row.location === 'bedRoom' ? 'Bed Room' : ''
                  }
                </TableCell>
                <TableCell align="right">{row.windowStyle}</TableCell>
                <TableCell align="right">{row.numWindow}</TableCell>
                <TableCell align="right">{row.width}</TableCell>
                <TableCell align="right">{row.height}</TableCell>
                {/* <TableCell align="right">{row.quantity}</TableCell> */}
                <TableCell align="right">{row.interior}</TableCell>
                <TableCell align="right">{row.exterior}</TableCell>
                <TableCell align="right">{
                  row.images.map((url, i) => (
                    <span>
                      <a href={`${url}`} target="_blank">{`${url}`}</a><br />
                    </span>
                  ))
                }</TableCell>
                {console.log(collection, collectionKeyArr[i], collection[collectionKeyArr[i]].gridGroup)}
                {/* <TableCell align="right">{collection && collection[collectionKeyArr[i]].gridGroup === 'Yes' ? row.grid : 'No'}</TableCell> */}
                <TableCell align="right">{row.gridGroup === 'Yes' ? row.grid : 'No'}</TableCell>
                <TableCell align="right">{row.temperGroup}</TableCell>
                <TableCell align="right">{row.obscureGroup}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell style={{ display: 'none' }} colSpan={11} >&nbsp;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ display: 'none' }} colSpan={11} >&nbsp;</TableCell>
            </TableRow>
            <TableRow style={{ background: '#1565C0' }}>
              <TableCell colSpan={11} align="left" style={{ fontWeight: 'bold', color: 'white', fontWeight: 'bold' }}><strong>Personal Details</strong></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ display: 'none' }} colSpan={11} >&nbsp;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="left" style={{ fontWeight: 'bold' }}>Customer Email :  </TableCell>
              <TableCell colSpan={9} align="left" style={{ fontWeight: 'bold' }}>{personal && personal.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="left" style={{ fontWeight: 'bold' }}>Customer Name : </TableCell>
              <TableCell colSpan={9} align="left" style={{ fontWeight: 'bold' }}>{personal && personal.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="left" style={{ fontWeight: 'bold' }}>Customer Phone :</TableCell>
              <TableCell colSpan={2} align="left" style={{ fontWeight: 'bold' }}>{personal && personal.phone}</TableCell>
              <TableCell colSpan={5} align="left" style={{ fontWeight: 'bold' }}>&nbsp;</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="left" style={{ fontWeight: 'bold' }}>Customer Address : </TableCell>
              <TableCell colSpan={9} align="left" style={{ fontWeight: 'bold' }}>{personal && personal.address}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mt-1" style={{ position: 'relative', width: '100%' }}>
        <Button style={{ position: 'absolute', right: '0' }} className="submit-configurator" variant="contained" type="Submit"
          onClick={handleDownloadXls}> {isLoading ? <CircularProgress style={{ marginRight: '10px', color: 'white' }} /> : ''}
          SUBMIT
        </Button>
      </div>

      {submitMessage ? <h4 style={{color: 'green'}}>'Thank you for your request! A SuperiorPRO representative will contact you in 1-2 business days.'</h4> : ''}
    </>
  );
}

export default BasicTable;
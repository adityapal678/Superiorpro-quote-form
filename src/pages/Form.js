import React, { useState, useEffect } from 'react';
import {
    Box, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio, ImageListItem, ImageList,
    TextField
} from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BackupIcon from '@mui/icons-material/Backup';
import { window, grid, interiror, exterior } from './ImgData';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import './Form.css';
import axios from 'axios';

const Form = ({ onAccordion, onChange }) => {

    const [formData, setFormData] = useState({
        numWindow: '',
        width: '',
        height: '',
        quantity: '',
        images: [],
        gridGroup: "No",
        temperGroup: "No",
        obscureGroup: "No",
    });
    const [selectedFile, setSelectedFile] = useState("");
    const [responseArray, setResponseArray] = useState([]);
    const [errImgLengthMsg, setErrImgLengthMsg] = useState("");
    const [loadImg, setLoadImg] = useState(false);
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        onChange(formData);
    }, [formData]);

    const handleWindowStyle = (e) => {
        const updatedFormData = { ...formData };
        updatedFormData.windowStyle = e.target.name;
        setFormData(updatedFormData);
    }
    const handleInterior = (e) => {
        const updatedFormData = { ...formData };
        updatedFormData.interior = e.target.name;
        setFormData(updatedFormData);
    }
    const handleExterior = (e) => {
        const updatedFormData = { ...formData };
        updatedFormData.exterior = e.target.name;
        setFormData(updatedFormData);
    }
    const handleGrid = (e) => {
        const updatedFormData = { ...formData };
        updatedFormData.grid = e.target.name;
        setFormData(updatedFormData);
    }

    const handleImgUploads = (e) => {
        setErrImgLengthMsg('');
        setResponseArray([]);
        if (e.target.files.length <= 5) {
            setSelectedFile(e.target.files);
        } else {
            setErrImgLengthMsg('File Length Exceeded! Please choose 5 or less images allowed to upload');
            return;
        }
    }

    function LinearProgressWithLabel(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        );
    }

    LinearProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate and buffer variants.
         * Value between 0 and 100.
         */
        value: PropTypes.number.isRequired,
    };


    const onImgSubmit = (e) => {
        setLoadImg(true);
        if (!selectedFile) {
            setLoadImg(false);
            console.log("Please select a file!");
            return false;
        }
        const baseUrl = "https://www.superiorpro.com/";
        const url = `https://www.superiorpro.com/wp-content/themes/astra/image_upload.php`;
        const data = new FormData();
        const bar = document.getElementById('bar');

        for (let i = 0; i < selectedFile.length; i++) {
            console.log(selectedFile[i]);
            if (selectedFile[i].size > 4993179) {
                setErrImgLengthMsg('File size limit 5MB allowed!');
                setLoadImg(false);
                return;
            }
            data.append("file[]", selectedFile[i]);
        }

        const config = {
            onUploadProgress: function (progressEvent) {
                const percentCompleted = (progressEvent.loaded / progressEvent.total) * 100;
                setProgress(percentCompleted);
                if (percentCompleted === 100) {
                    console.log('upload Completed');
                }
            }
        }


        axios.post(url, data, config)
            .then((res) => {
                // then print response status
                setResponseArray(res.data);
                const imgArray = [];
                console.log(res.data)
                res.data.map((res, i) => {
                    imgArray.push(res.url);
                    setFormData({
                        ...formData,
                        images: imgArray
                    })
                })
                resetFile();
            }, error => {
                setLoadImg(false);
                alert(error);
            });
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const resetFile = () => {
        setLoadImg(false);
        document.getElementsByName("file")[0].value = null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const getWindowClassName = (itemName) => {
        if (formData.windowStyle === itemName || formData.interior === itemName || formData.exterior === itemName || formData.grid === itemName) {
            return 'selected';
        } else {
            return null;
        }
    }

    return (
        <>
            <Box component="form" encType='multipart/form-data' onSubmit={handleSubmit} display="flex" flexDirection={"column"}>
                <div className="mt-1">
                    <TextField id="location" disabled name="location" value={onAccordion}
                        className='fw' label="Room Name/Location" variant="standard" />
                </div>

                <div className="mt-1">
                    <h3>Would like to able to click on style</h3>
                    <ImageList className='windowStyleContainer' sx={{ width: 500, height: 300 }} cols={4}>
                        {window.map((item, index) => (
                            <ImageListItem key={item.img}>
                                <img onClick={handleWindowStyle}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    name={item.title}
                                    alt={item.title}
                                    loading="lazy"
                                    className={getWindowClassName(item.title)}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>

                <div className="mt-1">
                    <TextField id="numWindow" type="number" style={{ 'width': '100%' }} name="numWindow" onChange={handleInput} value={formData.numWindow} className='fw' label="Number of windows" variant="standard" />&nbsp;
                </div>

                <div className="mt-1">
                    <h3 style={{ 'marginBottom': 0, 'paddingBottom': 0 }}>Dimensions</h3>
                    <TextField id="width" type="number" className='dimensions-width' style={{ 'width': '49.5%' }} name="width" onChange={handleInput} label="Width (Inches Only)" value={formData.width} variant="standard" />&nbsp;
                    <TextField id="height" type="number" className='dimensions-height' style={{ 'width': '49.5%' }} name="height" onChange={handleInput} value={formData.height} label="Height (Inches Only)" variant="standard" />
                </div>

                <div className="mt-1">
                    <h3>Interior Colors</h3>

                    <ImageList className='interiorContainer' sx={{ width: 500, height: 250 }} cols={4}>
                        {interiror.map((item, index) => (
                            <ImageListItem key={item.img}>
                                <img onClick={handleInterior}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    name={`interior_${item.title}`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    className={getWindowClassName(`interior_${item.title}`)}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>

                <div className="mt-1">
                    <h3>Exterior Colors</h3>

                    <ImageList className='exteriorContainer' sx={{ width: 500, height: 250 }} cols={4}>
                        {exterior.map((item, index) => (
                            <ImageListItem key={item.img}>
                                <img onClick={handleExterior}
                                    src={`${item.img}?w=164&h=164fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164fit=crop&auto=format&dpr=2 2x`}
                                    name={item.title}
                                    alt={item.title}
                                    loading="lazy"
                                    className={getWindowClassName(item.title)}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>

                <div className="mt-1">
                    <FormControl>
                        <FormLabel id="grid-group-label">Grids Y/N</FormLabel>
                        <RadioGroup row aria-labelledby="grid-group-label" onChange={handleInput} defaultValue="1" defaultChecked name="gridGroup">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                {
                    formData.gridGroup === 'Yes' ?
                        <ImageList className='gridContainer' sx={{ width: 500, height: 500 }} cols={4}>
                            {grid.map((item, index) => (
                                <ImageListItem key={item.img}>
                                    <img onClick={handleGrid}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        name={item.title}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                        className={getWindowClassName(item.title)}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList> : null
                }

                <div className="mt-1">
                    <FormControl>
                        <FormLabel id="temper-group-label">Temper Glass Y/N</FormLabel>
                        <RadioGroup row aria-labelledby="temper-group-label" onChange={handleInput} defaultValue="1" defaultChecked name="temperGroup">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className="mt-1">
                    <FormControl>
                        <FormLabel id="obscure-group-label">Obscure Glass Y/N</FormLabel>
                        <RadioGroup row aria-labelledby="obscure-group-label" onChange={handleInput} defaultValue="1" defaultChecked name="obscureGroup">
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>


                <h3>Upload {onAccordion} Images</h3>
                <div className='mt-1 file-uploads img-uploads' style={{ position: 'relative', borderRadius: '0' }}>
                    <Button variant="contained" component="label">
                        <input
                            style={{ padding: '9px 0px', borderRadius: '0' }}
                            type="file"
                            id="images"
                            name="images"
                            onChange={handleImgUploads}
                            accept="image/*"
                            multiple
                        />
                    </Button>

                    <Button
                        style={{ padding: '4px 13px 7px 0', position: 'absolute', borderRadius: '0', borderLeft: '1px solid' }}
                        type="button"
                        className="btn btn-success upload-btn"
                        onClick={onImgSubmit}
                        variant="contained">
                        <IconButton style={{ color: 'skyblue' }} aria-label="delete">
                            <BackupIcon />
                        </IconButton>
                        Upload
                    </Button>

                    <br />
                    {loadImg ?
                        <Box sx={{ width: '100%', marginTop: '10px' }}>
                            <LinearProgressWithLabel value={progress}
                                style={{ marginTop: '10px', height: '20px', borderRadius: '10px' }} />
                        </Box>
                        : ''}
                    <br />

                    <div style={{ color: 'red', paddingTop: '10px', paddingLeft: '0' }}>{errImgLengthMsg}</div>
                    {responseArray.map((res, i) => (
                        <div className='responseImg' key={i}>
                            <span className={'img-alert alert alert-' + res.status}>
                                <img width="80px" height="80px" src={res.base64} />
                            </span>
                        </div>
                    ))}
                </div>
            </Box>
        </>
    );
}

export default Form;

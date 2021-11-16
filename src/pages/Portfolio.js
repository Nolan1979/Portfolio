import tech_small from '../Images/tech_small.png';
import stumble_small from '../Images/stumble_small.png';
import catz_small from '../Images/catz_small.png';
import NoteImg from '../Images/Note-Taker.jpeg';
import WeatherImg from '../Images/Weather-Dash.png';
import CodingQuizImg from '../Images/CodingQuiz.png';
import PasswordImg from '../Images/password.jpg';
import cosmic_screenshot from '../Images/cosmic_screenshot.png';

import { motion } from 'framer-motion'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Portfolio() {
    return (
        <motion.div 
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '30px', color: 'rgb(174, 203, 230)', marginLeft: '20px', height: '590px'}}>
                        <a href="https://github.com/Nolan1979/Cosmic-Records-Online-Store" rel="noreferrer" target="_blank">Cosmic Records Repository</a>
                        <a href="https://cosmic-records.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={cosmic_screenshot}  alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '30px', color: 'rgb(174, 203, 230)' }}>
                    <a href="https://github.com/Nolan1979/Tech-Blog" rel="noreferrer" target="_blank">Tech Blog Repository</a>
                        <a href="https://frozen-sierra-86577.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={tech_small}  alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '30px', color: 'rgb(174, 203, 230)', marginRight: '20px' }}>
                        <a href="https://github.com/Nolan1979/Stumble-Brewery-Locator" rel="noreferrer" target="_blank">Stumble Repository</a>
                        <a href="https://nolan1979.github.io/Stumble-Brewery-Locator/" rel="noreferrer" target="_blank">
                            <img src={stumble_small}  alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '30px', color: 'rgb(174, 203, 230)', marginLeft: '20px' }}>
                        <a href="https://github.com/Nolan1979/Catz-n-Dogz-Project" rel="noreferrer" target="_blank">Catz-n-Dogz Repository</a>
                        <a href="https://catz-n-dogz1.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={catz_small}  alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '20px', color: 'rgb(174, 203, 230)', height: '600px' }}>
                        <a href="https://github.com/Nolan1979/Note-Taker" rel="noreferrer" target="_blank">Note Taker Repository</a>
                        <a href="https://whispering-eyrie-07301.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={NoteImg}  alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '20px', color: 'rgb(174, 203, 230)', marginRight: '20px', height: '600px' }}>
                        <a href="https://github.com/Nolan1979/Weather-Dashboard" rel="noreferrer" target="_blank">Weather Dashboard Repository</a>
                        <a href="https://nolan1979.github.io/Weather-Dashboard/" rel="noreferrer" target="_blank">
                            <img src={WeatherImg}  alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '20px', color: 'rgb(174, 203, 230)', marginLeft: '20px' }}>
                        <a href="https://github.com/Nolan1979/Coding-Quiz-Challenge" rel="noreferrer" target="_blank">Coding Quiz Repository</a>
                        <a href="https://nolan1979.github.io/Coding-Quiz-Challenge/" rel="noreferrer" target="_blank">
                            <img src={CodingQuizImg}  alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '20px', color: 'rgb(174, 203, 230)' }}>
                        <a href="https://github.com/Nolan1979/Password-Generator" rel="noreferrer" target="_blank">Password Generator Repository</a>
                        <a href="https://nolan1979.github.io/Password-Generator/" rel="noreferrer" target="_blank">
                            <img src={PasswordImg}  alt="" /></a>
                    </Item>
                </Grid>
            </Grid>
        </Box>
        </motion.div>
        
    );
}

//export default Portfolio

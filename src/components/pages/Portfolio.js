import TechImg from '../../Images/Tech-Blog.png';
import StumbleImg from '../../Images/stumble1.jpg'
import CatzDogz from '../../Images/Catz-n-Dogz.png'
import NoteImg from '../../Images/Note-Taker.jpeg'
import WeatherImg from '../../Images/Weather-Dash.png'
import CodingQuizImg from '../../Images/CodingQuiz.png'
import PasswordImg from '../../Images/password.jpg'


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
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6}>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '30px' }}>
                        <a href="https://github.com/Nolan1979/Tech-Blog" rel="noreferrer" target="_blank">Tech Blog Repository</a>
                        <a href="https://frozen-sierra-86577.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={TechImg} style={{ width: '90%' }} alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '30px' }}>
                        <a href="https://github.com/Nolan1979/Stumble-Brewery-Locator" rel="noreferrer" target="_blank">Stumble Repository</a>
                        <a href="https://nolan1979.github.io/Stumble-Brewery-Locator/" rel="noreferrer" target="_blank">
                            <img src={StumbleImg} style={{ width: '70%' }} alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '30px' }}>
                        <a href="https://github.com/Nolan1979/Catz-n-Dogz-Project" rel="noreferrer" target="_blank">Catz-n-Dogz Repository</a>
                        <a href="https://catz-n-dogz1.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={CatzDogz} style={{ width: '69%' }} alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '20px' }}>
                        <a href="https://github.com/Nolan1979/Note-Taker" rel="noreferrer" target="_blank">Note Taker Repository</a>
                        <a href="https://whispering-eyrie-07301.herokuapp.com/" rel="noreferrer" target="_blank">
                            <img src={NoteImg} style={{ width: '90%' }} alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '20px' }}>
                        <a href="https://github.com/Nolan1979/Weather-Dashboard" rel="noreferrer" target="_blank">Weather Dashboard Repository</a>
                        <a href="https://nolan1979.github.io/Weather-Dashboard/" rel="noreferrer" target="_blank">
                            <img src={WeatherImg} style={{ width: '92%' }} alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '20px' }}>
                        <a href="https://github.com/Nolan1979/Coding-Quiz-Challenge" rel="noreferrer" target="_blank">Coding Quiz Repository</a>
                        <a href="https://nolan1979.github.io/Coding-Quiz-Challenge/" rel="noreferrer" target="_blank">
                            <img src={CodingQuizImg} style={{ width: '94%' }} alt="" /></a>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item style={{ backgroundColor: '#0e1820d5', marginTop: '20px' }}>
                        <a href="https://github.com/Nolan1979/Password-Generator" rel="noreferrer" target="_blank">Password Generator Repository</a>
                        <a href="https://nolan1979.github.io/Password-Generator/" rel="noreferrer" target="_blank">
                            <img src={PasswordImg} style={{ width: '80%' }} alt="" /></a>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}

//export default Portfolio

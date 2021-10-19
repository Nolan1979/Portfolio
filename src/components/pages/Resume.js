import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Resume() {
    return (
        <div>
            <Item style={{ backgroundColor: '#0e1820d5', marginLeft: '150px', marginTop: '250px', borderRadius: '50px', width: '300px' }}>
            <a href="./Assets/Resume-Josh-Nolan.pdf" rel="noreferrer" target="_blank">Click Here
            </a>
            </Item>
            
        </div>
    )
};

export default Resume
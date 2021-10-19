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
            <Item style={{ backgroundColor: '#0e1820d5', marginTop: '150px', borderRadius: '50px' }}>
            <a href="./Assets/Resume-Josh-Nolan.pdf" rel="noreferrer" target="_blank">Click Here
            </a>
            </Item>
            
        </div>
    )
};

export default Resume
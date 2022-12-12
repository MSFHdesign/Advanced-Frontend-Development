import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '25%',
  right: '10%',
  height: '30%',
  width: '80%',
  bgcolor: 'white',
  border: 'var(--border)',
  borderRadius: '30px',
  boxShadow: 10,
//   p: 4,
};

const BtnStyle = {
    // width: '250px',
    borderRadius: '30px',
  }


const liStyled ={
    FontFace: 'var(--pFont)',
    fontWeight: 'var(--pFontWeight)',
    '&:hover': {
        backgroundColor: 'var(--BGColor)',
        color: 'white',
    },
    borderRadius: '30px',
    p: '10px',
}

export default function AddedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button sx={BtnStyle} className='UserBtns btn' onClick={handleOpen}>
        <svg width="30" height="30" viewBox="0 0 392 392" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M196,0C87.75,0,0,87.75,0,196s87.75,196,196,196,196-87.75,196-196S304.25,0,196,0Zm119.25,83.23c-97.96,95.74-144.92,239.42-145.39,240.86-1.93,6-7.41,10.16-13.7,10.4-.19,0-.39,.01-.58,.01-6.07,0-11.57-3.67-13.88-9.32L73.35,158.04c-3.13-7.67,.54-16.43,8.21-19.56,7.67-3.13,16.43,.54,19.56,8.21l53.87,131.75c5.88-14.3,13.69-32.03,23.53-51.77,22.92-46.01,61.61-111.97,115.76-164.9,5.92-5.79,15.42-5.68,21.21,.24s5.68,15.42-.24,21.21Z" fill="#8b9769"/>
        </svg>
        Færdig
        </Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center', display: 'flex', alignItems: 'center', objectFit: 'fill',}}> 
                    <Box sx={{p:'0.2rem'}}/>
                </Typography>
                <Typography id="modal-modal-description" sx={liStyled}>
                    <Link to="/historie1">Vis historie</Link> 
                    {/* Fix dette link, når vi har oprettet en side til historien/funktion til at skabe en side */}
                </Typography>
                    <Typography id="modal-modal-description" sx={liStyled}>
                    <Link to ="/home">Til forsiden</Link> 
                </Typography>

            </Box>
        </Modal>
    </div>
  );
}

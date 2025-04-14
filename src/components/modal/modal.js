import { Box, Button, Typography, Modal, TextField } from '@mui/material'
import { useState } from 'react';

const ModalMeasureType = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
        <Button onClick={handleOpen} variant="contained" size='small'>Добавить тип измерения</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            Полное название:*<TextField  id="outlined-basic" label="Полное название" variant="outlined" size='small' />
            Короткое название:*<TextField  id="outlined-basic" label="Короткое название:*" variant="outlined" size='small' />
            Код:<TextField  id="outlined-basic" label="Код:" variant="outlined" size='small' />
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                <Button>Добавить</Button>
            </Box>
        </Box>
        </Modal>
    </>
  )
}

export default ModalMeasureType

import React, { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const SnackBar = (props) => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  useEffect(() => {
    setSnackBarOpen(props.open);
  }, [props])

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
    props.handleSnackBarClose()
  }
  
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={snackBarOpen}
      key={'bottom' + 'left'}>
      <Alert onClose={handleSnackBarClose} severity={props.severity} sx={{ width: '100%' }}>
        {props.errorMessage}
      </Alert>
    </Snackbar>
  )
}

import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;


  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function MyDailog(props) {
  const [user, setUser] = React.useState({ ...props.data });

  React.useEffect(() => {
    setUser(props.data);
  }, [props.data])

  console.log(props);
  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        onClose={props.handleClose}
        open={props.open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          User Information
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-name"
              label="ID"
              value={props.data.id}
            />
            <TextField
              id="outlined-name"
              label="NAME"
              value={props.data.name}
            />
            <TextField
              id="outlined-name"
              label="USER-NAME"
              value={props.data.username}
            />
            {user.address && <TextField
              id="outlined-name"
              label="STREET"
              value={user.address.street}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="SUITE"
              value={user.address.suite}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="CITY"
              value={user.address.city}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="ZIPCODE"
              value={user.address.zipcode}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="LAT"
              value={user.address.geo.lat}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="LNG"
              value={user.address.geo.lng}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="PHONE"
              value={props.data.phone}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="WEBSITE"
              value={props.data.website}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="NAME"
              value={props.data.name}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="CATCHPHRASE"
              value={props.data.company.catchPhrase}
            />}
            {user.address && <TextField
              id="outlined-name"
              label="BS"
              value={props.data.company.bs}
            />}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose}>
            save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

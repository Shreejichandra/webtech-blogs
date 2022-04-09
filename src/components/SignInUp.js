import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function SignIn({handleClose}) {
    return (
        <div>
            <DialogContent>
                <DialogContentText>
                    Enter Username and Password
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose}>SignIn</Button>
            </DialogActions>
        </div>
    );
}

function SignUp({handleClose}) {
    return (
        <div>
            <DialogContent>
                <DialogContentText>
                    Enter your details
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />
                <label>Avatar: </label>
                <input type="file" id="avatar" name="avatar" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleClose}>SignIn</Button>
            </DialogActions>
        </div>
    );
}

function TabPanel({children, value, index}) {
    return (
        <div>
            {
                value === index  &&
                children
            }
        </div>
    )
}

function SignInUp({showSignIn, setShowSignIn}) {
    const [value, setValue] = useState(0);

    const handleClose = () => {
        setShowSignIn(false);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Dialog open={showSignIn} onClose={handleClose}>
                <DialogTitle>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Sign In" id="1" />
                        <Tab label="Sign Up" id="2" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <SignIn handleClose={handleClose} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SignUp handleClose={handleClose} />
                    </TabPanel>
                </DialogTitle>
            </Dialog>
        </div>
    )
}

export default SignInUp
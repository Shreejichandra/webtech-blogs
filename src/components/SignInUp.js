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

function SignIn({handleClose, setIsLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        const payload = {
            email,
            password
        }

        fetch("http://localhost:8000/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user_id", data.user._id);
            setIsLoggedIn(true);
            handleClose();
        });
    }

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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={signIn}>SignIn</Button>
            </DialogActions>
        </div>
    );
}

function SignUp({handleClose, setIsLoggedIn}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const signUp = () => {
        // Normal User Data
        const payload = {
            name,
            email,
            password
        }

        fetch("http://localhost:8000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }).then(res => {
            return res.json();
        }).then(data => {
            // console.log(data);
            localStorage.setItem("token", data.token);

            // Avatar Upload
            if (selectedFile) {
                const formData = new FormData();
                formData.append("avatar", selectedFile);

                let headers = new Headers();
                headers.append("Authorization", "Bearer " + data.token);

                fetch("http://localhost:8000/users/me/avatar", {
                    method: "POST",
                    headers,
                    body: formData
                }).then(res => {
                    console.log(res.status)
                    setIsLoggedIn(true);
                    handleClose();
                });
            }
        });
    }

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0]);
    }

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
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label>Avatar: </label>
                <input type="file" id="avatar" name="avatar" onChange={handleFileSelect} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={signUp}>SignUp</Button>
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

function SignInUp({showSignIn, setShowSignIn, setIsLoggedIn}) {
    const [tabValue, setTabValue] = useState(0);

    const handleClose = () => {
        setShowSignIn(false);
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <Dialog open={showSignIn} onClose={handleClose}>
                <DialogTitle>
                    <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
                        <Tab label="Sign In" id="1" />
                        <Tab label="Sign Up" id="2" />
                    </Tabs>
                    <TabPanel value={tabValue} index={0}>
                        <SignIn handleClose={handleClose} setIsLoggedIn={setIsLoggedIn} />
                    </TabPanel>
                    <TabPanel value={tabValue} index={1}>
                        <SignUp handleClose={handleClose} setIsLoggedIn={setIsLoggedIn} />
                    </TabPanel>
                </DialogTitle>
            </Dialog>
        </div>
    )
}

export default SignInUp
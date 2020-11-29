import logo from './logo.svg';
import './App.css';
import React from 'react';
import { TextField, makeStyles, Button, CircularProgress, Card, CardContent } from '@material-ui/core';
import { HomeHeader } from './components/Header';

const useStyles = makeStyles((theme) => ({
    title: {
        ...theme.typography.subtitle1,
        fontSize: '24pt',
    },
    jsonArea: {
        overflow: 'scroll',
        padding: '10px',
        resize: 'none',
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        disabled: 'true',
        height: '500px',
        outline: 'none',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        height: '500px',
    },
    query: {
        display: 'block',
        font: 'inherit',
        fontSize: '1rem',
    },
    queryCont: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        width: 'fit-content',
        margin: 'auto',
        padding: '10px',
    },
    body: {
        width: '90%',
        margin: '32px auto',
    },
    root: {
        minWidth: 275,
        minHeight: 275,
        width: '100%',
        maxHeight: 500,
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },
    jsonCont: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 275,
        height: 'fit-content',
        maxHeight: 500,
    },
    profile: {
        display: 'flex',
        minHeight: 270,
        width: '100%',
        height: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function App() {
    const classes = useStyles();

    const [response, setResponse] = React.useState(false);
    const [waiting, setWaiting] = React.useState(false);
    const [init, setInit] = React.useState(true);

    const sendQuery = () => {
        let query = document.getElementById('queryText').value;
        if (query.length === 0) {
            return;
        }
        let sampleReq = new XMLHttpRequest();
        let responseJSON = '';
        let baseUrl = 'https://4u1ljf1age.execute-api.us-east-1.amazonaws.com/prod1/test';
        let url = baseUrl + query;

        sampleReq.open('GET', url, true);
        sampleReq.onload = function () {
            responseJSON = JSON.parse(this.response);
            responseJSON = JSON.stringify(responseJSON, undefined, 4);
            setResponse(responseJSON);
            setWaiting(false);
        };
        sampleReq.onreadystatechange = () => {
            if (sampleReq.readyState === 4) {
                //if complete
                if (sampleReq.status === 200) {
                    //check if "OK" (200)
                    //success
                }
            }
        };
        setWaiting(true);
        setResponse(false);
        sampleReq.send();
    };

    const keyDownHandler = (e) => {
        if (e.keyCode === 13) {
            sendQuery();
        }
    };

    let test = '';
    let test2 = '';
    var profile;
    if (response) {
        let responseJSON = JSON.parse(response);
        test = response;

        test2 = <textarea id='jsonText' label='Result' className={classes.jsonArea} value={test}></textarea>;

        profile = (
            <div>
                <p>Name: {responseJSON.value}</p>
                <p>ID: {responseJSON.testID}</p>
                <p>Likes: {responseJSON.likes}</p>
                <p>Dislikes: {responseJSON.dislikes}</p>
                <img src={responseJSON.image} alt='profile' />
            </div>
        );
    }

    let wait = '';
    if (waiting) {
        wait = <CircularProgress />;
        profile = wait;
    }

    return (
        <div className={classes.body}>
            <HomeHeader />
            <div className={classes.queryCont}>
                <p className={classes.query}>https://4u1ljf1age.execute-api.us-east-1.amazonaws.com/prod1/test</p>
                <TextField onKeyDown={keyDownHandler} id='queryText' label='sampleEndpoint' variant='standard' defaultValue='?testing=1'></TextField>
                <Button color='primary' onClick={sendQuery} style={{ marginLeft: '10px' }} variant='contained'>
                    Submit
                </Button>
            </div>
            <div className={classes.jsonCont}>
                <Card className={classes.root}>
                    <CardContent className={classes.root}>
                        {test2}
                        {wait}
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card className={classes.profile}>
                    <CardContent>{profile}</CardContent>
                </Card>
            </div>
        </div>
    );
}

export default App;

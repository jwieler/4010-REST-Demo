import React from 'react';
import { makeStyles, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cont: {},
});

export function HomeHeader() {
    const classes = useStyles();

    return (
        <div id='ass' className={classes.cont}>
            <Card className={classes.root} variant='outlined'>
                <CardContent>
                    <Typography variant='h3' color='textPrimary' gutterBottom>
                        CIS *4010 A4 Demo Site
                    </Typography>
                    <Typography variant='h5' component='h2'>
                        By: Jacob Wieler
                    </Typography>
                    <Typography className={classes.pos} color='textSecondary'></Typography>
                    <Typography variant='body2' component='p'>
                        Try it below!
                        <br />
                        <br />
                    </Typography>
                    <Typography variant='body2' component='p'>
                        The query parameter 'testing' is the only parameter set up thus far, and it only has 3 items to view. Try switching the id and
                        see the different results. (Hit submit to submit the GET request to the invoke URL).
                        <br />
                        <br />
                        After you hit submit, the response should come back quickly, and once it has returned, you can see the raw JSON response in
                        the top textarea, as well as a formatted response below incuding the media present in the object store.
                    </Typography>

                    <p>
                        Vist the <a href='https://github.com/jwieler/4010-REST-Demo'>GitHub Repo</a>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}

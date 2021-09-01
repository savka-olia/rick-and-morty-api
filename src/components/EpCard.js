import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 250,
        maxHeight: 150,
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
});

export default function EpCard({ episode }) {
    const classes = useStyles();

    return (
        <Card className={`align-middle col bg-secondary bg-opacity-10 mx-2 my-2 bd-highlight ${classes.root}`}>
            <CardContent>
                <Typography className="font-monospace" variant="h6" component="h2">
                    {episode.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {episode.air_date}
                </Typography>
                <Typography variant="body2" component="p">
                    {episode.created}
                </Typography>
            </CardContent>
        </Card>
    );
}

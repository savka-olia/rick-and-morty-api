import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    root: {
        maxWidth: 250,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard({ character }) {
    const classes = useStyles();

    return (
        <Card className={`col bg-secondary bg-opacity-10 mx-2 my-2 bd-highlight ${classes.root}`} >
            <CardActionArea>
                <CardMedia
                    className={`rounded-3 ${classes.media}`}
                    image={character.image}
                    title={character.name}
                />
                <CardContent>
                    <Typography className="font-monospace text-center" gutterBottom variant="h6" component="h2">
                        {character.name}
                    </Typography>
                    <Typography fontWeight="fontWeightRegular" variant="body2" color="textSecondary" component="p">
                        Gender: {character.gender} <br /> Species: {character.species} <br /> Status: {character.status}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

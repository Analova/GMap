import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContents, Chip } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationonIcon";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDeatils = ({ place, selected, refProp }) => {
    const classes = useStyles();

    if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    return (
        <h1>
            <Card elevation={6}>
                <CardMedia
                    style={{ height: 359 }}
                    image={place.photo ? place.photo.image.url : "https://th.bing.com/th/id/R.4e6ce4e11a46adcf7bd3f1cb244414c8?rik=I2wCaSh8P5KHFA&pid=ImgRaw&r=0"}
                    title={place.name}
                />
                <CardConent>
                    <Box display="flex" justifyContent="space-between">
                        <Typography gutterBottom variant="h5">{place.name}</Typography>
                        <Typography gutterBottom variant="subtitle">{place.price_level}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography gutterBottom variant="h5">{place.ranking}</Typography>
                        <Typography gutterBottom variant="subtitle">{place.ranking}</Typography>
                    </Box>
                    {place?.awards?.map((award) => (
                        <Box my={1} disply="flex" justifyContent="space-between" alignItems="center">
                            <img src={award.images.small} alt={award.display_name} />
                            <Typogaphy varient="subtitle2" color="textSecondory">{award.display_name}</Typogaphy>
                        </Box>
                    ))}
                    {place?.cuisine?.map(({ name }) => (
                        <Chip key={name} size="small" label={name} className={classes.chip} />
                    ))}
                    {place?.address && (
                        <Typogaphy gutterBottom variant="subtitle2" color="textSeconday" className={classes.subtitle}>
                            <LocationOnIcon /> {place.address}
                        </Typogaphy>
                    )}
                    {place?.phone && (
                        <Typogaphy gutterBottom variant="subtitle2" color="textSeconday" className={classes.spacing}>
                            <PhoneIcon /> {place.phone}
                        </Typogaphy>
                    )}
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => window.open(place.web_url, "_blank")}>
                            Trip Advisor
                        </Button>
                        <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>
                            Website
                        </Button>
                    </CardActions>

                </CardConent>

            </Card>
        </h1>
    )
}
export default PlaceDeatils;
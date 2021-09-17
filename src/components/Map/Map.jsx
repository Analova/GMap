import React from "react";
import GoogleMapReact from "google-map-react"
import { Paper, Typography, useMediaQuery } from "@material-ui/core"
import LocationOnOutlined from "@material-ui/icons/LocationOnOutlined"
import Rating from "@material-ui/lab"

import useStyles from "./styles"

const Map = ({ setCoordinates, setBounds, coordinates, weatherData }) => {
    const classes = useStyles()
    const isMobile = useMediaQuery("(min-width:600px)");

    //const coordinates = { lat: 0, lng: 0 };


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAaLCh_7dTbuAaNMOtLE6FYebJmXniAXgk" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    console.log(e)
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                }}
                onChildClick={""}
            >
                {weather?.list?.map((data) => (
                    <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                        <img height={100} src={`https://openweather.org/img/w/${data.weather[0].icon}.png`} />
                    </div>

                ))}
            </GoogleMapReact>
        </div>
    )
}
export default Map;
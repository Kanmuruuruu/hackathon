import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Carte.css';

export default class Carte extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lat: 47.90242,
            lng: 1.90387,
            zoom: 13,
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div className="carte">
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}
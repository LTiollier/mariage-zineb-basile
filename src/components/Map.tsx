"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Fix for default marker icon in Leaflet + Next.js
const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface MapProps {
    center: [number, number];
    zoom?: number;
}

export default function Map({ center, zoom = 15 }: MapProps) {
    useEffect(() => {
        // This is to ensure Leaflet CSS is loaded and any other client-side logic
    }, []);

    return (
        <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gold/10">
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                className="w-full h-full z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center} icon={customIcon}>
                    <Popup>
                        Palais Tazi <br /> 1 Rue Al-Quds, Rabat
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../visuals/ServiceDetails.css';
import {HIZMET_0} from "../../constants";

function ServiceDetails() {

    const location = useLocation();
    const { label } = location.state || {};

    return (
        <div className='service-details' id='service-details'>
            <h1>{HIZMET_0.title}</h1>
            <p>{HIZMET_0.description}</p>
        </div>
    );
}
export default ServiceDetails;
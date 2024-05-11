import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {DeviceDto} from "../entities/Device/models/dto/DeviceDto";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className='d-flex'>
            {device.devices.map((device: DeviceDto) => (
                <DeviceItem key={device.id} device={device}/>
            ))}
        </Row>
    );
});

export default DeviceList;
import React, { FC } from "react"
import { Card, Col, Image } from "react-bootstrap"
import { DeviceDto } from "../entities/Device/models/dto/DeviceDto"
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts"
// @ts-ignore
import star from "../assets/star.png"

interface IDeviceItemProps {
    device: DeviceDto
}
const DeviceItem: FC<IDeviceItemProps> = ({ device }) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}>
            <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
                <Image width={150} height={150} src={device.img} />
                <div className="text-black-50 mt-1 d-flex justify-content-between">
                    <div>Samsung</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={20} height={20} src={star} />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem

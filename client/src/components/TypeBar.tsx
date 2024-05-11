import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { ListGroup } from "react-bootstrap"
import { DeviceDto } from "../entities/Device/models/dto/DeviceDto"

const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup>
            {device.types.map((type: DeviceDto) => (
                <ListGroup.Item
                    key={type.typeId}
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType.id}
                    style={{ cursor: "pointer" }}
                >
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
})

export default TypeBar

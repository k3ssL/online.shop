import React, { useContext } from "react"
import { Card, Row } from "react-bootstrap"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { BrandDto } from "../entities/Brand/models/dto/BrandDto"

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Row className="d-flex flex-nowrap" style={{ width: "20%" }}>
            {device.brands.map((brand: BrandDto) => (
                <Card
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                    style={{ cursor: "pointer" }}
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    )
})

export default BrandBar

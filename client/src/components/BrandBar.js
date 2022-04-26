import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap';
import { Context } from '../index';

const BrandBar = observer(() => {
  const {device} = useContext(Context)

    return (
      // <Row className="d-flex">
        <div className="d-flex">
        {device.brands.map(brand => 

          <Card
            style={{cursor: 'pointer'}}
            key={brand.id}
            className="p-3"
            onClick={() => device.setSelectedBrand(brand)}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
          >
            {brand.name}
          </Card>
        )}
        </div>
      // </Row>
    )
});

export default BrandBar
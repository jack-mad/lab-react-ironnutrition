
import { Card, Col, Button } from 'antd';
import foods from '../foods.json';
function FoodBox(props) {
  const items = props.foods
  return (
    items.map((item, index) => {
      return (
        <Col >
          <Card key={index}
            title={item.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={item.image} height={60} alt="food" />
            <p>Calories: {item.calories}</p>
            <p>Servings: {item.servings}</p>
            <p>
              <b>Total Calories: {item.calories * item.servings} </b> kcal
            </p>
            <Button type="primary"> Delete </Button>
          </Card>
        </Col>
      )
    })

  )
}

export default FoodBox;

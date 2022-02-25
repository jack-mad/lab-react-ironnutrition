// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input, Col, Row, Alert } from 'antd';
import { useState } from 'react'

// Iteration 4
function AddFoodForm(props) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings:0
  })
  const [allFood, setAllFood] = useState(props.foods)
  const [error,setError] = useState('')

  const handleChange = (ev) => {
    setNewFood({
      ...newFood,
      [ev.target.name]: ev.target.value
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if(!newFood.name || !newFood.image || !newFood.servings || !newFood.image){
      setError('empty field, please check')
      return
    }
    setAllFood([
      ...allFood,
      newFood
    ])
    setNewFood({
      name: '',
      image: '',
      calories: 0,
      servings:0
    })
    setError('')
  }

  return (
    <>
    <Row justify="center">
      <Col span={8}>
        <form onSubmit={(evt)=>{handleSubmit(evt)}}>
          <Divider>Add Food Entry</Divider>

          <label>Name</label>
          <Input value={newFood.name} type="text" name="name" onChange={(evt) => { handleChange(evt) }} />

          <label>Image</label>
          <Input value={newFood.image} type="text" name="image" onChange={(evt) => { handleChange(evt) }} />

          <label>Calories</label>
          <Input value={newFood.calories} type="number" min="0" name="calories" onChange={(evt) => { handleChange(evt) }} />

          <label>Servings</label>
          <Input value={newFood.servings} type="number" min="0" name="servings" onChange={(evt) => { handleChange(evt) }} />
          {
            error ?  <Alert message={error} type="warning" /> : <></>
          }
         
          
          <button type="submit">Create</button>
        </form>
      </Col>
    </Row>
    </>
  );
}

export default AddFoodForm;

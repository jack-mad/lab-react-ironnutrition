import logo from './logo.svg';
import './App.css';
import AddFood from './components/AddFood'
import FoodBox from './components/FoodBox'
import Search from './components/Search'
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';

function App() {
  return (
    <div className="App">
      <AddFood />
      <Button> Hide Form / Add New Food </Button>
      
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      <FoodBox foods={foods}/>
      </Row>
    </div>
  );
}

export default App;

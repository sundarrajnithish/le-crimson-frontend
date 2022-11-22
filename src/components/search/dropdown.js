import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

let location = []

function BasicButtonExample() {
  return (
    <>
    <DropdownButton id="dropdown-basic-button" title="Location">
      <Dropdown.Item> <button className='searchbutton' onClick = { ()=> localStorage.setItem('search-location', "CA")}> Canada </button> </Dropdown.Item>
      <br />
      <Dropdown.Item> <button className='searchbutton' onClick = { ()=> localStorage.setItem('search-location', "IN")}> India </button> </Dropdown.Item>
      <br />
      <Dropdown.Item> <button className='searchbutton' onClick = { ()=> localStorage.setItem('search-location', "US")}> United States </button> </Dropdown.Item>
    </DropdownButton>
    </>
  );
}


export default BasicButtonExample;
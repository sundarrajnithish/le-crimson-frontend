import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

let location = []

function BasicButtonExample() {
  
  return (
    <>
    {/* <DropdownButton id="dropdown-basic-button" title="Location">
      <Dropdown.Item> <button className='searchbutton' onClick = { ()=> localStorage.setItem('search-location', "CA")}> Canada </button> </Dropdown.Item>
      <br />
      <Dropdown.Item> <button className='searchbutton' onClick = { ()=> localStorage.setItem('search-location', "IN")}> India </button> </Dropdown.Item>
      <br />
      <Dropdown.Item> <button className='searchbutton' onClick = { ()=> localStorage.setItem('search-location', "US")}> United States </button> </Dropdown.Item>
    </DropdownButton> */}
    <form>
    <label for="location">Choose a Location: </label>
    <select id='location' >
              <option value="IN" >India</option>
              <option value="CA">Canada</option>
              <option value="country">China</option>
              <option value="country">UnitedStates</option>
              <option value="country">Japan</option>
              <option value="country">Australia</option>
            </select>
            </form>
    </>
  );
}


export default BasicButtonExample;
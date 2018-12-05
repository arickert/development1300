import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';
import './App.css';


class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      search: "",
      type: "",
      color: "",
      descending: false,
      ascending: false,

    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({type: event});

  }

  onFilterColor = (event) => {
    this.setState({color: event});

  }

  sortDescending = (event) => {
    this.setState({descending: true});
    this.setState({ascending:false});
  }

  sortOff = (event) => {
    this.setState({descending: false});
    this.setState({ascending:false});
  }

  sortAscending = (event) => {
    this.setState({descending: false});
    this.setState({ascending:true});
  }


  filterItem = (item) => {

    if (item.type == this.state.type){
  //    return item.name.toLowerCase().search(this.state.search) !== -1;

         if (item.color == this.state.color){
          return item.name.toLowerCase().search(this.state.search) !== -1;
      }

      else if (this.state.color == ""){
        return item.name.toLowerCase().search(this.state.search) !== -1;
      }

      else if (this.state.color == "ALL"){
        return item.name.toLowerCase().search(this.state.search) !== -1;
      }

  }

  else if (this.state.type == ""){
  //  return item.name.toLowerCase().search(this.state.search) !== -1;

       if (item.color == this.state.color){
        return item.name.toLowerCase().search(this.state.search) !== -1;
    }

    else if (this.state.color == ""){
      return item.name.toLowerCase().search(this.state.search) !== -1;
    }

    else if (this.state.color == "ALL"){
      return item.name.toLowerCase().search(this.state.search) !== -1;
    }

  }

  else if (this.state.type == "ALL"){
    //return item.name.toLowerCase().search(this.state.search) !== -1;

       if (item.color == this.state.color){
        return item.name.toLowerCase().search(this.state.search) !== -1;
    }

    else if (this.state.color == ""){
      return item.name.toLowerCase().search(this.state.search) !== -1;
    }

    else if (this.state.color == "ALL"){
      return item.name.toLowerCase().search(this.state.search) !== -1;
    }
  }

  // this.props.items.sort(function(a, b){return a > b});


}



render() {


  if (this.state.descending) {



  return (
  <div className="filter-list">

  <DropdownButton id="typeDropdown" title={"TYPE"}>
  <MenuItem eventKey="ALL" onSelect={this.onFilter}>ALL</MenuItem>
  <MenuItem eventKey="LEATHER" onSelect={this.onFilter}>LEATHER</MenuItem>
  <MenuItem eventKey="CANVAS" onSelect={this.onFilter}>CANVAS</MenuItem>
  </DropdownButton>

  <DropdownButton id="colorDropdown" title={"COLOR"}>
  <MenuItem eventKey="ALL" onSelect={this.onFilterColor}>ALL</MenuItem>
  <MenuItem eventKey="WHITE" onSelect={this.onFilterColor}>WHITE</MenuItem>
  <MenuItem eventKey="BLACK" onSelect={this.onFilterColor}>BLACK</MenuItem>
  <MenuItem eventKey="RED" onSelect={this.onFilterColor}>RED</MenuItem>
  <MenuItem eventKey="BROWN" onSelect={this.onFilterColor}>BROWN</MenuItem>
  </DropdownButton>
  <input type="text" size="55" placeholder="Search" onChange={this.onSearch} />

  <DropdownButton id="colorDropdown" title={"PRICE"}>
  <MenuItem eventKey="LOWEST FIRST" onSelect={this.sortDescending}>LOWEST FIRST</MenuItem>
  <MenuItem eventKey="HIGHEST FIRST" onSelect={this.sortAscending}>HIGHEST FIRST</MenuItem>
  <li class="divider"></li>

  <MenuItem eventKey="Ascending" onSelect={this.sortOff}>Reset</MenuItem>
  </DropdownButton>



  <List items={this.props.items.filter(this.filterItem).sort(function(a, b){return a.number - b.number})} />
  </div>
)
  }


  if (this.state.ascending) {

    return (
    <div className="filter-list">

    <DropdownButton id="typeDropdown" title={"TYPE"}>
    <MenuItem eventKey="ALL" onSelect={this.onFilter}>ALL</MenuItem>
    <MenuItem eventKey="LEATHER" onSelect={this.onFilter}>LEATHER</MenuItem>
    <MenuItem eventKey="CANVAS" onSelect={this.onFilter}>CANVAS</MenuItem>
    </DropdownButton>

    <DropdownButton id="colorDropdown" title={"COLOR"}>
    <MenuItem eventKey="ALL" onSelect={this.onFilterColor}>ALL</MenuItem>
    <MenuItem eventKey="WHITE" onSelect={this.onFilterColor}>WHITE</MenuItem>
    <MenuItem eventKey="BLACK" onSelect={this.onFilterColor}>BLACK</MenuItem>
    <MenuItem eventKey="RED" onSelect={this.onFilterColor}>RED</MenuItem>
    <MenuItem eventKey="BROWN" onSelect={this.onFilterColor}>BROWN</MenuItem>
    </DropdownButton>
    <input type="text" size="55" placeholder="Search" onChange={this.onSearch} />

    <DropdownButton id="colorDropdown" title={"PRICE"}>
    <MenuItem eventKey="LOWEST FIRST" onSelect={this.sortDescending}>LOWEST FIRST</MenuItem>
    <MenuItem eventKey="HIGHEST FIRST" onSelect={this.sortAscending}>HIGHEST FIRST</MenuItem>
    <li class="divider"></li>

    <MenuItem eventKey="Ascending" onSelect={this.sortOff}>Reset</MenuItem>
    </DropdownButton>




  <List items={this.props.items.filter(this.filterItem).sort(function(a, b){return -a.number - -b.number})} />
  </div>
)
  }

  else {

    return (
    <div className="filter-list">

    <DropdownButton id="typeDropdown" title={"TYPE"}>
    <MenuItem eventKey="ALL" onSelect={this.onFilter}>ALL</MenuItem>
    <MenuItem eventKey="LEATHER" onSelect={this.onFilter}>LEATHER</MenuItem>
    <MenuItem eventKey="CANVAS" onSelect={this.onFilter}>CANVAS</MenuItem>
    </DropdownButton>

    <DropdownButton id="colorDropdown" title={"COLOR"}>
    <MenuItem eventKey="ALL" onSelect={this.onFilterColor}>ALL</MenuItem>
    <MenuItem eventKey="WHITE" onSelect={this.onFilterColor}>WHITE</MenuItem>
    <MenuItem eventKey="BLACK" onSelect={this.onFilterColor}>BLACK</MenuItem>
    <MenuItem eventKey="RED" onSelect={this.onFilterColor}>RED</MenuItem>
    <MenuItem eventKey="BROWN" onSelect={this.onFilterColor}>BROWN</MenuItem>
    </DropdownButton>
    <input type="text" size="55" placeholder="Search" onChange={this.onSearch} />

    <DropdownButton id="colorDropdown" title={"PRICE"}>
    <MenuItem eventKey="LOWEST FIRST" onSelect={this.sortDescending}>LOWEST FIRST</MenuItem>
    <MenuItem eventKey="HIGHEST FIRST" onSelect={this.sortAscending}>HIGHEST FIRST</MenuItem>
    <li class="divider"></li>

    <MenuItem eventKey="Ascending" onSelect={this.sortOff}>Reset</MenuItem>
    </DropdownButton>





  <List items={this.props.items.filter(this.filterItem).sort()} />
  </div>
)
  }




}

}
export default FilteredList;

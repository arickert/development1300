import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import one from './1.jpg'
import two from './2.jpg'
import three from './3.jpg'
import four from './4.jpg'
import five from './5.jpg'
import six from './6.jpg'
import seven from './7.jpg'
import eight from './8.jpg'
import nine from './9.jpg'
import ten from './10.jpg'
import eleven from './11.jpg'
import twelve from './12.jpg'
import Header from './Header'



const produce = [

  {number: 385, name: "ADIDAS X RAF SIMONS OZWEEGO", type: "LEATHER", color: "RED", image: two},
  {number: 399, name: "MAISON MARGIELA REPLICA SNEAKER", type: "LEATHER", color: "WHITE", image:one},
  {number: 85, name: "ADIDAS STAN SMITH CF", type: "LEATHER", color: "WHITE", image:three},
  {number: 108, name: "JW ANDERSON CHUCK TAYLOR 1970S HI", type: "CANVAS", color: "RED", image:four},
  {number: 1079, name: "VISVIM VIRGIL FOLK BOOT", type: "LEATHER", color: "BROWN", image:five},
  {number: 410, name: "COMMON PROJECTS ORIGINAL ACHILLES LOW", type: "LEATHER", color: "WHITE", image:six},
  {number: 69, name: "VANS UA CLASSIC SLIP ON", type: "CANVAS", color: "BLACK", image:seven},
  {number: 209, name: "NIKE AIR VAPORMAX PLUS", type: "LEATHER", color: "BLACK", image:eight},
  {number: 95, name: "NIKE AIR FORCE 1 '07", type: "LEATHER", color: "BLACK", image:nine},
  {number: 139, name: "CDG PLAY X CONVERSE CHUCK TAYLOR", type: "CANVAS", color: "WHITE", image:ten},
  {number: 309, name: "ADIDAS X RAF SIMONS STAN SMITH", type: "LEATHER", color: "BLACK", image:eleven},
  {number: 85, name: "VANS SK8-HI 38 DX", type: "CANVAS", color: "BLACK", image:twelve},

]


class App extends Component {
    render() {
        return (


          <div class="grid-container">
            <div class="margins2"></div>
            <div class="logo"><Header/></div>
            <div class="margins4"></div>
            <div class="margins"></div>
            <div class="shoes"> <FilteredList items={produce} />
</div>
            <div class="margins3"></div>

          </div>




        );
    }
}

export default App;

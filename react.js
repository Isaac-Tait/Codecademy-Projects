import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
<li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));


//-----------------------------------------------------------------------------------------------------


import React from 'react';
//creates a JavaScript object. This object contains properties that are needed to make React work, 
//such as React.createElement() and React.Component.
import ReactDOM from 'react-dom';
//creates another JavaScript object. This object contains methods that help React interact with the DOM, 
//such as ReactDOM.render().

class MyComponentClass extends React.Component {
  //subclassing React.Component, you create a new component class. This is not a component! 
 //A component class is more like a factory that produces components. When you start making components, 
 //each one will come from a component class.

 //Whenever you create a component class, you need to give that component class a name. 
 //That name should be written in UpperCamelCase.
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);
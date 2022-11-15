import './App.css';
import React, { useState } from 'react';
import Page1 from './Components/Page1';


function App() {
  const [route, setRoute] = useState('page1');
  const [Display, setDisplay] = useState('');

  const onRouteChange = (route) => {
    if (route === 'page1') {
      setRoute('page1')
    } else if (route === 'page2') {
      import('./Components/Page2.js')
        .then((Page2) => {
          console.log(Page2)
          console.log(typeof Page2.default)
          console.log(Page2.default)
          setRoute('page2')
          setDisplay(Page2.default)
        })
    } else if (route === 'page3') {
      import('./Components/Page3.js')
        .then((Page3) => {
          setRoute('page3')
          setDisplay(Page3.default)
        })
    }
  }

  if (route === 'page1') {
    return <Page1 onRouteChange={onRouteChange} />
  } else {
    return <Testing onRouteChange={onRouteChange} />
  }
}


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       route: 'page1',
//       component: null
//     }
//   }
//   onRouteChange = (route) => {

//     if (route === 'page1') {
//       this.setState({ route: route })
//     } else if (route === 'page2') {
//       import('./Components/Page2')
//         .then((Page2) => {
//           console.log(Page2)
//           console.log(typeof Page2.default)
//           console.log(Page2.default)
//           this.setState({ route: route, component: Page2.default })
//         })
//         .catch(err => {
//         });
//     } else {
//       import('./Components/Page3')
//         .then((Page3) => {
//           this.setState({ route: route, component: Page3.default })
//         })
//         .catch(err => {
//           console.log(err)
//         });
//     }
//   }
//   render() {
//     if (this.state.route === 'page1') {
//       return <Page1 onRouteChange={this.onRouteChange} />
//     } else {
//       return <this.state.component onRouteChange={this.onRouteChange} />
//     }

//   }
// }

export default App;

/**
 * react-native 的基础实现
 * android 版本
 */

import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import AppNavigators from './AppNavigators.js'
const AppContainer = createAppContainer(AppNavigators);
import { Provider} from '@ant-design/react-native'
export default class App extends React.Component {
  render() {
    return  <Provider><AppContainer /></Provider>
  }
}
// export default class App extends Component{
//   render() {
//     return (
//       <AppNavigators/>
//     );
//   }
// }

import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import Content from './pages/content/content'
export default class App extends Component{
    render(){
      return (
        <BrowserRouter>
             <switch>
             <Route path='/main' component={Home}></Route>
             <Route path='/login' component={Login}></Route>
              <Route path='/' component={Admin}></Route>
              <Route path='/content' component={Content}></Route>
             </switch>
        </BrowserRouter>
      )
    }
}

//函数组件
// function App() {
//   return (
//     <div>
//       hello
//     </div>
//   );
// }

// export default App;

//vue 和react 都有程序主入口 和主入口组件 路由的组件都在主入口组件里显示
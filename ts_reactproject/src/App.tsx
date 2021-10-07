import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './components/HelloHook';
import Effect from './components/Effect'
import useMousePosition from './components/HookHOC';
import Ref from './components/Ref'
import Hello from './components/FirstTs'

//context可以解决多层传递属性 可以当一个共享属性
interface IThemeProps {
  [key:string]:{color:string,background:string}
}
export const themes: IThemeProps = {
    'light':{color:'#000',background:'#eee'},
    'dark':{color:'#fff',background:'#222'}
}
export const themeContext = React.createContext(themes.light)

function App() {
  //调用自定义hook实现状态复用
  const positions = useMousePosition()
  return (
    <div className="App">
        {/* 想使用context属性的组件必须通过Provider包裹， 组件内部通过useContext使用*/}
        <themeContext.Provider value={themes.dark}>
            <LikeButton />
            <Effect />
            <p>X:{positions.x},Y:{positions.y}</p>
            <Ref />
            <Hello message="wanglihang"/>
        </themeContext.Provider>
    </div>
  );
}

export default App;

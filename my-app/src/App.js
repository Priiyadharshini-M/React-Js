import './App.css';
import React,{ Component } from 'react';
//import Portal from './component/Poratl';
// import Car from './component/Car';
// import FirstFuncComponent from './component/Func_component';
// import State from './component/State';
// import Parent from './component/Parent';
// import ConditionalRender from './component/ConditionalRender';
// import ListRender from './component/ListRender';
// import StyleSheet from './component/StyleSheet';
// import styles from './component/moduleStyle.module.css'; //CSS modules
//import Form from './component/Form';
// import Fragment from './component/Fragment';
//import PureCompParent from './component/PureCompParent';
//import Refss from './component/Ref';
//import RefInputFocus from './component/RefInputFocus';
// import ErrorEx from './component/ErrorEx';
// import ErrorBoundary from './component/ErrorBoundary';
// import CountClick from './component/CountClick';
// import CountHover from './component/CountHover';
// import RenderClick from './component/RenderClick';
// import RenderHover from './component/RenderHover';
// import RenderProp from './component/RenderProp';
import ContextA from './component/ContextA';
import {ContextProvider} from './component/Context';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <h1>Class Component</h1>
      {/* //CSS modules */}
      {/* <h1 className={styles.active}>Active</h1>
      <Car model="Hundai" color="Red">
        <p><button>Read more</button></p>
      </Car>
      <Car model="Hundai" color="Red"></Car>
      <h1>Functional Component</h1>
      <FirstFuncComponent name="Priiya" studId="INT0543">
        LAMP Practice
      </FirstFuncComponent>
      <FirstFuncComponent name="Rahul" studId="INT0544">
        DOTNET Practice
        <p><button>Read more</button></p>
      </FirstFuncComponent>
      <State />
      <Parent />
      <div><ConditionalRender /></div>
      <ListRender />
      <StyleSheet /> */}
      {/* <Form /> */}
      {/* <Fragment /> */}
      {/* <PureCompParent /> */}
      {/* <Refss /> */}
      {/* <RefInputFocus /> */}
      {/* <Portal /> */}
      {/* <ErrorBoundary>
      <ErrorEx name="Priiya" />
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorEx name="Rahul" />
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorEx name="Nothing" />
      </ErrorBoundary> */}
      {/* <CountClick name="Priiya"/>
      <CountHover /> */}
      {/* <RenderClick />
      <RenderHover /> */}
      {/* <RenderProp renderPropss={(count,ClickHandle)=>(
      <RenderClick count={count} ClickHandle={ClickHandle} />) //take renderProps as prop with value passed as function and return RenderClick Component
      } />
      <RenderProp renderPropss={(count,ClickHandle)=>(
      <RenderHover count={count} ClickHandle={ClickHandle} />)
      } /> */}
       <ContextProvider value="Priiya"> {/*//ContextProvider sets context value */}
      <ContextA  /> 
      </ContextProvider>
    </div>
  );
    }
}

export default App;

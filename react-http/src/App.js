import './App.css';
// import Get from './component/Get'
//import Post from './component/Post';
// import UseState from './hooks/UseState';
 //import UseStateObj from './hooks/UseStateObj';
//import UseStateArray from './hooks/UseStateArray';
//import UseEffect from './hooks/UseEffect';
//import UseEffectUnmountMain from './hooks/UseEffectUnmountMain';
// import FetchData from './hooks/FetchData';
// import UseContext from './hooks/UseContext';
//import UseReducer from './hooks/UseReducer';
//import UseReducerMultiple from './hooks/UseReducerMultiple';
//import UseReducerObj from './hooks/UseReducerObj';
//import ReducerContext from './hooks/ReducerContext';
//import FetchDataReducer from './hooks/FetchDataReducer';
//import Parent from './hooks/useCallbackk/Parent';
//import UseMemo from './hooks/UseMemo';
// import UseRef from './hooks/UseRef';
// import UseRef2 from './hooks/UseRef2';
// import Doc1 from './hooks/customHooks/Doc1';
// import Doc2 from './hooks/customHooks/Doc2';

import {Provider} from 'react-redux'; //to connect react and redux
import store from './react-redux/Store';
import CakeContainer from './react-redux/CakeContainer';
function App() {
  return (

    <Provider store={store}> {/*//provider is given so the store can be accessed by every components inside it*/}

    <div className="App">
      {/* <Get /> */}
      {/* <Post /> */}
      {/* <UseState /> */}
      {/* <UseStateObj /> */}
      {/* <UseStateArray /> */}
      {/* <UseEffect /> */}
      {/* <UseEffectUnmountMain /> */}
      {/* <FetchData /> */}
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      {/* <UseReducerMultiple /> */}
      {/* <UseReducerObj /> */}
      {/* <ReducerContext /> */}
      {/* <FetchDataReducer /> */}
      {/* <Parent /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <UseRef2 /> */}
      {/* <Doc1 />
      <Doc2 /> */}

      <CakeContainer />

    </div>

    </Provider>

  );
}

export default App;
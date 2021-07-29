<<<<<<< HEAD
import { Router as RouterHistory } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from '../router'
import history from '../utils/history'
import store from '../redux/store'

import useNetwork from '../hooks/useNetwork'

import { Button, Result } from 'antd'

function App() {
  const { isOnline: isNetwork } = useNetwork()

  if (!isNetwork)
    return (
      <>
        <Result
          status='404'
          title='No Internet Connection'
          subTitle='Check your Internet Connection or your network.'
          extra={
            <Button href='/' type='primary'>
              Try Again
            </Button>
          }
        />
      </>
    )
  else {
    return (
      <RouterHistory history={history}>
        <Provider store={store}>
          <Router />
        </Provider>
      </RouterHistory>
    )
  }
}

export default App

/*import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import api from '../api/assistants'
import Main from './layouts/Main'
import Assistant from './views/Assistant'
import Scheduler from './views/Scheduler'
import AssistantDetail from './views/AssistantDetail'
import AddAssistant from './assistant/AddAssistant'
import Login from './views/Login'
import { setAssistants } from '../redux/actions/assistantActions'
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "../api/assistants";
import Main from "./layouts/Main";
import Assistant from "./views/Assistant";
import Scheduler from "./views/Scheduler";
import Navbar from "./viewsAssistant/navbar/Navbar";
import AssistantDetail from "./views/AssistantDetail";
import AddAssistant from "./assistant/AddAssistant";
import { setAssistants } from "../redux/actions/assistantActions";
>>>>>>> 4ef9a3f2d927a5761791847277938dea4d055c80

function App() {
  const dispatch = useDispatch();

  // Cambia el estado de los ayudantes
  const addAssistantHandler = async (assistant) => {
    const request = {
      ...assistant,
    };

    const response = await api.post("/", request);
    dispatch(setAssistants(response.data));
  };

  return (
    <Router>
<<<<<<< HEAD
      <Route exact path='/' component={Login} />
      <Main>
        <Switch>
          <Route exact path='/scheduler' component={Scheduler} />
          <Route exact path='/assistant' component={Assistant} />
          <Route
            exact
            path='/assistantDetail/:id'
            component={AssistantDetail}
          />
=======
      {/* Contenedor de la vista principal */}

      <Main>
        <Switch>
          <Route path="/scheduler" component={Scheduler} />
          <Route path="/assistant" component={Assistant} />
          <Route path="/assistantDetail/:id" component={AssistantDetail} />
>>>>>>> 4ef9a3f2d927a5761791847277938dea4d055c80
          <Route
            path="/add"
            render={(props) => (
              <AddAssistant
                {...props}
                addAssistantHandler={addAssistantHandler}
              />
            )}
          />
        </Switch>
      </Main>
    </Router>
  );
}

<<<<<<< HEAD
export default App*/
=======
export default App;
>>>>>>> 4ef9a3f2d927a5761791847277938dea4d055c80

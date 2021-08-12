import { BrowserRouter } from 'react-router-dom'
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
      <BrowserRouter basename='/AyudanteGrabacion'>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
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

export default App*/

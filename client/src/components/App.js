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
      {/* Contenedor de la vista principal */}

      <Main>
        <Switch>
          <Route path="/scheduler" component={Scheduler} />
          <Route path="/assistant" component={Assistant} />
          <Route path="/assistantDetail/:id" component={AssistantDetail} />
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

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import CustomRouter from './router/RoutesConfig';
import AppLayout from './view-structs';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "././states-mgt/store"
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppLayout>
           <CustomRouter />
        </AppLayout>
      </Router>
    </Provider>
  );
}

export default App;
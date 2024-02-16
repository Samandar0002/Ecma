import { Route, Routes as Switch } from "react-router-dom";
import App from "../App";
import { Main, Single } from "../layouts";

const Routes = () => {
  return (
    <div className="routes">
      <Switch>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="edit/:specializationID" element={<Single />} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;

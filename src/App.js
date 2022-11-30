import Dashboard from "./pages/dashboard/dashboard";
import AdminList from "./pages/AdminList/admin-list";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleUser from "./components/AdminSingleUser/admin-singleuser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/users" element={<AdminList />} />
          <Route path="/single" element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

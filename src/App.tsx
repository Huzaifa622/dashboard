import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/layout";
import { routes } from "./routes";
import Login from "./Pages/login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        {routes.map((r, idx) => (
          <Route key={idx} path={r.path} element={<r.component />} />
        ))}
      </Route>
      <Route />
      {/* <Layout>
        <div>heeloo</div>
      </Layout> */}
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/layout";
import { agencyRoutes, routes } from "./routes";
import Login from "./Pages/login";
import NotFound from "./components/not-found";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<Layout />}>
        {routes.map((r, idx) => (
          <Route key={idx} path={r.path} element={<r.component />} />
        ))}
        {agencyRoutes.map((r, idx) => (
          <Route key={idx} path={r.path} element={<r.component />} />
        ))}
      </Route>
      <Route />
      <Route path="*" element={<NotFound />} />
      {/* <Layout>
        <div>heeloo</div>
      </Layout> */}
    </Routes>
  );
}

export default App;

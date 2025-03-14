import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/layout";
import { routes } from "./routes";

function App() {
  return (
    <Routes>
      <Route element={<Layout/>} >
      {routes.map((r,idx) => (
        <Route key={idx} path={r.path} element={<r.component/>} />
      ))}
      </Route>
      {/* <Layout>
        <div>heeloo</div>
      </Layout> */}
    </Routes>
  );
}

export default App;

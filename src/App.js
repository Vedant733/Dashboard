import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import React from "react";

function App() {
  const [data, setData] = React.useState({
    name: undefined,
    noOfUsers: undefined,
    noOfFailedLogins: undefined,
    noOfGrp: undefined,
    noOfActiveUsers: undefined,
    c1: undefined,
    c2: undefined
  });
  return (
    <>
      <Routes>
        <Route path="" element={<Home data={data} setData={setData} />}></Route>
        <Route path="/dashboard" element={<Dashboard data={data} />}></Route>
      </Routes>
    </>
  );
}

export default App;

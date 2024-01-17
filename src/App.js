import {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";
import {Spin} from "antd";
const LandingPage = lazy(()=> import("./components/landingPage/LandingPage"));


export default function App() {
  return (
    <Suspense fallback={<Spin/>}>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </Suspense>
  );
}

import { Route, Routes } from "react-router-dom";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import HeroSection from "./components/HeroSection";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Projects from "./pages/Projects"
import Charity from "./pages/Charity";
const Layout = ({ children }) => (
  <div className="flex">
    <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
      <Navbar />
      {children}
    </div>
  </div>
);

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen mx-auto flex flex-row">
      <div className="sm:flex hidden mr-10 relative ml-10">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/home"
            element={
              <Layout>
                <Home></Home>
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
                <Projects></Projects>
              </Layout>
            }
          />
          <Route
            path="/charities"
            element={
              <Layout>
                <Charity></Charity>
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/create-campaign"
            element={
              <Layout>
                <CreateCampaign />
              </Layout>
            }
          />
          <Route
            path="/campaign-details/:id"
            element={
              <Layout>
                <CampaignDetails></CampaignDetails>
              </Layout>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;

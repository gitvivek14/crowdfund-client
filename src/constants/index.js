import {
  createCampaign,
  dashboard,
  logout,
  money,
  payment,
  profile,
  withdraw,
  love
} from "../assets";

export const navlinks = [
  {
    name: "Home",
    imgUrl: dashboard,
    link: "/home",
  },
  {
    name: "Profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name : "Projects",
    imgUrl : money,
    link : "/projects"
  },
  {
    name : "Charity",
    imgUrl : love,
    link : "/charities"
  },
  {
    name: "Logout",
    imgUrl: logout,
    link: "/",
    // disabled: true,
  },
];

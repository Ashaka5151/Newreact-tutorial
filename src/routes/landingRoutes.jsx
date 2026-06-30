import LandingLayout from "../layouts/landing";
import LandingHomepage from "../modules/Home";
import AboutUs from "../modules/Home/About";
import ServicesPage from "../modules/Home/Services";
import ContactPage from "../modules/Home/Contact";

export const landingRoutes = [
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <LandingHomepage />,
      },

      {
        path: "about",
        element: <AboutUs />,
      },

      {
        path: "services",
        element: <ServicesPage />,
      },

      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];

import React from "react";
import Spinner from "../components/Spinner/Spinner";
import useId from "../hooks/useId";
import ContactsPage from "../pages/Contacts/index";
const HomePage = React.lazy(() => import("../pages/Home/index"));
const PropertiesPage = React.lazy(() => import("../pages/Properties/index"));
const HouseDetailsPage = React.lazy(() =>
  import("../pages/HouseDetails/index")
);
export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Spinner />
          </React.Fragment>
        }
      >
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Spinner />
          </React.Fragment>
        }
      >
        <PropertiesPage />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },

  {
    id: useId,
    element: (
      <React.Suspense
        fallback={
          <React.Fragment>
            <Spinner />
          </React.Fragment>
        }
      >
        <HouseDetailsPage />
      </React.Suspense>
    ),
    title: "HouseDetails",
    path: "/properties/:id",
    private: true,
    hidden: true,
  },

  {
    id: useId,
    element: <ContactsPage />,
    title: "Contacts",
    path: "/contacts",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Sign in</h1>,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Sign up</h1>,
    title: "Sign up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];

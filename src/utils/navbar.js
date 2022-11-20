import useId from "../hooks/useId";
import ContactsPage from "../pages/Contacts/index";
import HomePage from "../pages/Home/index";
import PropertiesPage from "../pages/Properties/index";
export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
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

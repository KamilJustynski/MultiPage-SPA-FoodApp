import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ProductsPage } from "./pages/Products";
import { RootLayout } from "./pages/Root";
import { ErrorPage } from "./pages/Error";
import { ProductDetail } from "./pages/ProductDetal";

//! z / - ściezka bezwzgledna, nie opiera sie na poprzedniej, po prostu sie dodaje
//! bez / - sciezka wzgledna, ktora opiera sie na poprzedniej i dodaje do niej

//! index = true wysweitla domyslnie aktywna sciezke ktora zostala zadeklarowana w rodzicu!, zaladuje nam to komponent ktory jest okreslony, jesli sciezka rodzica jest aktywna

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, //!path: '' alternatywa index: true
      {
        path: "products",
        element: <ProductsPage />,
      },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

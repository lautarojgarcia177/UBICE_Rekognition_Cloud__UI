import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { ChakraProvider } from '@chakra-ui/react'
import UploadPhotos from "./routes/UploadPhotos";
import Root from "./routes/Root";
import AWSCredentials from "./routes/AWSCredentials";

export const appRoutes = {
  root: "/",
  uploadPhotos: "uploadPhotos",
  awsCredentials: "awsCredentials",
};

const router = createBrowserRouter([
  {
    path: appRoutes.root,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Root />
      },
      {
        path: appRoutes.uploadPhotos,
        element: <UploadPhotos />
      },
      {
        path: appRoutes.awsCredentials,
        element: <AWSCredentials />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

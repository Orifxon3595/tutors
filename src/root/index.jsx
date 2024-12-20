import { Navigate, Route, Routes } from "react-router-dom";
import sidebar from "../utils/sidebar";
import Sidebar from "../components/Sidebar";
import Login from "../pages/Login"
import "./style.css"

const Root = () => {
  return (
      <Routes>
        <Route element={<Sidebar />}>
          {sidebar.map((parent) => {
            const ElementParent = parent.element;
            if (parent?.children) {
              return parent.children.map((child) => {
                const ElementChild = child.element;
                return (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<ElementChild />}
                  />
                );
              });
            } else
              return (
                !parent.hidden && (
                  <Route
                    key={parent.id}
                    path={parent.path}
                    element={<ElementParent />}
                  />
                )
              );
          })}
        </Route>

        {/* {sidebar.map((parent) => {
          const ElementParent = parent.element;
          return (
            parent.hidden && (
              <Route
                key={parent.id}
                path={parent.path}
                element={<ElementParent />}
              />
            )
          );
        })} */}

        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
  );
};

export default Root;
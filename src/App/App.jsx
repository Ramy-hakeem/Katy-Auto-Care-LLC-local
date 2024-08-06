import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import MainLayout from "../layout/MainLayout";
import ErrorBoundary from "../utils/ErrorBoundary";
import CheckAuthBoundary from "../utils/CheckAuthBoundary";
import RoleBoundary from "../utils/RoleBoundary";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <CheckAuthBoundary>
          <MainLayout>
            <Routes>
              {routes.map((page) => (
                <Route
                  key={page.name}
                  path={page.path}
                  element={
                    <RoleBoundary page={page}>
                      <Suspense fallback={<div>Loading...</div>}>
                        <page.component />
                      </Suspense>
                    </RoleBoundary>
                  }
                />
              ))}
            </Routes>
          </MainLayout>
        </CheckAuthBoundary>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import MainLayout from "../layout/MainLayout";
import ErrorBoundary from "../utils/ErrorBoundery";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <MainLayout>
          <Routes>
            {routes.map((page) => (
              <Route
                key={page.name}
                path={page.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <page.component />
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </MainLayout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

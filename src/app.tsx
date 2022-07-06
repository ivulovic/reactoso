import { Suspense } from "react";
import { Footer, Header } from "@reactoso-ui";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink as Link,
} from "react-router-dom";
import HomePage from "pages/Home";
import AboutPage from "pages/About";

const Loading = (): JSX.Element => <span>Loading...</span>;

const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div>
          <Header />
          <main id="main">

            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </nav>
            
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
export default App;

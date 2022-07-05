import React, { Suspense } from 'react';
import { Footer, Header } from '@reactoso-ui';
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const Loading = (): JSX.Element => <span>Loading...</span>;

const App = (): JSX.Element => {
  return (
      <Suspense fallback={<Loading />}>
        {/* <BrowserRouter> */}
          <div>
            <article>
              {/* <Switch>
                <Route path="/app-a/" component={AppA} />
                <Route path="/app-b/" component={AppB} />
              </Switch> */}
              <Header />
              <h1>Hello2222222222 321113ssss111</h1>
              <h1>222222</h1>
              <h1>222222222</h1>
            </article>
            <Footer />
          </div>
        {/* </BrowserRouter> */}
      </Suspense>
  );
}
export default App;

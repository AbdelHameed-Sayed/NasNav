import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/landing/landing';

class App extends Component {
  render() {
    const LandingPage = <Landing />;

    const ProductDetails = lazy(() =>
      import('./pages/product-details/product-details')
    );

    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={LandingPage} />
            <Route path="details" element={<ProductDetails />} />
            <Route path="*" element={LandingPage} />
          </Routes>
        </Suspense>
      </Router>
    );
  }
}

export default App;

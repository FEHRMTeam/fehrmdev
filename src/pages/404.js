import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="usa-layout-docs usa-section">
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <main>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </main>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;

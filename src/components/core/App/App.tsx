import React, { FunctionComponent } from 'react';

import { Routing } from '~/components/core/Routing';
import { Layout } from '~/components/core/Layout';

const App: FunctionComponent = () => (
  <Layout>
    <Routing />
  </Layout>
);

export default App;

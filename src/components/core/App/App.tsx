import React, { ReactElement } from 'react';

import { Routing } from '~/components/core/Routing';
import { Layout } from '~/components/core/Layout';

const App = (): ReactElement => (
  <Layout>
    <Routing />
  </Layout>
);

export default App;

import React, { FunctionComponent } from 'react';

import { Finals } from '~/components/shared/Finals';

const Home: FunctionComponent = () => {
  return (
    <section className="flex-grow-1 py-0">
      <article>
        <p className="text-center">中文</p>
        <Finals />
      </article>
    </section>
  );
};

export default Home;

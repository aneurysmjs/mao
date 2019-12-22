import React, { FunctionComponent } from 'react';

import { Initials } from '~/components/shared/Initials';

const Home: FunctionComponent = () => {
  return (
    <section className="flex-grow-1 py-0">
      <article>
        <p className="text-center">中文</p>
        <Initials />
      </article>
    </section>
  );
};

export default Home;

import React from 'react';

import { Grid } from '@/components/shared/Grid';
import divideGrid from '@/utils/divideGrid';
import makeGrid from '@/utils/makeGrid';

import { SIZE } from '@/constants';

const result = divideGrid(SIZE);
const initialGrid = makeGrid(result.rows, result.cols, () => 0);

const Home = () => {
  return (
    <section className="flex-grow-1 py-0">
      <article>
        <p className="text-center">
          This is a project
        </p>
        <Grid
          grid={initialGrid}
          size={SIZE}
        />
      </article>
    </section>
  );
};

export default Home;

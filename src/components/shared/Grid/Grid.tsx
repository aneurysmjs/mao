import React, { useContext, SyntheticEvent } from 'react';
// @ts-ignore
import has from 'ramda/src/has';
// @ts-ignore
import allPass from 'ramda/src/allPass';
// @ts-ignore
import uuidv1 from 'uuid/v1';

import { SIZE } from '~/constants';
// import makeGrid from '~/utils/makeGrid';

import AppContext from '~/components/core/App/AppContext';

import { Table, Tr, Td } from '~/components/base/Table';

import './Grid.scss';

const on = '#2c3e50';
const off = '#ffffff';

export type GridType = number[][];

interface PropsType {
  grid: number[][];
  size?: number;
}

function Grid({ grid, size }: PropsType): JSX.Element {
  const { handle } = useContext(AppContext);
  const gridSize = `${size != null ? size : SIZE}px`;

  const handleClick = (evt: SyntheticEvent<HTMLDivElement>): void => {
    const { target } = evt;
    const hasCoords = [has('col'), has('row')];
    // @ts-ignore
    if (target instanceof HTMLDivElement && allPass(hasCoords)(target.dataset)) {
      // @ts-ignore
      handle({ ...target.dataset });
    }
  };

  return (
    <div
      className="grid"
      onClick={handleClick}
      role="grid"
      style={{
        height: gridSize,
        width: gridSize,
      }} 
    >
      <Table isFull>
        {grid.map((row, i) => (
          <Tr key={uuidv1()}>
            {row.map((col, j) => {
              const id = uuidv1();
              return (
                <Td
                  key={id}
                  style={{
                    background: col ? on : off,
                  }}
                  col={i}
                  row={j}
                />
              );
            })}
          </Tr>
        ))}
      </Table>
    </div>
  );
}

export default Grid;

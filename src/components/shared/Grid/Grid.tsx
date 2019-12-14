import React, { useCallback } from 'react';
import uuidv1 from 'uuid/v1';

import { SIZE } from '~/constants';

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
  const gridSize = `${size != null ? size : SIZE}px`;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleClick = (): void => {};

  return (
    <div
      onClick={handleClick}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onKeyPress={useCallback((): void => {}, [])}
      role="grid"
      style={{
        height: gridSize,
        width: gridSize,
      }}
      tabIndex={-1}
    >
      <Table isFull>
        {grid.map((row, i) => (
          <Tr key={uuidv1()}>
            {row.map((col, j) => {
              const id = uuidv1();
              return (
                <Td
                  col={i}
                  key={id}
                  row={j}
                  style={{
                    background: col ? on : off,
                  }}
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

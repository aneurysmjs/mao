import React, { useCallback, FunctionComponent } from 'react';
import uuidv1 from 'uuid/v1';

import { CELL_SIZE } from '~/constants';

import { Table, Tr, Td } from '~/components/base/Table';

import './Finals.scss';
// sconst on = '#2c3e50';
// sconst off = '#ffffff';

const cellSize = {
  // display: 'block',
  height: CELL_SIZE,
  minWidth: CELL_SIZE,
};

const firstRow = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h'];
const secondRow = ['j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's'];

const initialGrid = [firstRow, secondRow];

const tableSize = { height: CELL_SIZE * initialGrid.length, width: firstRow.length * CELL_SIZE };

const Finals: FunctionComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleClick = (): void => {};

  return (
    <div
      className="mx-auto"
      onClick={handleClick}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onKeyPress={useCallback((): void => {}, [])}
      role="grid"
      style={tableSize}
      tabIndex={-1}
    >
      <Table isFull>
        {initialGrid.map(row => (
          <Tr key={uuidv1()}>
            {row.map((col, j) => (
              <Td key={j} style={cellSize}>
                <span className="d-block w-100 text-center">{col}</span>
              </Td>
            ))}
          </Tr>
        ))}
      </Table>
    </div>
  );
};

export default Finals;

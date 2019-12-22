import React, { useCallback, FunctionComponent, useRef, SyntheticEvent } from 'react';
import uuidv1 from 'uuid/v1';

import { CELL_SIZE } from '~/constants';

import { Table, Tr, Td } from '~/components/base/Table';

const cellSize = {
  height: CELL_SIZE,
  minWidth: CELL_SIZE,
};

const firstRow = [
  { char: 'b', pos: '01' },
  { char: 'p', pos: '02' },
  { char: 'm', pos: '03' },
  { char: 'f', pos: '04' },
  { char: 'd', pos: '05' },
  { char: 't', pos: '06' },
  { char: 'n', pos: '07' },
  { char: 'l', pos: '08' },
  { char: 'g', pos: '09' },
  { char: 'k', pos: '10' },
  { char: 'h', pos: '11' },
];
const secondRow = [
  { char: 'j', pos: '12' },
  { char: 'q', pos: '13' },
  { char: 'x', pos: '14' },
  { char: 'zh', pos: '15' },
  { char: 'ch', pos: '16' },
  { char: 'sh', pos: '17' },
  { char: 'r', pos: '18' },
  { char: 'z', pos: '19' },
  { char: 'c', pos: '20' },
  { char: 's', pos: '21' },
];

const initialGrid = [firstRow, secondRow];

const tableSize = { height: CELL_SIZE * initialGrid.length, width: firstRow.length * CELL_SIZE };

const Initials: FunctionComponent = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleClick = (evt: SyntheticEvent<HTMLDivElement>): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    if (evt.target.tagName === 'DIV') {
      const {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        dataset: { char, pos },
      } = evt.target;

      (async (): Promise<void> => {
        try {
          const final = await import(
            // eslint-disable-next-line prefer-template
            '~/assets/mp3/initials/Initials-' + pos + '_' + char.toUpperCase() + '.mp3'
          );
          if (audioRef && audioRef.current) {
            audioRef.current.src = final.default;
            audioRef.current.play();
          }
        } catch (error) {
          throw new Error(error);
        }
      })();
    }
  };

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
      <audio ref={audioRef}>
        <track kind="captions" />
      </audio>
      <Table isFull>
        {initialGrid.map(row => (
          <Tr key={uuidv1()}>
            {row.map(col => (
              <Td
                data={{
                  'data-char': col.char,
                  'data-pos': col.pos,
                }}
                isHover
                key={col.char}
                style={cellSize}
              >
                <span className="d-block w-100 text-center">{col.char}</span>
              </Td>
            ))}
          </Tr>
        ))}
      </Table>
    </div>
  );
};

export default Initials;

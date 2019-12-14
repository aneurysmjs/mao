import React, { FunctionComponent } from 'react';

import { YEAR } from '~/constants/';

const Footer: FunctionComponent = () => (
  <footer className="text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">{YEAR}</div>
      </div>
    </div>
  </footer>
);

export default Footer;

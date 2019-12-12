import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => (
  <footer className="text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">{new Date().getFullYear()}</div>
      </div>
    </div>
  </footer>
);

export default Footer;

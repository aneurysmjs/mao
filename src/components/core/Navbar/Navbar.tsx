import React, { useState, FunctionComponent } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';

const Navbar: FunctionComponent<RouteComponentProps> = ({ history }: RouteComponentProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (endpoint: string): void => {
    setOpen(false);
    history.push(endpoint);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mao
        </Link>
        <button
          className="navbar-toggler"
          onClick={(): void => {
            setOpen(!isOpen);
          }}
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={classNames('collapse navbar-collapse justify-content-end', {
            show: isOpen,
          })}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn btn-link"
                onClick={(): void => {
                  handleClick('/');
                }}
                role="link"
                type="button"
              >
                Home
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);

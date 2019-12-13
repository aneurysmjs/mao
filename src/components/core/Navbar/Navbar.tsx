import React, { useState, ComponentType } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

interface PropsType {
  history: {
    push(s: string): void;
  };
}

const Navbar: ComponentType<PropsType> = ({ history }: PropsType) => {
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
          type="button"
          data-toggle="collapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={classNames('collapse navbar-collapse justify-content-end', {
            show: isOpen,
          })}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button
                type="button"
                className="nav-link"
                onClick={(): void => {
                  handleClick('/');
                }}
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

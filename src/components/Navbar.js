import React from "react"; // write only 'rfc' and enter show function based components.
import PropTypes from "prop-types"; // Write only 'impt' and enter

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              {props.btn}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// PropTypes syntax

// ComponentName.propTypes = {
//   name: PropTypes.string
// }

// # propTypes ---
// optionalArray: PropTypes.array,
//   optionalBool: PropTypes.bool,
//   optionalFunc: PropTypes.func,
//   optionalNumber: PropTypes.number,
//   optionalObject: PropTypes.object,
//   optionalString: PropTypes.string,
//   optionalSymbol: PropTypes.symbol

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired
// };

// Default props -- When we are not pass props then used.

// Navbar.defaultProps = {
//   title: "SRK",
//   about: "About him",
// };

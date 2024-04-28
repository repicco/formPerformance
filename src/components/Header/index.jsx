let renderCount = 0;

import "./header.css";
import PropTypes from 'prop-types'

export function Header({component}) {
  renderCount++;

  return <h3 className="header">Render {component} {renderCount}</h3>;
}

Header.propTypes = {
  component: PropTypes.string.isRequired
}

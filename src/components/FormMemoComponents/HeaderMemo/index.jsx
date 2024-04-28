
import { memo } from "react";
import "./styles.css";
import PropTypes from 'prop-types'

let renderCount = 0;

/* Componentes simples... não deve ser usado com useState ou useEffect pois irá anular essa mudança */
export const MemorizedHeader = memo(function MemorizedHeader({name}){
  renderCount++;
  console.log('Render Component Header')

  return <h3 className="header">Render {name} {renderCount}</h3>;
})

MemorizedHeader.propTypes = {
    name: PropTypes.string.isRequired
}




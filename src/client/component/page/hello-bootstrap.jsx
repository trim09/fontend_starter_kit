// @flow

import React from 'react'
import ButtonGroup from "react-bootstrap/es/ButtonGroup";
import DropdownButton from "react-bootstrap/es/DropdownButton";
import MenuItem from "react-bootstrap/es/MenuItem";
import Button from "react-bootstrap/es/Button";

const BootstrapPage = () =>
    <div>
      <ButtonGroup>
        <DropdownButton id="dropdown-btn-menu" bsStyle="success" title="Dropdown">
          <MenuItem key="1">Dropdown link1</MenuItem>
          <MenuItem key="2">Dropdown link2</MenuItem>
        </DropdownButton>
        <Button bsStyle="info">Middle</Button>
        <Button bsStyle="info">Right</Button>
      </ButtonGroup>
    </div>

export default BootstrapPage

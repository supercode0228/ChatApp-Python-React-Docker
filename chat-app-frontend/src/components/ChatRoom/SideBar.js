import React, { Component } from 'react';
// reactstrap components
import {
  Collapse,
  Navbar,
  Container,
} from 'reactstrap';

class SideBar extends Component {
	state = {
    collapseOpen: false
	};
	
	// toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
	};
	
	
	render() {

		return (
      <Navbar
        className="chat-room__sidebar"
        expand="md"
        id="sidenav-main"
      >
				<Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <i className="fas fa-bars" />
          </button>
					{/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
						Menu
					</Collapse>
				</Container>
			</Navbar>
		)
	}
}

export default SideBar;


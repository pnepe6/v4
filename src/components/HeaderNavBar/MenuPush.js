/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * MenuPush Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';
const defaultProps = { theme };
import Close from '../Button/Close';

class MenuPush extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    'menu-right': PropTypes.bool,
    'menu-left': PropTypes.bool,
    onCLick:  PropTypes.func,
  };

  render() {
    return (
      <div
        className={cn('navbar-toggleable-xs', this.props.className, {
          'menu-right': this.props['menu-right'],
          'menu-left': this.props['menu-left'],
          active: this.props.active,
        })}
      >
        <Close onClick={this.handleClick} />
        {this.props.children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
MenuPush = styled(MenuPush)`
  ${(props) => `
    position: fixed;
    top: 0;
    width: ${props.theme['$menu-push-width']};
    height: 100%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
    z-index: ${props.theme['$zindex-menu-push']};
    
    & .menu-offset {
      .brand-inverse {
        height: ${props.theme['$navbar-height']};
        margin: 0 0 .75rem 0;
        background-color: ${props.theme['$brand-primary']};
        .nav-link {
          color: white;
        }
      }
      
      .nav-item {
        padding: .25rem 0;
      }
    }
    & .close-menu {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  `}
`;


MenuPush.defaultProps = defaultProps;

export default MenuPush;

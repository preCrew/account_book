import React from 'react';
import { Link } from 'react-router-dom';

import { NavWrap, iconStyle, NavInner } from './Nav.style';
import {
  AiFillHome,
  AiFillPieChart,
  AiOutlineCalendar,
  AiOutlineUser,
} from 'react-icons/ai';

const Nav = () => {
  return (
    <NavWrap>
      <NavInner>
        <li>
          <Link to="./">
            <AiFillHome style={iconStyle} />
          </Link>
        </li>
        <li>
          <Link to="./">
            <AiFillPieChart style={iconStyle} />
          </Link>
        </li>
        <li>
          <Link to="./">
            <AiOutlineCalendar style={iconStyle} />
          </Link>
        </li>
        <li>
          <Link to="./">
            <AiOutlineUser style={iconStyle} />
          </Link>
        </li>
      </NavInner>
    </NavWrap>
  );
};

export default Nav;

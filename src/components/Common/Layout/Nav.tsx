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
          <Link to="./statistics">
            <AiFillPieChart style={iconStyle} />
          </Link>
        </li>
        <li>
          <Link to="./calendar">
            <AiOutlineCalendar style={iconStyle} />
          </Link>
        </li>
        <li>
          <Link to="./mypage">
            <AiOutlineUser style={iconStyle} />
          </Link>
        </li>
      </NavInner>
    </NavWrap>
  );
};

export default Nav;

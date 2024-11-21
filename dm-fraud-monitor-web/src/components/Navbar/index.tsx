import { useState } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu, { RightMenuMobile } from './RightMenu';
import { Drawer } from 'antd';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from "@/assets/react.svg"
import ToggleBtn from '../ToggleBtn';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => { setVisible(true);};
  const onClose = () => { setVisible(false);};

  return (
    <nav className="menu">
      <div className="menu__logo">
        <Link to="/" >
          <img src={logo} alt='xynced logo' />
        </Link>
      </div>
      <div className="menu__container">

        <div className="menu__menus gap-6 ">
          <LeftMenu />
          <RightMenu />
          <ToggleBtn />
        </div>

        <div className="menu__mobile-button">
          <div className='flex gap-4 items-center'>
            <RightMenuMobile />
            <HiOutlineMenuAlt3 onClick={showDrawer} className='text-xl' />
          </div>
        </div>

        <Drawer
          title={<img className='w-[100px]' src={logo} alt='xynced logo' />}
          placement="right"
          className="menu_drawer  "
          closable={false}
          onClose={onClose}
          open={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;

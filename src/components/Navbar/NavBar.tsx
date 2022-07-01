import Image from 'next/image';
import { Nav } from './NavbarStyled';
import Logo from '../../../public/images/logo.png';
import { Menu } from './menu/Menu';
import { WineBox } from './Winebox/WineBox';
import { Perfil } from './Perfil/Perfil';
import { Search } from './Search/Search';
import MenuMobile from '../../../public/images/menumobile.png';

export const Navbar = () => (
  <Nav>
    <div className="logo-menu">
      <div className="menu-mobile">
        <Image src={MenuMobile} alt="menu para mobile" width={21.88} height={16.94} />
      </div>
      <Image src={Logo} alt="Logo Wine" width={102.95} height={31} />
      <Menu />
    </div>
    <div className="buttons-left">
      <Search />
      <Perfil />
      <WineBox />
    </div>
  </Nav>
);

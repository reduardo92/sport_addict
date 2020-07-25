import styled from 'styled-components';
import AlertMsg from '../ui/AlertMsg';
import Footer from './Footer';
import ModalImg from './ModalImg';
import Navbar from './Navbar/Navbar';

const Styled = styled.main``;

const Layout = ({ className, children }: any) => (
  <>
    <Navbar />
    <AlertMsg />
    <Styled className={className}>
      {children}
      <ModalImg />
    </Styled>
    <Footer />
  </>
);

export default Layout;

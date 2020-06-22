import styled from 'styled-components';
import ModalImg from './ModalImg';
import Navbar from './Navbar/Navbar';
const Styled = styled.main``;

const Layout = ({ className, children }: any) => (
  <>
    <Navbar />
    <Styled className={className}>
      {children}
      <ModalImg />
    </Styled>
  </>
);

export default Layout;

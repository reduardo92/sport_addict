import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
const Styled = styled.main``;

const Layout = ({ className, children }: any) => (
  <>
    <Navbar />
    <Styled className={className}>{children}</Styled>
  </>
);

export default Layout;

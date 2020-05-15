import styled from 'styled-components';

interface titleProps {
  title: string;
  className?: string;
}

const Styled = styled.h2`
  /* font-size: var(--fs-h2); */
`;

export default ({ title, className }: titleProps) => (
  <Styled className={`title ${className}  is-4 `}>{title}</Styled>
);

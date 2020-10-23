import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Tag = styled(Link)`
  color: ${(p) => p.theme.colors.grey};
  font-weight: 700;
  margin-left: 1rem;
  transition: color 0.3s ease-in-out;

  &:first-child {
    margin-left: 0px;
  }

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

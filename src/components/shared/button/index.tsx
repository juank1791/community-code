import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonTypes = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
};
function colorSwitcher(color = '', theme) {
  switch (color) {
    case 'secondary':
      return { color: theme.Colors.ColorsMain.dark, hover: '#9D1F43' };
    case 'accent':
      return { color: theme.Colors.ColorsMain.accent, hover: '#194385' };
    case 'primary':
      return { color: theme.Colors.ColorsMain.base, hover: '#C31818' };
    default:
      return { color: theme.Colors.ColorsMain.dark, hover: '#9D1F43' };
  }
}

const ButtonStyled = styled.button<ButtonTypes>`
  background-color: ${({ theme, color }) => colorSwitcher(color, theme).color};
  height: max-content;
  width: 250px;
  border: none;
  border-radius: ${({ theme }) => theme.Borders};
  color: ${({ theme }) => theme.Colors.ShadesWhite[200]};
  font-family: ${({ theme }) => theme.Fontfamily};
  font-weight: 500;
  font-size: ${({ theme }) => theme.Texts.Normal.FontSize};
  line-height: ${({ theme }) => theme.Texts.Normal.LineHeight};
  padding: 24px 16px;
  ${({ theme }) => theme.Mediaquery.medium} {
    padding: 24px 32px;
  }
  :hover {
    background-color: ${({ theme, color }) => colorSwitcher(color, theme).hover};
  }
  cursor: pointer;
  ${({ size }) =>
    size === 'small' &&
    css`
      border-radius: 8px;
      padding: 16px 24px;
    `};
  transition: all 0.5s ease;
`;

const ButtonShared: React.FC<ButtonTypes> = ({ size, color, children }) => {
  return (
    <ButtonStyled color={color} size={size}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonShared;

import theme from '@/theme/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

export const Arrow = styled.span`
  font-size: 12px;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: -20px;
  left: -100px;
  display: flex;
  flex-direction: row;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px;
  z-index: 10;
`;

export const DropdownItem = styled.div<{ $selected: boolean }>`
  font-size: 14px;
  padding: 6px 10px;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 4px;
  background: ${(p) => (p.$selected ? `${theme.color.primary.mainPrimary}` : 'transparent')};
  color: ${(p) => (p.$selected ? `${theme.color.common.light}` : `${theme.color.common.dark}`)};

  &:hover {
    background: #f3f3f3;
  }

  & + & {
    margin-left: 8px;
  }
`;

//styling for translation tabs
export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 6px;
`;

export const Tabs = styled.button<{ $selected: boolean }>(
  ({ $selected = false }) => `
font-size: 14px;
font-weight: 500;
padding: 6px 10px;
white-space: nowrap;
border-radius: 4px;
background: ${$selected ? `${theme.color.primary.mainPrimary}` : 'transparent'};
color: ${$selected ? `${theme.color.common.light}` : `${theme.color.common.dark}`};
cursor: pointer;
`,
);

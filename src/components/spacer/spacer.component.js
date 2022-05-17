import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  bottom: "margin-bottom",
  right: "margin-right",
};

const getVarient = (position, size, theme) => {
  const sizeIndex = sizesVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVarient(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

/* not working this way of call a fuction in Android
export const Spacer = styled.View`
  ${({ position, size, theme }) => getVarient(position, size, theme)}
`;
*/

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

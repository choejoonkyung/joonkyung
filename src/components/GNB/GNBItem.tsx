import { css } from "@emotion/react";
import { match, NavLink } from "react-router-dom";
import palette from "../../lib/styles/palette";
import SvgIcon, { SvgIconType } from "../SvgIcon";
import * as H from "history";
import { navFadeIn } from "../../lib/styles/animations";

export type GNBItemProps = {
  icon: SvgIconType;
  text: string;
  to: string;
  isActive?<Params extends { [K in keyof Params]?: string }>(
    match: match<Params> | null,
    location: H.Location
  ): boolean;
};

function GNBItem({ icon, to, text, isActive }: GNBItemProps) {
  return (
    <li css={liStyle}>
      <NavLink to={to} css={navStyle} isActive={isActive} exact>
        <SvgIcon name={icon} />
        <span>{text}</span>
      </NavLink>
    </li>
  );
}

const liStyle = css`
  &:first-child {
    border-top-left-radius: 0.75rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.75rem;
  }
`;

const navStyle = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 3.25rem;
  padding: 1rem;
  color: ${palette.blueGrey[600]};

  &:hover {
    background: ${palette.grey[50]};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    font-size: 1rem;
    margin-left: 1rem;
    line-height: 1rem;
  }

  &.active {
    background: ${palette.grey[100]};
    border-left: 0.1875rem solid ${palette.blueGrey[900]};
    padding-left: calc(1rem - 0.1875rem);
    color: ${palette.blueGrey[900]};
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    transition: 0.1s ease-in;
    animation: ${navFadeIn} 0.5s ease-in-out 1;

    span {
      font-weight: bold;
    }
  }
`;

export default GNBItem;

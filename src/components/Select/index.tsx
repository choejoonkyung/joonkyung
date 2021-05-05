import React from "react";
import { css } from "@emotion/react";
import { boxBorder, resetSelect } from "../../lib/styles/customs";
import SvgIcon from "../SvgIcon";
import palette from "../../lib/styles/palette";

export type SelectProps = {
  list: string[];
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
};

function Select({ list = [], onChange }: SelectProps) {
  return (
    <div css={wrapperStyle}>
      <select css={selectStyle} onChange={onChange} defaultValue={list[0]}>
        {list.map((v, i) => (
          <option key={i}>{v}</option>
        ))}
      </select>
      <SvgIcon name="arrow" />
    </div>
  );
}

const wrapperStyle = css`
  display: flex;
  position: relative;
  align-items: center;
  width: 10rem;
  height: 3rem;
  background-color: ${palette.white};
  border-radius: 0.75rem;

  svg {
    position: absolute;
    right: 1rem;
    width: 1rem;
    color: ${palette.blueGrey[900]};
    z-index: 3;
  }
`;

const selectStyle = css`
  ${resetSelect};
  ${boxBorder};
  background: none;
  width: inherit;
  height: inherit;
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: normal;
  color: ${palette.blueGrey[900]};
  z-index: 5;
`;

export default Select;

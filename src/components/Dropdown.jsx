import React from "react";

// Styled components
import styled from "styled-components";

const Select = styled.select`
  margin-top: 2%;
  margin-bottom: 2%;
  border: 1px solid #333;
  width: 50%;
  justify-self: center;
  align-self: center;
  background-color: whitesmoke;
`;

const Dropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <Select value={value} onChange={onChange}>
      {placeholder && <option>{placeholder}</option>}
      {options?.map((option) => (
        <option>{option}</option>
      ))}
    </Select>
  );
};

export default Dropdown;

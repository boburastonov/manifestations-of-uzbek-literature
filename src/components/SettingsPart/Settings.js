import styled from "styled-components";

export const SettingsContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const SettingsHeading = styled.h1`
  font-size: 18px;
  color: #212121;
  margin-bottom: 32px;
`;

export const CustomSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const CustomSelectHeading = styled.label`
  font-size: 13px;
  color: #464e5f;
  margin-bottom: 7px;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 11px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #464e5f;
  background-color: #f3f6f9;
  border-radius: 4px;
  border: 0;
  outline: none;
  margin-bottom: 3px;
`;

export const Option = styled.option`
  color: #464e5f;
  font-size: 14px;
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #b5b5c3;
`;

export const Switch = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ecf0f3;
  padding-bottom: 40px;
  margin-bottom: 230px;
`;

export const SwitchHeading = styled.h3`
  font-size: 13px;
  color: #464e5f;
  margin-bottom: 5px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  width: 87px;
  height: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #f3f6f9;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  &::before {
    position: absolute;
    content: "";
    width: 28px;
    height: 28px;
    right: 6px;
    bottom: 1px;
    background-color: #3699ff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked {
    + ${Slider} {
      background-color: #2196f3;
      &::before {
        -webkit-transform: translateX(-47px);
        -ms-transform: translateX(-47px);
        transform: translateX(-47px);
        background-color: #fff;
      }
    }
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  ${SwitchInput} {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + Slider {
      background-color: #2196f3;
    }
    &:not(:checked) + Slider::before {
      -webkit-transform: translateX(-26px);
      -ms-transform: translateX(-26px);
      transform: translateX(-26px);
    }
    &:focus + Slider {
      box-shadow: 0 0 1px #2196f3;
    }
  }
`;

/* Rounded sliders */
// .slider.round {
//   border-radius: 34px;
// }

// .slider.round:before {
//   border-radius: 50%;
// }

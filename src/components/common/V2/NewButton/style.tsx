import styled from '@emotion/styled';

export const ButtonWrapper = styled.button`
  display: flex;
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #fff;
  cursor: pointer;
  border: 2px solid #230052;
  gap: 8px;
  padding: 12px;

  color: #000;

  color: #262956;
  font-size: 20px;
  font-family: Passion One;
  font-weight: 400;
  word-wrap: break-word;
  ${({
    state,
    iconName
  }: {
    state?: 'selected' | 'unselected' | 'unselected-light' | 'hover';
    iconName?: string;
  }) => {
    switch (state) {
      case 'selected':
        return `background-color: #393D73;
                color: #fff;
                ${
                  iconName === 'Google'
                    ? ''
                    : `.icon{
        div > svg > path {
          fill: #fff;
        };}`
                }
                `;
      case 'unselected':
        return `border: 2px solid #fff;
        color: #fff;
        background-color: transparent;
        ${
          iconName === 'Google'
            ? ''
            : `.icon{
        div > svg > path {
          fill: #fff;
        };}`
        }`;
      case 'unselected-light':
        return `border: 2px solid #262956;
        color: #262956;
        background-color: transparent;
        
        ${
          iconName === 'Google'
            ? ''
            : `.icon{
        div > svg > path {
          fill: #262956;
        };}`
        }
        
        `;
    }
  }}

  :disabled {
    opacity: 0.5;
  }
  :hover {
    ${({
      disabled,
      danger,
      state,
      iconName
    }: {
      disabled?: boolean;
      state?: 'selected' | 'unselected' | 'unselected-light' | 'hover';
      danger?: boolean;
      iconName?: string;
    }) => {
      return disabled || state === 'selected'
        ? ''
        : danger
        ? `border: 2px solid #CC4949;
        color:#fff;
        background-color: #CC4949;
        ${
          iconName === 'Google'
            ? ''
            : `.icon{
        div > svg > path {
          fill: #fff;
        };}`
        }
        `
        : `background-color: #F8D34D;
    color: #262956;
    border: 2px solid #F8D34D;
    ${
      iconName === 'Google'
        ? ''
        : `..icon{
        div > svg > path {
          fill: #262956;
        };}`
    }
    `;
    }}
  }
`;

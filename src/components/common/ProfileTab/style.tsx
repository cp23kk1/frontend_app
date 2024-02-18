import styled from '@emotion/styled';

export const ProfileTabWrapper = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  max-width: 200px;
  height: 40px;
  gap: 12px;
  font-size: 24px;
  font-weight: 500;
  font-family: Fredoka;
  padding: 10px 12px;
  align-items: center;
  cursor: pointer;
  ${({ isOpen }: { isOpen: boolean }) => {
    return isOpen ? `border-radius: 16px 16px 0 0;` : `border-radius: 16px;`;
  }}

  background-color: #fff;
  justify-content: space-between;

  .dropdown {
    position: absolute;

    width: 100%;
    top: 60px;
    right: 0;
    .dropdown-content {
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: 0 0 16px 16px;
      padding: 10px 16px;
      gap: 10px;

      .list {
        border: 0;
        background: none;
        text-align: start;
        font-size: 20px;
        font-weight: 500;
        font-family: Fredoka;
        cursor: pointer;
        transition: 0.25s;
      }
      .list:hover {
        scale: 1.1;
      }
    }
  }
  .profilepic {
    border-radius: 16px;
  }
  .username {
    justify-content: end;
    width: 100%;
    overflow: hidden;
  }
  .username > p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .icon {
    transition: 0.25s;
    ${({ isOpen }: { isOpen: boolean }) => {
      return isOpen ? `transform: rotate(180deg);` : ``;
    }}
  }
`;

export const DropDownWrapper = styled.div``;

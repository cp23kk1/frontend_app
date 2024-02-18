import styled from '@emotion/styled';

export const ProfileTabWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  gap: 12px;
  font-size: 24px;
  font-weight: 500;
  font-family: Fredoka;
  padding: 10px 12px;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  justify-content: space-between;
  .dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
    border-radius: 0 0 16px 16px;
    top: 50px;
    left: 0;
    gap: 20px;
    padding: 16px;
    .list {
      border: 0;
      background: none;
      text-align: start;
      font-size: 20px;
      font-weight: 500;
      font-family: Fredoka;
      cursor: pointer;
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
    cursor: pointer;
    transition: 0.25s;
    ${({ isOpen }: { isOpen: boolean }) => {
      return isOpen ? `transform: rotate(180deg);` : ``;
    }}
  }
`;

export const DropDownWrapper = styled.div``;

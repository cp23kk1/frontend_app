import styled from '@emotion/styled';

export const ProfileTabWrapper = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: 36px;
  padding: 6px;
  gap: 8px;

  cursor: pointer;
  border-radius: 12px;

  background-color: #fff;

  .dropdown {
    position: absolute;
    z-index: 2;

    width: 100%;
    top: 50px;
    right: 0;
    .dropdown-content {
      display: flex;
      flex-direction: column;
      background-color: white;
      border-radius: 12px;
      border: 2px solid #000;
      .list {
        border: 0;
        background: none;
        text-align: start;
        color: #262956;
        font-size: 20px;
        font-family: Passion One;
        font-weight: 400;
        word-wrap: break-word;
        width: 100%;
        cursor: pointer;
        transition: 0.25s;
        padding: 10px 16px;
        border-radius: 12px;

        :hover {
          background-color: #e6e6e6;
        }
      }
    }
  }
  .profilepic {
    border-radius: 50%;
  }
  .username {
    display: flex;
    align-items: center;
    color: #262956;
    font-size: 20px;
    font-family: Passion One;
    font-weight: 400;
    word-wrap: break-word;
    justify-content: start;
    width: 124px;
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

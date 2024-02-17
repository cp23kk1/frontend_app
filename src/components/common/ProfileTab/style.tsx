import styled from '@emotion/styled';

export const ProfileTabWrapper = styled.div`
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
  .profilepic {
    border-radius: 16px;
  }
  .username {
    width: 100%;
    overflow: auto;
    text-overflow: ellipsis;
  }
  .icon {
    cursor: pointer;
  }
`;

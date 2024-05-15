import styled from '@emotion/styled';

export const PlayerCardWrapper = styled.div`
  display: flex;
  width: calc(100% - 32px);
  height: calc(ุ69px - 12px -12px);
  padding: 12px 16px;

  color: white;
  font-size: 20px;
  font-family: Passion One;
  font-weight: 400;
  word-wrap: break-word;
  align-items: center;
  background-color: #262956;
  border-radius: 12px;
  .rank {
    justify-content: center;
    text-align: center;
  }
  .user {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    .image {
      border-radius: 50%;
      width: 45px;
      height: 45px;
    }
  }
  .score {
    justify-content: center;
    text-align: end;
  }
`;

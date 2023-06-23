import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  border-radius: 3px;
  gap: 7px;
  padding: 7px 10px;
  box-shadow: 12px 18px 49px -12px rgba(122, 122, 191, 1);
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${({ isonline }) => {
  switch (isonline) {
    case 'true': return 'green';
    case 'false': return 'red';
    default: return;
    }
  }};
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const FriendName = styled.p`
  font-weight: 500;
`;

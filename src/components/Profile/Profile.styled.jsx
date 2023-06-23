import styled from 'styled-components';

export const ProfileCard = styled.div`
  border-radius: 5px;
  background-color: #ebebeb;
  width: 250px;
  padding-top: 25px;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  margin-bottom: 25px;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #454545;
  margin-bottom: 7px;
`;

export const UserTag = styled.p`
  margin-bottom: 7px;
  color: #919191;
  font-size: 14px;
  font-weight: 500;
`;
export const UserLocation = styled.p`
  color: #919191;
  font-size: 14px;
  font-weight: 500;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #e0e0e0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #aeaeae;
`;

export const UserStat = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  align-items: center;
  padding-bottom: 15px;
  padding-top: 15px;
  gap: 3px;
  &:not(:first-of-type) {
    border-left: 1px solid #aeaeae;
  }
`;

export const StatLabel = styled.span`
  color: #727272;
  font-size: 12px;
  font-weight: 600;
`;

export const StatQuantity = styled.span`
  font-weight: 600;
  color: #454545;
`;

// .name,
// .tag {
//   margin-bottom: 7px;
// }

// .tag,
// .location {
//   color: #919191;
//   font-size: 14px;
//   font-weight: 500;
// }

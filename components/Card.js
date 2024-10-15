// components/Card.js
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, background-color 0.2s;
  background-color: #4a90e2; /* 세련된 배경색 */
  color: white; /* 폰트 색상 */
  width: 100%; /* 카드 너비를 100%로 설정 */
  height: 200px; /* 카드 높이 */

  &:hover {
    transform: scale(1.05);
    background-color: #357ab8; /* 마우스 오버 시 색상 변화 */
  }

  cursor: pointer; /* 클릭 가능 표시 */
`;

const Image = styled.div`
  font-size: 50px; /* 이모지 크기 조정 */
  text-align: center;
  padding: 20px 0;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 16px;
  text-align: center;
`;

const Card = ({ title, content, imageUrl, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <Image>{imageUrl}</Image> {/* 이모지 표시 */}
      <Title>{title}</Title>
    </CardContainer>
  );
};

export default Card;

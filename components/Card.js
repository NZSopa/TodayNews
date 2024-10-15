// components/Card.js
import styled from 'styled-components';

const CardContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 16px;
`;

const Content = styled.p`
  font-size: 1em;
  margin: 0 16px 16px;
`;

const Card = ({ title, content, imageUrl }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Content>{content}</Content>
    </CardContainer>
  );
};

export default Card;

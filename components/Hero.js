// components/Hero.js
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: url('https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg') no-repeat center center;
  background-size: cover;
  color: white;
  text-align: left;
  padding: 100px 50px;
`;

const HeroTitle = styled.h1`
  font-size: 4em;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5em;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>NATURE'S BALANCE</HeroTitle>
      <HeroSubtitle>DISCOVERING THE SECRETS OF WELLNESS</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero; // default export 확인

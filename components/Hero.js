// components/Hero.js
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: url('https://images.pexels.com/photos/273936/pexels-photo-273936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center;
  background-size: cover;
  color: black;
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
      <HeroTitle>Reading Bible everday</HeroTitle>
      <HeroSubtitle>FOR GOD SO LOVED THE WORLD THAT HE GAVE HIS ONE AND ONLY SON, THAT WHOEVER BELIEVES IN HIM SHALL NOT PERISH BUT HAVE ETERNAL LIFE. - JOHN 3:16</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero; // default export 확인

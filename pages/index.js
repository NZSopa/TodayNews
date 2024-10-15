import Image from "next/image";
import localFont from "next/font/local";
import Card from '../components/Card';
import Hero from '../components/Hero';
import styled from 'styled-components';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const LatestNewsContainer = styled.div`
  text-align: center;
  margin: 40px 0;
`;

const LatestNewsTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Home = () => {
  const newsData = [
    {
      title: 'Fashion Forward',
      content: 'Staying on top of the latest trends.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    // 추가 카드 데이터...
  ];

  return (
    <div>
      <Hero />
      <LatestNewsContainer>
        <LatestNewsTitle>LATEST NEWS</LatestNewsTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {newsData.map((news, index) => (
            <Card key={index} title={news.title} content={news.content} imageUrl={news.imageUrl} />
          ))}
        </div>
      </LatestNewsContainer>
    </div>
  );
};

export default Home;

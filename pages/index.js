import { useEffect, useState } from 'react';
import Image from "next/image";
import localFont from "next/font/local";
import Card from '../components/Card';
import Hero from '../components/Hero';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { marked } from 'marked'; // marked 라이브러리 추가

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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 최대 3개 카드 */
  gap: 16px; /* 카드 간의 간격 */
  justify-content: center; /* 중앙 정렬 */
`;

const Home = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwW6B4NuGyvVrsof1pLOxwOIv94LFweWfEyelyEN9ulRUkrXhXsItN15PR2vbJYq54W/exec');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Fetch error:', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to fetch data. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Close',
        });
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (summary) => {
    Swal.fire({
      title: 'Summary',
      html: marked(summary), // 마크다운을 HTML로 변환하여 표시
      icon: 'info',
      confirmButtonText: 'Close',
    });
  };

  return (
    <div>
      <Hero />
      <LatestNewsContainer>
        <LatestNewsTitle>LATEST NEWS</LatestNewsTitle>
        <CardGrid>
          {newsData.map((news, index) => (
            <Card
              key={index}
              title={news.name}
              content={news.summary}
              imageUrl={news.image}
              onClick={() => handleCardClick(news.summary)}
            />
          ))}
        </CardGrid>
      </LatestNewsContainer>
    </div>
  );
};

export default Home;

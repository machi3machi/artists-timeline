import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaPaintBrush, FaStar } from 'react-icons/fa';
import { artists, Artist } from './artists';
import React, { Fragment } from 'react';

// eraごとにグループ化
const groupByEra = (data: Artist[]): Record<string, Artist[]> => {
  return data.reduce((acc, artist) => {
    if (!acc[artist.era]) acc[artist.era] = [];
    acc[artist.era].push(artist);
    return acc;
  }, {} as Record<string, Artist[]>);
};

const eraColors: Record<string, string> = {
  'ロマネスク・ゴシック期': '#b3cde0',
  'ルネサンス': '#fbb4ae',
  'バロック・ロココ期': '#ccebc5',
  '新古典主義・ロマン主義・写実主義': '#decbe4',
  '印象派・ポスト印象派': '#fed9a6',
  '近代〜現代美術': '#ffffcc'
};

const eraRanges: Record<string, string> = {
  'ロマネスク・ゴシック期': '約1000〜1400年',
  'ルネサンス': '約1400〜1600年',
  'バロック・ロココ期': '約1600〜1800年',
  '新古典主義・ロマン主義・写実主義': '約1750〜1900年',
  '印象派・ポスト印象派': '約1860〜1920年',
  '近代〜現代美術': '約1900年〜現在',
};

const App: React.FC = () => {
  const grouped = groupByEra(artists);
  return (
    <div className="container">
      <header>
        <h1>芸術家年表</h1>
        <p>主要芸術家の年表を時代ごとに縦型タイムラインで一覧できます。</p>
      </header>
      <main>
        <VerticalTimeline
          layout="2-columns"
          lineColor="#ddd"
          animate={true}
          className="vertical-timeline-custom"
        >
          {Object.entries(grouped).map(([era, list]) => (
            <Fragment key={era}>
              <VerticalTimelineElement
                iconStyle={{
                  background: eraColors[era] || '#ccc',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  fontSize: '18px'
                }}
                icon={<FaStar size={16} />}
                contentStyle={{ 
                  background: eraColors[era] || '#eee', 
                  color: '#222', 
                  textAlign: 'center',
                  boxShadow: '0 3px 0 #ddd'
                }}
                contentArrowStyle={{ borderRight: `7px solid ${eraColors[era] || '#eee'}` }}
                date={eraRanges[era] || ''}
              >
                <h2>{era}</h2>
              </VerticalTimelineElement>
              {list.map((artist, idx) => (
                <VerticalTimelineElement
                  key={era + idx}
                  className="vertical-timeline-element--work"
                  contentStyle={{ 
                    background: '#f7f7fa', 
                    color: '#222',
                    boxShadow: '0 3px 0 #ddd'
                  }}
                  contentArrowStyle={{ borderRight: '7px solid #eee' }}
                  date={artist.date}
                  iconStyle={{
                    background: artist.iconColor,
                    color: '#fff',
                    width: '36px',
                    height: '36px',
                    fontSize: '16px'
                  }}
                  icon={<FaPaintBrush size={16} />}
                >
                  <h3 className="vertical-timeline-element-title">{artist.name}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{artist.country}</h4>
                  <p>{artist.work}</p>
                </VerticalTimelineElement>
              ))}
            </Fragment>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: '#f9d423', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </main>
      <style>{`
        .container {
          max-width: 1440px;
          margin: auto;
          padding: 1rem;
          background: #f5f5f5;
          min-height: 100vh;
        }

        header {
          text-align: center;
          margin-bottom: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h1 {
          margin: 0;
          font-size: clamp(1rem, 10vw, 1.5rem);
          color: #213547;
        }

        header p {
          margin: 0.5rem 0 0;
          color: #666;
          font-size: clamp(0.3rem, 2vw, 0.8rem);
        }

        main {
          background: white;
          padding: 0.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h2 {
          margin: 0;
          font-size: clamp(1rem, 2vw);
        }

        .vertical-timeline-element-title {
          font-size: clamp(0.5rem, 1vw);
          margin: 0 0 0;
        }

        .vertical-timeline-element-subtitle {
          font-size: clamp(0.2rem, 1vw);
          margin: 0 0 0.2rem;
          color: #666;
        }

        .vertical-timeline-element-content p {
          font-size: clamp(0.9rem, 1.2vw);
          margin: 0;
          color: #666;
        }

        .vertical-timeline-element-date {
          font-size: clamp(0.9rem, 1.2vw);
          color: #666;
          font-weight: 900;
        }

        @media (max-width: 1240px) {
          .container {
            padding: 0.5rem;
          }

          .vertical-timeline-element-content {
            padding: 0.5em 0.5em;
          }
        }
      `}</style>
    </div>
  );
}

export default App; 
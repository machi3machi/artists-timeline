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
        >
          {Object.entries(grouped).map(([era, list]) => (
            <Fragment key={era}>
              <VerticalTimelineElement
                iconStyle={{ background: eraColors[era] || '#ccc', color: '#fff' }}
                icon={<FaStar />}
                contentStyle={{ 
                  background: eraColors[era] || '#eee', 
                  color: '#222', 
                  textAlign: 'center',
                  boxShadow: '0 3px 0 #ddd'
                }}
                contentArrowStyle={{ borderRight: `7px solid ${eraColors[era] || '#eee'}` }}
                date={era}
              >
                <h2>{era}</h2>
              </VerticalTimelineElement>
              {list.map((artist, idx) => (
                <VerticalTimelineElement
                  key={era + idx}
                  className="vertical-timeline-element--work"
                  contentStyle={{ 
                    background: '#fff', 
                    color: '#222',
                    boxShadow: '0 3px 0 #ddd'
                  }}
                  contentArrowStyle={{ borderRight: '7px solid #fff' }}
                  date={artist.date}
                  iconStyle={{ background: artist.iconColor, color: '#fff' }}
                  icon={<FaPaintBrush />}
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
          margin: 0 auto;
          padding: 2rem;
          background: #f5f5f5;
          min-height: 100vh;
        }

        header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h1 {
          margin: 0;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: #213547;
        }

        header p {
          margin: 1rem 0 0;
          color: #666;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
        }

        main {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h2 {
          margin: 0;
          font-size: clamp(1.1rem, 2.5vw, 1.7rem);
        }

        .vertical-timeline-element-title {
          font-size: clamp(1rem, 2vw, 1.3rem) !important;
          margin: 0 0 0.5rem !important;
        }

        .vertical-timeline-element-subtitle {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem) !important;
          margin: 0 0 0.5rem !important;
          color: #666 !important;
        }

        .vertical-timeline-element-content p {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem) !important;
          margin: 0 !important;
          line-height: 1.6 !important;
        }

        .vertical-timeline-element-date {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem) !important;
          color: #666 !important;
          font-weight: 500 !important;
        }

        @media (max-width: 1440px) {
          .container {
            padding: 1.5rem;
          }
        }

        @media (max-width: 1024px) {
          .container {
            padding: 1rem;
          }

          main {
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0.5rem;
          }

          header {
            padding: 1rem;
            margin-bottom: 1rem;
          }

          main {
            padding: 1rem;
          }

          .vertical-timeline-element-content {
            padding: 1em 0.5em !important;
          }

          .vertical-timeline-element-date {
            font-size: 0.9em !important;
          }

          .vertical-timeline-element-title,
          .vertical-timeline-element-subtitle {
            text-align: left !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0.25rem;
          }

          header {
            padding: 0.75rem;
          }

          main {
            padding: 0.75rem;
          }

          .vertical-timeline-element-content {
            padding: 0.75em 0.25em !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App; 
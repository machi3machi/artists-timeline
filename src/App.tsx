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
                icon={<FaStar size={18} />}
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
                    fontSize: '18px'
                  }}
                  icon={<FaPaintBrush size={18} />}
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
          text-align: center !important;
        }

        .vertical-timeline-element-subtitle {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem) !important;
          margin: 0 0 0.5rem !important;
          color: #666 !important;
          text-align: center !important;
        }

        .vertical-timeline-element-content p {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem) !important;
          margin: 0 !important;
          line-height: 1.6 !important;
          text-align: center !important;
        }

        .vertical-timeline-element-date {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem) !important;
          color: #666 !important;
          font-weight: 500 !important;
        }

        /* タイムライン要素のスタイル調整 */
        .vertical-timeline-custom .vertical-timeline-element-icon {
          z-index: 2;
          left: 55%;
          transform: translateX(-50%);
        }

        .vertical-timeline-custom .vertical-timeline-element-content {
          z-index: 1;
        }

        .vertical-timeline-custom .vertical-timeline-element-content::before {
          z-index: 1;
        }

        .vertical-timeline-custom .vertical-timeline-element-content::after {
          z-index: 1;
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
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0.25rem;
            max-width: 393px;
            margin: 0 auto;
          }

          header {
            padding: 0.75rem;
          }

          main {
            padding: 0.5rem;
            border-radius: 0;
            box-shadow: none;
            max-width: 393px;
            margin: 0 auto;
          }

          .vertical-timeline-element-content {
            padding: 0.75em 0.25em !important;
            max-width: 360px;
            margin: 0 auto !important;
            word-break: break-word;
            overflow-wrap: break-word;
          }

          .vertical-timeline-element-date {
            font-size: 0.95em !important;
          }

          .vertical-timeline-element-title,
          .vertical-timeline-element-subtitle {
            text-align: center !important;
            font-size: 1em !important;
            word-break: break-word;
            overflow-wrap: break-word;
          }

          .vertical-timeline-element-content p {
            word-break: break-word;
            overflow-wrap: break-word;
            text-align: center !important;
          }

          h1 {
            font-size: 1.3rem;
          }
          h2 {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 393px) {
          .container, main {
            max-width: 393px;
            width: 100vw;
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .vertical-timeline-custom .vertical-timeline-element-icon {
            left: 5%;
            width: 32px !important;
            height: 32px !important;
          }
          .vertical-timeline-element-content {
            padding: 0.5em 5em !important;
            min-width: 0 !important;
            max-width: 85% !important;
            margin: 0px auto !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App; 
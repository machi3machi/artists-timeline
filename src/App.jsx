import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaPaintBrush, FaStar } from 'react-icons/fa';
import { artists } from './artists';

// eraごとにグループ化
const groupByEra = (data) => {
  return data.reduce((acc, artist) => {
    if (!acc[artist.era]) acc[artist.era] = [];
    acc[artist.era].push(artist);
    return acc;
  }, {});
};

const eraColors = {
  'ロマネスク・ゴシック期': '#b3cde0',
  'ルネサンス': '#fbb4ae',
  // 必要に応じて他の時代も追加
};

function App() {
  const grouped = groupByEra(artists);
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '2vw', fontFamily: 'sans-serif' }}>
      <h1 style={{ 
        textAlign: 'center', 
        marginBottom: '2rem', 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        color: '#213547',
        WebkitTextFillColor: '#213547'
      }}>芸術家年表</h1>
      <VerticalTimeline>
        {Object.entries(grouped).map(([era, list]) => [
          <VerticalTimelineElement
            key={era}
            iconStyle={{ background: eraColors[era] || '#ccc', color: '#fff' }}
            icon={<FaStar />}
            contentStyle={{ background: eraColors[era] || '#eee', color: '#222', textAlign: 'center' }}
            contentArrowStyle={{ borderRight: `7px solid ${eraColors[era] || '#eee'}` }}
            date={era}
          >
            <h2 style={{ margin: 0, fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)' }}>{era}</h2>
          </VerticalTimelineElement>,
          ...list.map((artist, idx) => (
            <VerticalTimelineElement
              key={era + idx}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', color: '#222' }}
              contentArrowStyle={{ borderRight: '7px solid #fff' }}
              date={artist.date}
              iconStyle={{ background: artist.iconColor, color: '#fff' }}
              icon={<FaPaintBrush />}
            >
              <h3 className="vertical-timeline-element-title" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>{artist.name}</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>{artist.country}</h4>
              <p style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)' }}>{artist.work}</p>
            </VerticalTimelineElement>
          ))
        ])}
        <VerticalTimelineElement
          iconStyle={{ background: '#f9d423', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
      {/* レスポンシブ用追加CSS */}
      <style>{`
        @media (max-width: 700px) {
          .vertical-timeline-element-content {
            padding: 1em 0.5em !important;
          }
          .vertical-timeline-element-date {
            font-size: 0.9em !important;
          }
          .vertical-timeline-element-title, .vertical-timeline-element-subtitle {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;

import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaPaintBrush, FaStar } from 'react-icons/fa';
import { artists, Artist } from './artists';

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
  '近代・現代美術': '#ccebc5',
};

const App: React.FC = () => {
  const grouped = groupByEra(artists);
  return (
    <div className="container">
      <h1>芸術家年表</h1>
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
            <h2>{era}</h2>
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
              <h3 className="vertical-timeline-element-title">{artist.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">{artist.country}</h4>
              <p>{artist.work}</p>
            </VerticalTimelineElement>
          ))
        ])}
        <VerticalTimelineElement
          iconStyle={{ background: '#f9d423', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
      <style>{`
        .container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 2rem;
          background: #f5f5f5;
          min-height: 100vh;
        }

        h1 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          color: #213547;
        }

        h2 {
          margin: 0;
          font-size: clamp(1.1rem, 2.5vw, 1.7rem);
        }

        .vertical-timeline-element-title {
          font-size: clamp(1rem, 2vw, 1.3rem) !important;
        }

        .vertical-timeline-element-subtitle {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem) !important;
        }

        .vertical-timeline-element-content p {
          font-size: clamp(0.9rem, 1.2vw, 1.1rem) !important;
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
        }

        @media (max-width: 768px) {
          .container {
            padding: 0.5rem;
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
      `}</style>
    </div>
  );
}

export default App; 
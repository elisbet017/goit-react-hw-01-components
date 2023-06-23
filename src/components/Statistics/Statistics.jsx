import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';
import {
  StatisticsSection,
  Title,
  StatisticsList,
  StatisticsBlock,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {stats.map(({ label, percentage, id }) => (
          <StatisticsBlock
            style={{ backgroundColor: getRandomColor() }}
            key={id}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticsBlock>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
import { Col, Row } from '@/components/common/layout/responsive';
import { SummarySectionWrapper } from './style';
import { TSummarySection } from './type';
import TableLayout from '@/components/common/TableLayout';
import Tab from '../Tab';
import { v4 as uuid } from 'uuid';

const SummarySection = ({ table, tabs, style }: TSummarySection) => {
  return (
    <SummarySectionWrapper style={style}>
      <Row className="tabs">
        {tabs?.map((tab) => {
          return (
            <Col key={uuid()} span={24 / tabs?.length ?? 1}>
              <Tab {...tab} />
            </Col>
          );
        })}
      </Row>
      <div className="table-section">
        <div className="table">
          <TableLayout {...table} />
        </div>
      </div>
    </SummarySectionWrapper>
  );
};

export default SummarySection;
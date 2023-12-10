import { Col, Row } from '../layout/responsive';
import { TTable, Vocabulary } from './type';
import { TableLayoutWrapper } from './style';

const TableLayout = ({ columns, data, onClick }: TTable) => {
  return (
    <TableLayoutWrapper>
      <Row className="header">
        {columns.map((col) => {
          return col === 'No.' ? (
            <Col span={2} className="col">
              {col}
            </Col>
          ) : (
            <Col className="col">{col}</Col>
          );
        })}
      </Row>
      <div className="detail">
        {data.map((item: Vocabulary, index) => {
          return (
            <Row className="record" onClick={() => onClick(item.id)}>
              {Object.entries(item).map(([key, value]) => {
                return key === 'id' ? (
                  <Col span={2} className="col" key="no">
                    {++index}
                  </Col>
                ) : (
                  <Col className="col" key={key}>
                    {value}
                  </Col>
                );
              })}
              <Col className="col">More info</Col>
            </Row>
          );
        })}
      </div>
    </TableLayoutWrapper>
  );
};

export default TableLayout;

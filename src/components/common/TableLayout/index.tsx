import { Col, Row } from '../layout/responsive';
import { TTable } from './type';
import { TableLayoutWrapper } from './style';
import Icon from '../Icon';
import { Fragment } from 'react';

const TableLayout = ({ columns, data, onClick, moreinfo }: TTable) => {
  return (
    <TableLayoutWrapper>
      <Row className="header">
        {columns?.map((col) => {
          return col === 'No.' ? (
            <Col span={2} className="col">
              {col}
            </Col>
          ) : (
            <Col className="col">{col}</Col>
          );
        })}
        {moreinfo?.isShow && (
          <Col className="col">{moreinfo?.label ?? 'Extra information'}</Col>
        )}
      </Row>
      <div className="detail">
        {data?.map((item, index) => {
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
              {moreinfo?.isShow && (
                <Col className="col more-info">
                  More info <Icon iconName="Info" size={20} />
                </Col>
              )}
            </Row>
          );
        })}
      </div>
    </TableLayoutWrapper>
  );
};

export default TableLayout;

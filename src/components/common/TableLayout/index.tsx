import { Col, Row } from '../layout/responsive';
import { TTable } from './type';
import { TableLayoutWrapper } from './style';
import Icon from '../Icon';
import { Fragment } from 'react';
import { v4 as uuid } from 'uuid';

const TableLayout = ({ columns, data, onClick, moreinfo }: TTable) => {
  return (
    <TableLayoutWrapper>
      <Row className="header">
        {columns?.map((col) => {
          return col === 'No.' ? (
            <Col key={uuid()} span={2} className="col">
              {col}
            </Col>
          ) : (
            <Col key={uuid()} className="col">
              {col}
            </Col>
          );
        })}
        {moreinfo?.isShow && (
          <Col className="col">{moreinfo?.label ?? 'Extra information'}</Col>
        )}
      </Row>
      <div className="detail">
        {data?.map((item, index) => {
          return (
            <Row
              key={uuid()}
              className="record"
              onClick={() => onClick(item.dataId)}
            >
              <Col key={`no-${uuid()}`} span={2} className="col">
                {++index}
              </Col>
              {Object.entries(item).map(([key, value]) => {
                return (
                  <Col key={`key-${uuid()}`} className="col">
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

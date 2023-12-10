import { TGameOverFooter } from './../GameOverFooter/type';
import { TTable } from './../../../common/TableLayout/type';
import { CSSProperties } from 'react';
import { TTab } from '../Tab/type';

export type TSummarySection = {
  tabs: TTab[];
  table: TTable;
  style?: CSSProperties;
};

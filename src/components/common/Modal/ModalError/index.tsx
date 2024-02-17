import { createRoot } from 'react-dom/client';
import { ErrorWraper } from './style';
import { TModalError } from './type';
import { getPublicPath } from '@/utils/basePath';
import { v4 as uuid } from 'uuid';
import Modal from '..';

const ErrorModal = ({ errorStatus, errorMessage }: TModalError) => {
  return (
    <ErrorWraper>
      <div className="header">{errorStatus}</div>
      <div className="description"> {errorMessage}</div>
    </ErrorWraper>
  );
};

export default ErrorModal;

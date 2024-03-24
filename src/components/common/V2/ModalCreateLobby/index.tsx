import { createRoot } from 'react-dom/client';
import { CreateLobbyWrapper } from './style';
import { TModalCreateLobby } from './type';
import { getPublicPath } from '@/utils/basePath';
import { v4 as uuid } from 'uuid';
import Modal from '../../Modal';
import NewButton from '../NewButton';

const ErrorModal = ({ categories, onCreate }: TModalCreateLobby) => {
  return (
    <CreateLobbyWrapper>
      <div className="header">Create Lobby</div>
      <div className="contents">
        <div className="top">
          <div className="categories">
            <label htmlFor="categories" className="text-wrapper-3">
              Categories :
            </label>
            <select
              id="categories"
              name="categories"
              className="category-normal"
            >
              {categories.map((value) => {
                return <option value={value.value}>{value.name}</option>;
              })}
            </select>
          </div>
          <div className="quantity">
            <div className="text-wrapper-3">Quantity :</div>

            <input type="number" className="category-normal" />
          </div>
          <div className="private">
            <div className="text-wrapper-3">Private :</div>
            <div className="ellipse-wrapper">
              <div className="ellipse" />
            </div>
          </div>
        </div>
        <NewButton
          style={{ alignSelf: 'end', justifySelf: 'center', maxWidth: 89 }}
          label="Create"
          onClick={onCreate}
        ></NewButton>
      </div>
    </CreateLobbyWrapper>
  );
};

export default ErrorModal;

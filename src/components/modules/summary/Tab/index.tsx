import { TabWrapper } from './style';
import { TTab } from './type';

const Tab = ({ children, isSelected, onClick }: TTab) => {
  const onSelect = () => {
    onClick(children);
  };
  return (
    <TabWrapper isSelected={isSelected} onClick={onSelect}>
      {children}
    </TabWrapper>
  );
};

export default Tab;

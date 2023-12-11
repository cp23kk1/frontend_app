import { TabWrapper } from './style';
import { TTab } from './type';

const Tab = ({ childen, isSelected, onClick }: TTab) => {
  return (
    <TabWrapper isSelected={isSelected} onClick={onClick}>
      {childen}
    </TabWrapper>
  );
};

export default Tab;

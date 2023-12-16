const generateActionTypes = (modulePath: string, types: string[]) => {
  const renderActionTypes = types.reduce(
    (
      prev: {
        [key: string]: string;
      },
      curr: string
    ) => {
      const createTypes: string[] = ['0', '1', '2', '3'];
      createTypes.forEach((value: string) => {
        if (curr === 'CLEAR') {
          prev[`${curr}`] = `${modulePath}/${curr}`;
        } else {
          if (value === '0') {
            prev[`${curr}`] = `${modulePath}/${curr}`;
          } else if (value === '1') {
            prev[`${curr}_SUCCESS`] = `${modulePath}/${curr}_SUCCESS`;
          } else if (value === '2') {
            prev[`${curr}_FAIL`] = `${modulePath}/${curr}_FAIL`;
          } else {
            prev[`${curr}_DISPATCH`] = `${modulePath}/${curr}_DISPATCH`;
          }
        }
      });
      return prev;
    },
    {}
  );
  return renderActionTypes;
};

export default generateActionTypes;

export type Status = {
  message?: string;
};

export type VocaverseResponseData<elementType = any> = {
  status?: Status;
  data?: elementType;
};

export type Status = {
  status?: string;
  message?: string;
};

export type VocaverseResponseData<elementType = any> = {
  status?: Status;
  data?: elementType;
};

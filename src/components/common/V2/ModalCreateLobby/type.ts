export type TModalCreateLobby = {
  categories: { name: string; value: string }[];
  onCreate: () => void;
};

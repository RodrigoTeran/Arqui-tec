export const getUser = {
  url: `${process.env.API_URL}/get-user`,
  method: "get"
};

export type DATA_GET_USER = {
  id: number;
  email: string;
  username: string;
  status: string;
  profilePictureURL: string;
};

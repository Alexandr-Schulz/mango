import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  admin?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};

import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lists?: SortOrder;
  names?: SortOrder;
  numbers?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  prise?: SortOrder;
  updatedAt?: SortOrder;
};

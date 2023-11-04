import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  prise?: StringNullableFilter;
};

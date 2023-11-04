import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  lists?: StringNullableFilter;
  names?: StringNullableFilter;
  numbers?: StringNullableFilter;
};

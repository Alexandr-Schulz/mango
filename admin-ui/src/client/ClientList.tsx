import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"clients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lists" source="lists" />
        <TextField label="names" source="names" />
        <TextField label="numbers" source="numbers" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

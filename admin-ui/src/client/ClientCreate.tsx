import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="lists" source="lists" />
        <TextInput label="names" source="names" />
        <TextInput label="numbers" source="numbers" />
      </SimpleForm>
    </Create>
  );
};

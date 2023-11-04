import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="lists" source="lists" />
        <TextInput label="names" source="names" />
        <TextInput label="numbers" source="numbers" />
      </SimpleForm>
    </Edit>
  );
};

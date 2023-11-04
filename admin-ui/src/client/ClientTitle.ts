import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "names";

export const ClientTitle = (record: TClient): string => {
  return record.names?.toString() || String(record.id);
};

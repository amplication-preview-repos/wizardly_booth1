import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

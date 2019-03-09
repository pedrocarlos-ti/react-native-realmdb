// @flow
import Realm from "realm";

import createdCustomerAction from "./actions/customerAction";
import CustomerModel from "./models/customerModel";
import type { CustomerActionInterface } from "./actions/customerAction";

const realmInstance = new Realm({
  schema: [CustomerModel]
});

/**
 * Get a singleton realm instance
 * @return {Realm}
 */
export const getRealmInstance = () => realmInstance;

/**
 * Available customer action
 * @type {CustomerActio nInterface}
 */
export const customerActions: CustomerActionInterface = createdCustomerAction(
  realmInstance
);

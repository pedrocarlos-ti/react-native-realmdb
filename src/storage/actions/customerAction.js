// @flow
import CustomerModel from '../models/customerModel';
import type {CustomerModelTypeInterface} from '../models/customerModel';

/**
 * Flow type of customerAction
 * @type {Object}
 */
export type CustomerActionInterface = {
  saveCustomer(customerResponseModel: CustomerModelTypeInterface): Promise<CustomerModel>,
  retrieveAllCustomer(): CustomerModelTypeInterface,
};

/**
 * create customer realm action to save the customer data
 * @param {Realm} realmInstance
 * @return {Object}
 */
export default (realmInstance: any): CustomerActionInterface => {
  return {
    /**
     * set the customer
     * @param {any} customerResponse Customer response from server
     * @return {Promise<CustomerModelTypeInterface>} created customer object
     */
    saveCustomer: (customerResponse: any): Promise<CustomerModel> => {
      const {custId, custName, address, custImageAddress} = customerResponse;
      return new Promise((resolve, reject) => {
        try {
          const customer: CustomerModelTypeInterface = {
            _id: custId,
            name: custName,
            address: address,
            imageAddress: custImageAddress,
          };
          realmInstance.write(() => {
            const createdCustomer = realmInstance.create(CustomerModel.getCustomerModelName(), customer, true);
            resolve(createdCustomer);
          });
        } catch (error) {
          resolve(error);
        }
      });
    },
    /**
     * Get the current customer detail
     * @return {CustomerModelTypeInterface}
     */
    retrieveAllCustomer: (): CustomerModelTypeInterface => {
      return realmInstance.objects(CustomerModel.getCustomerModelName());
    },
  };
};

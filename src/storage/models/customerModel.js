// @flow

/**
 * Customer Model
 */
export default class CustomerModel {
  /**
   * Getter of the class
   * @return {string} class name
   */
  static getCustomerModelName() {
    return CustomerModel.schema.name;
  }

  /**
   * Get the customer primary ke
   * @return {string} return the primary key of the customer
   */
  static PrimaryKey() {
    return CustomerModel.schema.primaryKey;
  }

  /**
   * class {realm} schema
   * @type {Object}
   */
  static schema = {
    name: 'customer',
    primaryKey: '_id',

    properties: {
      _id: 'int',
      name: 'string',
      address: 'string',
      imageAddress: 'string',
    },
  };
}

/**
 * Customer Model Flow type
 * @type {Object}
 */
export type CustomerModelTypeInterface = {
  _id: Number,
  name: string,
  address: string,
  imageAddress: string,
};

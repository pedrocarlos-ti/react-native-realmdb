// @flow

/**
 * Modelo de Cliente
 */
export default class CustomerModel {
  static getCustomerModelName() {
    return CustomerModel.schema.name;
  }

  /**
   * Recupera a classe
   * @return {string} retorna primeira chave do cliente
   */
  static PrimaryKey() {
    return CustomerModel.schema.primaryKey;
  }

  /**
   * class {realm} schema
   * @type {Object}
   */
  static schema = {
    name: "customer",
    primaryKey: "_id",

    properties: {
      _id: "int",
      name: "string",
      address: "string",
      imageAddress: "string"
    }
  };
}

/**
 * Customer Model Flow Type
 * @type {Object}
 */

export type CustomerModelTypeInterface = {
  _id: Number,
  name: string,
  address: string,
  imageAddress: string
};

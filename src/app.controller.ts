import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext } from 'nestjs-i18n';

import { AppService } from './app.service';
const dataContact = [
  {
    Contact: {
      attributes: {
        url: '/services/data/v42.0/sobjects/Contact/0033C00000cDCyYQAW',
        type: 'Contact',
      },
      Email: {
        fieldValue: 'evan.mcdaniel+serena@sungagefinancial.com',
        readOnly: false,
      },
      Id: { fieldValue: '0033C00000cDCyYQAW', readOnly: true },
      Job_Function__c: { fieldValue: 'Billing', readOnly: false },
      Name: { fieldValue: 'Serena Bass', readOnly: true },
    },
  },
  {
    Contact: {
      attributes: {
        url: '/services/data/v42.0/sobjects/Contact/0033C00000cDCyYQAW',
        type: 'Contact',
      },
      Email: {
        fieldValue: 'evan.mcdaniel+laura@sungagefinancial.com',
        readOnly: false,
      },
      Id: { fieldValue: '0033C00000cDCyZQAW', readOnly: true },
      Job_Function__c: { fieldValue: 'Manager', readOnly: false },
      Name: { fieldValue: 'Laura Swanson', readOnly: true },
    },
  },
  {
    Contact: {
      attributes: {
        url: '/services/data/v42.0/sobjects/Contact/0033C00000cDCyYQAW',
        type: 'Contact',
      },
      Email: {
        fieldValue: 'evan.mcdaniel+geraldine@sungagefinancial.com',
        readOnly: false,
      },
      Id: { fieldValue: '0033C00000cDCycQAG', readOnly: true },
      Job_Function__c: { fieldValue: 'Project Manager', readOnly: false },
      Name: { fieldValue: 'Geraldine Armstrong', readOnly: true },
    },
  },
];

const small = [
  {
    Contact: {
      Interest_Rate_Buydown__c: {
        Account__r: {
          Address__r: {
            Street: { fieldValue: '0013C00000niq47QAA', readOnly: true },
            State: { fieldValue: 'Green and Yellow Energy', readOnly: false },
          },
        },
        Buydown_BPs_Fifteen__c: { fieldValue: 600, readOnly: false },
        Buydown_BPs_Five__c: { fieldValue: 499, readOnly: false },
        Buydown_BPs_Ten__c: { fieldValue: 500, readOnly: false },
        Buydown_BPs_Twenty_Five__c: { fieldValue: 600, readOnly: false },
        Buydown_BPs_Twenty__c: { fieldValue: 600, readOnly: false },
        CreatedBy: { Name: { fieldValue: 'Laura Swanson', readOnly: true } },
        CreatedById: { fieldValue: '0053C0000054WMkQAM', readOnly: true },
        CreatedDate: { fieldValue: '2021-09-01T21:11:58.000Z', readOnly: true },
        Current_Rate_Buydown__c: { fieldValue: false, readOnly: true },
        End_Time__c: {
          fieldValue: '2021-09-27T12:06:00.000Z',
          readOnly: false,
        },
        Id: { fieldValue: 'a203C000001dsQ8QAI', readOnly: true },
        Name: {
          fieldValue: 'Green and Yellow Energy_9/1/2021 5:11 PM',
          readOnly: false,
        },
        Start_Time__c: {
          fieldValue: '2020-09-01T21:11:00.000Z',
          readOnly: false,
        },
        Start__c: { fieldValue: '2023-02-01', readOnly: false },
        Sungage_Review_Status__c: { fieldValue: 'Confirmed', readOnly: false },
        Upcoming_Rate_Buydown__c: { fieldValue: false, readOnly: true },
      },
    },
  },
];

const data = [
  {
    Interest_Rate_Buydown__c: {
      Account__r: {
        Address__r: {
          Street: { fieldValue: 'hhhhhhh', readOnly: true },
          State: { fieldValue: 'Green gggand Yellow Energy', readOnly: false },
        },
      },
      Buydown_BPs_Fifteen__c: { fieldValue: 600, readOnly: false },
      Buydown_BPs_Five__c: { fieldValue: 499, readOnly: false },
      Buydown_BPs_Ten__c: { fieldValue: 500, readOnly: false },
      Buydown_BPs_Twenty_Five__c: { fieldValue: 600, readOnly: false },
      Buydown_BPs_Twenty__c: { fieldValue: 600, readOnly: false },
      CreatedBy: { Name: { fieldValue: 'Laura Swanson', readOnly: true } },
      CreatedById: { fieldValue: '0053C0000054WMkQAM', readOnly: true },
      CreatedDate: { fieldValue: '2021-09-01T21:11:58.000Z', readOnly: true },
      Current_Rate_Buydown__c: { fieldValue: false, readOnly: true },
      End_Time__c: { fieldValue: '2021-09-27T12:06:00.000Z', readOnly: false },
      Id: { fieldValue: 'a203C0000gg01dsQ8QAI', readOnly: true },
      Name: {
        fieldValue: 'Green and Yellggow Energy_9/1/2021 5:11 PM',
        readOnly: false,
      },
      Start_Time__c: {
        fieldValue: '2020-09-01T21:11:00.000Z',
        readOnly: false,
      },
      Start__c: { fieldValue: '2023-02-01', readOnly: false },
      Sungage_Review_Status__c: { fieldValue: 'Confirmed', readOnly: false },
      Upcoming_Rate_Buydown__c: { fieldValue: false, readOnly: true },
    },
  },
  {
    Interest_Rate_Buydown__c: {
      Account__r: {
        Id: { fieldValue: '0013C00000niq47QAA', readOnly: true },
        Name: { fieldValue: 'Green and Yellow Energy', readOnly: false },
      },
      Buydown_BPs_Fifteen__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Five__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Ten__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Twenty_Five__c: { fieldValue: -50, readOnly: false },
      Buydown_BPs_Twenty__c: { fieldValue: 0, readOnly: false },
      CreatedBy: { Name: { fieldValue: 'Laura Swanson', readOnly: true } },
      CreatedById: { fieldValue: '0053C0000054WMkQAM', readOnly: true },
      CreatedDate: { fieldValue: '2021-09-28T12:08:33.000Z', readOnly: true },
      Current_Rate_Buydown__c: { fieldValue: false, readOnly: true },
      End_Time__c: { fieldValue: '2023-03-28T17:34:12.000Z', readOnly: false },
      Id: { fieldValue: 'a203C000001dsQEQAY', readOnly: true },
      Name: {
        fieldValue: 'Green and Yellow Energy_9/28/2021 8:08 AM',
        readOnly: false,
      },
      Start_Time__c: {
        fieldValue: '2021-09-28T12:08:33.000Z',
        readOnly: false,
      },
      Start__c: { fieldValue: null, readOnly: false },
      Sungage_Review_Status__c: { fieldValue: 'Confirmed', readOnly: false },
      Upcoming_Rate_Buydown__c: { fieldValue: false, readOnly: true },
    },
  },
  {
    Interest_Rate_Buydown__c: {
      Account__r: {
        Id: { fieldValue: '0013C00000niq47QAA', readOnly: true },
        Name: { fieldValue: 'Green and Yellow Energy', readOnly: false },
      },
      Buydown_BPs_Fifteen__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Five__c: { fieldValue: null, readOnly: false },
      Buydown_BPs_Ten__c: { fieldValue: null, readOnly: false },
      Buydown_BPs_Twenty_Five__c: { fieldValue: -50, readOnly: false },
      Buydown_BPs_Twenty__c: { fieldValue: 0, readOnly: false },
      CreatedBy: { Name: { fieldValue: 'Laura Swanson', readOnly: true } },
      CreatedById: { fieldValue: '0053C0000054WMkQAM', readOnly: true },
      CreatedDate: { fieldValue: '2023-03-28T17:34:12.000Z', readOnly: true },
      Current_Rate_Buydown__c: { fieldValue: false, readOnly: true },
      End_Time__c: { fieldValue: '2023-03-28T18:16:35.000Z', readOnly: false },
      Id: { fieldValue: 'a203C000001e1isQAA', readOnly: true },
      Name: {
        fieldValue: 'Green and Yellow Energy_3/28/2023, 1:34 PM',
        readOnly: false,
      },
      Start_Time__c: {
        fieldValue: '2023-03-28T17:34:12.000Z',
        readOnly: false,
      },
      Start__c: { fieldValue: null, readOnly: false },
      Sungage_Review_Status__c: { fieldValue: 'Confirmed', readOnly: false },
      Upcoming_Rate_Buydown__c: { fieldValue: false, readOnly: true },
    },
  },
  {
    Interest_Rate_Buydown__c: {
      Account__r: {
        Id: { fieldValue: '0013C00000niq47QAA', readOnly: true },
        Name: { fieldValue: 'Green and Yellow Energy', readOnly: false },
      },
      Buydown_BPs_Fifteen__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Five__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Ten__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Twenty_Five__c: { fieldValue: -50, readOnly: false },
      Buydown_BPs_Twenty__c: { fieldValue: 0, readOnly: false },
      CreatedBy: { Name: { fieldValue: 'Laura Swanson', readOnly: true } },
      CreatedById: { fieldValue: '0053C0000054WMkQAM', readOnly: true },
      CreatedDate: { fieldValue: '2023-03-28T18:16:44.000Z', readOnly: true },
      Current_Rate_Buydown__c: { fieldValue: false, readOnly: true },
      End_Time__c: { fieldValue: '2023-03-29T17:50:59.000Z', readOnly: false },
      Id: { fieldValue: 'a203C000001e1jCQAQ', readOnly: true },
      Name: {
        fieldValue: 'Green and Yellow Energy_3/28/2023, 2:16 PM',
        readOnly: false,
      },
      Start_Time__c: {
        fieldValue: '2023-03-28T18:16:35.000Z',
        readOnly: false,
      },
      Start__c: { fieldValue: null, readOnly: false },
      Sungage_Review_Status__c: { fieldValue: 'Confirmed', readOnly: false },
      Upcoming_Rate_Buydown__c: { fieldValue: false, readOnly: true },
    },
  },
  {
    Interest_Rate_Buydown__c: {
      Account__r: {
        Id: { fieldValue: '0013C00000niq47QAA', readOnly: true },
        Name: { fieldValue: 'Green and Yellow Energy', readOnly: false },
      },
      Buydown_BPs_Fifteen__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Five__c: { fieldValue: null, readOnly: false },
      Buydown_BPs_Ten__c: { fieldValue: null, readOnly: false },
      Buydown_BPs_Twenty_Five__c: { fieldValue: -50, readOnly: false },
      Buydown_BPs_Twenty__c: { fieldValue: 0, readOnly: false },
      CreatedBy: { Name: { fieldValue: 'Laura Swanson', readOnly: true } },
      CreatedById: { fieldValue: '0053C0000054WMkQAM', readOnly: true },
      CreatedDate: { fieldValue: '2023-03-29T17:51:08.000Z', readOnly: true },
      Current_Rate_Buydown__c: { fieldValue: false, readOnly: true },
      End_Time__c: { fieldValue: '2023-03-29T18:11:38.000Z', readOnly: false },
      Id: { fieldValue: 'a203C000001e1mBQAQ', readOnly: true },
      Name: {
        fieldValue: 'Green and Yellow Energy_3/29/2023, 1:50 PM',
        readOnly: false,
      },
      Start_Time__c: {
        fieldValue: '2023-03-29T17:50:59.000Z',
        readOnly: false,
      },
      Start__c: { fieldValue: null, readOnly: false },
      Sungage_Review_Status__c: { fieldValue: 'Confirmed', readOnly: false },
      Upcoming_Rate_Buydown__c: { fieldValue: false, readOnly: true },
    },
  },
  {
    Interest_Rate_Buydown__c: {
      Account__r: {
        Id: { fieldValue: '0013C00000niq47QAA', readOnly: true },
        Name: { fieldValue: 'Green and Yellow Energy', readOnly: false },
      },
      Buydown_BPs_Fifteen__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Five__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Ten__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Twenty_Five__c: { fieldValue: -50, readOnly: false },
      Buydown_BPs_Twenty__c: { fieldValue: 0, readOnly: false },
      CreatedBy: { Name: { fieldValue: 'Laura Swanson', readOnly: true } },
      CreatedById: { fieldValue: '0053C0000054WMkQAM', readOnly: true },
      CreatedDate: { fieldValue: '2023-03-29T18:11:38.000Z', readOnly: true },
      Current_Rate_Buydown__c: { fieldValue: false, readOnly: true },
      End_Time__c: { fieldValue: '2023-04-14T18:41:54.000Z', readOnly: false },
      Id: { fieldValue: 'a203C000001e1mGQAQ', readOnly: true },
      Name: {
        fieldValue: 'Green and Yellow Energy_3/29/2023, 2:11 PM',
        readOnly: false,
      },
      Start_Time__c: {
        fieldValue: '2023-03-29T18:11:38.000Z',
        readOnly: false,
      },
      Start__c: { fieldValue: null, readOnly: false },
      Sungage_Review_Status__c: { fieldValue: 'Confirmed', readOnly: false },
      Upcoming_Rate_Buydown__c: { fieldValue: false, readOnly: true },
    },
  },
  {
    Interest_Rate_Buydown__c: {
      Account__r: {
        Id: { fieldValue: '0013C00000niq47QAA', readOnly: true },
        Name: { fieldValue: 'Green and Yellow Energy', readOnly: false },
      },
      Buydown_BPs_Fifteen__c: { fieldValue: 100, readOnly: false },
      Buydown_BPs_Five__c: { fieldValue: -100, readOnly: false },
      Buydown_BPs_Ten__c: { fieldValue: 0, readOnly: false },
      Buydown_BPs_Twenty_Five__c: { fieldValue: 100, readOnly: false },
      Buydown_BPs_Twenty__c: { fieldValue: 100, readOnly: false },
      CreatedBy: { Name: { fieldValue: 'Laura Swanson', readOnly: true } },
      CreatedById: { fieldValue: '0053C0000054WMkQAM', readOnly: true },
      CreatedDate: { fieldValue: '2023-04-14T18:41:54.000Z', readOnly: true },
      Current_Rate_Buydown__c: { fieldValue: true, readOnly: true },
      End_Time__c: { fieldValue: null, readOnly: false },
      Id: { fieldValue: 'a203C000001e39TQAQ', readOnly: true },
      Name: {
        fieldValue: 'Green and Yellow Energy_4/14/2023, 2:41 PM',
        readOnly: false,
      },
      Start_Time__c: {
        fieldValue: '2023-04-14T18:41:54.000Z',
        readOnly: false,
      },
      Start__c: { fieldValue: null, readOnly: false },
      Sungage_Review_Status__c: { fieldValue: 'Confirmed', readOnly: false },
      Upcoming_Rate_Buydown__c: { fieldValue: false, readOnly: true },
    },
  },
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  createData(contactRecord) {
    return Object.values(contactRecord).map((vs) => {
      console.log(JSON.stringify(vs));
      return Object.keys(vs).reduce((acc, key) => {
        acc[key] = vs[key].fieldValue;
        return acc;
      }, {});
    });
  }
  //      let vals = this.createData(contact);

  createData2(contactRecord) {
    return Object.values(contactRecord).map((vs) => {
      console.log(JSON.stringify(vs));
      return Object.keys(vs).map((key) => {
        const ret = {};
        console.log(`key: ${key}, val: ${vs[key].fieldValue}`);
        ret[key] = vs[key].fieldValue;
        console.log(`ret: ${ret[key]}`);
        return ret;
      });
    });
  }

  /*
  createDataObject(data) {
    let obj = {};
    obj = {
      ...data.map((contactRecord) => {
        let res = {};
        const arr = Object.values(contactRecord).map((vs) => {
          res = {
            ...this.getOneRecord(vs),
          };
        });
        console.log(`Record ${JSON.stringify(arr[0])}`);
        return res;
      }),
    };
    return obj;
  }
*/
  getOneRecord1(record) {
    return Object.keys(record).reduce((acc, key) => {
      acc[key] = record[key].fieldValue;
      return acc;
    }, {});
  }
  createDataObject1(data) {
    let obj = {};
    obj = {
      ...data.map((contactRecord) => {
        let res = {};
        const arr = Object.values(contactRecord).map((vs) => {
          res = {
            ...Object.keys(vs).reduce((acc, key) => {
              acc[key] = vs[key].fieldValue;
              return acc;
            }, {}),
          };
        });
        console.log(`Record ${JSON.stringify(arr[0])}`);
        return res;
      }),
    };
    return obj;
  }

  /*
    return data.map((contactRecord, idx) => {
      return Object.values(contactRecord).reduce((acc2, vs) => {
        const record = this.getOneRecord(vs);
        console.log(`${idx} values: ${JSON.stringify(record)}`);
        acc2[idx] = record;
        return acc2;
      }, {});
    });
  }
  */

  @Get()
  getObject() {
    const rootURL = '/services/data/v42.0/sobjects';
    const type = Object.keys(data[0])[0];
    return data.map((contactRecord) => {
      return Object.values(contactRecord).reduce((obj, record, idx) => {
        const attributes = {
          type,
          url: `${rootURL}/${type}/${record.Id.fieldValue}`,
        };
        let res = { attributes };
        res = {
          ...res,
          ...Object.keys(record).reduce((acc, key) => {
            acc[key] = record[key].fieldValue;
            return acc;
          }, {}),
          attributes,
        };
        obj = { ...obj, ...res };

        return obj;
      }, []);
    });
  }

  getTableRowsWithAttributes() {
    const rootURL = '/services/data/v42.0/sobjects';
    const type = Object.keys(data[0])[0];
    return dataContact.map((contactRecord) => {
      let res = {};
      const arr = Object.values(contactRecord).map((record) => {
        const attributes = {
          type,
          url: `${rootURL}/${type}/${record.Id.fieldValue}`,
        };
        res = { attributes };
        res = {
          ...res,
          ...Object.keys(record).reduce((acc, key) => {
            acc[key] = record[key].fieldValue;
            return acc;
          }, {}),
          attributes,
        };
      });
      return res;
    });
  }

  getRecordValues(record) {
    return {
      ...Object.keys(record).reduce((acc, key) => {
        const outerKeys = Object.keys(record[key]);
        if (outerKeys.includes('fieldValue')) {
          acc[key] = record[key].fieldValue;
        } else {
          Object.keys(record[key]).map((innerKey, innerVal) => {
            console.log(
              `innerObjectValues ${JSON.stringify(record[key][innerKey])}`,
            );
            console.log(
              `outerKey ${key} innerkey ${innerKey} |||, innerValue ${innerVal} `,
            );
            if (record[key][innerKey].fieldValue !== undefined) {
              const newKey = `${key}.${innerKey}`;
              console.log(`New Key = ${newKey}`);
              acc[newKey] = record[key][innerKey].fieldValue;
            }
          });
        }
        return acc;
      }, {}),
    };
  }
  /* If the value of the key is an object,
  key.object_key1
  key.object_key2
 */
  getTableRows() {
    return data.map((allRecords) => {
      let res = {};
      Object.values(allRecords).map((record) => {
        res = {
          ...Object.keys(record).reduce((acc, key) => {
            const outerKeys = Object.keys(record[key]);
            if (outerKeys.includes('fieldValue')) {
              acc[key] = record[key].fieldValue;
              return acc;
            } else {
              Object.keys(record[key]).map((innerKey) => {
                if (record[key][innerKey].fieldValue !== undefined) {
                  const newKey = `${key}.${innerKey}`;

                  acc[newKey] = record[key][innerKey].fieldValue;
                  return acc;
                }
              });
            }
            return acc;
          }, {}),
        };
        return res;
      });
      return res;
    });
  }

  processRecords(record, keyIn, returnMap = {}) {
    console.log(`KEYS: ${Object.keys(record)}`);

    if (record instanceof Object === false) {
      console.log(`Not an object ${returnMap}`);
      return returnMap;
    }
    console.log(`Current ${JSON.stringify(returnMap)}`);
    console.log(`Process record: ${JSON.stringify(record)}`);
    return Object.keys(record).map((key) => {
      const val = record[key];

      let currKey = key;
      if (keyIn) {
        currKey = `${keyIn}.${key}`;
      }
      if (val instanceof Object) {
        const outerKeys = Object.keys(val);
        console.log(`outerKeys: ${JSON.stringify(outerKeys)}`);
        if (outerKeys.includes('fieldValue')) {
          returnMap[currKey] = val.fieldValue;
          console.log(`Return map set => ${JSON.stringify(returnMap)}`);
        } else {
          console.log(
            `currKey: ${currKey} => OUTER KEYS${JSON.stringify(outerKeys)}`,
          );
          console.log(
            `Object found ${currKey} : ${key}: ${JSON.stringify(val)}`,
          );

          // outerKeys.map((k) => this.processRecords(val[k], currKey, returnMap));
          this.processRecords(val, currKey, returnMap);
        }
      }
      return returnMap;
    });
  }

  transformDataRowsFromRestAPI(allRecords) {
    return;
    allRecords.map((record) => this.processRecords(record, '', {}));
  }
  transformDataRowsFromRestAPIGood(dataIn) {
    return dataIn.map((allRecords) => {
      let res = {};
      Object.values(allRecords).map((record) => {
        res = {
          ...Object.keys(record).reduce((acc, key) => {
            const outerKeys = Object.keys(record[key]);
            if (outerKeys.includes('fieldValue')) {
              acc[key] = record[key].fieldValue;
              return acc;
            } else {
              Object.keys(record[key]).map((innerKey) => {
                if (record[key][innerKey].fieldValue !== undefined) {
                  const newKey = `${key}.${innerKey}`;

                  acc[newKey] = record[key][innerKey].fieldValue;
                  return acc;
                }
              });
            }
            return acc;
          }, {}),
        };
        return res;
      });
      return res;
    });
  }

  @Get('current')
  getCurrent() {
    const cur = [{ Contact: data }];
    return this.transformDataRowsFromRestAPI(data);
  }

  @Get('small')
  getsmalltable() {
    return data.map((contactRecord) => {
      let res = {};
      Object.values(contactRecord).map((record) => {
        res = {
          ...Object.keys(record).reduce((acc, key) => {
            acc[key] = record[key].fieldValue;
            return acc;
          }, {}),
        };
      });
      return res;
    });
  }

  @Get('/international')
  async getInternationalHello(@I18n() i18n: I18nContext) {
    return await i18n.t('strings.HELLO');
  }

  @Get('/dayInt')
  async getDayInterval(@I18n() i18n: I18nContext) {
    return await i18n.t('strings.day_interval');
  }

  @Get('/all')
  async getAll(@I18n() i18n: I18nContext) {
    return await i18n.t('strings');
  }
}

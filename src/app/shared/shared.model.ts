/**
 * 返回结果接口
 */
export interface HttpRes {
  code: number;
  msg: string;
  data: any | {
    result?: Array<any>,
    pageNumber?: number,
    pageSize?: number,
    total?: number
  };
}

/**
 * 全局的localStorage key
 */
const projectPrefix = 'XXX';
export const userInfoKey = projectPrefix + '_userInfo_';
export const apiPathKey = projectPrefix + '_apiPathKey_';
/**
 * 全局的正则表达式
 */
export const REGEXP = {
  number: /\d/,
};

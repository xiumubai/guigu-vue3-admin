/*
 * @Author: 朽木白
 * @Date: 2023-02-03 14:49:31
 * @LastEditors: 1547702880@@qq.com
 * @LastEditTime: 2023-02-03 17:08:45
 * @Description: Mock工具函数
 */

import { ResultEnum } from '../src/enums/httpEnums'

/**
 * @description: 错误响应结构
 * @returns {*}
 */
export function resultError(
  message = 'Request failed',
  { code = ResultEnum.ERROR, data = null } = {},
) {
  return {
    code,
    data,
    message,
    type: 'error',
  }
}

/**
 * @description: 成功响应结构
 * @returns {*}
 */
export function resultSuccess<T>(data: T, { message = 'ok' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    data,
    message,
    type: 'success',
  }
}

export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 * @return token
 */
export function getRequestToken({
  headers,
}: requestParams): string | undefined {
  return headers?.authorization
}

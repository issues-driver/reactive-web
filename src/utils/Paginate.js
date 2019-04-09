import _ from "lodash";

/**
 * 计算分页
 * @param {Array} items 分页数据
 * @param {Number} pageNumber 页数
 * @param {Number} pageSize 每页数据大小
 * @returns {Array} 每页数据
 */
export function calculatePage(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

import globalFunction from '@/libs/globalFunction.js'

export default {
	state: {
		// 表格中显示的列
		selectedColumnList: globalFunction.getCookies('selectedColumnList'),
		// 文件展示模式 0 列表模式 | 1 网格模式 | 2 时间线模式
		fileModel: globalFunction.getCookies('fileModel'),
		// 网格模式 & 时间线模式下 图标大小 单位px
		gridSize: 80,
		// 批量模式下：被选中的文件列表
		selectedFiles: [],
		// 是否批量操作：true - 批量，false - 单文件
		isBatchOperation: false
	},
	mutations: {
		/**
		 * 改变表格显示列
		 * @description 表格显示列保存在 Vuex 和 cookie 中
		 * @param {object} state Vuex 的 state 对象
		 * @param {[]} data 表格需要显示的列数组
		 */
		changeSelectedColumnList(state, data) {
			globalFunction.setCookies('selectedColumnList', data.toString())
			state.selectedColumnList = data.toString()
		},
		/**
		 * 改变文件展示模式
		 * @description 文件展示模式保存在 Vuex 和 cookie 中
		 * @param {object} state Vuex 的 state 对象
		 * @param {string} data 文件展示模式
		 */
		changeFileModel(state, data) {
			globalFunction.setCookies('fileModel', data)
			state.fileModel = data
		},
		/**
		 * 网格模式 & 时间线模式 改变文件图标大小
		 * @description 文件图标大小保存在 Vuex 和 cookie 中
		 * @param {object} state Vuex 的 state 对象
		 * @param {string} data 文件图标大小
		 */
		changeGridSize(state, data) {
			globalFunction.setCookies('gridSize', data)
			state.gridSize = data
		},
		/**
		 * 设置批量操作模式下被选中的文件列表
		 * @param {object} state Vuex 的 state 对象
		 * @param {array} data 批量操作模式下，被选中的文件列表
		 */
		changeSelectedFiles(state, data) {
			state.selectedFiles = data
		},
		/**
		 * 设置是否批量操作
		 * @param {object} state Vuex 的 state 对象
		 * @param {boolean} data 是否批量操作
		 */
		changeIsBatchOperation(state, data) {
			state.isBatchOperation = data
		}
	},
	actions: {}
}

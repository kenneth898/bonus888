import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		link: '',  // 存储链接
		isFetching: false  // 标志位，标记是否正在获取数据
	},
	mutations: {
		SET_LINK(state, link) {
			state.link = link;
		},
		SET_FETCHING(state, isFetching) {
			state.isFetching = isFetching;
		}
	},
	actions: {
		async fetchLink({ commit, state }) {
			if (!state.link && !state.isFetching) {
				// 防止重复调用
				commit('SET_FETCHING', true);  // 设置正在获取数据的状态
				try {
					const response = await axios.get(
						'https://seo.mobileapplab.online/api/atas?fields[0]=ataskasino_com',
						{
							headers: {
								Authorization: 'Bearer 1c4db3188ab2e9a077928920d9cc8d3322d15f9751bc2054a5cb70008df79cf3e3a4dd005a75a1f2db40eb953292ee10ef699693e96e9d77a98439f438ee6a6e6805a8a955e992f082b9e6118a4345e1ed18438ff9789edf9ed1dd58af45ee6669a7519a1291746959ff45bc2054b7f408b5da5ea8cd04d588a2704b7e218021'
							}
						}
					);
					commit('SET_LINK', response.data.data.attributes.ataskasino_com);
				} catch (error) {
					console.error(error);
				} finally {
					commit('SET_FETCHING', false);  // 恢复状态
				}
			}
		}
	},
	getters: {
		link: state => state.link
	}
});

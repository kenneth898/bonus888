<template>
	<div class="container-fluid">
		<div class="col-12">
			<div class="row">
				<div style="padding: 0px;" class="col-sm-12 col-md-3">
					<!--left-->
					<div class=" left">

						<Left />

					</div>
				</div>

				<div style="padding: 0px;" class="col-sm-12 col-md-6 mobile_col2 center_col">
					<!--main-->
					<div class="nav nav-pills">
						<a style="padding: 0px;" v-for="(item, index) in menuItems" :key="index"
							:class="['nav-link', { active: activeIndex === index }]"
							@click="setActive(index, item.componentId)">
							<img :src="activeIndex === index ? item.activeSrc : item.inactiveSrc" :alt="item.name"
								class="img-fluid" />
						</a>
					</div>
					<component :is="currentComponent"></component>

					<div class="content" :id="menuItems[activeIndex].componentId">
						<Content />
					</div>
				</div>






				<div style="padding: 0px;" class="col-sm-12 col-md-3 mobile_col">
					<!--right-->
					<div class="right">
						<Right />
					</div>
				</div>

			</div>
		</div>
		<div class="icon_col">
			<a :href="link + 'en/sign-up'" rel="nofollow">
				<img width="100%" src="/public/image_webp/download_app.webp" alt="download">
			</a>

			<a :href="link + 'en/sign-up'" rel="nofollow">
				<img width="100%" src="/public/image_webp/download_app.webp" alt="download">
			</a>

			<a href="https://t.me/atas77channel" rel="nofollow">
				<img width="100%" src="/public/image_webp/telegram_subscribe_us.webp" alt="telegram">
			</a>

			<a :href="link + 'en/sign-up'" rel="nofollow">
				<img width="100%" src="/public/image_webp/facebook_follow_us.webp" alt="facebook">
			</a>


		</div>
		<div style="padding-top: 10px;">
			<Notice />
		</div>
	</div>
</template>

<script>
import Left from '../components/Leftt.vue';
import Right from '../components/Rightt.vue';
import Menu1 from '../components/Menuu1.vue';
import Content from '@/components/content.vue';
import Notice from '@/components/noticee.vue';
import axios from 'axios';

export default {
	name: 'Home',
	components: {
		Left,
		Right,
		Menu1,
		Content,
		Notice
	},
	data() {
		return {
			activeIndex: 0,
			menuItems: [
				{ name: 'Menu 1', activeSrc: '/image_webp/advanplay_active.webp', inactiveSrc: '/image_webp/advanplay_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 2', activeSrc: '/image_webp/jili_active.webp', inactiveSrc: '/image_webp/jili_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 3', activeSrc: '/image_webp/rich_active.webp', inactiveSrc: '/image_webp/rich_no_active.webp', component: 'Menu1', componentId: 'menu1' },

				{ name: 'Menu 4', activeSrc: '/image_webp/bongo_active.webp', inactiveSrc: '/image_webp/bongo_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 5', activeSrc: '/image_webp/pragmatic_active.webp', inactiveSrc: '/image_webp/pragmatic_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 6', activeSrc: '/image_webp/playtech_active.webp', inactiveSrc: '/image_webp/playtech_no_active.webp' },

				{ name: 'Menu 7', activeSrc: '/image_webp/cewin_active.webp', inactiveSrc: '/image_webp/cewin_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 8', activeSrc: '/image_webp/jdb_active.webp', inactiveSrc: '/image_webp/jdb_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 9', activeSrc: '/image_webp/dragoon_active.webp', inactiveSrc: '/image_webp/dragoon_no_active.webp', component: 'Menu1', componentId: 'menu1' },

				{ name: 'Menu 10', activeSrc: '/image_webp/rich88_active.webp', inactiveSrc: '/image_webp/rich88_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 11', activeSrc: '/image_webp/bigpot_active.webp', inactiveSrc: '/image_webp/bigpot_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 12', activeSrc: '/image_webp/slot_active.webp', inactiveSrc: '/image_webp/slot_no_active.webp', component: 'Menu1', componentId: 'menu1' },

				{ name: 'Menu 13', activeSrc: '/image_webp/live_active.webp', inactiveSrc: '/image_webp/live_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 14', activeSrc: '/image_webp/sport_active.webp', inactiveSrc: '/image_webp/sport_no_active.webp', component: 'Menu1', componentId: 'menu1' },
				{ name: 'Menu 15', activeSrc: '/image_webp/other_active.webp', inactiveSrc: '/image_webp/other_no_active.webp', component: 'Menu1', componentId: 'menu1' },
			],
			link: ""
		};
	},
	computed: {
		currentComponent() {
			return this.menuItems[this.activeIndex].component;
		}
	},

	methods: {
		async calllink() {
			try {
				const response = await axios.get('https://seo.mobileapplab.online/api/atas?fields[0]=ataskasino_com', {
					headers: {
						"Authorization": "Bearer " + "1c4db3188ab2e9a077928920d9cc8d3322d15f9751bc2054a5cb70008df79cf3e3a4dd005a75a1f2db40eb953292ee10ef699693e96e9d77a98439f438ee6a6e6805a8a955e992f082b9e6118a4345e1ed18438ff9789edf9ed1dd58af45ee6669a7519a1291746959ff45bc2054b7f408b5da5ea8cd04d588a2704b7e218021",
					}
				});
				this.link = response.data.data.attributes.ataskasino_com;

				console.log(this.link);
			} catch (error) {
				console.error(error);
			}
		},
		setActive(index, componentId) {
			this.activeIndex = index;
			this.scrollTo(componentId);
		},
		scrollTo(id) {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		},
	},
	mounted() {
		this.calllink();
	}
};
</script>

<style scoped>
.center_col {
	background-color: #ffcba4;
}


.left_bg {
	background: rgba(255, 255, 255, .5);
	border-right: 1px solid rgba(255, 255, 255, .5);

}

.left {
	height: 100%;
	background-color: #ffcba4;
}

.right {
	height: 100%;
	background-color: #ffcba4;
}


@media (max-width: 768px) {
	.nav-pills {
		display: flex;
		overflow-x: auto;
		/* 启用水平滚动 */
		white-space: nowrap;
		/* 防止换行 */
		padding: 0;
	}

	.nav-link {
		flex: 0 0 auto;
		/* 确保菜单项不变形 */
		width: 20%;
		/* 每个菜单项的宽度，假设有5个菜单项 */
		text-align: center;
		padding: 0;
	}
}

.icon_col {
	display: flex;
	flex-direction: column;
	width: 20px;
	position: fixed;
	bottom: 100px;
	right: 0px;
}



.icon {
	display: grid;
	position: absolute;
	gap: 0.5rem;
}

.nav-item {
	font-weight: bolder;
}

.nav-pills {
	--bs-nav-pills-link-active-bg: none;
	display: flex;
	flex-wrap: nowrap;
	padding: 10px 10px 10px 10px;

}


.nav-link.active {
	border-radius: 30px;
}

.menu_col {
	padding-bottom: 10px;
}

.main-col {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	justify-items: center;
	gap: 0.5rem;
}

.main-col img {
	width: 90%;
}

@media screen and (max-width:768px) {
	.main-col {
		grid-template-columns: repeat(3, 1fr);
	}


}

@media screen and (max-width:767px) {
	.mobile_col {
		order: 2;
	}

	.mobile_col2 {
		order: 3;
	}
}

.content {
	padding-left: 12px;
	padding-right: 12px;
}

h1 {
	font-size: 25px;
	font-weight: bolder;
}

h2 {
	font-size: 23px;
	font-weight: bolder;
}

h3 {
	font-size: 15px;
	font-weight: bolder;
}
</style>

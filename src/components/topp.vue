<template>
	<article>
		<div class="Top">
			<div class="top_bg">
				<div class="container-fluid">

					<div class="end">
						<button class="btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
							aria-expanded="false">
							<div class="icon">
								<svg style="color: white;" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
									fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
									<path
										d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
									<path
										d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
								</svg>
							</div>
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li><a class="dropdown-item" @click="changeLanguage('en')">English</a></li>
							<li><a class="dropdown-item" @click="changeLanguage('zh')">中文</a></li>
							<li><a class="dropdown-item" @click="changeLanguage('ms')">Malay</a></li>
						</ul>
					</div>

				</div>
			</div>
			<div class="scrolling-text-wrapper">
				<div class="scrolling-text">
					<p style="margin: 0px;" class="text-item">
						{{ $t('AnnounceBarWords.1') }}

						{{ $t('AnnounceBarWords.2') }}
					</p>

				</div>
			</div>

		</div>
		<div class="go_up_btn">
			<a @click.prevent="scrollToTop" :class="{ 'scroll-icon': true, 'show': showIcon, 'hide': !showIcon }"
				href="#">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
					class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
					<path
						d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
				</svg>
			</a>
		</div>
	</article>
</template>
<script>

export default {
	name: 'top',
	data() {
		return {
			showIcon: false
		}
	},
	methods: {
		changeLanguage(lang) {
			console.log('Changing language to:', lang);
			this.$i18n.locale = lang;
		},
		scrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
		handleScroll() {
			if (this.hideTimeout) {
				clearTimeout(this.hideTimeout);
			}
			this.showIcon = true;
			this.hideTimeout = setTimeout(() => {
				this.showIcon = false;
			}, 2000);
		},
		handleScroll() {
			// 如果已经有计时器，清除它
			if (this.scrollTimeout) {
				clearTimeout(this.scrollTimeout);
			}

			// 显示图标
			this.showIcon = true;

			// 在5秒后隐藏图标
			this.scrollTimeout = setTimeout(() => {
				this.showIcon = false;
			}, 2000);
		},
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		},


	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
		// 监听滚动事件
		window.addEventListener('scroll', this.handleScroll);
		this.intervalId = setInterval(this.checkTime, 1000);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	computed: {
		currentLanguage() {
			return this.$store ? this.$store.state.currentLanguage : 'en';
		}
	}
};
</script>

<style scoped>
.scrolling-text-wrapper {
	/* 或者根据您的需要设置具体宽度 */
	overflow: hidden;
	white-space: nowrap;
	background-image: url('/public/image_webp/span_bg.webp');
}

.scrolling-text {
	display: inline-block;
	animation: initial-appearance 2s ease-out, scroll-left 25s linear infinite;
	/* 调整时间以控制滚动速度 */
}

@keyframes initial-appearance {
	0% {
		transform: translateX(100%);
	}

	100% {
		transform: translateX(0);
	}
}

@keyframes scroll-left {
	0% {
		transform: translateX(20%);
	}

	100% {
		transform: translateX(-100%);
	}
}

.text-item {
	display: inline-block;
	font-weight: bolder;
	font-size: 14px;
	padding-right: 50px;

}

.language-button button {
	background: none;
	border: none;
	cursor: pointer;
}

.span_bg {
	background-image: url('/public/image_webp/span_bg.webp');
}

.end {
	text-align: end;
}

.top_bg {
	background-image: url('/public/image_webp/top_bg.webp');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 20vh;
	width: 100%;
	align-content: center;
}

@media screen and (max-width: 425px) {
	.top_bg {
		height: 6vh !important;
	}

}

@media screen and (max-width:768px) {
	.logo-img {
		width: 16% !important;
	}

	.top_bg {
		height: 10vh;
	}
}

.logo-img {
	width: 9%;

}

.go_up_btn {
	position: fixed;
	right: 80px;
	bottom: 10px;
	background-color: #ffffff;
	border-radius: 50px;
	z-index: 999;
	opacity: 0.8;

}

.go_up_btn :hover {
	color: #EB212E;
	opacity: 1;
}

.go_up_btn a {
	color: #EB212E;
}

@media screen and (min-width:1440px) {
	.go_up_btn {
		right: 253px;
	}
}

@media screen and (min-width:2560px) {
	.go_up_btn {
		right: 800px;
	}
}

.scroll-icon {
	position: fixed;
	bottom: 111px;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;
}

.scroll-icon.show {
	opacity: 1;
	visibility: visible;
	/* 设置为可见 */
}

.scroll-icon.hide {
	opacity: 0;
	visibility: hidden;
	/* 设置为不可见 */
}

.scroll-icon.fade-out {
	opacity: 0;
}
</style>

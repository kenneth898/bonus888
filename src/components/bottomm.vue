<template>
	<div class="container-fluid">
		<div class="row">
			<nav class="navbar fixed-bottom">
				<div class="container-fluid d-flex justify-content-center">
					<div class="menu d-flex justify-content-around w-100">
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a :href="link" class="nav-link" rel="nofollow" alt="Home" target="_blank">
								<img class="nav-icon img1" src="/public/image_webp/bottom_home.webp" alt="Home"></a>
						</div>
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a :href="link + 'en/sign-up'" class="nav-link" rel="nofollow" target="_blank">
								<img class="nav-icon img2" src="/public/image_webp/bottom_history.webp"
									alt="History"></a>
						</div>
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a :href="link + 'en/sign-up'" class="nav-link" rel="nofollow" alt="bonus" target="_blank">
								<img class="nav-icon img3" src="/public/image_webp/bottom_promo.webp" alt="Promo"></a>
						</div>
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a :href="link + 'en/sign-up'" class="nav-link" rel="nofollow" alt="history"
								target="_blank">
								<img class="nav-icon img4" src="/public/image_webp/bottom_livechat.webp"
									alt="Live Chat"></a>
						</div>
						<div class="nav-item d-flex flex-column align-items-center text-center column-height">
							<a :href="link + 'en/sign-up'" class="nav-link" rel="nofollow" alt="setting"
								target="_blank">
								<img class="nav-icon img5" src="/public/image_webp/bottom_setting.webp"
									alt="Setting"></a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Bottom',
	computed: {
		...mapGetters(['link'])
	},
	mounted() {
		// 确保只有当链接不存在时才调用 fetchLink
		this.$store.dispatch('fetchLink');
	}
};
</script>


<style scoped>
.img1 {
	width: 48%;
}

.img2 {
	width: 48%;
}

.img3 {
	width: 48%;
}

.img4 {
	width: 48%;
}

.img5 {
	width: 48%;
}

.navbar.fixed-bottom {
	background-image: url('/public/image_webp/bottom_bg.webp');
	height: 5%;
	background-size: cover;
}

.nav-item {
	flex: 1;
}

.menu {
	position: relative;
	top: -10px;
	align-items: end;

}

.column-height {
	position: relative;
	height: 40%;
}

@media screen and (max-width: 2560px) {
	.navbar.fixed-bottom {
		height: 10%;
	}
}

@media screen and (max-width: 1600px) {
	.column-height {
		height: 25%;
	}
}

@media screen and (max-width: 768px) {
	.menu {
		top: -8px !important;
	}

	.img1 {
		width: 40% !important;
	}

	.img2 {
		width: 40% !important;
	}

	.img3 {
		width: 40% !important;
	}

	.img4 {
		width: 40% !important;
	}

	.img5 {
		width: 40% !important;
	}
}

@media screen and (max-width:576px) {
	.navbar.fixed-bottom {
		height: 10% !important;
	}

	.menu {
		top: -5px !important;
	}

	.img1 {
		width: 52% !important;
	}

	.img2 {
		width: 65% !important;
	}

	.img3 {
		width: 65% !important;
	}

	.img4 {
		width: 65% !important;
	}

	.img5 {
		width: 65% !important;
	}
}
</style>

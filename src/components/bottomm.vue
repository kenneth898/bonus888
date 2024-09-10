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
import axios from 'axios';
export default {
	name: 'bottom',
	data() {
		return {
			link: ""
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
	},
	mounted() {
		this.calllink();
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

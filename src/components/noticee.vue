<template>
	<div v-if="showAd" class="modal fade show d-block" id="adModal" tabindex="-1" aria-labelledby="adModalLabel"
		aria-hidden="true" style="background: rgba(0,0,0,0.5);" @click.self="closeModal">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content position-relative">
				<div class="modal-body p-0 text-center">
					<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
						<img src="/public/image_webp/notice.webp" class="img-fluid" alt="notice">
					</a>
				</div>
			</div>
		</div>

		<div class="position-absolute top-0 end-0 m-3" @click="closeModal" style="cursor: pointer;">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
				class="bi bi-x-circle-fill" viewBox="0 0 16 16">
				<path
					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showAd: true
		};
	},
	methods: {
		closeModal() {

			this.showAd = false;

			document.body.style.overflow = 'auto';
		}
	},
	mounted() {

		document.body.style.overflow = 'hidden';
	}
};
</script>

<style scoped>
#adModal .btn-close {
	z-index: 1055;
	color: white;

}

.modal-content {
	background: transparent;
	border: none;
}

.modal-body img {
	width: 100%;
	height: auto;
}

svg {
	color: #fff;
}

@media screen and (max-width: 576px) {
	.img-fluid {
		max-width: 90%;
	}
}
</style>

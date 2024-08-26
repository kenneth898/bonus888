<template>
	<div class="container-fluid">
		<div class="col-12 ">
			<div class="row ">
				<div class="bg_img">
					<!--owl carousel-->
					<!-- <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active" data-bs-interval="2000">
								<img width="100%" src="/public/image_webp/slide1.webp" class="d-block w-100"
									alt="slide1">
							</div>
							<div class="carousel-item" data-bs-interval="2000">
								<img width="100%" src="/public/image_webp/slide2.webp" class="d-block w-100"
									alt="slide2">
							</div>
							<div class="carousel-item" data-bs-interval="2000">
								<img width="100%" src="/public/image_webp/slide3.webp" class="d-block w-100"
									alt="slide3">
							</div>
						</div> -->
					<div style="padding-top:10px" class="daily_unlimited_bonus">
						<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
							<img style="border-radius:15px" width="100%"
								src="/public/image_webp/Daily_unlimited_bonus_D.webp" alt="Daily_unlimited_bonus_D">
						</a>
					</div>

					<div style="padding-top:10px" class="check_in">
						<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
							<img style="border-radius:15px" width="100%" src="/public/image_webp/bonus388.webp"
								alt="Daily_unlimited_bonus_M">
						</a>
					</div>




					<!--button bg-->
					<div class="col-12 bg_btn">
						<div class="row btn_col">
							<div class="col-6">
								<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
									<img width="100%" src="/public/image_webp/left_btn.webp" alt="share">
								</a>
							</div>
							<div class="col-6">
								<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
									<img width="100%" src="/public/image_webp/left_btn3.webp" alt="downline">
								</a>
							</div>
							<div class="col-6">
								<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
									<img style="padding-top: 5px;" width="100%" src="/public/image_webp/left_btn2.webp"
										alt="referral">
								</a>
							</div>
							<div class="col-6">
								<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
									<img style="padding-top: 5px;" width=" 100%" src="/public/image_webp/left_btn4.webp"
										alt="more info">
								</a>
							</div>
						</div>
					</div>


					<div style="padding-top:10px" class="Daily_unlimited_bonus_M">
						<a href="https://www.ataskasino1.com/en/sign-up/" rel="nofollow">
							<img style="border-radius:15px" width="100%"
								src="/public/image_webp/Daily_unlimited_bonus_M.webp" alt="Daily_unlimited_bonus_M">
						</a>
					</div>






				</div>
			</div>
		</div>
	</div>

</template>

<script>


export default {
	name: 'Left',

};
</script>

<style scoped>
.bg_btn {
	align-content: center;
	background-image: url(/public/image_webp/left.webp);
	background-repeat: round;
	width: 100%;
	margin-top: 10px;
	border-radius: 15px;
	height: 47vh;
	align-content: end;
	text-align: -webkit-center;
}

.background-link {
	display: block;
	text-decoration: none;
	/* Remove underline from the link */
}

.Daily_unlimited_bonus_M {
	display: none;
}

@media screen and (max-width:770px) {
	.bg_btn {
		display: none;
	}

	.carousel {
		padding-top: 0px !important;
	}

	.bg_img {
		padding: 0px !important;
	}

	.daily_unlimited_bonus {
		display: none;
	}

	.daily_unlimited_bonus {
		padding-right: 12px;
		padding-left: 12px;
	}

	.Daily_unlimited_bonus_M {
		display: block;
		padding-right: 12px;
		padding-left: 12px;
	}

	.check_in {
		padding-bottom: 0px;
		padding-top: 12px;
		padding-left: 12px;
		padding-right: 12px;

	}
}

.carousel {
	padding-top: 10px;
}

.btn_col {
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 10px;
	align-items: center;
	text-align: center;
	width: 100%;
	padding-bottom: 15px;
	margin-bottom: 5px;
}




.leftside {
	padding-right: 5px;
	text-align: end;
	padding-bottom: 1px;

}

.rightside {
	padding-left: 5px;
}
</style>

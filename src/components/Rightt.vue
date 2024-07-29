<template>
	<div style="height: 100%;" class="container-fluid">
		<div class="col-12">
			<div class="row ">
				<div style="padding-top: 10px; " class="bg_img">

					<div class="col-12 bg_img2">
						<div class="row right">
							<div class="col-6">
								<a href="https://www.ataskasino.com/login/" rel="nofollow">
									<img width="100%" src="/public/image_webp/right_login.webp" alt="login_btn">
								</a>
							</div>
							<div class="col-6">
								<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
									<img width="100%" src="/public/image_webp/right_register.webp" alt="login_btn">
								</a>
							</div>
							<div style="padding-top: 10px;" class="col-6">
								<p class="deposit">{{ $t('right.baki') }}</p>
								<p class="deposit"><b>0.00</b></p>
								<p class="deposit">{{ $t('right.deposit') }}</p>
								<p class="deposit"><b>RM5.00</b></p>
								<p class="deposit">{{ $t('right.withdraw') }}</p>
								<p class="deposit"><b>RM50.00</b></p>

							</div>
							<div class="col-6 btn_deposit">
								<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
									<img class="btn_col2" width="100%" src="/public/image_webp/right_deposit.webp"
										alt="deposit">
								</a>
								<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
									<img class="btn_col2" width="100%" src="/public/image_webp/right_withdraw.webp"
										alt="withdraw">
								</a>
								<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
									<img class="btn_col2" width="100%" src="/public/image_webp/right_refresh.webp"
										alt="refresh">
								</a>
							</div>

						</div>
					</div>

					<!--button bg-->
					<div class="col-12 bg_btn">
						<div class="row btn_col">
							<div class="col-6">
								<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
									<img width="100%" src="/public/image_webp/left_btn.webp" alt="share">
								</a>
							</div>
							<div class="col-6">
								<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
									<img width="100%" src="/public/image_webp/left_btn3.webp" alt="downline">
								</a>
							</div>
							<div class="col-6">
								<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
									<img style="padding-top: 5px;" width="100%" src="/public/image_webp/left_btn2.webp"
										alt="referral">
								</a>
							</div>
							<div class="col-6">
								<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
									<img style="padding-top: 5px;" width=" 100%" src="/public/image_webp/left_btn4.webp"
										alt="more info">
								</a>
							</div>
						</div>
					</div>


					<!--sport live-->
					<div class="col-12 bg_test">
						<div class="row right2">
							<div class="col-3 text_sportlive">
								<div class="image_col">
									<img width="90%" src="/public/image_webp/sportlive.webp" alt="sportlive1">
								</div>

								<p>{{ $t('right.manutd') }}</p>
							</div>
							<div class="col-6 text_sportlive">
								<p>{{ $t('right.starttime') }}</p>
								<p>17 Aug 2024</p>
								<p class="sportlive_text text_sportlive">03:00</p>
								<a class="betnow" href="https://www.ataskasino.com/login/" rel="nofollow">{{
									$t('right.betnow') }}</a>
							</div>
							<div class="col-3 text_sportlive">
								<div class="image_col">
									<img width="90%" src="/public/image_webp/spo.webp" alt="sportlive2">
								</div>
								<p>{{ $t('right.fulham') }}</p>
							</div>
						</div>

						<div class="showmore_col">
							<a class="showmore" href="https://www.ataskasino.com/en/sport-live/" rel="nofollow">{{
								$t('right.showmore') }}</a>
						</div>

					</div>

					<!--desktop view-->
					<div style="padding-top:10px" class="free_credit">
						<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
							<img style="border-radius:15px" width="100%"
								src="/public/image_webp/free-credit-RM50_D.webp" alt="free_credit_D">
						</a>
					</div>

					<!--mobile view-->
					<div style="padding-top:10px" class="Download-APK-free-credit-RM50-M">
						<a href="https://www.ataskasino.com/en/sign-up/" rel="nofollow">
							<img style="border-radius:15px" width="100%"
								src="/public/image_webp/Download-APK-free-credit-RM50-M.webp" alt="free_credit_M">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>





</template>

<script>
export default {
	name: 'Right',
};
</script>

<style scoped>
.bg_test {
	align-content: center;
	background-image: url(/public/image_webp/right_bg2.webp);
	background-repeat: round;
	text-align: -webkit-center;
	width: 100%;
	margin-top: 10px;
	border-radius: 15px;
}

.bg_img2 {
	align-content: center;
	background-image: url(/public/image_webp/right_newbg.webp);
	text-align: -webkit-center;
	width: 100%;
	background-repeat: round;
}

.bg_col2 {
	border-radius: 10px;
}

/* .bg_img {
	background: rgba(0, 0, 0, .3);
	border-right: 1px solid rgba(255, 255, 255, .5);
	height: 100vh;
} */

.frist_col {
	position: relative;
}

.leftside {
	padding-right: 5px;
	text-align: end;
}

.rightside {
	padding-left: 5px;
}

.right {
	margin-top: 25px;
	border-radius: 10px;
	width: 100%;
}

.right2 {
	margin-top: 25px;
	background-color: #FFF;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 10px;
	align-items: center;
	text-align: center;
	width: 90%;
}

.image_col {
	text-align: center;
}

.deposit {
	margin: 0px;
	text-align-last: start;
	text-align: start;
}

.btn_deposit {
	align-self: start;
	padding-top: 10px;
	margin-bottom: 10px;
}

.sportlive_col {
	padding: 26px 0px 10px 18px;
	text-align: -webkit-center;
	position: absolute;
}

.sportlive_text {
	font-size: 21px;
	color: #258D2D;
	font-family: digital-7;
}

.betnow {
	display: block;
	background: #4caf50;
	color: #fff;
	padding: 8px 0;
	line-height: 1;
	width: 72px;
	text-align: center;
	border-radius: 4px;
	margin: 5px auto 0;
	margin-bottom: 10px;
}

.showmore {
	background-color: #EEE;
	color: #000;
	text-align: center;
	padding: 8px;
	font-size: 13px;
	line-height: 1;
	border-radius: 5px;
	padding-inline: 100px;
	box-shadow: 0 0 3px rgb(0 0 0 / 30%);
	border: 1px solid #ccc;
	cursor: pointer;
}

.btn_col2 {
	padding: 10px 10px 5px 0px;
}



.showmore_col {
	padding-top: 10px;
	margin-bottom: 10px;
}

.first_col {
	position: relative;
}

.right_bg1 {
	width: 100%;
	height: 240px;
}

.Download-APK-free-credit-RM50-M {
	display: none;


}

@media screen and (max-width:770px) {
	.Download-APK-free-credit-RM50-M {
		display: block;
	}

	.right_bg1 {
		height: 200px;
	}

	.withdraw {
		width: 80%;
	}

	.deposit {
		font-size: 10px;
	}

	.showmore {
		padding-left: 30px !important;
		padding-right: 30px !important;
	}

	.text_sportlive {
		font-size: 15px !important;
	}

	.betnow {
		font-size: 10px;
	}

	.free_credit {
		display: none;
	}

	.sportlive_col {
		padding: 11px 0px 10px 22px !important;
	}
}

@media screen and (max-width:576px) {
	.right_bg1 {
		height: 240px;
	}

	.withdraw {
		width: 65%;
		display: grid;
	}

	.deposit {
		font-size: 15px !important;
	}

	.showmore {
		padding-left: 125px !important;
		padding-right: 125px !important;
	}

	.sportlive_col {
		padding: 11px 0px 10px 25px !important;
	}
}

@media screen and (max-width:426px) {
	.sportlive_col {
		padding: 30px 0px 10px 25px !important;
	}

	.deposit {
		font-size: 15px !important;
	}

	.text_sportlive {
		font-size: 14px !important;
	}
}


.balance_col {
	position: absolute;
	top: 70px;
}

a {
	text-decoration: none;
}

.btn_col {
	padding-left: 5px;
	padding-top: 10px;
}

@media screen and (max-width:376px) {
	.deposit {
		font-size: 13px;
	}

	.showmore {
		padding-left: 110px !important;
		padding-right: 110px !important;
		padding-bottom: 5px !important;
	}

	.sportlive_col {
		padding: 22px 0px 10px 25px !important;
	}
}

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
	display: none;
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

@media screen and (max-width:770px) {
	.bg_btn {
		display: block;
	}
}
</style>

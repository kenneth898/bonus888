<template>
	<div class="main-col container">
		<div v-for="(image, index) in images" :key="index" class="col">
			<a :href="`https://www.ataskasino.com/en/sign-up/`" rel="nofollow">
				<img :src="`/public/1_webp/${image.fileName}.webp`" :alt="image.fileName" class="img-fluid">
				<p>{{ $t('menu.play') }}</p>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Menu1',
	data() {
		return {
			images: [
				{ fileName: '1_Ramakien_blessing' },
				{ fileName: '2_Firefly_Hunter' },
				{ fileName: '3_Dark_ritual' },
				{ fileName: '4_Hungry_slime' },
				{ fileName: '5_Aztec_Bonus_Hunt2' },
				{ fileName: '6_Foot_Ball_Fever' },
				{ fileName: '7_Crazy_Bounty' },
				{ fileName: '8_Dragon_chis_quest' },
				{ fileName: '9_Maya_elemental_totem' },
				{ fileName: '10_xiang_qi_ways2' },
				{ fileName: '11_aztec-bonus-hunt' },
				{ fileName: '12_last-samurai' },
				{ fileName: '13_genie-myscery' },
				{ fileName: '14_disco777' },
				{ fileName: '15_world-cup' },
				{ fileName: '16_boom-prosperity' },
				{ fileName: '17_astro-bunny' },
				{ fileName: '18_cookie-hunter' },
				{ fileName: '19_xmas-gift-delight' },
				{ fileName: '20_mace-of-hercules' },
				{ fileName: '21-wheel-of-gems' },
				{ fileName: '22-scale-of-heaven-anubis' },
				{ fileName: '23-infinity-ocean' },
				{ fileName: '24-dj-fever' },
				{ fileName: '25-jewel-mastermind' },
				{ fileName: '26-pubg2' },
				{ fileName: '27-fanrastic-beast' },
				{ fileName: '28-slotto4d' },
				{ fileName: '29-xiang-qi-ways' },
				{ fileName: '30-candy-rush' },
				{ fileName: '31-fortune-gods-pot' },
				{ fileName: '32-tiger-on-gold' },
				{ fileName: '33-angient-gems' },
				{ fileName: '34-hu-fu-blessing' },
				{ fileName: '35-battle-heroes' },
				{ fileName: '36-mini-of-prosperity' },
				{ fileName: '37-eye-of-ra' },
				{ fileName: '38-ninja-legend' },
				{ fileName: '39-treasure-of-drake' },
				{ fileName: '40-immortal-love' },
				{ fileName: '41-racing-for-luck' },
				{ fileName: '42-treasure-guardian' },
				{ fileName: '43-fortunes-warrior' },
				{ fileName: '44-chronicle-of-heroes' },
				{ fileName: '45-chronicle-of-heroes-lucky-dragon' },
				{ fileName: '46-king-of-glory' },
				{ fileName: '47-bombombot' },
				{ fileName: '48-counter-terrorists' },
				{ fileName: '49-bubble-dragon' },
				{ fileName: '50-road-to-uefa' },
				{ fileName: '51-bobo-monster' },
				{ fileName: '52-chronicle-of-heroes-divine-tree' },
				{ fileName: '53-road-to-eurd' }
			]
		};
	}
};
</script>

<style scoped>
.main-col {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	justify-items: center;
	gap: 0.5rem;
	text-align: center;
	text-align: -webkit-center;
}

@media screen and (max-width: 768px) {
	.main-col {
		grid-template-columns: repeat(3, 1fr);
	}
}

a {
	text-decoration: none;
}

p {
	padding: 5px;
	margin-top: 5px;
	width: 100%;
	color: #fff;
	background-color: #4ba614;
	border-radius: 30px;
	padding: 3px 0;
	margin-top: 8px;
	font-size: 11px;
}

img {
	border-radius: 10px;
	border: 1px solid #fff;
	background-color: #fff;
}
</style>

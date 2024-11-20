import Inst from './img/Inst.svelte';
import Fb from './img/FB.svelte';
import Tg from './img/TG.svelte';
import X from './img/X.svelte';
import TikTok from './img/TikTok.svelte';

const esLinks = [
	'https://www.instagram.com/casatrade_es/',
	'https://www.facebook.com/profile.php?id=61565199669255',
	'https://t.me/casatrade_es',
	'https://tiktok.com/@casatrade_es'
];
export const ptLinks = [
	'https://www.instagram.com/casatradept',
	'https://www.facebook.com/profile.php?id=61565740520207&is_tour_dismissed',
	'https://t.me/casatrade_pt',
	'https://tiktok.com/@casatrade_pt',
	'https://x.com/casatrade_pt'
];

export const socialsLinks = {
	es: esLinks,
	pt: ptLinks,
	en: ptLinks
};

export const socialsData = [
	{ img: Inst, label: 'Instagram' },
	{
		img: Fb,
		label: 'Facebook'
	},
	{ img: Tg, label: 'Telegram' },
	{ img: TikTok, label: 'TikTok' },
	{ img: X, link: '', label: 'X' }
];

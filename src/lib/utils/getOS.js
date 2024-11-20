export function getOS() {
	const userAgent = window.navigator.userAgent;
	let isMac = true;

	if (userAgent.includes('Windows')) {
		isMac = false;
	}
	return isMac;
}

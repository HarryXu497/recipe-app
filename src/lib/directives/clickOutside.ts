import type { Action } from "svelte/types/runtime/action";

const clickOutside: Action<HTMLElement, undefined> = (node) => {
	const handleClick = (event: Event) => {
		if (!node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}

export default clickOutside;
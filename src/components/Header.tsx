import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/gh-pages-test/" class={url == '/gh-pages-test/' && 'active'}>
					Home
				</a>
				<a href="/gh-pages-test/404" class={url == '/gh-pages-test/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}

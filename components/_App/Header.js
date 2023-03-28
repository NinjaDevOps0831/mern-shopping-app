import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import useWindowSize from '../../hooks/useWindowSize';
import MobileHeader from './Header/MobileHeader';
import DesktopHeader from './Header/DesktopHeader';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({user}) {
	const router = useRouter();
	const isRoot = user && user.role === 'root';
	const isAdmin = user && user.role === 'admin';
	const isRootOrAdmin = isRoot || isAdmin;
	
	function isActive(route) {
		return route === router.pathname;
	}
	// if user is true, will show account and log-out link
	// if user is false, will show login and sign-up link

	const size = useWindowSize();

	return (
		<>
		{
			size.width >= 1000 
			?
			<DesktopHeader 
				isActive={isActive} 
				isRootOrAdmin={isRootOrAdmin}
				user={user}
			/>
			:
			<MobileHeader 
				isActive={isActive} 
				isRootOrAdmin={isRootOrAdmin}
				user={user}
			/>
		}
		</>
	);
}

export default Header;

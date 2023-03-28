import { Menu } from 'antd';
import Link from "next/link";
import { handleLogout } from '../../../utils/auth';
import { 
	ShoppingOutlined, 
	LoginOutlined, 
	PlusCircleOutlined, 
	UserOutlined, 
	AppstoreOutlined, 
	StarOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

function DesktopHeader({isActive, isRootOrAdmin, user}) {

	return (
        <Menu mode="horizontal" style={{padding: '1rem', textAlign: 'center'}}>
            <Menu.Item active={isActive('/cart')} icon={<StarOutlined />}>
                <Link href='/cart'><a>New</a></Link>
            </Menu.Item>

            <SubMenu key="shop" icon={<AppstoreOutlined />} title="Shop">
                <Menu.Item key="all">
                    <Link href='/all'>Shop All</Link>
                </Menu.Item>
                <Menu.Item key="sofa">
                    <Link href='/category?category=sofas'>Sofa</Link>
                </Menu.Item>
                <Menu.Item key="chair">
                <Link href='/category?category=chairs'>Chair</Link>
                </Menu.Item>
                <Menu.Item key="bedroom">
                    <Link href='/category?category=bedroom'>Bedroom</Link>
                </Menu.Item>
                <Menu.Item key="table">
                    <Link href='/category?category=tables'>Table</Link>
                </Menu.Item>
                <Menu.Item key="storage">
                    <Link href='/category?category=storages'>Storage</Link>
                </Menu.Item>
            </SubMenu>

            {isRootOrAdmin && 
            (<Menu.Item active={isActive('/create')}>
                <Link href='/create'>
                    <a>
                    <PlusCircleOutlined />
                    Create
                    </a>
                </Link>
            </Menu.Item>)}

            <Menu.Item 
                active={isActive('/')} 
                style={{margin: '0 6rem', fontWeight: 'bold', fontSize: '2rem'}} 
            >
                <Link href='/' ><a>Modern Furniture</a></Link>
            </Menu.Item>

            <Menu.Item active={isActive('/cart')} icon={<ShoppingOutlined />}>
                <Link href='/cart'><a>Cart</a></Link>
            </Menu.Item>
            
            {user ? (<>
            <Menu.Item active={isActive('/account')}>
                <Link href='/account'>
                    <a><UserOutlined />Account</a>
                </Link>
            </Menu.Item>

            <Menu.Item onClick={handleLogout}>
                Logout
            </Menu.Item>
            </>)
            :
            (<>
            <Menu.Item active={isActive('/login')} icon={<LoginOutlined />}>
                <Link href='/login'><a>Sign In</a></Link>
            </Menu.Item>

            <Menu.Item active={isActive('/signup')}>
                <Link href='/signup'><a>Sign Up</a></Link>
            </Menu.Item>
            </>)}
        </Menu>
	);
}

export default DesktopHeader;

import { useState } from 'react';
import { handleLogout } from '../../../utils/auth';
import Link from "next/link";
import { Menu, Drawer } from 'antd';
import { 
	ShoppingOutlined, 
	LoginOutlined, 
	PlusCircleOutlined, 
	UserOutlined, 
	AppstoreOutlined, 
    StarOutlined,
    MenuOutlined 
} from '@ant-design/icons';

const { SubMenu } = Menu;

function MobileHeader({isActive, isRootOrAdmin, user}) {
    const [drawerVisible, setdrawerVisible] = useState(false); 

    const handleDrawerVisible = () => {
		setdrawerVisible(!drawerVisible);
	}

    return(
        <>
        <Menu mode="horizontal">
        <Menu.Item>
            <MenuOutlined onClick={handleDrawerVisible} />
        </Menu.Item>
        <Menu.Item 
                active={isActive('/')} 
                style={{margin: '0 6rem', fontWeight: 'bold', fontSize: '2rem'}} 
        >
            <Link href='/' ><a>Modern Furniture</a></Link>
        </Menu.Item>
        </Menu>
        <Drawer
            visible={drawerVisible}
            placement='left'
            closable={false}
            onClose={handleDrawerVisible}
            width='300px'
        >
            <Menu mode="inline" style={{padding: '1rem', textAlign: 'left', borderRight: 'none'}}>
                <Menu.Item 
                    active={isActive('/')} 
                    style={{margin: '0 0', fontWeight: 'bold', fontSize: '1.5rem'}} 
                >
                    <Link href='/' ><a>Modern Furniture</a></Link>
                </Menu.Item>
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

            <Menu.Item active={isActive('/cart')} icon={<ShoppingOutlined />}>
                <Link href='/cart'><a>Cart</a></Link>
            </Menu.Item>
            
            {user ? (<>
            <Menu.Item active={isActive('/account')}>
                <Link href='/account'>
                    <>
                    <UserOutlined />
                    Account
                    </>
                </Link>
            </Menu.Item>

            <Menu.Item onClick={handleLogout}>
                {/* <Icon name='sign out'size='large'/> */}
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
    </Drawer>
    </>
    )
}

export default MobileHeader;
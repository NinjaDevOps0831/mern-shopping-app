import axios from 'axios'
import ProductHeroImage from '../components/Shared/HeroImage';
import ProductCategory from '../components/Index/ProductCategory';
import baseUrl from '../utils/baseUrl';
import { HOME_COVER_URL } from '../constants/images';
import ProductNewIn from '../components/Index/ProductNewIn/ProductNewIn';


function Home({ products, totalPages }) {
	return (
		<>
			<ProductHeroImage mediaUrl={HOME_COVER_URL} />
			<ProductCategory />
			<ProductNewIn products={products} />
			{/* <ProductList products={products} />
			<ProductPagination totalPages={totalPages} /> */}
		</>
	);
}

Home.getInitialProps = async ctx => {
	const page = ctx.query.page ? ctx.query.page : "1";
	const size = 9;
	// fetch data on server
	const url = `${baseUrl}/api/products`
	const payload = { params: { page, size }}
	const res = await axios.get(url, payload)

	// return response data as an object
	return res.data;
	// note: this object will be merged with existing props
}

export default Home;

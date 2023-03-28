import axios from 'axios'
import ProductHeroImage from '../components/Shared/HeroImage';
import ProductList from '../components/Index/ProductList';
import ProductPagination from '../components/Index/ProductPagination';
import baseUrl from '../utils/baseUrl';
import { CATEGORY_COVERS_URL } from '../constants/images';


function Home({ products, totalPages }) {
	return (
		<>
            <h2>ALL PRODUCTS</h2>
			<ProductHeroImage mediaUrl={CATEGORY_COVERS_URL.allProducts} />
			<ProductList products={products} />
			<ProductPagination totalPages={totalPages} />
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

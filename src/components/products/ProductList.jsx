import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useProduct } from '../context/ProductContextProvider'
import { useSearchParams } from 'react-router-dom'

const ProductList = () => {
	const { getSongs, songs } = useProduct()
	const [currentPage, setCurrentPage] = useState(1)
	const [searchParams, setSearchParams] = useSearchParams()
	//
	//  const getPagesCount = () => {
	//     const pageCountArr = [];
	//     for (let i = 1; i <= pages; i++) {
	//       pageCountArr.push(i);
	//     }
	//     return pageCountArr;
	//   };
	//   if (currentPage < 1) setCurrentPage(1);
	//   if (currentPage > pages) setCurrentPage(pages);
	useEffect(() => {
		getSongs()
	}, [searchParams])
	//   useEffect(() => {
	//     setSearchParams({ page: currentPage });
	//   }, [currentPage]);
	return (
		<div>
			<h2 className='zxc-cont'>Songs</h2>
			<div style={{ display: 'flex', marginLeft: '245px' }}>
				{songs.map(elem => (
					<ProductCard elem={elem} />
				))}
			</div>
		</div>
	)
}

export default ProductList

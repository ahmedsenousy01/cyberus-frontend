import React, { useState, useEffect } from 'react';
import { CLIENT_ID_STRING, unsplashAPI } from '../../API/apiConnection';
import PublicPost from '../../Components/PublicPost/PublicPost.component';

const Public = () => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async () => {
			const { data } = await unsplashAPI.get(
				`/photos?${CLIENT_ID_STRING}&page=${page}`
			);
			setPosts([...posts, ...data]);
		})();
	}, [page]);

	return (
		<div className="container pt-5 mt-5">
			<div className="row gy-4">
				{posts.map((post, idx) => (
					<PublicPost key={`public-post-${idx}`} post={post} />
				))}
			</div>
			<div className="d-flex justify-content-center align-items-center my-5 pb-5">
				<button
					className="btn btn-primary rounded-3"
					onClick={() => setPage((page) => page + 1)}
				>
					Show More
				</button>
			</div>
		</div>
	);
};

export default Public;

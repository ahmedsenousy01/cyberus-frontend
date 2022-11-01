import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CLIENT_ID_STRING, unsplashAPI } from '../../API/apiConnection';
import Divider from '../../Components/Divider/Divider.component';
import LocalPost from '../../Components/LocalPost/LocalPost.component';
import PublicPost from '../../Components/PublicPost/PublicPost.component';
import { postsSelector } from '../../Redux/post/post.selectors';

const Home = ({ posts }) => {

	const [apiPosts, setApiPosts] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await unsplashAPI.get(
				`/photos?${CLIENT_ID_STRING}&per_page=4`
			);
			setApiPosts(data);
		})();
	}, []);

	return (
		<div className="container py-5">
			<Divider title="public" />

			<div className="public row">
				{apiPosts.map((post, idx) => (
					<PublicPost key={`public-post-${idx}`} post={post} />
				))}
			</div>
			<Divider title="local" />

			<div className="local row">
				{posts != false ? (
					posts.map((post, idx) => (
						<LocalPost key={`local-post-${idx}`} post={post} />
					))
				) : (
					<div className="d-flex justify-content-center">
						<h5>No Local Posts Found</h5>
					</div>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	posts: postsSelector,
});

export default connect(mapStateToProps)(Home);

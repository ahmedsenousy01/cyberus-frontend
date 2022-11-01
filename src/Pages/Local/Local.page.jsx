import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LocalPost from '../../Components/LocalPost/LocalPost.component';
import { postsSelector } from '../../Redux/post/post.selectors';

const Local = ({ posts }) => {
  return (
		<div className="container pt-5 mt-5">
			<div className="row gy-4">
				{posts.map((post, idx) => (
					<LocalPost key={`public-post-${idx}`} post={post} />
				))}
			</div>
		</div>
  );
}

const mapStateToProps = createStructuredSelector({
  posts: postsSelector
})

export default connect(mapStateToProps)(Local)
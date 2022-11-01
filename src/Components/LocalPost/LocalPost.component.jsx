import React from 'react';
import './LocalPost.styles.scss';
import { removePost, toggleLikePost } from '../../Redux/post/post.actions'
import { connect } from 'react-redux';
import profilePic from '../../Assets/profile pic new.jfif';

const LocalPost = ({ post, removePost, toggleLikePost }) => {
	return (
		<div className="col-md-3">
			<div className="d-flex flex-column post rounded-3 border border-1">
				<div className="post-header px-2">
					<div className="row justify-content-between align-items-center">
						<div className="col-8">
							<ul className="d-flex list-unstyled align-items-center mt-3">
								<li className="img-container me-1">
									<img
										src={profilePic}
										alt="ahmed senousy"
										className="w-100 rounded-circle"
									/>
								</li>
								<li className="username">Ahmed Senousy</li>
							</ul>
						</div>
						<div className="col-2">
							<div className="delete-btn d-flex align-items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									onClick={() => removePost(post)}
								>
									<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className="post-body bg-light position-relative">
					<div
						className="img-container h-100"
						style={{
							backgroundImage: `url(${post.imgUrl})`,
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
					<div
						className='like position-absolute'
						onClick={() => toggleLikePost(post)}
					>
						{post.likedByUser ? (
							<i className="fa-solid fa-heart"></i>
						) : (
							<i className="fa-regular fa-heart"></i>
						)}
					</div>
				</div>

				<div className="post-footer px-2 mt-3">
					<ul className="list-unstyled d-flex justify-content-between align-items-center">
						<li className="">{post.name}</li>
						<li className="likesCount">{post.likesCount} likes</li>
					</ul>
					<p className="px-1">{post.desc}</p>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	removePost: post => dispatch(removePost(post)),
	toggleLikePost: post => dispatch(toggleLikePost(post))
})

export default connect(null, mapDispatchToProps)(LocalPost);

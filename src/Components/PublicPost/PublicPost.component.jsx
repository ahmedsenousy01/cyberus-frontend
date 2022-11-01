import React, { useState } from 'react';
import { CLIENT_ID_STRING, unsplashAPI } from '../../API/apiConnection';
import './PublicPost.styles.scss';

const PublicPost = ({ post }) => {

  const [photo, setPhoto] = useState(post);

	const likePhoto = async () => {
		const { data } = await unsplashAPI.post(
			`/photos/${photo.id}/like?${CLIENT_ID_STRING}`,
			null,
			{
				headers: {
					Authorization:
						'Bearer bNcw2LvpcuOjCYE6xzbgAjTyYdU5aJFfaIZ-FB6ZIos',
				},
			}
		);
    setPhoto(data.photo);
	};

	const unlikePhoto = async () => {
		const { data } = await unsplashAPI.delete(
			`/photos/${photo.id}/like?${CLIENT_ID_STRING}`,
			{
				headers: {
					Authorization:
						'Bearer bNcw2LvpcuOjCYE6xzbgAjTyYdU5aJFfaIZ-FB6ZIos',
				},
			}
		);
    setPhoto(data.photo);
	};

	return (
		<div className="col-lg-3 col-md-4 col-sm-6">
			<div className="d-flex flex-column post rounded-3 border border-1">
				<div className="post-header px-2">
					<div className="row justify-content-between align-items-center">
						<div className="col-8">
							<ul className="d-flex list-unstyled align-items-center mt-3">
								<li
									className="img-container rounded-circle me-1"
									style={{
										backgroundImage: `url(${photo.user.profile_image.small})`,
										backgroundSize: 'contain',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
									}}
								></li>
								<li className="username">{photo.user.name}</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="post-body bg-light position-relative">
					<div
						className="img-container h-100"
						style={{
							backgroundImage: `url(${photo.urls.raw})`,
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
					<div
						className="like position-absolute"
						onClick={() => {
							if (photo.liked_by_user) {
								return unlikePhoto();
							} else {
								return likePhoto();
							}
						}}
					>
						{photo.liked_by_user ? (
							<i className="fa-solid fa-heart"></i>
						) : (
							<i className="fa-regular fa-heart"></i>
						)}
					</div>
				</div>

				<div className="post-footer px-2 mt-3">
					<ul className="list-unstyled d-flex justify-content-between align-items-center">
						<li>Photo Name</li>
						<li className="likesCount">{photo.likes} likes</li>
					</ul>
					<p className="px-1">
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ea reiciendis odit rerum labore minus! Cum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PublicPost;

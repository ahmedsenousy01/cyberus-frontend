import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LocalPost from '../../Components/LocalPost/LocalPost.component';
import { addPost } from '../../Redux/post/post.actions';
import Joi from 'joi';

const AddPost = ({ addPost }) => {
	const [post, setPost] = useState({
		name: 'Enter Photo Name',
		desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea reiciendis odit rerum labore minus! Cum.',
		imgUrl: '',
		id: '',
		likesCount: 0,
		likedByUser: false,
	});
	const [errors, setErrors] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		console.log(errors);
	}, [errors]);

	const schema = Joi.object({
		name: Joi.string().min(5).max(30).alphanum().required(),
		desc: Joi.string().max(255).required(),
		imgUrl: Joi.required(),
		id: Joi.string(),
		likesCount: Joi.number(),
		likedByUser: Joi.boolean(),
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const newPost = {
			...post,
			id: `${post.name.slice(0, 5)}-${Math.floor(Math.random() * 100)}`,
		};
		const { error } = schema.validate(newPost, { abortEarly: false });
		if (!error) {
			addPost(newPost);
			navigate('/home');
		} else {
			setErrors(error.message);
		}
		setPost({
			name: '',
			desc: '',
			imgUrl: '',
			id: '',
		});
	};

	const handleChange = (e) => {
		const newPost = {
			...post,
		};
		newPost[e.target.name] = e.target.value;
		setPost(newPost);
	};

	const uploadImg = (e) => {
		const imgUrl = URL.createObjectURL(e.target.files[0]);
		console.log(imgUrl);
		setPost({
			...post,
			imgUrl,
			likesCount: 0,
			likedByUser: false,
		});
	};

	return (
		<div className="container">
			<div className="row">
				<div className="img-preview col-md-7">
					<div className="d-flex h-100 w-100 justify-content-center align-items-center">
						<LocalPost post={post} extraCssClasses="w-50"/>
					</div>
				</div>
				<div className="col-md-5">
					<form
						onSubmit={handleSubmit}
						className="d-flex flex-column justify-content-center align-items-center vh-100"
					>
						{errors !== '' ? (
							<div className="bg-danger text-center p-2 text-white rounded-3 w-50 mx-auto">
								{errors}
							</div>
						) : (
							''
						)}
						<div className="inputs-container">
							<label htmlFor="name">Name</label>
							<br />
							<input
								className="form-control"
								type="text"
								name="name"
								id="name"
								value={post.name}
								onChange={handleChange}
							/>
							<br />

							<label htmlFor="desc">Description</label>
							<br />
							<textarea
								className="form-control"
								rows={6}
								type="text"
								name="desc"
								id="desc"
								value={post.desc}
								onChange={handleChange}
							/>
							<br />

							<input
								className="mb-4"
								type="file"
								accept="image/jpg,image/jpeg,image/png"
								name="photo"
								onChange={uploadImg}
								files={post.imgUrl}
							/>
							<br />
						</div>

						<div className="btn-container mt-5 d-flex justify-content-end w-100">
							<button type="submit" className="btn btn-primary">
								Add Photo
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addPost: (post) => dispatch(addPost(post)),
});

export default connect(null, mapDispatchToProps)(AddPost);

import React from 'react'
import './Post.styles.scss'

const Post = ({ post, postingUser }) => {
  return (
		<div className="d-flex flex-column post bg-white">
			<div className="post-header px-2">
				<div className="row justify-content-between align-items-center">
					<div className="col-8">
						<ul className="d-flex list-unstyled align-items-center mt-3">
							<li className="img-container rounded-circle"
              style={{
                // backgroundImage: `url(${postingUser.imgUrl})`
              }}
              >
							</li>
							<li>ahmed senousy</li>
						</ul>
					</div>
					<div className="col-2">
						<div className="delete-btn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								onClick={() => console.log('a')}
							>
								<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className="post-body position-relative">
				<div
					className="img-container h-100"
					// style={{
					//   backgroundImage: `url(${post.imgUrl})`
					// }}
				></div>
				<div className="like position-absolute">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
            onClick={() => console.log('like')}
					>
						<path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
					</svg>
				</div>
			</div>

			<div className="post-footer px-2 mt-2">
        <ul className='list-unstyled d-flex justify-content-between'>
          <li>photo name</li>
          <li>likes</li>
        </ul>
        <p>photo caption</p>
      </div>
		</div>
  );
}

export default Post
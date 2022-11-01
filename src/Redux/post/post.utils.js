export const removePost = (existingPosts, postToDelete) => {
  const postExists = existingPosts.find(post => post.id === postToDelete.id);

  if (!postExists) return existingPosts;

  const newPosts = existingPosts.filter(post => post.id !== postToDelete.id);
  localStorage.setItem('posts', JSON.stringify(newPosts));
  return newPosts;
}

export const addPost = (existingPosts, postToAdd) => {
  const newPosts = [...existingPosts, postToAdd];
  localStorage.setItem('posts', JSON.stringify(newPosts));
  return newPosts;
}

export const toggleLikePost = (existingPosts, postToLike) => {
  const postExists = existingPosts.find(post => post.id === postToLike.id);

  if (!postExists) return existingPosts;

  if (!postExists.likedByUser) {
    const newPosts = existingPosts.map(post => {
      if (post.id === postToLike.id) return { ...post, likesCount: post.likesCount + 1, likedByUser: true };
      else return post;
    })
    localStorage.setItem('posts', JSON.stringify(newPosts));
    return newPosts;
  } else {
    const newPosts = existingPosts.map(post => {
      if (post.id === postToLike.id) return { ...post, likesCount: post.likesCount - 1, likedByUser: false };
      else return post;
    })
    localStorage.setItem('posts', JSON.stringify(newPosts));
    return newPosts;
  }
}
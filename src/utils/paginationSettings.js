// ページネーションを計算する関数
export const calculatePagination = (sortedPosts, page, postsPerPage) => {
  const totalPosts = sortedPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, totalPosts);
  const postsToShow = sortedPosts.slice(startIndex, endIndex);

  return {
    totalPosts,
    totalPages,
    startIndex,
    endIndex,
    postsToShow,
  };
};

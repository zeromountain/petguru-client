import { useRouter } from 'next/router';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost, unloadPost } from '../../redux/modules/missing_post';
import PostDetail from '../components/missing/PostDetail';

const PostDetailContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(router);
  const { postId } = router.query;
  console.log('postId :', postId);
  // 첫 마운트 시에 포스트 읽기 API 요청
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading,
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트 시에 스토어에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return (
    <>
      <PostDetail post={post} loading={loading} error={error} />
    </>
  );
}

export default PostDetailContainer;
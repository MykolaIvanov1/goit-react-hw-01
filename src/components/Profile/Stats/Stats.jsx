export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <ul>
      <li>
        <span className='label'>Followers</span>
        <span className='value'>{followers}</span>
      </li>
      <li>
        <span className='label'>Views</span>
        <span className='value'>{views}</span>
      </li>
      <li>
        <span className='label'>Likes</span>
        <span className='value'>{likes}</span>
      </li>
    </ul>
  );
};

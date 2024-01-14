import { Stats } from "./Stats/Stats";

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <>
      <div className='description'>
        <img src={image} alt='User avatar' className='avatar' />
        <p className='name'>{name}</p>
        <p className='tag'>{tag}</p>
        <p className='location'>{location}</p>
      </div>
      <Stats stats={stats} />
    </>
  );
};

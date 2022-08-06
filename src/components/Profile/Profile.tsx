import Avatar from './Avatar';
import './Profile.style.ts';

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <>
      <article>
        <Avatar />
      </article>
    </>
  );
};

export default Profile;

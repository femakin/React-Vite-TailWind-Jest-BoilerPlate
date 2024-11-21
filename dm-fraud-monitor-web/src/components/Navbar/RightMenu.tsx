import { Link } from 'react-router-dom';

const RightMenu = () => {

  return (
    <div className='flex h-auto md:h-[32px] flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center justify-start md:justify-center rounded-full bg-transparent md:bg-[var(--main)] p-5 pt-0 md:p-2  text-sm' >
      <Link to='/login' className='text-white px-4 rounded-full  hidden md:block' >Login</Link>
      <Link to='/#signup' className='bg-white px-6 rounded-full text-[var(--main)] hidden md:block'>Register</Link>
   
      <Link to='/login'  className='font-medium text-sm block md:hidden mt-6'>Login</Link>
      <Link to='/login'  className='font-medium text-sm block md:hidden'>Register</Link>

   
    </div>
  );
};

export default RightMenu;

export const RightMenuMobile = () => {

  return (
    <div className='hidden sm:flex h-[32px] flex-row gap-0 items-center justify-center rounded-full bg-[var(--main)] p-2  text-sm' >
      <Link to='/login' className='text-white px-4 rounded-full  ' >Login</Link>
      <Link to='/#signup' className='bg-white px-6 rounded-full text-[var(--main)] '>Register</Link>
    </div>
  );
};

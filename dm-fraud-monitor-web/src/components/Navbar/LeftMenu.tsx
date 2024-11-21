import { Link } from 'react-router-dom'

const LeftMenu = () => {
  const links = [
    {
      label : "About Us",
      path : "/about"
    },
    {
      label : "Our Services",
      path : "/services"
    },
    {
      label : "Contact Us",
      path : "/contact"
    }
  ]

  return (
    <div className='flex h-auto md:h-full flex-col md:flex-row items-start md:items-center justify-start  md:justify-center gap-6 font-medium text-sm p-5 pb-0 md:p-0'>
      {
        links.map((link, index) => (
          <Link to={link.path} key={index}>{link.label}</Link>
        ))
    }
    </div>
  )
}

export default LeftMenu

import Link from "next/link"

const Homepage = () => {
  return (
    <div className='flex flex-col gap-4'>Homepage
    
      <Link href={"/admin"}>Admin</Link>
      <Link href={"/student"}>Student</Link>
      <Link href={"/teacher"}>Teacher</Link>
      <Link href={"/parent"}>Parents</Link>
    </div>
  )
}

export default Homepage
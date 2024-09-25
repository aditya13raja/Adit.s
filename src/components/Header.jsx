export default function Header() {
  return (
    <div className='flex py-2 px-4 items-center'>
      <div className='flex gap-3'>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
      </div>
      <div className='text-4xl flex-auto text-center'>
        <h1>Adit's</h1>
      </div>
      <div className='flex gap-3'>
          <p>Search</p>
          <p>Cart</p>
          <p>Sign in</p>
      </div>
    </div>
  )
}
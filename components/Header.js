import headerStyles from '../styles/Header.module.css'

const Header = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  }
  return (
    <div class = 'max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"'>
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white md:flex">Их сургууль хайх</label>
      <div>
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
        <button type='submit'>Хайх</button>
      </div>
    </div>
    
        
     
  )
}

export default Header

// <h1 className={headerStyles.title}>
{/* <span>Их сургууль хайх</span>
</h1> */}
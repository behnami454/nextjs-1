import Link from 'next/link'

const Navbar = () => {
    return(
        <div>
            <div class="parentDiv">
            <div class="nav">
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="shop"><a>Shop</a></Link></li> 
      <li><Link href="contact"><a>Contact</a></Link></li>
    </ul>
  </div>
</div>
        </div>
    )
}
export default Navbar;
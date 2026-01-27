import HeaderBg from '@/assets/catalog/Header.webp'

export default function Header() {
    return (
        <>
            <img src={HeaderBg} alt="hero bg" className="absolute inset-0 w-full h-full object-cover"/>
        </>
    )
}
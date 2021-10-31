function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-dark">
            <p className="py-2 text-light text-center m-0">Mhmd Ali Hsen &copy; {year}</p>
        </footer>
    )
}

export default Footer;
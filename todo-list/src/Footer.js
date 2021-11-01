function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-dark">
            <p className="py-2 text-light text-center m-0"><a href="https://github.com/mhmdali102" className="text-light" target="_blank">Mhmd Ali Hsen</a> &copy; {year}</p>
        </footer>
    )
}

export default Footer;
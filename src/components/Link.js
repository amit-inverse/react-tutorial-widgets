function Link({ className, to, children }) {
    const onClick = (event) => {
        event.preventDefault();
    };

    return (
        <a onClick={onClick} className={className} href={to}>
            {children}
        </a>
    );
}

export default Link;

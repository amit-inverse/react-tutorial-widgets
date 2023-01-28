function Link({ className, to, children }) {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', to);
    };

    return (
        <a onClick={onClick} className={className} href={to}>
            {children}
        </a>
    );
}

export default Link;

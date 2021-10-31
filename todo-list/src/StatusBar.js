function StatusBar({length}) {
    return (
        <div className="mt-auto bg-secondary text-light">
            <p className="m-0 text-center">{length} TODO{length === 1 ? "" : "s"}</p>
        </div>
    )
}

export default StatusBar

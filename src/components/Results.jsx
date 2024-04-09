

const Results = ({ results }) => {
    return (
        <div>
            {
                results.map((result) => (
                    <div className="" key={result.id}>
                        <h2>{result.original_title}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Results
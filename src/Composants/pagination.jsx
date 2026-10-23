export default function Pagination(props) {
    const pages = [];

    for (let i = 1; i <= props.totalPages; i++) {
        pages.push(i);
    }

    if (props.totalPages <= 1) {
        return null;
    }

    return (
        <div className="pagination">
            <button
                disabled={props.pageActuelle === 1}
                onClick={() =>
                    props.setPageActuelle(props.pageActuelle - 1)
                }
            >
                Précédent
            </button>

            {pages.map((page) => (
                <button
                    key={page}
                    className={
                        props.pageActuelle === page ? "active" : ""
                    }
                    onClick={() => props.setPageActuelle(page)}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={props.pageActuelle === props.totalPages}
                onClick={() =>
                    props.setPageActuelle(props.pageActuelle + 1)
                }
            >
                Suivant
            </button>
        </div>
    );
}
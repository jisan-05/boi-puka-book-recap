const Book = ({ book }) => {
    const { image, author, bookName } = book;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl p-5">
                <figure className=" bg-gray-200">
                    <img
                        src={image}
                        className="w-40"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                     
                    </h2>
                    <p>{author}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;

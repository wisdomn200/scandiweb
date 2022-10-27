function Product(props) {

const {id, imageUrl, name, 
    description, price} = props 

  return (
    <div
        key={id}
        className={"product"}
    >
      <img 
          src={imageUrl}
          alt={ `Image of ${name}`}
          className={"image-product"}
            />
        <h1>{name}</h1>
        <p>{description}</p>
        <span>${span}</span>
        <div>
            <button
                className="snipcart-add-item"
                data-item-id={id}
                data-item-image={imageUrl}
                data-item-url="/"
                data-item-price={price}
            >
                Add to Card
            </button>
        </div>
    </div>
  );
}

export default Product

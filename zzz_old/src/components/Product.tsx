import { ProductType } from "../types/Product.type"

const Product = (props: ProductType) => {
    return  (
    <div className="product_box">
        <input type="checkbox" className="delete-checkbox" value={props.id}/>
        <div className="sku product_line">{props.sku}</div>
        <div className="name product_line">{props.name}</div>
        <div className="price product_line">{props.price}</div>
        <div className="parameters product_line">{props.parameters}</div>
    </div>
    )
}
export default Product
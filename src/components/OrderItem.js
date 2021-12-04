const OrderItem = ({ items }) => (
    <article>
        { items.map( item => (
            <div>
                { item.name }
                { item.totalPrice }

            </div>
        ) ) }
    </article>
)

export default OrderItem;
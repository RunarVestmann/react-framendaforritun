import Price from './Price';

const PriceList = ({ prices, search }) => {
    const searchTerm = search.toLowerCase().trim();
    return (
        <div>
            {prices
                .filter(
                    (price) =>
                        price.name.toLowerCase().indexOf(searchTerm) !== -1 ||
                        price.company.toLowerCase().indexOf(searchTerm) !== -1,
                )
                .map((price) => (
                    <Price key={price.key} {...price} />
                ))}
        </div>
    );
};

export default PriceList;

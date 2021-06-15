import '../styles/Price.css';

const Price = ({ bensin95, company, diesel, name, showUnits = true }) => {
    const unit = showUnits ? 'kr' : '';
    return (
        <div className="price">
            <p>🏦 {company}</p>
            <p>🏙️ {name}</p>
            <div className="row">
                <span>
                    ⛽ {bensin95}
                    {unit}
                </span>
                <span>
                    🛢️ {diesel}
                    {unit}
                </span>
            </div>
        </div>
    );
};

export default Price;

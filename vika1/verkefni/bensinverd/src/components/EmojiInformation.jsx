import '../styles/EmojiInformation.css';
import Price from './Price';

const EmojiInformation = () => {
    return (
        <div className="informationContainer">
            <Price bensin95="95 oktan" diesel="Dísel" showUnits={false} name="Staðsetning" company="Nafn fyrirtækis" />
        </div>
    );
};

export default EmojiInformation;

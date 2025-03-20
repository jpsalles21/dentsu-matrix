import styles from './Highlights.module.css';
import Card from "../Card/Card";

const mockCards = [
    {
        title: 'Best deals',
        content: 'We have the best deals and promotions. Check our reservations to find the right vehicle at everyday low rates.',
        icon: '/Tag.svg',
    },
    {
        title: 'Rent after an accident',
        content: 'Need to rent a vehicle after and accident? Let us help you get back on the road.',
        icon: '/Tool.svg',  
    },
    {
        title: 'Sign Up for Specials',
        content: 'Need to rent a vehicle after and accident? Let us help you get back on the road.',
        icon: '/Mail.svg',  
    },
    {
        title: 'Plus Your Points',
        content: `You're automatically enrolled in our loyalty program. Enjoy your benefits!`,
        icon: '/Star.svg',
        },
];

interface HighlightsProps{
    cards?: { title: string; content: string; icon: string }[]; 
}

const Highlights = ({ cards = mockCards }: HighlightsProps) => {
    return (
        <section className={styles.highlights__container}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    content={card.content}
                    icon={card.icon}  
                />
            ))}
        </section>
    );
};

export default Highlights;

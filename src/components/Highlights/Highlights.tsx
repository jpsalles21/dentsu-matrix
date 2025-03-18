import styles from './Highlights.module.css';
import Card from "../Card/Card";
import Tag from '../../../public/Tag.svg'; 
import Tool from '../../../public/Tool.svg'; 
import Mail from '../../../public/Mail.svg'; 
import Star from '../../../public/Star.svg'; 


const mockCards = [
    {
        title: 'Best deals',
        content: 'We have the best deals and promotions. Check our reservations to find the right vehicle at everyday low rates.',
        icon: Tag,
    },
    {
        title: 'Rent after an accident',
        content: 'Need to rent a vehicle after and accident? Let us help you get back on the road.',
        icon: Tool,  
    },
    {
        title: 'Sign Up for Specials',
        content: 'Need to rent a vehicle after and accident? Let us help you get back on the road.',
        icon: Mail,  
    },
    {
        title: 'Plus Your Points',
        content: `You're automatically enrolled in our loyalty program. Enjoy your benefits!`,
        icon: Star,
        },
];

interface HighlightsSectionProps {
    cards?: { title: string; content: string; icon: string }[]; 
}

const HighlightsSection = ({ cards = mockCards }: HighlightsSectionProps) => {
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

export default HighlightsSection;

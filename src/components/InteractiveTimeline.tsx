import { motion } from 'framer-motion';
import { Heart, Music, MountainIcon } from 'lucide-react';

const timelineItems = [
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Why I Code",
        description: "I started coding as a way to create my own financial freedom and transform my life. Over time, it became more than that a way to dream bigger, solve meaningful problems, and build things that can truly impact people’s lives. That’s why I started, and that’s what keeps me going.",
        color: "bg-red-100 text-red-600"
    },
    {
        icon: <Music className="w-6 h-6" />,
        title: "What Inspires Me",
        description: "From Indian music while coding to nature walks for problem-solving, I find inspiration in the harmony of different elements coming together.",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: <MountainIcon className="w-6 h-6" />,
        title: "Adventures",
        description: "I’m drawn to mountains, waterfalls, and beaches places that inspire curiosity and awe. I also enjoy recreating traditional Indian dishes, experimenting with flavors in the kitchen. Over time, I’ve built a life where I can finally pursue the passions I dreamed of as a child, which weren’t possible before due to financial constraints.",
        color: "bg-green-100 text-green-600"
    }
];

export function InteractiveTimeline() {
    return (
        <div className="space-y-12">
            {timelineItems.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                >
                    <div className={`p-3 rounded-full ${item.color}`}>
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
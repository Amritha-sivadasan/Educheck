interface Question {
    id: string;
    question: string;
    options: Array<{ id: string; option: string }>;
}
 
const questions: Question[] = [
    {
        id: 'q1',
        question: 'Which planet is known as the Red Planet?',
        options: [
            { id: 'o1', option: 'Earth' },
            { id: 'o2', option: 'Mars' },
            { id: 'o3', option: 'Venus' },
            { id: 'o4', option: 'Jupiter' },
        ],
    },
    {
        id: 'q2',
        question: 'What is the capital city of Australia?',
        options: [
            { id: 'o1', option: 'Sydney' },
            { id: 'o2', option: 'Melbourne' },
            { id: 'o3', option: 'Canberra' },
            { id: 'o4', option: 'Brisbane' },
        ],
    },
    {
        id: 'q3',
        question: 'Which is the largest ocean on Earth?',
        options: [
            { id: 'o1', option: 'Atlantic Ocean' },
            { id: 'o2', option: 'Indian Ocean' },
            { id: 'o3', option: 'Arctic Ocean' },
            { id: 'o4', option: 'Pacific Ocean' },
        ],
    },
    {
        id: 'q4',
        question: 'What is the square root of 144?',
        options: [
            { id: 'o1', option: '10' },
            { id: 'o2', option: '12' },
            { id: 'o3', option: '14' },
            { id: 'o4', option: '16' },
        ],
    },
    {
        id: 'q5',
        question: 'Which country hosted the 2016 Summer Olympics?',
        options: [
            { id: 'o1', option: 'China' },
            { id: 'o2', option: 'Brazil' },
            { id: 'o3', option: 'United Kingdom' },
            { id: 'o4', option: 'Russia' },
        ],
    },
    {
        id: 'q6',
        question: 'What is the hardest natural substance on Earth?',
        options: [
            { id: 'o1', option: 'Gold' },
            { id: 'o2', option: 'Iron' },
            { id: 'o3', option: 'Diamond' },
            { id: 'o4', option: 'Platinum' },
        ],
    },
    {
        id: 'q7',
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            { id: 'o1', option: 'Charles Dickens' },
            { id: 'o2', option: 'William Shakespeare' },
            { id: 'o3', option: 'Leo Tolstoy' },
            { id: 'o4', option: 'Mark Twain' },
        ],
    },
    {
        id: 'q8',
        question: 'What is the chemical symbol for water?',
        options: [
            { id: 'o1', option: 'H2O' },
            { id: 'o2', option: 'CO2' },
            { id: 'o3', option: 'O2' },
            { id: 'o4', option: 'HO' },
        ],
    },
    {
        id: 'q9',
        question: "Which animal is known as the 'King of the Jungle'?",
        options: [
            { id: 'o1', option: 'Elephant' },
            { id: 'o2', option: 'Tiger' },
            { id: 'o3', option: 'Lion' },
            { id: 'o4', option: 'Cheetah' },
        ],
    },
    {
        id: 'q10',
        question: 'In which year did the Titanic sink?',
        options: [
            { id: 'o1', option: '1910' },
            { id: 'o2', option: '1912' },
            { id: 'o3', option: '1914' },
            { id: 'o4', option: '1920' },
        ],
    },
    {
        id: 'q11',
        question: 'What is the smallest prime number?',
        options: [
            { id: 'o1', option: '1' },
            { id: 'o2', option: '2' },
            { id: 'o3', option: '3' },
            { id: 'o4', option: '5' },
        ],
    },
    {
        id: 'q12',
        question: 'Which planet is the closest to the Sun?',
        options: [
            { id: 'o1', option: 'Venus' },
            { id: 'o2', option: 'Mercury' },
            { id: 'o3', option: 'Earth' },
            { id: 'o4', option: 'Mars' },
        ],
    },
    {
        id: 'q13',
        question: 'In what year did World War II end?',
        options: [
            { id: 'o1', option: '1943' },
            { id: 'o2', option: '1945' },
            { id: 'o3', option: '1947' },
            { id: 'o4', option: '1950' },
        ],
    },
    {
        id: 'q14',
        question: 'What is the capital of Japan?',
        options: [
            { id: 'o1', option: 'Beijing' },
            { id: 'o2', option: 'Seoul' },
            { id: 'o3', option: 'Tokyo' },
            { id: 'o4', option: 'Kyoto' },
        ],
    },
    {
        id: 'q15',
        question: "Which element has the chemical symbol 'O'?",
        options: [
            { id: 'o1', option: 'Oxygen' },
            { id: 'o2', option: 'Osmium' },
            { id: 'o3', option: 'Ozone' },
            { id: 'o4', option: 'Oxide' },
        ],
    },
    {
        id: 'q16',
        question: 'How many sides does a hexagon have?',
        options: [
            { id: 'o1', option: '4' },
            { id: 'o2', option: '5' },
            { id: 'o3', option: '6' },
            { id: 'o4', option: '8' },
        ],
    },
    {
        id: 'q17',
        question: 'Which is the longest river in the world?',
        options: [
            { id: 'o1', option: 'Amazon' },
            { id: 'o2', option: 'Nile' },
            { id: 'o3', option: 'Yangtze' },
            { id: 'o4', option: 'Mississippi' },
        ],
    },
    {
        id: 'q18',
        question: 'What is the hardest known mineral?',
        options: [
            { id: 'o1', option: 'Quartz' },
            { id: 'o2', option: 'Diamond' },
            { id: 'o3', option: 'Corundum' },
            { id: 'o4', option: 'Topaz' },
        ],
    },
    {
        id: 'q19',
        question: "Who is known as the 'Father of Computers'?",
        options: [
            { id: 'o1', option: 'Alan Turing' },
            { id: 'o2', option: 'Charles Babbage' },
            { id: 'o3', option: 'John von Neumann' },
            { id: 'o4', option: 'Thomas Edison' },
        ],
    },
    {
        id: 'q20',
        question: 'Which organ in the human body is primarily responsible for detoxification?',
        options: [
            { id: 'o1', option: 'Liver' },
            { id: 'o2', option: 'Kidney' },
            { id: 'o3', option: 'Lungs' },
            { id: 'o4', option: 'Heart' },
        ],
    },
    {
        id: 'q21',
        question: 'What is the currency of Japan?',
        options: [
            { id: 'o1', option: 'Yuan' },
            { id: 'o2', option: 'Dollar' },
            { id: 'o3', option: 'Yen' },
            { id: 'o4', option: 'Won' },
        ],
    },
    {
        id: 'q22',
        question: 'How many continents are there in the world?',
        options: [
            { id: 'o1', option: '5' },
            { id: 'o2', option: '6' },
            { id: 'o3', option: '7' },
            { id: 'o4', option: '8' },
        ],
    },
    {
        id: 'q23',
        question: 'Who invented the light bulb?',
        options: [
            { id: 'o1', option: 'Alexander Graham Bell' },
            { id: 'o2', option: 'Thomas Edison' },
            { id: 'o3', option: 'Nikola Tesla' },
            { id: 'o4', option: 'Benjamin Franklin' },
        ],
    },
    {
        id: 'q24',
        question: 'Which is the largest country by land area?',
        options: [
            { id: 'o1', option: 'Canada' },
            { id: 'o2', option: 'China' },
            { id: 'o3', option: 'Russia' },
            { id: 'o4', option: 'United States' },
        ],
    },
    {
        id: 'q25',
        question: 'Which gas do plants absorb from the atmosphere?',
        options: [
            { id: 'o1', option: 'Oxygen' },
            { id: 'o2', option: 'Carbon Dioxide' },
            { id: 'o3', option: 'Nitrogen' },
            { id: 'o4', option: 'Hydrogen' },
        ],
    },
    {
        id: 'q26',
        question: 'In which direction does the sun rise?',
        options: [
            { id: 'o1', option: 'North' },
            { id: 'o2', option: 'South' },
            { id: 'o3', option: 'East' },
            { id: 'o4', option: 'West' },
        ],
    },
    {
        id: 'q27',
        question: 'Which planet in our solar system has the most moons?',
        options: [
            { id: 'o1', option: 'Earth' },
            { id: 'o2', option: 'Saturn' },
            { id: 'o3', option: 'Jupiter' },
            { id: 'o4', option: 'Mars' },
        ],
    },
    {
        id: 'q28',
        question: 'What is the largest mammal in the world?',
        options: [
            { id: 'o1', option: 'Elephant' },
            { id: 'o2', option: 'Blue Whale' },
            { id: 'o3', option: 'Great White Shark' },
            { id: 'o4', option: 'Giraffe' },
        ],
    },
    {
        id: 'q29',
        question: 'What is the main ingredient in guacamole?',
        options: [
            { id: 'o1', option: 'Avocado' },
            { id: 'o2', option: 'Tomato' },
            { id: 'o3', option: 'Lettuce' },
            { id: 'o4', option: 'Onion' },
        ],
    },
    {
        id: 'q30',
        question: 'Which country is famous for the Eiffel Tower?',
        options: [
            { id: 'o1', option: 'Germany' },
            { id: 'o2', option: 'Italy' },
            { id: 'o3', option: 'France' },
            { id: 'o4', option: 'Spain' },
        ],
    },
];
 
 
/**
 * Mock function to simulate fetching questions from a server.
 * Returns a promise that resolves with an array of `Question` objects after a delay of 500 milliseconds.
 *
 * @returns {Promise<Question[]>} A promise that resolves with an array of questions.
 */
export const getQuestions = () => new Promise<Question[]>((resolve) => setTimeout(() => resolve(questions), 500));
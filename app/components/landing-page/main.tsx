import React, { useEffect, useRef, useState } from 'react';
import Separator from '../ui/separator';
import Benefits from './sub-componets-main/benefits';
import Prices from './prices';

// Component for Section Titles
const SectionTitle = ({ children, itIsPowerStellar }) => {
    console.log(children); // Log children before returning JSX

    return (
        <h1 className={`${itIsPowerStellar ? 'text-3xl sm:text-5xl' : 'text-4xl sm:text-6xl'} font-medium ml-2 mt-8 sd:mt-2`}>
            {children}
        </h1>
    );
};


// Component for Paragraphs
const SectionParagraph = ({ children }) => (
    <p className="ml-3 mt-4 sm:mt-4">{children}</p>
);

// Main Component
export default function Main(): React.JSX.Element {
    const [isVisibleAnswer, setIsVisibleAnswer] = useState(false)
    const contenerAnswer = useRef<HTMLDivElement | null>(null);

    console.log("Ref value:", contenerAnswer.current);


    useEffect(() => {
        const currentElement = contenerAnswer.current;
        if (currentElement != null) {
            console.log(currentElement)
            const handleClick = (event: MouseEvent): void => {
                event.stopPropagation(); // Prevents other handlers from being called
                setIsVisibleAnswer(true);
                console.log("Clicked");
            };

            currentElement.addEventListener('click', handleClick);

            // Cleanup function to remove the event listener
            return () => {
                currentElement.removeEventListener('click', handleClick);
            };
        }
    }, [contenerAnswer]);

    const toogleVisibleQuestion = () => {
        setIsVisibleAnswer(prevState => !prevState);
    }

    const questions = {
        question1: {
            title: "What is Stellar?",
            answer: `Stellar is an innovative platform that connects ambitious entrepreneurs and
                    everyday individuals looking to sell second-hand items. With an easy account setup,
                    Stellar allows users to reach a global audience, making buying and selling simple and efficient.
                    Whether you're starting a business or decluttering, Stellar provides a user-friendly marketplace designed to help you succeed.`
        },
        question2: {
            title: "How can I start selling?",
            answer: `To start selling on Stellar, simply create an account by signing up with your email or social media. 
            Once registered, you can easily list your items by adding photos, a description, and setting a price. 
            Your listings will be visible to a global audience, making it effortless to connect with potential buyers. 
            Stellar’s intuitive platform ensures that the entire process, from creating your listing to finalizing a sale, is smooth and efficient.`
        },
        question3: {
            title: "Is it safe to sell on Stellar?",
            answer: `Yes, Stellar prioritizes safety for all its users. The platform was always work for implements secure payment methods and offers protection for both buyers and sellers. 
            With features like transaction monitoring, dispute resolution and more, Stellar ensures that your selling experience is not only convenient but also safe.
            Additionally, the Stellar Guarantee adds an extra layer of security, making sure that both parties feel confident in every transaction.`
        },
        question4: {
            title: "Tell me more about the Stellar Guarantee",
            answer: `The Stellar Guarantee is designed to give both buyers and sellers peace of mind. It ensures that every transaction on the platform is secure and fair.
             If any issues arise, such as an item not being as described or a payment problem, the Stellar team steps in to mediate and resolve disputes. 
            This guarantee helps protect your purchases and sales, making sure that you can confidently buy and sell, knowing that Stellar has your back throughout the entire process.`
        }
    };

    return (
        <>
            <section className="flex justify-center mt-1 w-full">
                <div className="flex justify-around flex-col items-center p-6 rounded-3xl w-[98.5%] bg-dark-yellow 
                                md:flex-row md:items-start ">

                    <div className="w-11/12 flex flex-col
                                    sm:w-auto 
                                    lg:w-5/12">
                        <SectionTitle itIsPowerStellar={false}>Discover Stellar: Connecting You to a World of Opportunities</SectionTitle>
                        <SectionParagraph>
                            Stellar is your gateway to a global marketplace, designed for everyone—from ambitious entrepreneurs to individuals looking to declutter and sell second-hand items.
                        </SectionParagraph>
                    </div>

                    <div className="w-11/12 flex flex-col h-auto justify-evenly
                                    sm:w-auto lg:w-5/12 lg:mt-7">
                        <div className="flex flex-col justify-around">
                            <SectionTitle itIsPowerStellar={true}>Experience the Power of Stellar</SectionTitle>
                            <Separator orientation='horizontal' />

                            <div className="flex justify-between">
                                <SectionParagraph>
                                    Effortlessly list your items and reach billions of potential buyers worldwide.
                                </SectionParagraph>
                                <SectionParagraph>
                                    With our robust security features, you can sell with confidence.
                                </SectionParagraph>
                            </div>
                        </div>

                        <button className="text-2xl mt-8 bg-slate-200 text-black rounded-sm py-2
                                           lg:text-4xl">Get Start to Sell Or Buy</button>
                    </div>
                </div>
            </section>

            <section className="p-4 mt-6 flex flex-col">

                <Benefits />

            </section>

            <section className="mb-4">
                <Prices />
            </section>

            <section className="p-4 mt-2 mb-4">
                <div className="flex flex-col justify-center items-start w-auto mb-3 sd:mb-1 h-[150px] " >
                    <div className=" w-1/3 sd:w-96">
                        <h1 className="text-3xl  sd:text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
                        <Separator orientation="horizontal" widthOfSeparator="w-full" />
                    </div>

                    <p className="mt-4 w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque inventore molestias delectus quaerat </p>
                </div>

                <div className="w-[95%] ml-4 mt-6">
                    {
                        Object.values(questions).map(({ title, answer }, index) => (
                            <div key={index} role="button" tabindex="0"
                                onClick={toogleVisibleQuestion} className="flex flex-col mt-5 w-full h-full cursor-pointer items-start rounded-3xl py-2 px-3 mb-5 bg-dark-slate-gray"
                                ref={contenerAnswer} >
                                <div className="flex items-center justify-between w-11/12" >

                                    <div className="flex">
                                        <h1 className='flex items-center'> {index} </h1>

                                        <div className="w-70">
                                            <h2 className="text-1xl md:text-[19px] mb-3 ml-8"> {title} </h2>

                                            <Separator orientation='horizontal' widthOfSeparator="w-full" margin="ml-4" />
                                        </div>
                                    </div>

                                    <h1 className="text-2xl" >+</h1>
                                </div>

                                {isVisibleAnswer && (
                                    <p className={`ml-6 py-3 mb-4 px-2 text-l`}>
                                        {answer}
                                    </p>
                                )}
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

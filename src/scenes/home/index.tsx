
import IllustrationWorking from '@/assets/images/illustration-working.svg';

const Home = () => {
    return (
        <section id="home" className="h-[65vh] mt-16">
            <div className="flex flex-col md:flex-row mx-auto w-5/6 items-center">
                {/* Headings and Button */}
                <div className="md:w-3/5 text-center md:text-left">
                    <p className="text-very-dark-voilet font-bold text-4xl md:text-6xl ">
                        More than just shorter links
                    </p>
                    <p className="text-grayish-voilet mt-4 md:pr-[100px] ">
                        Build your brand’s recognition and get detailed insights
                        on how your links are performing.
                    </p>
                    <button className="bg-primary-100 rounded-2xl text-sm md:text-base text-white py-2 px-6 mt-6 hover:cursor-pointer">
                        Get Started
                    </button>
                </div>

                {/* Image */}
                <div className="md:w-[65%] flex justify-center mt-8 md:mt-0  transform md:translate-x-[12rem]">
                    <img src={IllustrationWorking} alt="Working Illustration" />
                </div>
            </div>
        </section>
    );
};

export default Home;
